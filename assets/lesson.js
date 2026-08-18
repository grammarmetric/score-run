/* ─────────────────────────────────────────────────────────────
   Score run — lesson engine
   Reads window.LESSON (from /banks/<id>.js) and builds the three
   PPP phases. No dependencies, no build step, no network calls.
   Progress is kept in localStorage on the student's own device.

   Mechanics carried over from the adapted blueprint:
     · trap forensics   — stamp WHY a wrong answer is wrong
     · speed lab        — real exam pacing + confidence wager
     · socratic loop    — a wrong answer must be classified
     · focus mode       — strips the game layer to a plain test
   ───────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var L = window.LESSON;
  if (!L) { return; }

  var KEY = 'scorerun:' + L.id;
  var LETTERS = ['A', 'B', 'C', 'D'];

  var STAMPS = {
    rw: [
      { k: 'broad',       t: 'Too broad' },
      { k: 'narrow',      t: 'Too narrow' },
      { k: 'contradicts', t: 'Contradicts the text' },
      { k: 'unsupported', t: 'Not in the text' },
      { k: 'halfright',   t: 'Half right' }
    ],
    math: [
      { k: 'misread', t: 'Answers the wrong question' },
      { k: 'partial', t: 'Stops halfway' },
      { k: 'sign',    t: 'Sign or direction error' },
      { k: 'slip',    t: 'Arithmetic slip' },
      { k: 'swap',    t: 'Swaps two quantities' }
    ]
  };

  var WHY = {
    rw: ['I did not know the rule', 'I misread the sentence', 'I guessed', 'I ran out of time', 'I knew it but picked carelessly'],
    math: ['I did not know the method', 'I set it up wrong', 'I made an arithmetic slip', 'I guessed', 'I ran out of time']
  };

  /* ── state ─────────────────────────────────────────────── */
  var state = load();

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) { return JSON.parse(raw); }
    } catch (e) { /* private mode — fall through to a fresh state */ }
    return { done: {}, speed: null, sim: null, log: [], teachback: {} };
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) { /* not fatal */ }
  }

  /* ── tiny dom helper ───────────────────────────────────── */
  function el(tag, cls, txt) {
    var n = document.createElement(tag);
    if (cls) { n.className = cls; }
    if (txt !== undefined && txt !== null) { n.textContent = txt; }
    return n;
  }
  function html(tag, cls, markup) {
    var n = document.createElement(tag);
    if (cls) { n.className = cls; }
    if (markup) { n.innerHTML = markup; }
    return n;
  }
  function clear(n) { while (n.firstChild) { n.removeChild(n.firstChild); } }

  /* ── shell ─────────────────────────────────────────────── */
  var root = document.getElementById('lesson');
  var panels = {};
  var navBtns = {};

  function build() {
    document.documentElement.setAttribute('data-lead', L.lead || 'cyan');

    var bar = el('div', 'bar');
    var back = el('a', 'back', '← All lessons');
    back.href = '../lessons.html';
    bar.appendChild(back);
    bar.appendChild(el('div', 'bar-sp'));

    var tchr = el('a', 'back', 'Teacher sheet');
    tchr.href = '../teacher/' + L.id + '.html';
    bar.appendChild(tchr);

    var focus = el('button', 'toggle');
    focus.type = 'button';
    focus.setAttribute('aria-pressed', 'false');
    focus.appendChild(el('span', 'knob'));
    focus.appendChild(el('span', null, 'Focus mode'));
    focus.addEventListener('click', function () {
      var on = document.documentElement.getAttribute('data-focus') === 'on';
      document.documentElement.setAttribute('data-focus', on ? 'off' : 'on');
      focus.setAttribute('aria-pressed', on ? 'false' : 'true');
    });
    bar.appendChild(focus);
    root.appendChild(bar);

    var head = el('div', 'head');
    head.appendChild(el('span', 'eyebrow', 'Week ' + L.week + ' · session ' + L.session + ' · ' + L.domain));
    head.appendChild(el('h1', null, L.title));
    head.appendChild(el('p', 'sub', L.sub));
    root.appendChild(head);

    var nav = el('div', 'phasenav hideable');
    nav.setAttribute('role', 'tablist');
    [['forensics', 'Trap forensics', '1'], ['speed', 'Speed lab', '2'], ['sim', 'Simulation', '3']].forEach(function (p) {
      var b = el('button', 'pnav');
      b.type = 'button';
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-selected', 'false');
      var i = el('span', 'pn-i', p[2]);
      b.appendChild(i);
      b.appendChild(el('span', null, p[1]));
      b.addEventListener('click', function () { show(p[0]); });
      nav.appendChild(b);
      navBtns[p[0]] = b;
    });
    root.appendChild(nav);

    panels.forensics = el('section', 'panel');
    panels.speed = el('section', 'panel');
    panels.sim = el('section', 'panel');
    root.appendChild(panels.forensics);
    root.appendChild(panels.speed);
    root.appendChild(panels.sim);

    buildForensics();
    buildSpeed();
    buildSim();
    refreshNav();
    show('forensics');
  }

  function show(which) {
    Object.keys(panels).forEach(function (k) {
      panels[k].classList.toggle('on', k === which);
      navBtns[k].setAttribute('aria-selected', k === which ? 'true' : 'false');
    });
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  function refreshNav() {
    Object.keys(navBtns).forEach(function (k) {
      var i = navBtns[k].querySelector('.pn-i');
      if (state.done[k]) { i.textContent = '✓'; i.classList.add('pn-done'); }
    });
  }

  /* ═══ phase 1 · trap forensics ═════════════════════════════
     The student does not pick an answer. They label every wrong
     option with the reason it is wrong. Naming the trap is the
     transferable skill; picking the right answer is not.        */
  function buildForensics() {
    var p = panels.forensics;
    var F = L.forensics;
    var stamps = STAMPS[L.stampSet || 'rw'];

    var brief = el('div', 'card brief');
    brief.appendChild(el('h3', null, 'What we are doing'));
    brief.appendChild(el('p', 'plain', F.intro));
    if (F.watch && F.watch.length) {
      var ul = el('ul', 'ticks');
      F.watch.forEach(function (w) { ul.appendChild(el('li', null, w)); });
      brief.appendChild(ul);
    }
    p.appendChild(brief);

    F.items.forEach(function (item, qi) {
      var card = el('div', 'card');
      var qh = el('div', 'qhead');
      qh.appendChild(el('span', 'qcount', 'Question ' + (qi + 1) + ' of ' + F.items.length));
      card.appendChild(qh);

      if (item.passage) { card.appendChild(html('div', 'passage', item.passage)); }
      card.appendChild(html('p', 'stem', item.stem));

      var opts = el('div', 'opts');
      var solved = 0;
      var needed = item.options.filter(function (o) { return !o.correct; }).length;

      item.options.forEach(function (o, oi) {
        var row = el('div');
        var b = el('button', 'opt');
        b.type = 'button';
        b.appendChild(el('span', 'ltr', LETTERS[oi]));
        b.appendChild(html('span', null, o.t));
        row.appendChild(b);

        if (o.correct) {
          b.addEventListener('click', function () {
            if (b.disabled) { return; }
            b.classList.add('right');
            b.appendChild(el('span', 'mark', 'Keep — this one is defensible'));
            b.disabled = true;
          });
        } else {
          var sr = el('div', 'stamps');
          stamps.forEach(function (s) {
            var sb = el('button', 'stamp', s.t);
            sb.type = 'button';
            sb.setAttribute('aria-pressed', 'false');
            sb.addEventListener('click', function () {
              if (sb.disabled) { return; }
              var ok = (s.k === o.trap);
              var tag = el('div', 'tagrow');
              tag.appendChild(el('span', 'tl', ok ? 'Correct call' : 'Not quite'));
              tag.appendChild(el('span', 'tv ' + (ok ? 'ok' : 'no'),
                ok ? o.why : 'This one is "' + labelFor(stamps, o.trap) + '". ' + o.why));
              Array.prototype.forEach.call(sr.querySelectorAll('.stamp'), function (x) { x.disabled = true; });
              sb.setAttribute('aria-pressed', 'true');
              b.classList.add('muted-out');
              b.appendChild(el('span', 'mark', 'Eliminated'));
              row.appendChild(tag);
              solved++;
              if (solved === needed) { markDone('forensics'); }
            });
            sr.appendChild(sb);
          });
          row.appendChild(sr);
        }
        opts.appendChild(row);
      });
      card.appendChild(opts);

      if (item.explain) {
        var ex = el('div', 'explain');
        ex.appendChild(el('span', 'el', 'Why the right answer is right'));
        ex.appendChild(html('p', null, item.explain));
        card.appendChild(ex);
      }
      p.appendChild(card);
    });

    var next = el('div', 'btnrow');
    var nb = el('button', 'btn', 'Go to the speed lab →');
    nb.type = 'button';
    nb.addEventListener('click', function () { show('speed'); });
    next.appendChild(nb);
    p.appendChild(next);
  }

  function labelFor(stamps, k) {
    for (var i = 0; i < stamps.length; i++) { if (stamps[i].k === k) { return stamps[i].t.toLowerCase(); } }
    return k;
  }

  /* ═══ phase 2 · speed lab ══════════════════════════════════
     Real exam pacing, a confidence wager before each answer, and
     a Socratic loop that will not let a wrong answer pass without
     being classified.                                            */
  function buildSpeed() {
    var p = panels.speed;
    var S = L.speed;
    var idx = 0, correct = 0, streak = 0, best = 0, pts = 0, wager = null, tmr = null, left = 0;
    var log = [];

    var brief = el('div', 'card brief hideable');
    brief.appendChild(el('h3', null, 'How this works'));
    brief.appendChild(html('p', 'plain',
      'You get <strong>' + S.seconds + ' seconds</strong> a question — real exam pace. Before you answer, say whether you are sure. ' +
      'Sure and right is worth double. Sure and wrong stops everything until you say what went wrong. Guessing is no longer free.'));
    p.appendChild(brief);

    var hud = el('div', 'hud hideable');
    var gT = gauge('Time left', S.seconds + 's', 'live');
    var gM = gauge('Multiplier', '1.0×');
    var gS = gauge('Streak', '0');
    var gP = gauge('Points', '0');
    hud.appendChild(gT.node); hud.appendChild(gM.node); hud.appendChild(gS.node); hud.appendChild(gP.node);
    p.appendChild(hud);

    var barWrap = el('div', 'timerbar hideable');
    var barFill = el('div', 'timerfill');
    barWrap.appendChild(barFill);
    p.appendChild(barWrap);

    var stage = el('div', 'stack');
    p.appendChild(stage);

    function gauge(label, val, cls) {
      var n = el('div', 'gauge' + (cls ? ' ' + cls : ''));
      var v = el('div', 'gv', val);
      n.appendChild(v);
      n.appendChild(el('div', 'gl', label));
      return { node: n, set: function (x) { v.textContent = x; }, warn: function (on) { n.classList.toggle('warn', on); } };
    }

    function stopTimer() { if (tmr) { clearInterval(tmr); tmr = null; } }

    function startTimer() {
      left = S.seconds;
      gT.set(left + 's');
      gT.warn(false);
      barFill.style.width = '100%';
      barFill.classList.remove('low');
      stopTimer();
      tmr = setInterval(function () {
        left--;
        gT.set(Math.max(0, left) + 's');
        var pc = Math.max(0, left / S.seconds) * 100;
        barFill.style.width = pc + '%';
        if (left <= Math.ceil(S.seconds * 0.25)) { barFill.classList.add('low'); gT.warn(true); }
        if (left <= 0) { stopTimer(); timeUp(); }
      }, 1000);
    }

    var currentAnswered = false;

    function render() {
      clear(stage);
      wager = null;
      currentAnswered = false;

      if (idx >= S.items.length) { return finish(); }
      var item = S.items[idx];

      var card = el('div', 'card');
      var qh = el('div', 'qhead');
      qh.appendChild(el('span', 'qcount', 'Question ' + (idx + 1) + ' of ' + S.items.length));
      if (item.skill) { var c = el('span', 'chip'); c.appendChild(el('span', 'dot')); c.appendChild(el('span', null, item.skill)); qh.appendChild(c); }
      card.appendChild(qh);
      if (item.passage) { card.appendChild(html('div', 'passage', item.passage)); }
      card.appendChild(html('p', 'stem', item.stem));

      /* wager gate — options stay locked until confidence is declared */
      var w = el('div', 'wager hideable');
      w.appendChild(el('p', 'wq', 'Before you look at the choices — how sure are you that you can get this?'));
      var wb = el('div', 'wbtns');
      var b1 = el('button', 'wbtn'); b1.type = 'button';
      b1.appendChild(el('span', null, 'Not certain'));
      b1.appendChild(el('small', null, 'Normal value'));
      var b2 = el('button', 'wbtn sure'); b2.type = 'button';
      b2.appendChild(el('span', null, 'I am sure'));
      b2.appendChild(el('small', null, 'Double if right · review if wrong'));
      wb.appendChild(b1); wb.appendChild(b2);
      w.appendChild(wb);
      card.appendChild(w);

      var opts = el('div', 'opts');
      opts.style.display = 'none';
      item.options.forEach(function (t, oi) {
        var b = el('button', 'opt');
        b.type = 'button';
        b.appendChild(el('span', 'ltr', LETTERS[oi]));
        b.appendChild(html('span', null, t));
        b.addEventListener('click', function () { answer(item, oi, opts, card); });
        opts.appendChild(b);
      });
      card.appendChild(opts);
      stage.appendChild(card);

      function pick(v) {
        wager = v;
        b1.setAttribute('aria-pressed', v === 1 ? 'true' : 'false');
        b2.setAttribute('aria-pressed', v === 2 ? 'true' : 'false');
        b1.disabled = true; b2.disabled = true;
        opts.style.display = '';
        startTimer();
      }
      b1.addEventListener('click', function () { pick(1); });
      b2.addEventListener('click', function () { pick(2); });

      /* focus mode has no wager step — reveal the options immediately */
      if (document.documentElement.getAttribute('data-focus') === 'on') { pick(1); }
    }

    function timeUp() {
      if (currentAnswered) { return; }
      currentAnswered = true;
      var item = S.items[idx];
      streak = 0;
      gM.set('1.0×'); gS.set('0');
      log.push({ n: idx + 1, skill: item.skill || '', why: 'Ran out of time', sure: wager === 2 });
      socratic(item, null, true);
    }

    function answer(item, oi, opts, card) {
      if (currentAnswered) { return; }
      currentAnswered = true;
      stopTimer();
      var right = (oi === item.answer);

      Array.prototype.forEach.call(opts.querySelectorAll('.opt'), function (b, i) {
        b.disabled = true;
        if (i === item.answer) { b.classList.add('right'); b.appendChild(el('span', 'mark', '✓ Correct')); }
        else if (i === oi) { b.classList.add('wrong'); b.appendChild(el('span', 'mark', '✕ Your answer')); }
      });

      if (right) {
        correct++;
        streak++;
        if (streak > best) { best = streak; }
        var mult = Math.min(3, 1 + (streak - 1) * 0.5) * (wager === 2 ? 2 : 1);
        pts += Math.round(10 * mult);
        gS.set(String(streak));
        gM.set(mult.toFixed(1) + '×');
        gP.set(String(pts));

        var ex = el('div', 'explain');
        ex.appendChild(el('span', 'el', wager === 2 ? 'Sure and right — double' : 'Correct'));
        ex.appendChild(html('p', null, item.explain));
        card.appendChild(ex);
        card.appendChild(nextBtn());
      } else {
        streak = 0;
        gM.set('1.0×'); gS.set('0');
        socratic(item, oi, false, card);
      }
    }

    function socratic(item, oi, ranOut, card) {
      var host = card || stage;
      var s = el('div', 'card socratic');
      s.appendChild(el('h4', null, ranOut ? 'Time ran out — before you move on' : (wager === 2 ? 'You were sure, and it was wrong. Worth stopping for.' : 'Before you move on')));
      s.appendChild(el('p', null, 'Name what happened. You cannot continue until you do — this is the whole point of the exercise.'));
      var wb = el('div', 'whybtns');
      (WHY[L.stampSet || 'rw']).forEach(function (reason) {
        var b = el('button', 'why', reason);
        b.type = 'button';
        b.addEventListener('click', function () {
          log.push({ n: idx + 1, skill: item.skill || '', why: reason, sure: wager === 2 });
          Array.prototype.forEach.call(wb.querySelectorAll('.why'), function (x) { x.disabled = true; });
          b.classList.add('right');
          var ex = el('div', 'explain');
          ex.appendChild(el('span', 'el', 'What was actually going on'));
          ex.appendChild(html('p', null, item.explain));
          s.appendChild(ex);
          s.appendChild(nextBtn());
        });
        wb.appendChild(b);
      });
      s.appendChild(wb);
      host.appendChild(s);
    }

    function nextBtn() {
      var row = el('div', 'btnrow');
      var b = el('button', 'btn', idx + 1 >= S.items.length ? 'See how that went →' : 'Next question →');
      b.type = 'button';
      b.addEventListener('click', function () { idx++; render(); });
      row.appendChild(b);
      return row;
    }

    function finish() {
      stopTimer();
      var pct = Math.round((correct / S.items.length) * 100);
      var res = el('div', 'card result');
      res.appendChild(el('h3', null, 'Speed lab — done'));
      res.appendChild(el('div', 'bigscore', correct + ' / ' + S.items.length));
      res.appendChild(el('p', null, pct + '% correct · best run of ' + best + ' · ' + pts + ' points'));

      if (log.length) {
        res.appendChild(el('h4', null, 'Your error log'));
        res.appendChild(el('p', null, 'This is the part worth keeping. Copy it into the notebook before the lesson ends.'));
        var lg = el('div', 'errlog');
        log.forEach(function (e) {
          var r = el('div', 'errrow');
          r.appendChild(el('span', 'en', 'Q' + e.n));
          r.appendChild(el('span', 'et', e.skill || 'General'));
          r.appendChild(el('span', 'ew', e.why + (e.sure ? ' · was sure' : '')));
          lg.appendChild(r);
        });
        res.appendChild(lg);

        var sureWrong = log.filter(function (e) { return e.sure; }).length;
        if (sureWrong) {
          var n = el('div', 'note');
          n.appendChild(el('p', null, 'You were sure on ' + sureWrong + ' question' + (sureWrong === 1 ? '' : 's') +
            ' you got wrong. That gap between feeling sure and being right is the single most useful thing on this page — show it to your teacher.'));
          res.appendChild(n);
        }
      } else {
        res.appendChild(el('p', null, 'Nothing in the error log. Genuinely good — tell your teacher so the next set gets harder.'));
      }

      var row = el('div', 'btnrow');
      var again = el('button', 'btn ghost', 'Run it again');
      again.type = 'button';
      again.addEventListener('click', function () {
        idx = 0; correct = 0; streak = 0; best = 0; pts = 0; log = [];
        gM.set('1.0×'); gS.set('0'); gP.set('0');
        render();
      });
      var go = el('button', 'btn', 'Go to the simulation →');
      go.type = 'button';
      go.addEventListener('click', function () { show('sim'); });
      row.appendChild(go); row.appendChild(again);
      res.appendChild(row);

      clear(stage);
      stage.appendChild(res);
      state.speed = { correct: correct, total: S.items.length, best: best };
      state.log = (state.log || []).concat(log);
      markDone('speed');
    }

    render();
  }

  /* ═══ phase 3 · simulation ═════════════════════════════════
     One block, exam conditions, no feedback until the end, then
     teach-back: explain the reasoning aloud, including on the
     ones that were right.                                        */
  function buildSim() {
    var p = panels.sim;
    var S = L.sim;
    var answers = [], idx = 0, tmr = null, left = 0;

    var brief = el('div', 'card brief');
    brief.appendChild(el('h3', null, 'Exam conditions'));
    brief.appendChild(html('p', 'plain',
      S.items.length + ' questions, <strong>' + fmt(S.items.length * S.seconds) + '</strong> on the clock, no hints and no feedback until the end. ' +
      'This is the closest thing here to the real thing.'));
    p.appendChild(brief);

    var startCard = el('div', 'card');
    var sb = el('button', 'btn', 'Start the block');
    sb.type = 'button';
    var srow = el('div', 'btnrow');
    srow.appendChild(sb);
    startCard.appendChild(srow);
    p.appendChild(startCard);

    var hud = el('div', 'hud');
    hud.style.display = 'none';
    var gT = el('div', 'gauge live');
    var gTv = el('div', 'gv', '—');
    gT.appendChild(gTv); gT.appendChild(el('div', 'gl', 'Time left'));
    var gQ = el('div', 'gauge');
    var gQv = el('div', 'gv', '—');
    gQ.appendChild(gQv); gQ.appendChild(el('div', 'gl', 'Question'));
    hud.appendChild(gT); hud.appendChild(gQ);
    p.appendChild(hud);

    var stage = el('div', 'stack');
    p.appendChild(stage);

    function fmt(s) {
      var m = Math.floor(s / 60), r = s % 60;
      return m + ' min' + (r ? ' ' + r + ' s' : '');
    }
    function mmss(s) {
      var m = Math.floor(s / 60), r = s % 60;
      return m + ':' + (r < 10 ? '0' : '') + r;
    }

    sb.addEventListener('click', function () {
      startCard.style.display = 'none';
      hud.style.display = '';
      left = S.items.length * S.seconds;
      gTv.textContent = mmss(left);
      tmr = setInterval(function () {
        left--;
        gTv.textContent = mmss(Math.max(0, left));
        gT.classList.toggle('warn', left <= 60);
        if (left <= 0) { clearInterval(tmr); tmr = null; grade(true); }
      }, 1000);
      render();
    });

    function render() {
      clear(stage);
      if (idx >= S.items.length) { clearInterval(tmr); tmr = null; return grade(false); }
      gQv.textContent = (idx + 1) + ' / ' + S.items.length;
      var item = S.items[idx];

      var card = el('div', 'card');
      if (item.passage) { card.appendChild(html('div', 'passage', item.passage)); }
      card.appendChild(html('p', 'stem', item.stem));
      var opts = el('div', 'opts');
      item.options.forEach(function (t, oi) {
        var b = el('button', 'opt');
        b.type = 'button';
        b.appendChild(el('span', 'ltr', LETTERS[oi]));
        b.appendChild(html('span', null, t));
        b.addEventListener('click', function () {
          answers[idx] = oi;
          idx++;
          render();
        });
        opts.appendChild(b);
      });
      card.appendChild(opts);

      var row = el('div', 'btnrow');
      if (idx > 0) {
        var back = el('button', 'btn ghost', '← Back');
        back.type = 'button';
        back.addEventListener('click', function () { idx--; render(); });
        row.appendChild(back);
      }
      var skip = el('button', 'btn ghost', 'Skip — come back to it');
      skip.type = 'button';
      skip.addEventListener('click', function () { answers[idx] = null; idx++; render(); });
      row.appendChild(skip);
      card.appendChild(row);
      stage.appendChild(card);
    }

    function grade(ranOut) {
      clear(stage);
      hud.style.display = 'none';
      var correct = 0, blanks = 0;
      S.items.forEach(function (it, i) {
        if (answers[i] === undefined || answers[i] === null) { blanks++; }
        else if (answers[i] === it.answer) { correct++; }
      });

      var res = el('div', 'card result');
      res.appendChild(el('h3', null, ranOut ? 'Time — pencils down' : 'Block complete'));
      res.appendChild(el('div', 'bigscore', correct + ' / ' + S.items.length));
      var line = Math.round((correct / S.items.length) * 100) + '% correct';
      if (blanks) { line += ' · ' + blanks + ' left blank'; }
      res.appendChild(el('p', null, line));

      if (blanks) {
        var nb = el('div', 'note');
        nb.appendChild(el('p', null, 'There is no penalty for a wrong answer on the SAT. A blank scores zero; a guess scores 25% of the time. Never leave one.'));
        res.appendChild(nb);
      }
      stage.appendChild(res);

      /* per-question review */
      S.items.forEach(function (it, i) {
        var card = el('div', 'card');
        var qh = el('div', 'qhead');
        qh.appendChild(el('span', 'qcount', 'Question ' + (i + 1)));
        if (it.skill) { var c = el('span', 'chip'); c.appendChild(el('span', 'dot')); c.appendChild(el('span', null, it.skill)); qh.appendChild(c); }
        card.appendChild(qh);
        if (it.passage) { card.appendChild(html('div', 'passage', it.passage)); }
        card.appendChild(html('p', 'stem', it.stem));
        var opts = el('div', 'opts');
        it.options.forEach(function (t, oi) {
          var b = el('button', 'opt');
          b.type = 'button';
          b.disabled = true;
          b.appendChild(el('span', 'ltr', LETTERS[oi]));
          b.appendChild(html('span', null, t));
          if (oi === it.answer) { b.classList.add('right'); b.appendChild(el('span', 'mark', '✓ Correct')); }
          else if (answers[i] === oi) { b.classList.add('wrong'); b.appendChild(el('span', 'mark', '✕ You picked this')); }
          opts.appendChild(b);
        });
        card.appendChild(opts);
        var ex = el('div', 'explain');
        ex.appendChild(el('span', 'el', 'Reasoning'));
        ex.appendChild(html('p', null, it.explain));
        card.appendChild(ex);
        stage.appendChild(card);
      });

      /* teach-back */
      if (S.teachback && S.teachback.length) {
        var tb = el('div', 'card');
        tb.appendChild(el('h3', null, 'Teach it back'));
        tb.appendChild(el('p', null,
          'Say these out loud to your teacher before you leave — including for the questions you got right. ' +
          'A right answer reached the wrong way will not survive the real exam.'));
        var box = el('div', 'tb');
        S.teachback.forEach(function (q, i) {
          var lab = el('label', null, q);
          lab.setAttribute('for', 'tb' + i);
          var ta = el('textarea');
          ta.id = 'tb' + i;
          ta.value = (state.teachback && state.teachback[i]) || '';
          ta.addEventListener('input', function () {
            state.teachback = state.teachback || {};
            state.teachback[i] = ta.value;
            save();
          });
          box.appendChild(lab);
          box.appendChild(ta);
        });
        box.appendChild(html('p', 'hint', 'Typed here so it is not lost — it stays on this device and is never sent anywhere.'));
        tb.appendChild(box);
        stage.appendChild(tb);
      }

      var row = el('div', 'btnrow');
      var again = el('button', 'btn ghost', 'Reset and run again');
      again.type = 'button';
      again.addEventListener('click', function () {
        answers = []; idx = 0;
        clear(stage);
        startCard.style.display = '';
      });
      row.appendChild(again);
      var wrapUp = el('div', 'card');
      wrapUp.appendChild(row);
      stage.appendChild(wrapUp);

      state.sim = { correct: correct, total: S.items.length, blanks: blanks };
      markDone('sim');
    }
  }

  function markDone(k) {
    state.done[k] = true;
    save();
    refreshNav();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', build);
  } else {
    build();
  }
})();
