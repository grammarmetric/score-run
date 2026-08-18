/* ─────────────────────────────────────────────────────────────
   Score run — checkpoint proctor
   The questions live in the official PDFs on the Drive. This page
   supplies the three things the PDFs do not: exam timing, a digital
   answer sheet, and scoring against the key.

   Deliberately plain. A checkpoint is the one session where the
   game layer is entirely absent — that is the point of it.
   ───────────────────────────────────────────────────────────── */
(function () {
  'use strict';

  var P = window.PROCTOR;
  if (!P) { return; }

  var KEY = 'scorerun:proctor:' + P.id;
  var LETTERS = ['A', 'B', 'C', 'D'];
  var state = load();

  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) { return JSON.parse(raw); }
    } catch (e) { /* private mode */ }
    return { answers: {}, keys: {}, done: {} };
  }
  function save() { try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (e) {} }

  function el(t, c, x) { var n = document.createElement(t); if (c) { n.className = c; } if (x !== undefined && x !== null) { n.textContent = x; } return n; }
  function html(t, c, m) { var n = document.createElement(t); if (c) { n.className = c; } if (m) { n.innerHTML = m; } return n; }
  function mmss(s) { var m = Math.floor(s / 60), r = s % 60; return m + ':' + (r < 10 ? '0' : '') + r; }

  var root = document.getElementById('lesson');

  function build() {
    document.documentElement.setAttribute('data-lead', 'yellow');

    var bar = el('div', 'bar');
    var back = el('a', 'back', '← All lessons');
    back.href = '../lessons.html';
    bar.appendChild(back);
    bar.appendChild(el('div', 'bar-sp'));
    var t = el('a', 'back', 'Teacher sheet');
    t.href = '../teacher/' + P.id + '.html';
    bar.appendChild(t);
    root.appendChild(bar);

    var head = el('div', 'head');
    head.appendChild(el('span', 'eyebrow', 'Week ' + P.week + ' · session ' + P.session + ' · ' + P.domain));
    head.appendChild(el('h1', null, P.title));
    head.appendChild(el('p', 'sub', P.sub));
    root.appendChild(head);

    var intro = el('div', 'card brief');
    intro.appendChild(el('h3', null, 'Before you start'));
    intro.appendChild(html('p', 'plain',
      'The questions are in the printed paper — this page is the clock and the answer sheet. ' +
      'Phone away. Once a module starts, it runs to the end.'));
    var ul = el('ul', 'ticks');
    P.modules.forEach(function (m) {
      ul.appendChild(el('li', null, m.name + ' — ' + m.questions + ' questions in ' + m.minutes + ' minutes'));
    });
    ul.appendChild(el('li', null, 'No penalty for a wrong answer. Every question gets a mark, always.'));
    intro.appendChild(ul);
    root.appendChild(intro);

    P.modules.forEach(function (m, mi) { root.appendChild(moduleCard(m, mi)); });
    root.appendChild(scoreCard());
  }

  function moduleCard(m, mi) {
    var card = el('div', 'card');
    var tmr = null, left = m.minutes * 60, running = false;

    var qh = el('div', 'qhead');
    qh.appendChild(el('h3', null, m.name));
    qh.appendChild(el('span', 'qcount', m.questions + ' questions · ' + m.minutes + ' minutes'));
    card.appendChild(qh);

    var hud = el('div', 'hud');
    var g = el('div', 'gauge live');
    var gv = el('div', 'gv', mmss(left));
    g.appendChild(gv);
    g.appendChild(el('div', 'gl', 'Time remaining'));
    hud.appendChild(g);
    card.appendChild(hud);

    var barWrap = el('div', 'timerbar');
    var barFill = el('div', 'timerfill');
    barWrap.appendChild(barFill);
    card.appendChild(barWrap);

    var row = el('div', 'btnrow');
    var start = el('button', 'btn', 'Start ' + m.name.toLowerCase());
    start.type = 'button';
    var stop = el('button', 'btn ghost', 'Stop the clock');
    stop.type = 'button';
    stop.disabled = true;
    row.appendChild(start);
    row.appendChild(stop);
    card.appendChild(row);

    start.addEventListener('click', function () {
      if (running) { return; }
      running = true;
      start.disabled = true;
      stop.disabled = false;
      tmr = setInterval(function () {
        left--;
        gv.textContent = mmss(Math.max(0, left));
        barFill.style.width = Math.max(0, (left / (m.minutes * 60)) * 100) + '%';
        if (left <= 300) { barFill.classList.add('low'); g.classList.add('warn'); }
        if (left <= 0) {
          clearInterval(tmr); tmr = null; running = false;
          stop.disabled = true;
          gv.textContent = 'Time';
          alert(m.name + ' — time is up. Pencils down.');
        }
      }, 1000);
    });
    stop.addEventListener('click', function () {
      if (tmr) { clearInterval(tmr); tmr = null; }
      running = false;
      stop.disabled = true;
      start.disabled = false;
      start.textContent = 'Resume ' + m.name.toLowerCase();
    });

    /* answer sheet */
    card.appendChild(el('h4', null, 'Answer sheet'));
    var grid = el('div', 'sheet');
    for (var q = 1; q <= m.questions; q++) {
      grid.appendChild(sheetRow(mi, q));
    }
    card.appendChild(grid);
    return card;
  }

  function sheetRow(mi, q) {
    var row = el('div', 'srow');
    row.appendChild(el('span', 'sn', String(q)));
    var mk = 'm' + mi;
    LETTERS.forEach(function (L, li) {
      var b = el('button', 'sbtn', L);
      b.type = 'button';
      b.setAttribute('aria-label', 'Question ' + q + ' option ' + L);
      if (state.answers[mk] && state.answers[mk][q] === li) { b.classList.add('on'); }
      b.addEventListener('click', function () {
        state.answers[mk] = state.answers[mk] || {};
        if (state.answers[mk][q] === li) {
          delete state.answers[mk][q];
          b.classList.remove('on');
        } else {
          state.answers[mk][q] = li;
          Array.prototype.forEach.call(row.querySelectorAll('.sbtn'), function (x) { x.classList.remove('on'); });
          b.classList.add('on');
        }
        save();
        updateBlanks();
      });
      row.appendChild(b);
    });
    return row;
  }

  var blanksEl = null;

  function updateBlanks() {
    if (!blanksEl) { return; }
    var total = 0, filled = 0;
    P.modules.forEach(function (m, mi) {
      total += m.questions;
      var a = state.answers['m' + mi] || {};
      filled += Object.keys(a).length;
    });
    var blanks = total - filled;
    blanksEl.textContent = filled + ' of ' + total + ' answered' + (blanks ? ' · ' + blanks + ' still blank' : ' · nothing left blank');
    blanksEl.className = blanks ? 'blanks warn' : 'blanks';
  }

  function scoreCard() {
    var card = el('div', 'card');
    card.appendChild(el('h3', null, 'Score it'));
    card.appendChild(html('p', null,
      'Type the answer key from the official answers PDF as a single run of letters — for example <em>ABDCA…</em> — one module at a time. ' +
      'Nothing is sent anywhere; the scoring happens in this page.'));

    blanksEl = el('p', 'blanks');
    card.appendChild(blanksEl);

    var inputs = [];
    P.modules.forEach(function (m, mi) {
      var lab = el('label', null, m.name + ' key (' + m.questions + ' letters)');
      lab.setAttribute('for', 'k' + mi);
      var ta = el('textarea');
      ta.id = 'k' + mi;
      ta.rows = 2;
      ta.placeholder = 'e.g. ' + 'ABCD'.repeat(3) + '…';
      ta.value = state.keys['m' + mi] || '';
      ta.addEventListener('input', function () {
        state.keys['m' + mi] = ta.value;
        save();
      });
      var box = el('div', 'tb');
      box.appendChild(lab);
      box.appendChild(ta);
      card.appendChild(box);
      inputs.push(ta);
    });

    var out = el('div', 'stack');
    var row = el('div', 'btnrow');
    var b = el('button', 'btn', 'Work out the raw score');
    b.type = 'button';
    b.addEventListener('click', function () {
      while (out.firstChild) { out.removeChild(out.firstChild); }
      var total = 0, right = 0, blank = 0, wrongList = [];

      P.modules.forEach(function (m, mi) {
        var key = (inputs[mi].value || '').toUpperCase().replace(/[^A-D]/g, '');
        var a = state.answers['m' + mi] || {};
        if (key.length !== m.questions) {
          out.appendChild(warn(m.name + ': the key has ' + key.length + ' letters but the module has ' + m.questions + ' questions. Check it before trusting the score.'));
        }
        for (var q = 1; q <= m.questions; q++) {
          total++;
          var given = a[q];
          if (given === undefined) { blank++; continue; }
          var want = LETTERS.indexOf(key[q - 1]);
          if (want === -1) { continue; }
          if (given === want) { right++; }
          else { wrongList.push(m.name + ' Q' + q + ' — you put ' + LETTERS[given] + ', key says ' + key[q - 1]); }
        }
      });

      var res = el('div', 'result');
      res.appendChild(el('div', 'bigscore', right + ' / ' + total));
      var l = Math.round((right / total) * 100) + '% correct';
      if (blank) { l += ' · ' + blank + ' blank'; }
      res.appendChild(el('p', null, l));
      res.appendChild(html('p', null,
        'Now convert this raw score using the conversion table at the back of the answers PDF — that gives the scaled section score out of 800.'));
      out.appendChild(res);

      if (blank) { out.appendChild(warn(blank + ' question' + (blank === 1 ? '' : 's') + ' left blank. On the real exam that is points thrown away — there is no penalty for a wrong answer.')); }

      if (wrongList.length) {
        var lg = el('div', 'errlog');
        wrongList.forEach(function (w) {
          var r = el('div', 'errrow');
          r.appendChild(el('span', 'et', w));
          lg.appendChild(r);
        });
        var h = el('div', 'card');
        h.appendChild(el('h4', null, 'Every question to review'));
        h.appendChild(el('p', null, 'Work through these against the explanations PDF. Tally them by domain, not by question number — the shape of the tally is what sets the next three weeks.'));
        h.appendChild(lg);
        out.appendChild(h);
      }
    });
    row.appendChild(b);
    card.appendChild(row);
    card.appendChild(out);
    updateBlanks();
    return card;
  }

  function warn(msg) {
    var n = el('div', 'note');
    n.appendChild(el('p', null, msg));
    return n;
  }

  if (document.readyState === 'loading') { document.addEventListener('DOMContentLoaded', build); }
  else { build(); }
})();
