/* ============================================
   PORTFOLIO APP
   ============================================ */
(function () {
  'use strict';

  // State
  let currentPreview = null; // { monthIdx, dateIdx, fileIdx } or { section, entryIdx, fileIdx }
  let mobileNavOpen = false;

  // Icons (inline SVG paths)
  const ICONS = {
    code: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    terminal: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="4 17 10 11 4 5"/><line x1="12" y1="19" x2="20" y2="19"/></svg>',
    layers: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
    'bar-chart': '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/></svg>',
    award: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
    book: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>',
    server: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
    sun: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>',
    moon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>',
    menu: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/></svg>'
  };

  const MONTH_ICONS = {
    '2023-05': 'code',
    '2023-06': 'terminal',
    '2023-07': 'layers',
    '2023-08': 'bar-chart',
    '2023-09': 'award'
  };

  // ---- INIT ----
  document.addEventListener('DOMContentLoaded', init);

  function init() {
    initTheme();
    renderNav();
    renderHero();
    renderTimeline();
    renderHomework();
    renderAdvanced();
    initPreviewPanel();
    initScrollObserver();
    initMobileNav();
    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
  }

  // ---- THEME ----
  function initTheme() {
    const saved = localStorage.getItem('portfolio-theme');
    if (saved) {
      document.documentElement.setAttribute('data-theme', saved);
    }
    const btn = document.getElementById('theme-toggle');
    btn.innerHTML = getThemeIcon();
    btn.addEventListener('click', toggleTheme);
  }

  function toggleTheme() {
    const html = document.documentElement;
    const current = html.getAttribute('data-theme');
    const next = current === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', next);
    localStorage.setItem('portfolio-theme', next);
    document.getElementById('theme-toggle').innerHTML = getThemeIcon();
  }

  function getThemeIcon() {
    const isDark = document.documentElement.getAttribute('data-theme') !== 'light';
    return isDark ? ICONS.sun : ICONS.moon;
  }

  // ---- NAVIGATION ----
  function renderNav() {
    const nav = document.getElementById('month-nav');
    const data = PORTFOLIO_DATA;
    let html = '';

    data.months.forEach(function (m) {
      const label = m.name.replace('2023년 ', '').replace('2023 ', '');
      html += '<button class="nav-tab" data-target="month-' + m.id + '" style="--accent-color:' + m.color + '">' + label + '</button>';
    });
    html += '<button class="nav-tab" data-target="homework" style="--accent-color:' + data.homework.color + '">과제</button>';
    html += '<button class="nav-tab" data-target="advanced" style="--accent-color:' + data.advancedProjects.color + '">프로젝트</button>';

    nav.innerHTML = html;

    nav.addEventListener('click', function (e) {
      var tab = e.target.closest('.nav-tab');
      if (!tab) return;
      var target = tab.getAttribute('data-target');
      scrollToSection(target);
    });
  }

  function scrollToSection(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var offset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 60;
    var top = el.getBoundingClientRect().top + window.scrollY - offset - 16;
    window.scrollTo({ top: top, behavior: 'smooth' });
  }

  function handleHashChange() {
    var hash = window.location.hash.slice(1);
    if (!hash) return;
    setTimeout(function () { scrollToSection(hash); }, 100);
  }

  function initMobileNav() {
    var toggleBtn = document.getElementById('mobile-nav-toggle');
    var mobileNav = document.getElementById('mobile-nav');
    if (!toggleBtn || !mobileNav) return;
    toggleBtn.innerHTML = ICONS.menu;

    // Clone nav tabs into mobile nav
    var data = PORTFOLIO_DATA;
    var html = '';
    data.months.forEach(function (m) {
      var label = m.name.replace('2023년 ', '').replace('2023 ', '');
      html += '<button class="nav-tab" data-target="month-' + m.id + '" style="--accent-color:' + m.color + '">' + label + '</button>';
    });
    html += '<button class="nav-tab" data-target="homework" style="--accent-color:' + data.homework.color + '">과제</button>';
    html += '<button class="nav-tab" data-target="advanced" style="--accent-color:' + data.advancedProjects.color + '">프로젝트</button>';
    mobileNav.innerHTML = html;

    toggleBtn.addEventListener('click', function () {
      mobileNavOpen = !mobileNavOpen;
      mobileNav.classList.toggle('show', mobileNavOpen);
    });

    mobileNav.addEventListener('click', function (e) {
      var tab = e.target.closest('.nav-tab');
      if (!tab) return;
      scrollToSection(tab.getAttribute('data-target'));
      mobileNavOpen = false;
      mobileNav.classList.remove('show');
    });
  }

  // ---- HERO ----
  function renderHero() {
    var data = PORTFOLIO_DATA;

    // Stats
    var statsEl = document.getElementById('hero-stats');
    statsEl.innerHTML =
      '<div class="stat-item"><div class="stat-number">' + data.meta.totalMonths + '</div><div class="stat-label">개월</div></div>' +
      '<div class="stat-item"><div class="stat-number">' + data.meta.totalDays + '</div><div class="stat-label">학습일</div></div>' +
      '<div class="stat-item"><div class="stat-number">' + data.meta.totalFiles + '</div><div class="stat-label">파일</div></div>';

    // Month cards
    var cardsEl = document.getElementById('month-cards');
    var html = '';
    data.months.forEach(function (m) {
      var dateCount = m.dates.length;
      var fileCount = 0;
      m.dates.forEach(function (d) { fileCount += d.files.length; });

      html += '<div class="month-card" style="--card-color:' + m.color + '" onclick="location.hash=\'month-' + m.id + '\'">' +
        '<div class="month-card-name">' + m.name + '</div>' +
        '<div class="month-card-theme">' + m.theme + '</div>' +
        '<div class="month-card-stat"><strong>' + dateCount + '</strong>일 / <strong>' + fileCount + '</strong>파일</div>' +
        '</div>';
    });
    cardsEl.innerHTML = html;
  }

  // ---- TIMELINE ----
  function renderTimeline() {
    var container = document.getElementById('timeline');
    var data = PORTFOLIO_DATA;
    var html = '';

    data.months.forEach(function (month, mi) {
      html += '<section class="month-section" id="month-' + month.id + '" style="--month-color:' + month.color + '">';

      // Month header
      var iconKey = MONTH_ICONS[month.id] || 'code';
      html += '<div class="month-header">';
      html += '<div class="month-icon">' + ICONS[iconKey] + '</div>';
      html += '<div>';
      html += '<div class="month-title">' + month.name + '</div>';
      html += '<div class="month-theme">' + month.theme + '</div>';
      if (month.summary) html += '<div class="month-summary">' + month.summary + '</div>';
      html += '</div></div>';

      // Timeline entries
      html += '<div class="timeline-list">';
      month.dates.forEach(function (entry, di) {
        var isHighlight = entry.highlight ? ' highlight' : '';
        html += '<div class="timeline-entry' + isHighlight + '" id="date-' + entry.date + (di > 0 && month.dates[di - 1].date === entry.date ? '-' + di : '') + '">';
        html += '<div class="timeline-dot"></div>';
        html += '<div class="entry-card">';

        // Date
        html += '<div class="entry-date">' + formatDate(entry.date);
        if (entry.highlight) html += '<span class="highlight-badge">PROJECT</span>';
        html += '</div>';

        // Topic & description
        html += '<div class="entry-topic">' + entry.topic + '</div>';
        if (entry.description) html += '<div class="entry-desc">' + entry.description + '</div>';

        // Tags
        if (entry.tags && entry.tags.length) {
          html += '<div class="entry-tags">';
          entry.tags.forEach(function (t) {
            html += '<span class="tag">' + t + '</span>';
          });
          html += '</div>';
        }

        // Files
        html += '<div class="file-list">';
        entry.files.forEach(function (f, fi) {
          html += '<button class="file-btn" data-folder="' + escapeAttr(entry.folder) + '" data-file="' + escapeAttr(f.name) + '" data-mi="' + mi + '" data-di="' + di + '" data-fi="' + fi + '">' + f.label + '</button>';
        });
        html += '</div>';

        html += '</div></div>'; // entry-card, timeline-entry
      });
      html += '</div>'; // timeline-list

      html += '</section>';
    });

    container.innerHTML = html;
  }

  // ---- HOMEWORK ----
  function renderHomework() {
    var section = document.getElementById('homework');
    var hw = PORTFOLIO_DATA.homework;
    if (!hw || !hw.entries.length) return;

    var html = '<div class="section-header" style="--section-color:' + hw.color + '">';
    html += '<div class="section-icon">' + ICONS.book + '</div>';
    html += '<div class="section-title">' + hw.name + '</div>';
    html += '</div>';

    html += '<div class="project-grid">';
    hw.entries.forEach(function (entry, ei) {
      html += '<div class="project-card" style="--section-color:' + hw.color + '">';
      html += '<div class="project-card-topic">' + entry.topic + '</div>';
      if (entry.description) html += '<div class="project-card-desc">' + entry.description + '</div>';
      if (entry.files && entry.files.length) {
        html += '<div class="file-list">';
        entry.files.forEach(function (f, fi) {
          html += '<button class="file-btn" style="--month-color:' + hw.color + '" data-folder="' + escapeAttr(entry.folder) + '" data-file="' + escapeAttr(f.name) + '" data-section="homework" data-ei="' + ei + '" data-fi="' + fi + '">' + f.label + '</button>';
        });
        html += '</div>';
      }
      html += '</div>';
    });
    html += '</div>';

    section.innerHTML = html;
  }

  // ---- ADVANCED PROJECTS ----
  function renderAdvanced() {
    var section = document.getElementById('advanced');
    var adv = PORTFOLIO_DATA.advancedProjects;
    if (!adv || !adv.entries.length) return;

    var html = '<div class="section-header" style="--section-color:' + adv.color + '">';
    html += '<div class="section-icon">' + ICONS.server + '</div>';
    html += '<div class="section-title">' + adv.name + '</div>';
    html += '</div>';

    html += '<div class="project-grid">';
    adv.entries.forEach(function (entry) {
      html += '<div class="project-card" style="--section-color:' + adv.color + '">';
      html += '<div class="project-card-topic">' + entry.topic + '</div>';
      if (entry.description) html += '<div class="project-card-desc">' + entry.description + '</div>';
      if (entry.note) html += '<div class="project-card-note">' + entry.note + '</div>';
      if (entry.techs && entry.techs.length) {
        html += '<div class="tech-badges">';
        entry.techs.forEach(function (t) {
          html += '<span class="tech-badge">' + t + '</span>';
        });
        html += '</div>';
      }
      html += '</div>';
    });
    html += '</div>';

    section.innerHTML = html;
  }

  // ---- PREVIEW PANEL ----
  function initPreviewPanel() {
    // Delegate file button clicks
    document.addEventListener('click', function (e) {
      var btn = e.target.closest('.file-btn');
      if (!btn) return;
      var folder = btn.getAttribute('data-folder');
      var file = btn.getAttribute('data-file');
      var mi = btn.getAttribute('data-mi');
      var di = btn.getAttribute('data-di');
      var fi = btn.getAttribute('data-fi');
      var sectionType = btn.getAttribute('data-section');
      var ei = btn.getAttribute('data-ei');

      if (sectionType) {
        currentPreview = { section: sectionType, entryIdx: parseInt(ei), fileIdx: parseInt(fi) };
      } else if (mi !== null) {
        currentPreview = { monthIdx: parseInt(mi), dateIdx: parseInt(di), fileIdx: parseInt(fi) };
      }

      openPreview(folder, file);
    });

    document.getElementById('close-preview').addEventListener('click', closePreview);
    document.getElementById('overlay').addEventListener('click', closePreview);
    document.getElementById('prev-file').addEventListener('click', function () { navigateFile(-1); });
    document.getElementById('next-file').addEventListener('click', function () { navigateFile(1); });

    // ESC key
    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape') closePreview();
    });
  }

  function openPreview(folder, fileName) {
    var path = folder + '/' + fileName;
    var encodedPath = encodeURI(path);

    document.getElementById('preview-iframe').src = './' + encodedPath;
    document.getElementById('preview-title').textContent = fileName;
    document.getElementById('preview-path').textContent = path;
    document.getElementById('new-tab-link').href = './' + encodedPath;

    document.body.classList.add('panel-open');
  }

  function closePreview() {
    document.body.classList.remove('panel-open');
    document.getElementById('preview-iframe').src = 'about:blank';
    currentPreview = null;
  }

  function navigateFile(direction) {
    if (!currentPreview) return;

    var files, newIdx;

    if (currentPreview.section) {
      var sectionData = currentPreview.section === 'homework'
        ? PORTFOLIO_DATA.homework
        : PORTFOLIO_DATA.advancedProjects;
      var entry = sectionData.entries[currentPreview.entryIdx];
      if (!entry || !entry.files) return;
      files = entry.files;
      newIdx = currentPreview.fileIdx + direction;
      if (newIdx < 0 || newIdx >= files.length) return;
      currentPreview.fileIdx = newIdx;
      openPreview(entry.folder, files[newIdx].name);
    } else {
      var month = PORTFOLIO_DATA.months[currentPreview.monthIdx];
      var dateEntry = month.dates[currentPreview.dateIdx];
      files = dateEntry.files;
      newIdx = currentPreview.fileIdx + direction;
      if (newIdx < 0 || newIdx >= files.length) return;
      currentPreview.fileIdx = newIdx;
      openPreview(dateEntry.folder, files[newIdx].name);
    }
  }

  // ---- SCROLL OBSERVER ----
  function initScrollObserver() {
    // Animate entries on scroll
    var entries = document.querySelectorAll('.timeline-entry');
    var observer = new IntersectionObserver(function (items) {
      items.forEach(function (item) {
        if (item.isIntersecting) {
          item.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    entries.forEach(function (el) { observer.observe(el); });

    // Highlight active month tab on scroll
    var lastActiveId = null;

    function updateActiveTab() {
      var sections = document.querySelectorAll('.month-section, #homework, #advanced');
      var scrollTop = window.scrollY || document.documentElement.scrollTop;
      var headerOffset = 120;
      var activeId = null;

      for (var i = 0; i < sections.length; i++) {
        var sectionTop = sections[i].offsetTop - headerOffset;
        if (scrollTop >= sectionTop) {
          activeId = sections[i].id;
        }
      }

      // Don't update DOM if nothing changed
      if (activeId === lastActiveId) return;
      lastActiveId = activeId;

      var tabs = document.querySelectorAll('#month-nav .nav-tab, #mobile-nav .nav-tab');
      tabs.forEach(function (tab) {
        var isActive = tab.getAttribute('data-target') === activeId;
        tab.classList.toggle('active', isActive);
      });

      // Auto-scroll the header nav to keep active tab visible
      var activeTab = document.querySelector('#month-nav .nav-tab.active');
      if (activeTab) {
        var nav = document.getElementById('month-nav');
        var tabLeft = activeTab.offsetLeft;
        var tabWidth = activeTab.offsetWidth;
        var navScroll = nav.scrollLeft;
        var navWidth = nav.offsetWidth;
        if (tabLeft < navScroll || tabLeft + tabWidth > navScroll + navWidth) {
          nav.scrollTo({ left: tabLeft - navWidth / 2 + tabWidth / 2, behavior: 'smooth' });
        }
      }
    }

    window.addEventListener('scroll', updateActiveTab, { passive: true });
    updateActiveTab();
  }

  // ---- HELPERS ----
  function formatDate(dateStr) {
    var parts = dateStr.split('-');
    return parts[1] + '/' + parts[2];
  }

  function escapeAttr(str) {
    return str.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  }

})();
