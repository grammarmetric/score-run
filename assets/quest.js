/* ─────────────────────────────────────────────────────────────
   Score run — quest lesson engine

   Renders a full PPP lesson from window.LESSON:

     WARM-UP      an analogy that makes the idea concrete, then one
                  free question that costs nothing
     PRESENTATION the actual teaching — 3 modules, each with concept
                  cards, right/wrong examples, the rule, the trap it
                  sets, and a worked example in numbered steps
     PRACTICE     trap forensics, then scaffolded quizzes with XP,
                  streak bonuses and lives
     PRODUCE      boss battle: no hints, HP bar, mixed application
     VICTORY      badges and a certificate

   No dependencies. Everything procedural.
   ───────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var L = window.LESSON;
  if (!L) { return; }

  var K = ['A', 'B', 'C', 'D'];
  var isMath = (L.stampSet === 'math');
  var ACCENTS = ['sky', 'teal', 'olive', 'yellow'];

  var STAMPS = {
    rw: [['broad', 'Too broad'], ['narrow', 'Too narrow'], ['contradicts', 'Contradicts the text'],
         ['unsupported', 'Not in the text'], ['halfright', 'Half right']],
    math: [['misread', 'Answers the wrong question'], ['partial', 'Stops halfway'], ['sign', 'Sign error'],
           ['slip', 'Arithmetic slip'], ['swap', 'Swaps two values']]
  };

  var BADGES = [
    { id: 'start', i: '👣', n: 'First steps', d: 'Answer your first question' },
    { id: 'rules', i: '📖', n: 'Rule reader', d: 'Finish the briefing' },
    { id: 'forensic', i: '🔍', n: 'Trap spotter', d: 'Name every trap' },
    { id: 'streak', i: '🔥', n: 'On fire', d: '4 in a row' },
    { id: 'practice', i: '🏋️', n: 'Trained', d: 'Finish practice' },
    { id: 'boss', i: '🏆', n: 'Boss down', d: 'Beat the boss' }
  ];

  var S = {
    xp: 0, level: 1, streak: 0, best: 0, lives: 5,
    answered: 0, correct: 0, badges: {}, bossHP: 100, bossMax: 100,
    bossQs: 0, bossDone: 0, practiceQs: 0, practiceDone: 0, log: []
  };

  var LEVELS = [0, 150, 350, 600, 900, 1250];

  /* ── dom helpers ───────────────────────────────────────── */
  function el(t, c, x) { var n = document.createElement(t); if (c) { n.className = c; } if (x != null) { n.textContent = x; } return n; }
  function h(t, c, m) { var n = document.createElement(t); if (c) { n.className = c; } if (m != null) { n.innerHTML = m; } return n; }
  var root;

  /* ── confetti ──────────────────────────────────────────── */
  var FX = (function () {
    var cv = document.getElementById('fx'), cx = cv.getContext('2d'), bits = [], raf = null;
    function size() { cv.width = innerWidth; cv.height = innerHeight; }
    size(); addEventListener('resize', size);
    var COLS = ['#fee801', '#54c1e6', '#39c4b6', '#9a9f17'];
    function burst(n) {
      if (matchMedia('(prefers-reduced-motion: reduce)').matches) { return; }
      for (var i = 0; i < (n || 60); i++) {
        bits.push({
          x: Math.random() * cv.width, y: -20 - Math.random() * 120,
          vx: (Math.random() - .5) * 4, vy: Math.random() * 3 + 2,
          s: Math.random() * 7 + 4, r: Math.random() * 6.28, vr: (Math.random() - .5) * .3,
          c: COLS[Math.floor(Math.random() * COLS.length)], l: 1,
          sq: Math.random() > .5
        });
      }
      if (!raf) { raf = requestAnimationFrame(step); }
    }
    function step() {
      cx.clearRect(0, 0, cv.width, cv.height);
      for (var i = bits.length - 1; i >= 0; i--) {
        var p = bits[i];
        p.x += p.vx; p.y += p.vy; p.vy += .07; p.r += p.vr; p.l -= .005;
        if (p.y > cv.height + 30 || p.l <= 0) { bits.splice(i, 1); continue; }
        cx.save(); cx.translate(p.x, p.y); cx.rotate(p.r);
        cx.globalAlpha = Math.max(0, p.l); cx.fillStyle = p.c;
        if (p.sq) { cx.fillRect(-p.s / 2, -p.s / 2, p.s, p.s * .6); }
        else { cx.beginPath(); cx.arc(0, 0, p.s / 2, 0, 6.28); cx.fill(); }
        cx.restore();
      }
      cx.globalAlpha = 1;
      if (bits.length) { raf = requestAnimationFrame(step); }
      else { raf = null; cx.clearRect(0, 0, cv.width, cv.height); }
    }
    return { burst: burst };
  })();

  /* ── hud ───────────────────────────────────────────────── */
  function hud() {
    var bar = el('div'); bar.id = 'progress';
    document.body.appendChild(bar);

    var n = el('div', 'hud');
    var inr = el('div', 'hud-in');
    var brand = el('div', 'hud-brand');
    var lg = el('div', 'lg', '◈');
    brand.appendChild(lg);
    var bt = el('div');
    bt.appendChild(document.createTextNode(L.title));
    bt.appendChild(el('small', null, 'Week ' + L.week + ' · session ' + L.session + ' · ' + L.domain));
    brand.appendChild(bt);
    inr.appendChild(brand);
    inr.appendChild(el('div', 'hud-sp'));

    var chips = el('div', 'chips');
    chips.appendChild(chip('lvl', 'c-lvl', '⭐ Lv.1'));
    chips.appendChild(chip('xp', 'c-xp', '⚡ 0 XP'));
    chips.appendChild(chip('streak', 'c-streak', '🔥 0'));
    chips.appendChild(chip('lives', 'c-lives', '❤️ 5'));
    inr.appendChild(chips);
    n.appendChild(inr);
    root.appendChild(n);

    addEventListener('scroll', function () {
      var d = document.documentElement;
      bar.style.width = (d.scrollTop / (d.scrollHeight - d.clientHeight) * 100) + '%';
    }, { passive: true });
  }
  function chip(cls, id, txt) { var c = el('div', 'chip ' + cls, txt); c.id = id; return c; }
  function setChip(id, txt, pulse) {
    var n = document.getElementById(id);
    if (!n) { return; }
    n.textContent = txt;
    if (pulse) { n.classList.remove('pulse'); void n.offsetWidth; n.classList.add('pulse'); }
  }
  function refresh() {
    for (var i = LEVELS.length - 1; i >= 0; i--) { if (S.xp >= LEVELS[i]) { S.level = i + 1; break; } }
    setChip('c-lvl', '⭐ Lv.' + S.level);
    setChip('c-xp', '⚡ ' + S.xp + ' XP');
    setChip('c-streak', '🔥 ' + S.streak);
    setChip('c-lives', '❤️ ' + Math.max(0, S.lives));
  }
  function addXP(v) {
    var was = S.level;
    S.xp += v;
    refresh();
    setChip('c-xp', '⚡ ' + S.xp + ' XP', true);
    if (S.level > was) { toast('⭐', 'Level up', 'You reached level ' + S.level); FX.burst(50); }
  }

  var toastEl;
  function toast(icon, title, body) {
    if (!toastEl) {
      toastEl = el('div', 'toast');
      toastEl.appendChild(el('div', 'i'));
      var t = el('div');
      t.appendChild(el('b'));
      t.appendChild(el('span'));
      toastEl.appendChild(t);
      document.body.appendChild(toastEl);
    }
    toastEl.querySelector('.i').textContent = icon;
    toastEl.querySelector('b').textContent = title;
    toastEl.querySelector('span').textContent = body;
    toastEl.classList.add('show');
    clearTimeout(toastEl._t);
    toastEl._t = setTimeout(function () { toastEl.classList.remove('show'); }, 3200);
  }

  function badge(id) {
    if (S.badges[id]) { return; }
    S.badges[id] = true;
    var b = null;
    BADGES.forEach(function (x) { if (x.id === id) { b = x; } });
    if (!b) { return; }
    var node = document.getElementById('ach-' + id);
    if (node) { node.classList.add('got'); }
    toast(b.i, 'Badge unlocked', b.n + ' — ' + b.d);
    addXP(40);
    FX.burst(45);
  }

  /* ── hero + timeline ───────────────────────────────────── */
  function hero() {
    var w = el('div', 'wrap');
    var hd = el('header', 'hero');
    var bd = el('div', 'hero-badge');
    bd.appendChild(el('span', 'dot'));
    bd.appendChild(el('span', null, '120-minute lesson · present → practice → produce'));
    hd.appendChild(bd);

    var parts = L.title.split(' ');
    var half = Math.ceil(parts.length / 2);
    hd.appendChild(h('h1', null,
      '<span class="grad-a">' + parts.slice(0, half).join(' ') + '</span> ' +
      '<span class="grad-b">' + parts.slice(half).join(' ') + '</span>'));
    hd.appendChild(el('p', 'sub', L.sub));

    var st = el('div', 'hero-stats');
    [['⏱️', '120 minutes'], ['📚', L.present.modules.length + ' teaching modules'],
     ['🎯', (L.forensics.items.length + L.speed.items.length + L.sim.items.length) + ' questions'],
     ['🏆', BADGES.length + ' badges']].forEach(function (x) {
      var s = el('div', 'hstat');
      s.appendChild(el('span', 'i', x[0]));
      s.appendChild(el('span', null, x[1]));
      st.appendChild(s);
    });
    hd.appendChild(st);
    w.appendChild(hd);

    var tl = el('div', 'timeline');
    [['🔥', '0–10 min', 'Warm-up'], ['📖', '10–40 min', 'Learn'],
     ['🏋️', '40–85 min', 'Practice'], ['🐉', '85–115 min', 'Boss'],
     ['🎓', '115–120 min', 'Victory']].forEach(function (x, i) {
      var t = el('div', 'tl' + (i === 0 ? ' on' : ''));
      t.appendChild(el('div', 'i', x[0]));
      t.appendChild(el('div', 't', x[1]));
      t.appendChild(el('div', 'n', x[2]));
      tl.appendChild(t);
    });
    w.appendChild(tl);
    root.appendChild(w);
  }

  /* ── section scaffold ──────────────────────────────────── */
  function section(id, num, accent, tag, tagCls, title, sub) {
    var s = el('section'); s.id = id;
    var w = el('div', 'wrap');
    var hd = el('div', 'sec-head');
    hd.appendChild(el('div', 'sec-num ' + accent, num));
    var t = el('div');
    t.appendChild(el('span', 'sec-tag ' + tagCls, tag));
    t.appendChild(h('div', 'sec-title', title));
    hd.appendChild(t);
    w.appendChild(hd);
    if (sub) { w.appendChild(el('p', 'sec-sub', sub)); }
    s.appendChild(w);
    root.appendChild(s);
    return w;
  }

  /* ═══ 1 · WARM-UP ═══════════════════════════════════════ */
  function warmup() {
    var P = L.present;
    var w = section('warmup', '!', 'yellow', '⚡ Warm-up · 10 min', 'tag-warm',
      'Mission briefing', 'One idea to hold on to before anything else. Nothing here costs you a life.');

    var c = el('div', 'card yellow reveal');
    c.appendChild(h('h3', null, '<span>' + P.hook.icon + '</span> ' + P.hook.title));
    c.appendChild(h('p', 'lead', P.hook.text));
    w.appendChild(c);

    var q = el('div', 'quiz reveal');
    var m = el('div', 'qmeta');
    m.appendChild(el('span', 'qnum', 'WARM-UP CHECK'));
    m.appendChild(el('span', 'qxp', '⚡ +30 XP · no life lost'));
    q.appendChild(m);
    q.appendChild(h('div', 'qtext', P.check.stem));
    var ch = el('div', 'choices');
    P.check.options.forEach(function (t, i) {
      var b = el('button', 'choice');
      b.type = 'button';
      b.appendChild(el('span', 'lt', K[i]));
      b.appendChild(h('span', null, t));
      b.addEventListener('click', function () {
        if (q.dataset.done) { return; }
        q.dataset.done = '1';
        var ok = (i === P.check.answer);
        Array.prototype.forEach.call(ch.children, function (x, xi) {
          x.disabled = true;
          if (xi === P.check.answer) { x.classList.add('ok'); }
          else if (xi === i) { x.classList.add('no'); }
        });
        q.classList.add(ok ? 'right' : 'wrong');
        var f = el('div', 'fb show ' + (ok ? 'ok' : 'no'));
        f.appendChild(h('span', null, '<b>' + (ok ? '✓ Correct — +30 XP' : '✗ Not yet — and that is fine, this is the warm-up') +
          '</b><br>' + P.check.explain));
        q.appendChild(f);
        if (ok) { addXP(30); FX.burst(30); }
        badge('start');
      });
      ch.appendChild(b);
    });
    q.appendChild(ch);
    w.appendChild(q);
  }

  /* ═══ 2 · PRESENTATION ══════════════════════════════════ */
  function presentation() {
    var P = L.present;
    var w = section('learn', '📖', 'sky', '📖 Presentation · 30 min', 'tag-present',
      'Learn the rules',
      P.modules.length + ' modules. This is the part that actually changes your score — the practice below only works if this lands first.');

    P.modules.forEach(function (mod, mi) {
      var a = mod.accent || ACCENTS[mi % ACCENTS.length];
      var c = el('div', 'card ' + a + ' reveal');

      var hh = el('h3');
      hh.appendChild(el('span', 'mod-n ' + a, String(mi + 1)));
      hh.appendChild(h('span', null, mod.title));
      c.appendChild(hh);
      c.appendChild(h('p', 'lead', mod.lead));

      if (mod.concepts && mod.concepts.length) {
        var g = el('div', 'concepts');
        mod.concepts.forEach(function (cn) {
          var k = el('div', 'concept');
          k.appendChild(el('span', 'i', cn.i));
          k.appendChild(h('h5', null, cn.t));
          k.appendChild(h('p', null, cn.d));
          if (cn.f) { k.appendChild(h('div', 'formula', cn.f)); }
          g.appendChild(k);
        });
        c.appendChild(g);
      }

      (mod.examples || []).forEach(function (ex) {
        var e = el('div', 'ex ' + (ex.ok ? 'ok' : 'no'));
        e.appendChild(el('span', 'lbl', ex.ok ? '✓ Correct' : '✗ Wrong'));
        e.appendChild(h('span', null, ex.t));
        if (ex.note) { e.appendChild(h('span', 'note', ex.note)); }
        c.appendChild(e);
      });

      if (mod.rule) { c.appendChild(box('rule', '🔑', 'The rule', mod.rule)); }
      if (mod.trap) { c.appendChild(box('trap', '🚨', 'The trap it sets', mod.trap)); }
      if (mod.tip) { c.appendChild(box('tip', '💡', 'Shortcut', mod.tip)); }

      if (mod.worked) {
        var wk = el('div', 'worked');
        wk.appendChild(el('span', 'lbl', '📝 Worked example'));
        wk.appendChild(h('div', 'q', mod.worked.q));
        var st = el('div', 'steps');
        mod.worked.steps.forEach(function (s, i) {
          var r = el('div', 'step');
          r.appendChild(el('div', 'n', String(i + 1)));
          r.appendChild(h('div', 'b', s));
          st.appendChild(r);
        });
        wk.appendChild(st);
        wk.appendChild(h('div', 'answer', '🎯 ' + mod.worked.answer));
        c.appendChild(wk);
      }
      w.appendChild(c);
    });

    var row = el('div', 'btnrow reveal');
    var b = el('button', 'btn btn-y', 'I have read this — enter practice →');
    b.type = 'button';
    b.addEventListener('click', function () {
      badge('rules');
      document.getElementById('forensics').scrollIntoView({ behavior: 'smooth' });
    });
    row.appendChild(b);
    w.appendChild(row);
  }

  function box(kind, icon, title, text) {
    var b = el('div', 'box ' + kind);
    b.appendChild(el('div', 'i', icon));
    var t = el('div');
    t.appendChild(el('h5', null, title));
    t.appendChild(h('p', null, text));
    b.appendChild(t);
    return b;
  }

  /* ═══ 3 · PRACTICE A · trap forensics ═══════════════════ */
  function forensics() {
    var F = L.forensics;
    var stamps = STAMPS[isMath ? 'math' : 'rw'];
    var w = section('forensics', '🔍', 'teal', '🏋️ Practice · 15 min', 'tag-practice',
      'Trap forensics', F.intro);

    var total = 0, done = 0;
    F.items.forEach(function (it) { total += it.options.filter(function (o) { return !o.correct; }).length; });

    F.items.forEach(function (item, qi) {
      var q = el('div', 'quiz reveal');
      var m = el('div', 'qmeta');
      m.appendChild(el('span', 'qnum', 'CASE FILE ' + (qi + 1) + ' OF ' + F.items.length));
      m.appendChild(el('span', 'qxp', '⚡ +25 XP each'));
      q.appendChild(m);
      if (item.passage) { q.appendChild(h('div', 'passage', item.passage)); }
      q.appendChild(h('div', 'qtext', item.stem));

      item.options.forEach(function (o, oi) {
        var wrapd = el('div');
        wrapd.style.marginBottom = '10px';
        var b = el('button', 'choice');
        b.type = 'button';
        b.disabled = true;
        b.appendChild(el('span', 'lt', K[oi]));
        b.appendChild(h('span', null, o.t));
        wrapd.appendChild(b);

        if (o.correct) {
          b.classList.add('ok');
          var kp = el('div', 'ex ok');
          kp.appendChild(el('span', 'lbl', 'Leave standing'));
          kp.appendChild(h('span', null, 'This one holds up.'));
          wrapd.appendChild(kp);
        } else {
          var sr = el('div');
          sr.style.cssText = 'display:flex;gap:7px;flex-wrap:wrap;margin-top:8px;padding-left:38px';
          stamps.forEach(function (st) {
            var sb = el('button', 'btn btn-g', st[1]);
            sb.type = 'button';
            sb.style.cssText = 'padding:7px 13px;font-size:12.5px;font-weight:600;border-radius:100px';
            sb.addEventListener('click', function () {
              if (sr.dataset.done) { return; }
              sr.dataset.done = '1';
              var ok = (st[0] === o.trap);
              Array.prototype.forEach.call(sr.children, function (x) { x.disabled = true; x.style.opacity = '.4'; });
              sb.style.opacity = '1';
              sb.className = 'btn ' + (ok ? 'btn-y' : 'btn-g');
              var v = el('div', 'ex ' + (ok ? 'ok' : 'no'));
              v.appendChild(el('span', 'lbl', ok ? 'Correct call' : 'It is “' + labelOf(stamps, o.trap) + '”'));
              v.appendChild(h('span', null, o.why));
              wrapd.appendChild(v);
              if (ok) { addXP(25); b.classList.add('no'); }
              done++;
              if (done >= total) { badge('forensic'); FX.burst(50); }
            });
            sr.appendChild(sb);
          });
          wrapd.appendChild(sr);
        }
        q.appendChild(wrapd);
      });

      if (item.explain) {
        var f = el('div', 'fb show ok');
        f.appendChild(h('span', null, '<b>Why the right answer is right</b><br>' + item.explain));
        q.appendChild(f);
      }
      w.appendChild(q);
    });
  }

  function labelOf(stamps, k) {
    for (var i = 0; i < stamps.length; i++) { if (stamps[i][0] === k) { return stamps[i][1].toLowerCase(); } }
    return k;
  }

  /* ═══ 4 · PRACTICE B · scaffolded quizzes ═══════════════ */
  function practice() {
    var SP = L.speed;
    S.practiceQs = SP.items.length;
    var w = section('practice', '🏋️', 'teal', '🏋️ Practice · 30 min', 'tag-practice',
      'Training ground',
      SP.items.length + ' questions at real exam pace. Correct answers earn XP; a run of four earns a bonus. A wrong answer costs a life — but the explanation is worth more than the life.');

    SP.items.forEach(function (item, i) {
      w.appendChild(quizCard(item, i + 1, false, 'Practice ' + (i + 1) + ' of ' + SP.items.length, 25));
    });
  }

  /* ═══ 5 · PRODUCE · boss ════════════════════════════════ */
  function boss() {
    var SM = L.sim;
    S.bossQs = SM.items.length;
    var w = section('boss', '🐉', 'yellow', '🐉 Production · 30 min', 'tag-produce',
      'Boss battle',
      'No hints, no scaffolding, no topic labels. Everything from the briefing, applied on your own. Land every hit to bring the boss down.');

    var b = el('div', 'boss reveal');
    var hd = el('div', 'boss-head');
    hd.appendChild(el('div', 'boss-av', isMath ? '🐉' : '📕'));
    var info = el('div', 'boss-info');
    info.appendChild(el('h3', null, isMath ? 'The Error Dragon' : 'The Red Pen'));
    info.appendChild(el('p', null, 'Defeat it by answering all ' + SM.items.length + ' questions correctly.'));
    var bar = el('div', 'hpbar');
    var fill = el('div', 'hpfill'); fill.id = 'hpfill';
    bar.appendChild(fill);
    info.appendChild(bar);
    var ht = el('div', 'hptext', '100 / 100 HP'); ht.id = 'hptext';
    info.appendChild(ht);
    hd.appendChild(info);
    b.appendChild(hd);

    SM.items.forEach(function (item, i) {
      b.appendChild(quizCard(item, i + 1, true, 'Boss · question ' + (i + 1), 50));
    });
    w.appendChild(b);
  }

  /* shared quiz card */
  function quizCard(item, n, isBoss, label, xp) {
    var q = el('div', 'quiz reveal');
    var m = el('div', 'qmeta');
    m.appendChild(el('span', 'qnum', label.toUpperCase()));
    m.appendChild(el('span', 'qxp', '⚡ +' + xp + ' XP'));
    q.appendChild(m);
    if (item.passage) { q.appendChild(h('div', 'passage', item.passage)); }
    q.appendChild(h('div', 'qtext', item.stem));

    var ch = el('div', 'choices');
    item.options.forEach(function (t, i) {
      var b = el('button', 'choice');
      b.type = 'button';
      b.appendChild(el('span', 'lt', K[i]));
      b.appendChild(h('span', null, t));
      b.addEventListener('click', function () {
        if (q.dataset.done) { return; }
        q.dataset.done = '1';
        var ok = (i === item.answer);
        Array.prototype.forEach.call(ch.children, function (x, xi) {
          x.disabled = true;
          if (xi === item.answer) { x.classList.add('ok'); }
          else if (xi === i) { x.classList.add('no'); }
        });
        q.classList.add(ok ? 'right' : 'wrong');
        S.answered++;

        var f = el('div', 'fb show ' + (ok ? 'ok' : 'no'));
        if (ok) {
          S.correct++; S.streak++;
          if (S.streak > S.best) { S.best = S.streak; }
          var bonus = S.streak >= 4 ? 15 : 0;
          addXP(xp + bonus);
          f.appendChild(h('span', null, '<b>✓ Correct — +' + (xp + bonus) + ' XP' +
            (bonus ? ' (🔥 ' + S.streak + ' in a row)' : '') + '</b><br>' + item.explain));
          if (S.streak >= 4) { badge('streak'); }
          if (S.streak >= 2) { FX.burst(28); }
          if (isBoss) {
            S.bossDone++;
            var pc = Math.max(0, 100 - Math.round((S.bossDone / S.bossQs) * 100));
            S.bossHP = pc;
            document.getElementById('hpfill').style.width = pc + '%';
            document.getElementById('hptext').textContent = pc + ' / 100 HP';
            if (pc <= 0) {
              badge('boss');
              setTimeout(function () { FX.burst(140); certificate(); }, 700);
            }
          }
        } else {
          S.streak = 0; S.lives--;
          refresh();
          setChip('c-lives', '❤️ ' + Math.max(0, S.lives), true);
          S.log.push({ n: n, skill: item.skill || '', where: isBoss ? 'Boss' : 'Practice' });
          f.appendChild(h('span', null, '<b>✗ Not quite — the answer is ' + K[item.answer] +
            '</b><br>' + item.explain + '<br><br><em>Write this one into the error log: what you thought, what was true, and the rule.</em>'));
          if (S.lives <= 0) {
            S.lives = 5; refresh();
            toast('💔', 'Out of lives', 'Lives reset. Go back and re-read the briefing module for this skill.');
          }
        }
        q.appendChild(f);
        badge('start');

        if (!isBoss) {
          S.practiceDone++;
          if (S.practiceDone >= S.practiceQs) { badge('practice'); }
        }
      });
      ch.appendChild(b);
    });
    q.appendChild(ch);
    return q;
  }

  /* ═══ 6 · VICTORY ═══════════════════════════════════════ */
  function victory() {
    var w = section('victory', '🎓', 'olive', '🎓 Victory lap · 5 min', 'tag-warm',
      'Badges and certificate', 'What you collected, and the part worth copying into the notebook.');

    var g = el('div', 'achs reveal');
    BADGES.forEach(function (b) {
      var n = el('div', 'ach'); n.id = 'ach-' + b.id;
      n.appendChild(el('div', 'i', b.i));
      n.appendChild(el('div', 'n', b.n));
      n.appendChild(el('div', 'd', b.d));
      g.appendChild(n);
    });
    w.appendChild(g);

    var c = el('div', 'cert'); c.id = 'cert';
    w.appendChild(c);

    var row = el('div', 'btnrow reveal');
    row.style.marginTop = '22px';
    var a = el('a', 'btn btn-g', '← All lessons'); a.href = '../lessons.html';
    var t = el('a', 'btn btn-g', 'Teacher sheet'); t.href = '../teacher/' + L.id + '.html';
    var p = el('a', 'btn btn-g', 'Plain drill (exam mode)'); p.href = L.id + '-plain.html';
    row.appendChild(a); row.appendChild(t); row.appendChild(p);
    w.appendChild(row);

    var f = el('footer');
    f.appendChild(h('p', null, '◈ Score run · week ' + L.week + ' session ' + L.session +
      ' · present → practice → produce'));
    root.appendChild(f);
  }

  function certificate() {
    var c = document.getElementById('cert');
    if (!c || c.classList.contains('show')) { return; }
    c.appendChild(el('span', 'trophy', '🏆'));
    c.appendChild(el('div', 'eyebrow', 'Lesson complete'));
    c.appendChild(h('h2', null, '<span class="grad-a">Boss defeated</span>'));
    c.appendChild(el('p', null, S.log.length
      ? 'You took ' + S.log.length + ' hit' + (S.log.length === 1 ? '' : 's') + ' on the way through. Those are the questions to rewrite from scratch before the next lesson.'
      : 'A clean run with no misses. Tell your teacher — the next set should be harder.'));

    var st = el('div', 'cstats');
    var acc = S.answered ? Math.round((S.correct / S.answered) * 100) : 0;
    [[S.xp, 'Total XP'], ['Lv.' + S.level, 'Level'], [S.best, 'Best streak'],
     [acc + '%', 'Accuracy'], [Object.keys(S.badges).length + '/' + BADGES.length, 'Badges']]
      .forEach(function (x) {
        var i = el('div', 'cstat');
        i.appendChild(el('div', 'n', String(x[0])));
        i.appendChild(el('div', 'l', x[1]));
        st.appendChild(i);
      });
    c.appendChild(st);

    if (L.sim.teachback && L.sim.teachback.length) {
      var tb = el('div');
      tb.style.cssText = 'max-width:620px;margin:0 auto;text-align:left';
      tb.appendChild(h('h4', null, '🗣️ Say these out loud before you leave'));
      var ul = el('div');
      ul.style.cssText = 'display:flex;flex-direction:column;gap:9px;margin-top:10px';
      L.sim.teachback.forEach(function (t) {
        var r = el('div', 'ex ok');
        r.appendChild(h('span', null, t));
        ul.appendChild(r);
      });
      tb.appendChild(ul);
      c.appendChild(tb);
    }
    c.classList.add('show');
    setTimeout(function () { c.scrollIntoView({ behavior: 'smooth', block: 'center' }); }, 250);
  }

  /* ── reveal on scroll ──────────────────────────────────── */
  function reveals() {
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: .08 });
    document.querySelectorAll('.reveal').forEach(function (n) { io.observe(n); });

    var secs = ['warmup', 'learn', 'forensics', 'boss', 'victory'];
    var tls = document.querySelectorAll('.tl');
    var so = new IntersectionObserver(function (es) {
      es.forEach(function (e) {
        if (!e.isIntersecting) { return; }
        var idx = secs.indexOf(e.target.id);
        if (idx < 0) { return; }
        tls.forEach(function (t, i) {
          t.classList.toggle('on', i === idx);
          t.classList.toggle('done', i < idx);
        });
      });
    }, { threshold: .25 });
    secs.forEach(function (id) { var n = document.getElementById(id); if (n) { so.observe(n); } });
  }

  function boot() {
    root = document.getElementById('quest');
    document.title = L.title + ' · Score run';
    hud(); hero();
    warmup(); presentation(); forensics(); practice(); boss(); victory();
    refresh(); reveals();
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', boot); }
  else { boot(); }
})();
