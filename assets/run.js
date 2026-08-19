/* ─────────────────────────────────────────────────────────────
   SIGNAL LOST — roguelike run engine

   Reads the same window.LESSON banks the plain drill pages use, and
   plays them as a run. PPP is the spine, not a label:

     PRESENTATION  briefing   the rule is taught, worked example
                              walked line by line, one free shot.
                              No HP at risk, no timer.
     PRACTICE      recon      tag the trap on each wrong option
                   waves      timed combat, commit or overcharge
     PRODUCTION    boss       no hints, no scaffolding, HP matters

   Lose all HP and the run ends — retry from the briefing.
   Everything is procedural: no image or audio files.
   ───────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var L = window.LESSON;
  if (!L) { return; }

  var KEY = 'signal:' + L.id;
  var K = ['A', 'B', 'C', 'D'];
  var isMath = (L.stampSet === 'math');

  var STAMPS = {
    rw: [['broad', 'Too broad'], ['narrow', 'Too narrow'], ['contradicts', 'Contradicts'],
         ['unsupported', 'Not in text'], ['halfright', 'Half right']],
    math: [['misread', 'Wrong question'], ['partial', 'Stops halfway'], ['sign', 'Sign error'],
           ['slip', 'Arithmetic slip'], ['swap', 'Swapped values']]
  };
  var WHY = {
    rw: ['Did not know the rule', 'Misread the sentence', 'Guessed', 'Ran out of time', 'Careless pick'],
    math: ['Did not know the method', 'Set it up wrong', 'Arithmetic slip', 'Guessed', 'Ran out of time']
  };

  var PERKS = [
    { i: '♥', n: 'Repair', d: 'Restore 2 HP immediately.', f: function (S) { S.hp = Math.min(S.maxHp, S.hp + 2); } },
    { i: '✚', n: 'Reinforce', d: '+1 maximum HP, and heal it.', f: function (S) { S.maxHp++; S.hp++; } },
    { i: '⏱', n: 'Overclock', d: '+8 seconds on every question.', f: function (S) { S.bonusTime += 8; } },
    { i: '⛨', n: 'Early warning', d: 'Shields now form at 2 in a row, not 3.', f: function (S) { S.shieldAt = 2; } },
    { i: '◈', n: 'Scanner', d: 'Removes one wrong option, three times.', f: function (S) { S.scans += 3; } },
    { i: '⚡', n: 'Amplifier', d: 'Overcharged hits score 3× instead of 2×.', f: function (S) { S.overMult = 3; } },
    { i: '✦', n: 'Second wind', d: 'Survive one fatal hit at 1 HP.', f: function (S) { S.revive = true; } }
  ];

  /* ══ audio ═══════════════════════════════════════════════
     Procedural WebAudio. No files, and nothing starts until the
     player has actually clicked something.                     */
  var A = (function () {
    var ctx = null, muted = false;
    function on() {
      if (!ctx) {
        try { ctx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { ctx = null; }
      }
      if (ctx && ctx.state === 'suspended') { ctx.resume(); }
      return ctx;
    }
    function tone(freq, dur, type, vol, slideTo) {
      var c = on();
      if (!c || muted) { return; }
      var o = c.createOscillator(), g = c.createGain();
      o.type = type || 'square';
      o.frequency.setValueAtTime(freq, c.currentTime);
      if (slideTo) { o.frequency.exponentialRampToValueAtTime(Math.max(20, slideTo), c.currentTime + dur); }
      g.gain.setValueAtTime(0.0001, c.currentTime);
      g.gain.exponentialRampToValueAtTime(vol || 0.15, c.currentTime + 0.008);
      g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
      o.connect(g); g.connect(c.destination);
      o.start(); o.stop(c.currentTime + dur + 0.02);
    }
    function noise(dur, vol, hp) {
      var c = on();
      if (!c || muted) { return; }
      var n = Math.floor(c.sampleRate * dur);
      var buf = c.createBuffer(1, n, c.sampleRate), d = buf.getChannelData(0);
      for (var i = 0; i < n; i++) { d[i] = (Math.random() * 2 - 1) * (1 - i / n); }
      var s = c.createBufferSource(); s.buffer = buf;
      var f = c.createBiquadFilter(); f.type = hp ? 'highpass' : 'lowpass'; f.frequency.value = hp ? 1400 : 700;
      var g = c.createGain(); g.gain.value = vol || 0.12;
      s.connect(f); f.connect(g); g.connect(c.destination);
      s.start();
    }
    return {
      resume: on,
      mute: function (m) { muted = m; },
      isMuted: function () { return muted; },
      tick: function () { tone(880, 0.03, 'square', 0.05); },
      hit: function () { tone(520, 0.09, 'square', 0.13, 900); },
      crit: function () { tone(660, 0.07, 'square', 0.14, 1320); setTimeout(function () { tone(990, 0.11, 'square', 0.13, 1760); }, 60); },
      hurt: function () { tone(180, 0.22, 'sawtooth', 0.17, 60); noise(0.2, 0.12); },
      heal: function () { tone(440, 0.1, 'sine', 0.13, 880); setTimeout(function () { tone(660, 0.14, 'sine', 0.12, 1100); }, 70); },
      shield: function () { tone(1200, 0.14, 'triangle', 0.11, 1600); },
      kill: function () { noise(0.3, 0.14, true); tone(300, 0.26, 'square', 0.11, 70); },
      boss: function () { tone(90, 0.7, 'sawtooth', 0.15, 55); },
      win: function () { [523, 659, 784, 1047].forEach(function (f, i) { setTimeout(function () { tone(f, 0.22, 'triangle', 0.14); }, i * 110); }); },
      dead: function () { [400, 300, 220, 140].forEach(function (f, i) { setTimeout(function () { tone(f, 0.3, 'sawtooth', 0.15, f * 0.6); }, i * 130); }); }
    };
  })();

  /* ══ canvas fx ═══════════════════════════════════════════ */
  var FX = (function () {
    var cv = document.getElementById('fx'), cx = cv.getContext('2d');
    var parts = [], texts = [], raf = null;
    function size() { cv.width = innerWidth; cv.height = innerHeight; }
    size(); addEventListener('resize', size);

    function burst(x, y, colour, n, power) {
      for (var i = 0; i < (n || 22); i++) {
        var a = Math.random() * Math.PI * 2, s = (Math.random() * (power || 5) + 1.5);
        parts.push({ x: x, y: y, vx: Math.cos(a) * s, vy: Math.sin(a) * s - 1, l: 1, c: colour, r: Math.random() * 3 + 1.4 });
      }
      run();
    }
    function float(x, y, txt, colour, big) {
      texts.push({ x: x, y: y, t: txt, c: colour, l: 1, s: big ? 34 : 22, vy: big ? -1.5 : -1.1 });
      run();
    }
    function run() {
      if (raf) { return; }
      raf = requestAnimationFrame(step);
    }
    function step() {
      cx.clearRect(0, 0, cv.width, cv.height);
      for (var i = parts.length - 1; i >= 0; i--) {
        var p = parts[i];
        p.x += p.vx; p.y += p.vy; p.vy += 0.16; p.vx *= 0.99; p.l -= 0.021;
        if (p.l <= 0) { parts.splice(i, 1); continue; }
        cx.globalAlpha = Math.max(0, p.l);
        cx.fillStyle = p.c;
        cx.fillRect(p.x, p.y, p.r, p.r);
      }
      for (var j = texts.length - 1; j >= 0; j--) {
        var t = texts[j];
        t.y += t.vy; t.vy *= 0.97; t.l -= 0.016;
        if (t.l <= 0) { texts.splice(j, 1); continue; }
        cx.globalAlpha = Math.max(0, t.l);
        cx.font = '700 ' + t.s + 'px Consolas, monospace';
        cx.textAlign = 'center';
        cx.lineWidth = 4; cx.strokeStyle = 'rgba(0,0,0,.75)';
        cx.strokeText(t.t, t.x, t.y);
        cx.fillStyle = t.c;
        cx.fillText(t.t, t.x, t.y);
      }
      cx.globalAlpha = 1;
      if (parts.length || texts.length) { raf = requestAnimationFrame(step); }
      else { raf = null; cx.clearRect(0, 0, cv.width, cv.height); }
    }
    return { burst: burst, float: float };
  })();

  var shakeHost = document.getElementById('shake');
  function shake(level) {
    if (matchMedia('(prefers-reduced-motion: reduce)').matches) { return; }
    var c = level === 3 ? 'shake-l' : level === 2 ? 'shake-m' : 'shake-s';
    shakeHost.classList.remove('shake-s', 'shake-m', 'shake-l');
    void shakeHost.offsetWidth;
    shakeHost.classList.add(c);
  }
  function centreOf(node) {
    if (!node) { return { x: innerWidth / 2, y: innerHeight / 2 }; }
    var r = node.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  }

  /* ══ procedural enemies ══════════════════════════════════ */
  function foeSvg(seed, boss) {
    function rnd() { seed = (seed * 9301 + 49297) % 233280; return seed / 233280; }
    var sides = 5 + Math.floor(rnd() * 4);
    var R = boss ? 56 : 40, cxp = 85, cyp = 62;
    var pts = [];
    for (var i = 0; i < sides; i++) {
      var a = (i / sides) * Math.PI * 2 - Math.PI / 2;
      var rr = R * (0.72 + rnd() * 0.48);
      pts.push((cxp + Math.cos(a) * rr).toFixed(1) + ',' + (cyp + Math.sin(a) * rr).toFixed(1));
    }
    var eyes = 1 + Math.floor(rnd() * 3), eh = '';
    for (var e = 0; e < eyes; e++) {
      var ex = cxp + (e - (eyes - 1) / 2) * (boss ? 24 : 18);
      eh += '<circle cx="' + ex.toFixed(1) + '" cy="' + (cyp - 4) + '" r="' + (boss ? 8 : 6) + '" fill="#02030a"/>' +
            '<circle cx="' + ex.toFixed(1) + '" cy="' + (cyp - 5) + '" r="' + (boss ? 3.4 : 2.4) + '" fill="' + (boss ? '#FFFC00' : '#00FFFF') + '"/>';
    }
    var main = boss ? '#FF3503' : '#FF00FF';
    var glow = boss ? 'rgba(255,53,3,.55)' : 'rgba(255,0,255,.5)';
    var spikes = '';
    for (var s2 = 0; s2 < sides; s2++) {
      var aa = (s2 / sides) * Math.PI * 2 - Math.PI / 2;
      var x1 = cxp + Math.cos(aa) * R * 1.02, y1 = cyp + Math.sin(aa) * R * 1.02;
      var x2 = cxp + Math.cos(aa) * R * (boss ? 1.42 : 1.28), y2 = cyp + Math.sin(aa) * R * (boss ? 1.42 : 1.28);
      spikes += '<line x1="' + x1.toFixed(1) + '" y1="' + y1.toFixed(1) + '" x2="' + x2.toFixed(1) + '" y2="' + y2.toFixed(1) +
                '" stroke="' + main + '" stroke-width="2.5" opacity=".7"/>';
    }
    return '<svg viewBox="0 0 170 132" role="img" aria-label="corrupted signal">' +
      '<defs><filter id="g' + (boss ? 'b' : 'n') + '"><feGaussianBlur stdDeviation="4" result="b"/>' +
      '<feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>' +
      '<g filter="url(#g' + (boss ? 'b' : 'n') + ')">' + spikes +
      '<polygon points="' + pts.join(' ') + '" fill="' + glow + '" stroke="' + main + '" stroke-width="2.5"/>' +
      eh + '</g></svg>';
  }

  /* ══ state ═══════════════════════════════════════════════ */
  var S, root, hudEl, railEl, stageEl, panelEl;

  function fresh() {
    return {
      hp: 5, maxHp: 5, shields: 0, combo: 0, best: 0, score: 0,
      bonusTime: 0, shieldAt: 3, scans: 0, overMult: 2, revive: false,
      stage: 0, idx: 0, log: [], perks: [], killed: 0, drafted: 0
    };
  }

  function saved() {
    try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
  }
  function persist(cleared) {
    var s = saved();
    if (S.score > (s.best || 0)) { s.best = S.score; }
    if (cleared) { s.cleared = true; }
    try { localStorage.setItem(KEY, JSON.stringify(s)); } catch (e) {}
  }

  /* stage plan — PPP */
  function stages() {
    return [
      { key: 'present', phase: 'Presentation', label: 'Briefing', items: 1 },
      { key: 'recon', phase: 'Practice', label: 'Recon', items: L.forensics.items.length },
      { key: 'waves', phase: 'Practice', label: 'Waves', items: L.speed.items.length },
      { key: 'boss', phase: 'Production', label: 'Boss', items: L.sim.items.length }
    ];
  }

  /* ══ shell ═══════════════════════════════════════════════ */
  function boot() {
    root = document.getElementById('run');
    S = fresh();
    document.title = L.title + ' · Signal lost';
    render();
  }

  function el(t, c, x) { var n = document.createElement(t); if (c) { n.className = c; } if (x != null) { n.textContent = x; } return n; }
  function h(t, c, m) { var n = document.createElement(t); if (c) { n.className = c; } if (m) { n.innerHTML = m; } return n; }
  function clear(n) { while (n.firstChild) { n.removeChild(n.firstChild); } }

  function render() {
    clear(root);
    root.appendChild(buildHud());
    railEl = el('div', 'rail');
    var rf = el('div', 'railfill');
    railEl.appendChild(rf);
    railEl.style.visibility = 'hidden';
    railEl._fill = rf;
    root.appendChild(railEl);
    stageEl = el('div', 'stage');
    root.appendChild(stageEl);
    panelEl = el('div');
    root.appendChild(panelEl);
    runStage();
  }

  function buildHud() {
    var hud = el('div', 'hud');
    hudEl = hud;

    var hearts = el('div', 'hearts');
    hearts.id = 'hearts';
    hud.appendChild(hearts);
    hud.appendChild(el('div', 'hsep'));

    hud.appendChild(stat('combo', 'x1.0', 'Combo'));
    hud.appendChild(stat('score', '0', 'Score'));
    hud.appendChild(stat('depth', '1/4', 'Stage'));
    hud.appendChild(el('div', 'hpush'));

    var mute = el('button', 'iconbtn', A.isMuted() ? 'sound off' : 'sound on');
    mute.type = 'button';
    mute.addEventListener('click', function () {
      A.mute(!A.isMuted());
      mute.textContent = A.isMuted() ? 'sound off' : 'sound on';
    });
    hud.appendChild(mute);

    var plain = el('a', 'iconbtn', 'plain mode');
    plain.href = L.id + '-plain.html';
    plain.style.textDecoration = 'none';
    hud.appendChild(plain);

    drawHearts(hearts);
    return hud;
  }

  function stat(cls, v, label) {
    var n = el('div', 'hstat ' + cls);
    var b = el('b', null, v); b.id = 'v-' + cls;
    n.appendChild(b);
    n.appendChild(el('span', null, label));
    return n;
  }

  function drawHearts(host) {
    host = host || document.getElementById('hearts');
    if (!host) { return; }
    clear(host);
    for (var i = 0; i < S.maxHp; i++) {
      host.appendChild(el('div', 'hp' + (i < S.hp ? '' : ' empty')));
    }
    for (var s = 0; s < S.shields; s++) { host.appendChild(el('div', 'shield')); }
  }

  function setStat(cls, v) { var n = document.getElementById('v-' + cls); if (n) { n.textContent = v; } }

  function refreshHud() {
    drawHearts();
    var m = 1 + S.combo * 0.5;
    setStat('combo', 'x' + m.toFixed(1));
    setStat('score', String(S.score));
    setStat('depth', (S.stage + 1) + '/4');
    var c = hudEl.querySelector('.combo');
    if (c) { c.classList.toggle('hot', S.combo >= 3); }
  }

  function mapRow() {
    var st = stages(), m = el('div', 'map');
    m.appendChild(el('span', 'maplbl', st[S.stage].phase));
    st.forEach(function (s, i) {
      var n = el('div', 'node' + (s.key === 'boss' ? ' boss' : '') +
        (i < S.stage ? ' done' : i === S.stage ? ' now' : ''));
      n.title = s.label;
      m.appendChild(n);
    });
    return m;
  }

  /* ══ stage router ════════════════════════════════════════ */
  function runStage() {
    refreshHud();
    var st = stages()[S.stage];
    if (!st) { return victory(); }
    if (st.key === 'present') { return briefing(); }
    if (st.key === 'recon') { return recon(); }
    if (st.key === 'waves') { return combat(L.speed, false); }
    return combat(L.sim, true);
  }

  function nextStage() {
    S.stage++;
    S.idx = 0;
    if (S.stage === 2 || S.stage === 3) { return draft(); }
    render();
  }

  /* ══ PRESENTATION · briefing ═════════════════════════════ */
  function briefing() {
    var P = L.present;
    clear(stageEl);
    clear(panelEl);
    railEl.style.visibility = 'hidden';

    var p = el('div', 'panel');
    p.appendChild(mapRow());
    p.appendChild(el('span', 'tag', 'Presentation · briefing'));
    p.appendChild(h('h1', 'big win', 'Intel'));
    p.appendChild(h('p', 'q', P.rule));

    var ol = el('div');
    ol.style.cssText = 'display:flex;flex-direction:column;gap:8px';
    P.steps.forEach(function (s, i) {
      var r = h('div', null, '<span style="font-family:var(--fm);color:var(--cy);margin-right:10px">' + (i + 1) + '</span>' + s);
      r.style.cssText = 'font-size:15.5px;color:var(--dim);padding:9px 12px;background:rgba(0,255,255,.04);border-radius:8px';
      ol.appendChild(r);
    });
    p.appendChild(ol);

    p.appendChild(h('div', 'passage', P.worked.text));

    var walk = el('div');
    walk.style.cssText = 'display:flex;flex-direction:column;gap:9px';
    p.appendChild(walk);

    var row = el('div', 'row');
    var step = 0;
    var nextB = el('button', 'btn', 'Decrypt step 1 →');
    nextB.type = 'button';
    nextB.addEventListener('click', function () {
      A.resume(); A.tick();
      var line = h('div', 'exp', '<b>Step ' + (step + 1) + '</b><p>' + P.worked.lines[step] + '</p>');
      walk.appendChild(line);
      step++;
      if (step >= P.worked.lines.length) {
        nextB.remove();
        askCheck();
      } else {
        nextB.textContent = 'Decrypt step ' + (step + 1) + ' →';
      }
    });
    row.appendChild(nextB);
    p.appendChild(row);
    panelEl.appendChild(p);

    function askCheck() {
      var c = el('div', 'panel');
      c.appendChild(el('span', 'tag', 'Free shot · no damage'));
      c.appendChild(h('p', 'q', P.check.stem));
      var acts = el('div', 'acts');
      P.check.options.forEach(function (t, i) {
        var b = el('button', 'act');
        b.type = 'button';
        b.appendChild(el('span', 'k', K[i]));
        b.appendChild(h('span', null, t));
        b.addEventListener('click', function () {
          A.resume();
          var ok = (i === P.check.answer);
          Array.prototype.forEach.call(acts.querySelectorAll('.act'), function (x, xi) {
            x.disabled = true;
            if (xi === P.check.answer) { x.classList.add('good'); }
            else if (xi === i) { x.classList.add('bad'); }
          });
          var pt = centreOf(b);
          if (ok) { A.crit(); FX.burst(pt.x, pt.y, '#00FFFF', 26, 6); FX.float(pt.x, pt.y - 20, 'CLEAR', '#00FFFF'); }
          else { A.hurt(); shake(1); FX.float(pt.x, pt.y - 20, 'RE-READ', '#FF3503'); }
          c.appendChild(h('div', 'exp', '<b>' + (ok ? 'Confirmed' : 'Not yet') + '</b><p>' + P.check.explain + '</p>'));
          var r2 = el('div', 'row');
          var go = el('button', 'btn', 'Enter the field →');
          go.type = 'button';
          go.addEventListener('click', function () { A.boss(); nextStage(); });
          r2.appendChild(go);
          c.appendChild(r2);
        });
        acts.appendChild(b);
      });
      c.appendChild(acts);
      panelEl.appendChild(c);
      c.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
  }

  /* ══ perk draft ══════════════════════════════════════════ */
  function draft() {
    clear(root);
    root.appendChild(buildHud());
    railEl = el('div', 'rail'); railEl.style.visibility = 'hidden'; railEl._fill = el('div', 'railfill');
    root.appendChild(railEl);
    stageEl = el('div', 'stage'); root.appendChild(stageEl);
    panelEl = el('div'); root.appendChild(panelEl);
    refreshHud();

    var pool = PERKS.slice();
    if (S.revive) { pool = pool.filter(function (p) { return p.n !== 'Second wind'; }); }
    var pick = [];
    for (var i = 0; i < 3 && pool.length; i++) {
      pick.push(pool.splice(Math.floor(Math.random() * pool.length), 1)[0]);
    }

    var p = el('div', 'panel');
    p.appendChild(mapRow());
    p.appendChild(el('span', 'tag', 'Salvage · choose one'));
    p.appendChild(h('h2', 'big win', 'Upgrade'));
    p.appendChild(h('p', null, 'You cleared the last stage. Take one before the next.'));
    var d = el('div', 'draft');
    pick.forEach(function (pk) {
      var b = el('button', 'perk');
      b.type = 'button';
      b.appendChild(el('div', 'pi', pk.i));
      b.appendChild(el('div', 'pn', pk.n));
      b.appendChild(el('div', 'pd', pk.d));
      b.addEventListener('click', function () {
        A.resume(); A.heal();
        pk.f(S);
        S.perks.push(pk.n);
        S.drafted++;
        var pt = centreOf(b);
        FX.burst(pt.x, pt.y, '#FF00FF', 30, 6);
        render();
      });
      d.appendChild(b);
    });
    p.appendChild(d);
    panelEl.appendChild(p);
  }

  /* ══ PRACTICE · recon (trap forensics) ═══════════════════ */
  function recon() {
    var item = L.forensics.items[S.idx];
    if (!item) { return nextStage(); }
    var stamps = STAMPS[isMath ? 'math' : 'rw'];

    clear(stageEl); clear(panelEl);
    railEl.style.visibility = 'hidden';

    var foe = el('div', 'foe spawn');
    foe.innerHTML = foeSvg(1000 + S.idx * 77, false);
    stageEl.appendChild(foe);
    stageEl.appendChild(el('div', 'foename', 'anomaly ' + (S.idx + 1) + ' of ' + L.forensics.items.length));

    var bar = el('div', 'foebar');
    var fill = el('div', 'foefill');
    var wrongTotal = item.options.filter(function (o) { return !o.correct; }).length;
    var downed = 0;
    fill.style.width = '100%';
    bar.appendChild(fill);
    stageEl.appendChild(bar);

    var p = el('div', 'panel');
    p.appendChild(mapRow());
    p.appendChild(el('span', 'tag', 'Practice · recon'));
    p.appendChild(h('p', null, 'Do not answer. Expose each false signal by naming what is wrong with it.'));
    if (item.passage) { p.appendChild(h('div', 'passage', item.passage)); }
    p.appendChild(h('p', 'q', item.stem));

    var acts = el('div');
    acts.style.cssText = 'display:flex;flex-direction:column;gap:10px';

    item.options.forEach(function (o, oi) {
      var box = el('div');
      var b = el('button', 'act');
      b.type = 'button';
      b.style.width = '100%';
      b.appendChild(el('span', 'k', K[oi]));
      b.appendChild(h('span', null, o.t));
      box.appendChild(b);

      if (o.correct) {
        b.addEventListener('click', function () {
          if (b.disabled) { return; }
          A.resume(); A.tick();
          b.disabled = true;
          b.classList.add('good');
          box.appendChild(h('div', 'verdict', 'This one holds up. Leave it standing.'));
        });
      } else {
        var sr = el('div', 'stamps');
        stamps.forEach(function (st) {
          var sb = el('button', 'stamp', st[1]);
          sb.type = 'button';
          sb.addEventListener('click', function () {
            if (sb.disabled) { return; }
            A.resume();
            var ok = (st[0] === o.trap);
            Array.prototype.forEach.call(sr.querySelectorAll('.stamp'), function (x) { x.disabled = true; });
            var pt = centreOf(b);
            if (ok) {
              A.crit();
              S.score += 60;
              FX.burst(pt.x, pt.y, '#00FFFF', 24, 6);
              FX.float(pt.x, pt.y - 16, '+60', '#00FFFF');
              b.classList.add('shatter');
              box.appendChild(h('div', 'verdict', o.why));
            } else {
              A.hurt(); shake(1);
              FX.float(pt.x, pt.y - 16, 'MISREAD', '#FF3503');
              b.classList.add('gone');
              box.appendChild(h('div', 'verdict no', 'It is "' + labelOf(stamps, o.trap) + '". ' + o.why));
            }
            downed++;
            fill.style.width = Math.max(0, 100 - (downed / wrongTotal) * 100) + '%';
            refreshHud();
            if (downed >= wrongTotal) {
              foe.classList.add('dying');
              A.kill();
              var c = centreOf(foe);
              FX.burst(c.x, c.y, '#FF00FF', 44, 8);
              S.killed++;
              setTimeout(function () {
                p.appendChild(h('div', 'exp', '<b>Signal recovered</b><p>' + item.explain + '</p>'));
                var r = el('div', 'row');
                var n = el('button', 'btn', S.idx + 1 >= L.forensics.items.length ? 'Stage clear →' : 'Next anomaly →');
                n.type = 'button';
                n.addEventListener('click', function () { S.idx++; if (S.idx >= L.forensics.items.length) { nextStage(); } else { recon(); } });
                r.appendChild(n);
                p.appendChild(r);
                r.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
              }, 420);
            }
          });
          sr.appendChild(sb);
        });
        box.appendChild(sr);
      }
      acts.appendChild(box);
    });
    p.appendChild(acts);
    panelEl.appendChild(p);
  }

  function labelOf(stamps, k) {
    for (var i = 0; i < stamps.length; i++) { if (stamps[i][0] === k) { return stamps[i][1].toLowerCase(); } }
    return k;
  }

  /* ══ PRACTICE · waves  /  PRODUCTION · boss ══════════════ */
  function combat(SET, boss) {
    var item = SET.items[S.idx];
    if (!item) { return nextStage(); }

    var secs = SET.seconds + S.bonusTime;
    var tmr = null, left = secs, answered = false, wager = null;

    clear(stageEl); clear(panelEl);
    railEl.style.visibility = 'hidden';
    railEl._fill.classList.remove('warn');
    railEl._fill.style.width = '100%';

    var foe = el('div', 'foe spawn');
    foe.innerHTML = foeSvg(boss ? 4242 : 2000 + S.idx * 131, boss);
    stageEl.appendChild(foe);
    stageEl.appendChild(el('div', 'foename' + (boss ? ' boss' : ''),
      boss ? 'THE ROOT ERROR — ' + (SET.items.length - S.idx) + ' left' : 'wave ' + (S.idx + 1) + ' of ' + SET.items.length));

    var bar = el('div', 'foebar');
    var fill = el('div', 'foefill');
    fill.style.width = boss
      ? Math.max(0, 100 - (S.idx / SET.items.length) * 100) + '%'
      : '100%';
    bar.appendChild(fill);
    stageEl.appendChild(bar);

    var p = el('div', 'panel');
    p.appendChild(mapRow());
    p.appendChild(el('span', 'tag' + (boss ? ' boss' : ''), boss ? 'Production · boss · no hints' : 'Practice · waves'));
    if (item.passage) { p.appendChild(h('div', 'passage', item.passage)); }
    p.appendChild(h('p', 'q', item.stem));

    var acts = el('div', 'acts');
    acts.style.display = 'none';
    item.options.forEach(function (t, oi) {
      var b = el('button', 'act');
      b.type = 'button';
      b.appendChild(el('span', 'k', K[oi]));
      b.appendChild(h('span', null, t));
      b.addEventListener('click', function () { resolve(oi, b); });
      acts.appendChild(b);
    });

    /* commit gate — the confidence wager, as an attack choice */
    var gate = el('div', 'commit');
    gate.appendChild(h('p', null, boss
      ? 'No scaffolding here. Commit before you see the options.'
      : 'Commit before you see the options. Overcharge doubles the damage — and doubles what it costs you if you are wrong.'));
    var cb = el('div', 'cbtns');
    var safe = el('button', 'cbtn safe');
    safe.type = 'button';
    safe.appendChild(h('span', null, 'Strike'));
    safe.appendChild(el('small', null, 'normal damage · 1 HP if wrong'));
    var over = el('button', 'cbtn over');
    over.type = 'button';
    over.appendChild(h('span', null, 'Overcharge'));
    over.appendChild(el('small', null, S.overMult + '× score · 2 HP if wrong'));
    cb.appendChild(safe); cb.appendChild(over);
    gate.appendChild(cb);

    if (S.scans > 0) {
      var sc = el('button', 'btn ghost', 'Use scanner (' + S.scans + ' left) — removes one wrong option');
      sc.type = 'button';
      sc.addEventListener('click', function () {
        A.resume(); A.shield();
        S.scans--;
        sc.remove();
        var wrongIdx = [];
        item.options.forEach(function (_, i) { if (i !== item.answer) { wrongIdx.push(i); } });
        var kill = wrongIdx[Math.floor(Math.random() * wrongIdx.length)];
        var target = acts.children[kill];
        target.disabled = true;
        target.classList.add('gone');
      });
      gate.appendChild(sc);
    }
    p.appendChild(gate);
    p.appendChild(acts);
    panelEl.appendChild(p);

    function commit(v) {
      A.resume(); A.tick();
      wager = v;
      gate.remove();
      acts.style.display = '';
      railEl.style.visibility = 'visible';
      startClock();
    }
    safe.addEventListener('click', function () { commit(1); });
    over.addEventListener('click', function () { commit(2); });

    function startClock() {
      left = secs;
      tmr = setInterval(function () {
        left--;
        var pc = Math.max(0, left / secs) * 100;
        railEl._fill.style.width = pc + '%';
        if (left <= Math.ceil(secs * 0.25)) { railEl._fill.classList.add('warn'); }
        if (left <= 0) { clearInterval(tmr); tmr = null; resolve(-1, null); }
      }, 1000);
    }

    function resolve(oi, node) {
      if (answered) { return; }
      answered = true;
      if (tmr) { clearInterval(tmr); tmr = null; }
      railEl.style.visibility = 'hidden';

      var right = (oi === item.answer);
      Array.prototype.forEach.call(acts.querySelectorAll('.act'), function (b, i) {
        b.disabled = true;
        if (i === item.answer) { b.classList.add('good'); }
        else if (i === oi) { b.classList.add('bad'); }
      });

      var fc = centreOf(foe);
      if (right) {
        S.combo++;
        if (S.combo > S.best) { S.best = S.combo; }
        var mult = (1 + (S.combo - 1) * 0.5) * (wager === 2 ? S.overMult : 1);
        var gained = Math.round(100 * mult);
        S.score += gained;
        S.killed++;

        if (wager === 2) { A.crit(); shake(2); } else { A.hit(); shake(1); }
        FX.burst(fc.x, fc.y, wager === 2 ? '#FFFC00' : '#00FFFF', wager === 2 ? 40 : 26, wager === 2 ? 8 : 5);
        FX.float(fc.x, fc.y - 30, '+' + gained, wager === 2 ? '#FFFC00' : '#00FFFF', wager === 2);
        foe.classList.add('hurt');

        if (S.combo > 0 && S.combo % S.shieldAt === 0) {
          S.shields++;
          A.shield();
          FX.float(fc.x, fc.y - 60, 'SHIELD', '#00FFFF');
        }
        if (boss) {
          fill.style.width = Math.max(0, 100 - ((S.idx + 1) / SET.items.length) * 100) + '%';
        } else {
          setTimeout(function () { foe.classList.add('dying'); A.kill(); }, 180);
        }
        refreshHud();
        p.appendChild(h('div', 'exp', '<b>' + (wager === 2 ? 'Overcharged hit' : 'Hit') + '</b><p>' + item.explain + '</p>'));
        p.appendChild(advance());
      } else {
        S.combo = 0;
        var dmg = (wager === 2 ? 2 : 1);
        if (S.shields > 0) {
          var absorb = Math.min(S.shields, dmg);
          S.shields -= absorb; dmg -= absorb;
          A.shield();
          FX.float(fc.x, fc.y - 30, 'BLOCKED', '#00FFFF');
        }
        if (dmg > 0) {
          S.hp -= dmg;
          A.hurt(); shake(3);
          FX.burst(innerWidth / 2, innerHeight / 2, '#FF3503', 34, 7);
          FX.float(innerWidth / 2, innerHeight / 2 - 40, '-' + dmg + ' HP', '#FF3503', true);
          var hs = document.querySelectorAll('#hearts .hp');
          if (hs[S.hp]) { hs[S.hp].classList.add('pop'); }
        }
        refreshHud();

        if (S.hp <= 0 && S.revive) {
          S.revive = false; S.hp = 1;
          A.heal();
          FX.float(innerWidth / 2, innerHeight / 2 - 90, 'SECOND WIND', '#FF00FF', true);
          refreshHud();
        }
        socratic(oi === -1);
      }
    }

    function socratic(timeout) {
      var s = el('div', 'panel');
      s.style.borderColor = 'rgba(255,53,3,.5)';
      s.appendChild(el('span', 'tag boss', timeout ? 'Signal lost — time' : 'Hit taken'));
      s.appendChild(h('p', 'q', 'Name what happened. The run does not continue until you do.'));
      var box = el('div');
      box.style.cssText = 'display:flex;flex-direction:column;gap:9px';
      (WHY[isMath ? 'math' : 'rw']).forEach(function (why) {
        var b = el('button', 'act');
        b.type = 'button';
        b.appendChild(el('span', 'k', '?'));
        b.appendChild(h('span', null, why));
        b.addEventListener('click', function () {
          A.resume(); A.tick();
          S.log.push({ n: S.idx + 1, skill: item.skill || '', why: why, sure: wager === 2, stage: boss ? 'Boss' : 'Waves' });
          Array.prototype.forEach.call(box.querySelectorAll('.act'), function (x) { x.disabled = true; });
          b.classList.add('good');
          s.appendChild(h('div', 'exp', '<b>What was going on</b><p>' + item.explain + '</p>'));
          if (S.hp <= 0) {
            var r = el('div', 'row');
            var d = el('button', 'btn danger', 'Run over →');
            d.type = 'button';
            d.addEventListener('click', death);
            r.appendChild(d);
            s.appendChild(r);
          } else {
            s.appendChild(advance());
          }
          s.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        });
        box.appendChild(b);
      });
      s.appendChild(box);
      panelEl.appendChild(s);
      s.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function advance() {
      var r = el('div', 'row');
      var last = (S.idx + 1 >= SET.items.length);
      var b = el('button', 'btn', last ? (boss ? 'Finish the run →' : 'Stage clear →') : 'Next →');
      b.type = 'button';
      b.addEventListener('click', function () {
        S.idx++;
        if (S.idx >= SET.items.length) { nextStage(); }
        else { combat(SET, boss); }
      });
      r.appendChild(b);
      return r;
    }
  }

  /* ══ end screens ═════════════════════════════════════════ */
  function endShell(title, cls, sub) {
    clear(root);
    root.appendChild(buildHud());
    stageEl = el('div', 'stage'); root.appendChild(stageEl);
    panelEl = el('div'); root.appendChild(panelEl);
    refreshHud();
    var p = el('div', 'panel');
    p.appendChild(h('h1', 'big ' + cls + (cls === 'lose' ? ' glitch' : ''), title));
    p.appendChild(h('p', null, sub));

    var s = saved();
    var sum = el('div', 'sum');
    [['Score', S.score], ['Best combo', S.best], ['Cleared', S.killed], ['Personal best', Math.max(s.best || 0, S.score)]]
      .forEach(function (x) {
        var i = el('div', 'sumi');
        i.appendChild(el('b', null, String(x[1])));
        i.appendChild(el('span', null, x[0]));
        sum.appendChild(i);
      });
    p.appendChild(sum);

    if (S.perks.length) { p.appendChild(h('p', null, 'Upgrades taken: ' + S.perks.join(' · '))); }

    if (S.log.length) {
      p.appendChild(h('h3', null, 'Damage report'));
      p.appendChild(h('p', null, 'This is the part that is actually worth keeping. Copy it into the notebook.'));
      var lg = el('div', 'log');
      S.log.forEach(function (e) {
        var r = el('div', 'logr');
        r.appendChild(el('span', 'ln', e.stage + ' Q' + e.n));
        r.appendChild(el('span', 'lt', e.skill || 'General'));
        r.appendChild(el('span', 'lw', e.why + (e.sure ? ' · overcharged' : '')));
        lg.appendChild(r);
      });
      p.appendChild(lg);
      var sure = S.log.filter(function (e) { return e.sure; }).length;
      if (sure) {
        p.appendChild(h('div', 'exp', '<b>Read this one</b><p>You overcharged on ' + sure + ' question' + (sure === 1 ? '' : 's') +
          ' you got wrong. Being certain and being right came apart there — that gap is worth more to your teacher than the score.</p>'));
      }
    }

    var r = el('div', 'row');
    var again = el('button', 'btn', 'Run it again');
    again.type = 'button';
    again.addEventListener('click', function () { S = fresh(); render(); });
    r.appendChild(again);
    var hub = el('a', 'btn ghost', 'All lessons');
    hub.href = '../lessons.html';
    hub.style.textDecoration = 'none';
    r.appendChild(hub);
    p.appendChild(r);
    panelEl.appendChild(p);
  }

  function death() {
    A.dead();
    shake(3);
    persist(false);
    endShell('Run failed', 'lose',
      'The signal got you. Nothing here is lost — the damage report below is what the next run is built on.');
  }

  function victory() {
    A.win();
    persist(true);
    var c = { x: innerWidth / 2, y: innerHeight / 3 };
    FX.burst(c.x, c.y, '#00FFFF', 60, 9);
    setTimeout(function () { FX.burst(c.x - 120, c.y + 40, '#FFFC00', 40, 8); }, 140);
    setTimeout(function () { FX.burst(c.x + 120, c.y + 40, '#FF00FF', 40, 8); }, 260);
    endShell('Signal clear', 'win',
      S.log.length
        ? 'Run complete. You took hits on the way — those are listed below and they are the useful part.'
        : 'Run complete, no hits taken. Tell your teacher, because the next set should be harder.');
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', boot); }
  else { boot(); }
})();
