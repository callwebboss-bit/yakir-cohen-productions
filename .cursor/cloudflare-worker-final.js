// ─────────────────────────────────────────────────────────────
//  Cloudflare Worker – יקיר כהן הפקות  |  גרסה סופית
//  404 handler: מגיש HTML ישירות מה-Edge (אפס latency נוסף)
// ─────────────────────────────────────────────────────────────

// ── HTML מוטבע (inline) ── עדכן בכל שינוי ב-index.html ──────
const ERROR_PAGE_HTML = `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>הקצב השתנה | יקיר כהן הפקות</title>
  <meta name="robots" content="noindex,nofollow">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;700;900&family=Frank+Ruhl+Libre:wght@400;700;900&display=swap" rel="stylesheet">

  <style>
    /* ─── TOKENS ─────────────────────────────────────────── */
    :root {
      --red:         #E31E24;
      --red-dim:     #a31318;
      --black:       #0a0a0a;
      --dark:        #1a1a1a;
      --dark-gray:   #444;
      --mid-gray:    #757575;   /* WCAG AA compliant */
      --light-gray:  #F2F2F2;
      --off-white:   #FAFAFA;
      --white:       #FFFFFF;
      --border:      #E8E8E8;
    }

    /* ─── RESET ──────────────────────────────────────────── */
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      background: var(--white);
      color: var(--black);
      font-family: 'Heebo', sans-serif;
      min-height: 100vh;
      overflow-x: hidden;
      -webkit-font-smoothing: antialiased;
    }

    /* ─── TOP BAR ────────────────────────────────────────── */
    .topbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 22px 48px;
      border-bottom: 1px solid var(--border);
      position: sticky;
      top: 0;
      background: rgba(255,255,255,0.96);
      backdrop-filter: blur(12px);
      z-index: 100;
    }
    .brand {
      font-weight: 900;
      font-size: 1.1rem;
      letter-spacing: 0.06em;
      text-decoration: none;
      color: var(--black);
      font-family: 'Frank Ruhl Libre', serif;
    }
    .brand em { color: var(--red); font-style: normal; }

    .topbar-right {
      display: flex;
      align-items: center;
      gap: 20px;
    }
    /* ─── AVAILABILITY BADGE ─────────────────────────────── */
    .availability-badge {
      display: flex;
      align-items: center;
      gap: 6px;
      font-size: 0.74rem;
      font-weight: 400;
      color: var(--mid-gray);
    }
    .availability-dot {
      width: 7px;
      height: 7px;
      border-radius: 50%;
      background: #bbb;
      flex-shrink: 0;
    }
    .availability-dot.online {
      background: #22c55e;
      box-shadow: 0 0 0 3px #22c55e33;
      animation: pulse 2s infinite;
    }
    @keyframes pulse {
      0%,100% { opacity: 1; }
      50%      { opacity: 0.5; }
    }

    .topbar-link {
      font-size: 0.82rem;
      color: var(--mid-gray);
      text-decoration: none;
      transition: color 0.2s;
    }
    .topbar-link:hover { color: var(--red); }

    /* ─── HERO ───────────────────────────────────────────── */
    .hero {
      max-width: 780px;
      margin: 0 auto;
      padding: 80px 24px 56px;
      text-align: center;
      animation: fadeUp 0.6s ease both;
    }
    @keyframes fadeUp {
      from { opacity: 0; transform: translateY(20px); }
      to   { opacity: 1; transform: translateY(0); }
    }

    .hero-kicker {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      font-size: 0.7rem;
      font-weight: 900;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--red);
      border: 1px solid var(--red);
      padding: 5px 16px;
      margin-bottom: 32px;
    }

    .hero h1 {
      font-family: 'Frank Ruhl Libre', serif;
      font-size: clamp(3rem, 9vw, 6rem);
      font-weight: 900;
      line-height: 1.0;
      letter-spacing: -0.03em;
      margin-bottom: 20px;
    }
    .hero h1 em { color: var(--red); font-style: normal; }

    /* ─── SEASONAL STRIP ─────────────────────────────────── */
    .seasonal-strip {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      font-size: 0.85rem;
      font-weight: 300;
      color: var(--dark-gray);
      background: var(--off-white);
      border: 1px solid var(--border);
      padding: 10px 20px;
      margin-bottom: 36px;
      max-width: 100%;
    }
    .seasonal-strip strong { font-weight: 700; }
    .seasonal-strip a {
      color: var(--red);
      text-decoration: none;
      font-weight: 700;
      white-space: nowrap;
    }
    .seasonal-strip a:hover { text-decoration: underline; }

    /* ─── MICRO-STORY ────────────────────────────────────── */
    .micro-story {
      font-family: 'Frank Ruhl Libre', serif;
      font-weight: 400;
      font-size: 1.1rem;
      color: var(--dark-gray);
      line-height: 1.75;
      max-width: 520px;
      margin: 0 auto 52px;
    }

    /* ─── SEARCH ─────────────────────────────────────────── */
    .search-section {
      max-width: 700px;
      margin: 0 auto 88px;
      animation: fadeUp 0.6s 0.15s ease both;
    }

    .search-field-wrap {
      position: relative;
    }

    .search-icon-svg {
      position: absolute;
      right: 24px;
      top: 50%;
      transform: translateY(-50%);
      color: var(--mid-gray);
      pointer-events: none;
      transition: color 0.2s;
    }
    .search-field-wrap:focus-within .search-icon-svg { color: var(--red); }

    .voice-btn {
      position: absolute;
      left: 20px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      color: var(--mid-gray);
      padding: 4px;
      transition: color 0.2s;
      display: flex;
      align-items: center;
    }
    .voice-btn:hover { color: var(--red); }
    .voice-btn.listening { color: var(--red); animation: pulse 1s infinite; }

    #search-input {
      width: 100%;
      padding: 22px 60px 22px 56px;
      background: var(--light-gray);
      border: none;
      border-bottom: 3px solid var(--black);
      font-family: 'Heebo', sans-serif;
      font-size: 1.2rem;
      font-weight: 700;
      color: var(--black);
      outline: none;
      transition: background 0.3s, border-color 0.3s, box-shadow 0.3s;
      direction: rtl;
    }
    #search-input::placeholder { color: var(--mid-gray); font-weight: 300; }
    #search-input:focus {
      background: var(--white);
      border-bottom-color: var(--red);
      box-shadow: 0 28px 52px rgba(0,0,0,0.07);
    }

    /* ─── DROPDOWN ───────────────────────────────────────── */
    #search-dropdown {
      position: absolute;
      width: 100%;
      top: calc(100% + 2px);
      z-index: 300;
      background: var(--white);
      border: 1px solid var(--border);
      border-top: 2px solid var(--red);
      box-shadow: 0 24px 48px rgba(0,0,0,0.11);
      display: none;
      text-align: right;
      max-height: 460px;
      overflow-y: auto;
    }
    #search-dropdown.open { display: block; }

    /* zero-state chips */
    .zero-state {
      padding: 16px 20px 12px;
      border-bottom: 1px solid var(--border);
    }
    .zero-label {
      font-size: 0.68rem;
      font-weight: 700;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      color: var(--mid-gray);
      display: block;
      margin-bottom: 10px;
    }
    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
    }
    .chip {
      background: var(--off-white);
      border: 1px solid var(--border);
      padding: 5px 13px;
      font-family: 'Heebo', sans-serif;
      font-size: 0.8rem;
      font-weight: 400;
      cursor: pointer;
      color: var(--dark-gray);
      transition: background 0.15s, border-color 0.15s, color 0.15s;
    }
    .chip:hover { background: var(--black); color: var(--white); border-color: var(--black); }

    /* result rows */
    .result-row {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 15px 20px;
      border-bottom: 1px solid var(--border);
      text-decoration: none;
      color: var(--black);
      transition: background 0.15s, padding-right 0.15s;
      gap: 12px;
    }
    .result-row:last-of-type { border-bottom: none; }
    .result-row:hover { background: var(--light-gray); padding-right: 28px; }
    .result-row:hover .result-title { color: var(--red); }

    .result-info { flex: 1; }
    .result-title { font-weight: 700; font-size: 0.95rem; display: block; margin-bottom: 2px; transition: color 0.15s; }
    .result-cat { font-size: 0.74rem; color: var(--mid-gray); font-weight: 300; }
    .result-arrow {
      color: var(--mid-gray);
      flex-shrink: 0;
      transition: color 0.15s, transform 0.15s;
    }
    .result-row:hover .result-arrow { color: var(--red); transform: translateX(-4px); }

    mark { background: #fff3cd; padding: 0 2px; border-radius: 2px; }

    /* WhatsApp fallback row */
    .result-wa {
      padding: 16px 20px;
      background: #fff9f9;
      border-top: 2px solid var(--red);
    }
    .result-wa p { font-size: 0.82rem; color: var(--dark-gray); margin-bottom: 8px; font-weight: 300; }
    .result-wa a {
      color: var(--red);
      font-weight: 700;
      font-size: 0.9rem;
      text-decoration: none;
      display: inline-flex;
      align-items: center;
      gap: 6px;
    }
    .result-wa a:hover { text-decoration: underline; }

    /* ─── SERVICES GRID ──────────────────────────────────── */
    .section-label {
      font-size: 0.68rem;
      font-weight: 900;
      letter-spacing: 0.3em;
      text-transform: uppercase;
      color: var(--mid-gray);
      padding: 0 0 14px;
      max-width: 1020px;
      margin: 0 auto;
      padding-right: 1px;
    }

    .grid-outer {
      max-width: 1020px;
      margin: 0 auto 96px;
      animation: fadeUp 0.6s 0.3s ease both;
    }

    .services-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 1px;
      background: var(--border);
    }

    .service-card {
      background: var(--white);
      padding: 28px 22px 24px;
      text-decoration: none;
      color: var(--black);
      font-weight: 700;
      font-size: 0.95rem;
      transition: background 0.2s, color 0.2s;
      display: flex;
      flex-direction: column;
      align-items: flex-end;
      gap: 10px;
      cursor: pointer;
      border: none;
      font-family: 'Heebo', sans-serif;
      text-align: right;
    }
    .service-card .svc-icon {
      color: var(--mid-gray);
      transition: color 0.2s;
    }
    .service-card .svc-name { line-height: 1.3; }
    .service-card .svc-sub {
      font-size: 0.7rem;
      font-weight: 300;
      color: var(--mid-gray);
      letter-spacing: 0.08em;
      transition: color 0.2s;
    }
    .service-card:hover {
      background: var(--black);
      color: var(--white);
    }
    .service-card:hover .svc-icon { color: var(--red); }
    .service-card:hover .svc-sub { color: #888; }

    /* ─── BONUS ZONE ─────────────────────────────────────── */
    .bonus-zone {
      max-width: 760px;
      margin: 0 auto 96px;
      padding: 40px;
      border: 1px solid var(--border);
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 40px;
      animation: fadeUp 0.6s 0.45s ease both;
    }

    .bonus-block-title {
      font-size: 0.68rem;
      font-weight: 900;
      letter-spacing: 0.25em;
      text-transform: uppercase;
      color: var(--mid-gray);
      display: block;
      margin-bottom: 12px;
    }
    .bonus-block p {
      font-size: 0.9rem;
      color: var(--dark-gray);
      font-weight: 300;
      line-height: 1.6;
      font-style: italic;
      margin-bottom: 0;
    }
    .bonus-block a {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      margin-top: 16px;
      background: var(--light-gray);
      border: 1px solid var(--border);
      padding: 11px 20px;
      font-size: 0.85rem;
      font-weight: 700;
      color: var(--black);
      text-decoration: none;
      transition: background 0.2s, border-color 0.2s, color 0.2s;
    }
    .bonus-block a:hover {
      background: var(--red);
      border-color: var(--red);
      color: var(--white);
    }

    /* ─── CONVERSION ZONE ────────────────────────────────── */
    .conversion-zone {
      background: var(--black);
      color: var(--white);
      padding: 96px 24px;
      text-align: center;
      animation: fadeUp 0.6s 0.5s ease both;
    }
    .reward-tag {
      display: inline-block;
      background: var(--red);
      color: var(--white);
      padding: 4px 18px;
      font-weight: 900;
      font-size: 0.72rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
      margin-bottom: 28px;
    }
    .conversion-zone h2 {
      font-family: 'Frank Ruhl Libre', serif;
      font-size: clamp(2.2rem, 5vw, 3.5rem);
      font-weight: 900;
      line-height: 1.1;
      letter-spacing: -0.02em;
      margin-bottom: 16px;
    }
    .conversion-zone h2 em { color: var(--red); font-style: normal; }
    .conversion-zone p {
      font-size: 1rem;
      color: #888;
      font-weight: 300;
      max-width: 440px;
      margin: 0 auto 36px;
      line-height: 1.7;
    }
    .btn-wa {
      display: inline-flex;
      align-items: center;
      gap: 10px;
      padding: 20px 52px;
      background: var(--white);
      color: var(--black);
      text-decoration: none;
      font-weight: 900;
      font-size: 1rem;
      border: 2px solid var(--white);
      transition: background 0.25s, color 0.25s, border-color 0.25s;
    }
    .btn-wa:hover { background: var(--red); color: var(--white); border-color: var(--red); }

    .secondary-links {
      margin-top: 32px;
      display: flex;
      gap: 28px;
      justify-content: center;
      flex-wrap: wrap;
    }
    .secondary-links a {
      color: #555;
      text-decoration: none;
      font-size: 0.85rem;
      font-weight: 400;
      border-bottom: 1px solid #333;
      padding-bottom: 2px;
      transition: color 0.2s, border-color 0.2s;
    }
    .secondary-links a:hover { color: var(--white); border-color: var(--white); }

    /* ─── FOOTER ─────────────────────────────────────────── */
    footer {
      background: #060606;
      text-align: center;
      padding: 22px;
      font-size: 0.76rem;
      color: #3a3a3a;
    }
    footer a { color: #555; text-decoration: none; }
    footer a:hover { color: var(--red); }

    /* ─── MOBILE ─────────────────────────────────────────── */
    @media (max-width: 900px) {
      .services-grid { grid-template-columns: repeat(2, 1fr); }
      .bonus-zone { grid-template-columns: 1fr; gap: 32px; }
    }
    @media (max-width: 600px) {
      .topbar { padding: 16px 20px; }
      .hero { padding: 52px 20px 40px; }
      .services-grid { grid-template-columns: 1fr 1fr; }
      .service-card { padding: 20px 16px; font-size: 0.88rem; }
      .bonus-zone { padding: 28px 24px; margin-left: 16px; margin-right: 16px; }
      .grid-outer { padding: 0 16px; }
      .section-label { padding-right: 16px; }
    }
  </style>
</head>
<body>

  <!-- ── TOP BAR ─────────────────────────────────────────── -->
  <nav class="topbar">
    <a href="https://www.yakircohen.com/home" class="brand">YAKIR COHEN<em>.</em></a>
    <div class="topbar-right">
      <div class="availability-badge">
        <span class="availability-dot" id="avDot"></span>
        <span id="avText">בודק זמינות...</span>
      </div>
      <a href="https://www.yakircohen.com/home" class="topbar-link">דף הבית ←</a>
    </div>
  </nav>

  <!-- ── HERO ───────────────────────────────────────────── -->
  <section class="hero">
    <div class="hero-kicker">שגיאה 404</div>
    <h1>הקצב<br>השתנה<em>.</em></h1>

    <!-- SEASONAL STRIP -->
    <div class="seasonal-strip" id="seasonal-strip">
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      <span id="seasonal-text">טוען המלצה עונתית...</span>
    </div>

    <!-- MICRO-STORY -->
    <p class="micro-story">
      לפעמים הטעות היא ההתחלה של משהו יפה.<br>
      בדיוק כמו שיר שמתחיל בהיסוס – ומסתיים בהרמוניה.<br>
      בוא נכתוב את ההמשך יחד.
    </p>
  </section>

  <!-- ── SEARCH ──────────────────────────────────────────── -->
  <div class="search-section">
    <div class="search-field-wrap">

      <!-- Search icon SVG -->
      <svg class="search-icon-svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>

      <input type="text" id="search-input" placeholder="חפש שירות, קורס, אולפן..." autocomplete="off" aria-label="חיפוש שירותים" aria-haspopup="listbox">

      <!-- Voice search button -->
      <button class="voice-btn" id="voice-btn" title="חיפוש קולי" aria-label="חיפוש קולי">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 1 0 6 0V5a3 3 0 0 0-3-3Z"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
          <line x1="12" x2="12" y1="19" y2="22"/>
        </svg>
      </button>

      <!-- Dropdown -->
      <div id="search-dropdown" role="listbox" aria-label="תוצאות חיפוש"></div>
    </div>
  </div>

  <!-- ── SERVICES GRID ───────────────────────────────────── -->
  <div class="grid-outer">
    <p class="section-label">השירותים הפופולריים</p>
    <div class="services-grid">

      <a href="https://www.yakircohen.com/studio" class="service-card">
        <svg class="svc-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 1 0 6 0V5a3 3 0 0 0-3-3Z"/>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
          <line x1="12" x2="12" y1="19" y2="22"/>
        </svg>
        <span class="svc-name">אולפן הקלטות</span>
        <span class="svc-sub">Studio</span>
      </a>

      <a href="https://www.yakircohen.com/recording-song-modiin" class="service-card">
        <svg class="svc-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/>
        </svg>
        <span class="svc-name">הקלטת שיר</span>
        <span class="svc-sub">Recording</span>
      </a>

      <a href="https://www.yakircohen.com/dj-events" class="service-card">
        <svg class="svc-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M3 18v-6a9 9 0 0 1 18 0v6"/><path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z"/>
        </svg>
        <span class="svc-name">תקליטן לאירועים</span>
        <span class="svc-sub">DJ Events</span>
      </a>

      <a href="https://www.yakircohen.com/attractions" class="service-card">
        <svg class="svc-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
        </svg>
        <span class="svc-name">אטרקציות</span>
        <span class="svc-sub">Attractions</span>
      </a>

      <a href="https://www.yakircohen.com/cold-fireworks" class="service-card">
        <svg class="svc-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>
        </svg>
        <span class="svc-name">זיקוקים קרים</span>
        <span class="svc-sub">Cold Fireworks</span>
      </a>

      <a href="https://www.yakircohen.com/bar-mitzvah-clip" class="service-card">
        <svg class="svc-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
        </svg>
        <span class="svc-name">קליפ בר מצווה</span>
        <span class="svc-sub">Bar Mitzvah Clip</span>
      </a>

      <a href="https://www.yakircohen.com/professional-voiceover" class="service-card">
        <svg class="svc-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
        </svg>
        <span class="svc-name">קריינות מקצועית</span>
        <span class="svc-sub">Voiceover</span>
      </a>

      <a href="https://www.yakircohen.com/dj-course" class="service-card">
        <svg class="svc-icon" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
          <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="3"/><line x1="12" y1="2" x2="12" y2="5"/><line x1="12" y1="19" x2="12" y2="22"/>
        </svg>
        <span class="svc-name">קורס DJ</span>
        <span class="svc-sub">DJ Course</span>
      </a>

    </div>
  </div>

  <!-- ── BONUS ZONE ──────────────────────────────────────── -->
  <div class="bonus-zone">

    <!-- Micro-story / philosophy block -->
    <div class="bonus-block">
      <span class="bonus-block-title">הפילוסופיה שלנו</span>
      <p>
        "גם בטעות יש לוגיקה – בוא נמצא אותה יחד.<br>
        15 דקות ייעוץ אישי עם יקיר, ללא עלות. זה על הבית."
      </p>
      <a href="https://wa.me/972587555456?text=היי%20יקיר%2C%20הגעתי%20לעמוד%20404%20ואשמח%20לשיחת%20ייעוץ%20אישי%20במתנה" target="_blank" rel="noopener">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        תיאום שיחת ייעוץ (15 דק' במתנה)
      </a>
    </div>

    <!-- Gift / Lead-gen block -->
    <div class="bonus-block">
      <span class="bonus-block-title">מתנה קטנה ממני</span>
      <p>
        מחפש תקליטן? הורד את המדריך החינמי שלי:<br>
        "5 שאלות שחייבים לשאול לפני שבוחרים תקליטן לחתונה".
      </p>
      <a href="https://www.yakircohen.com/pricing-full" target="_blank" rel="noopener">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
        ראה מחירון שירותים
      </a>
    </div>

  </div>

  <!-- ── CONVERSION ZONE ─────────────────────────────────── -->
  <section class="conversion-zone">
    <div class="reward-tag">מתנה לדרך</div>
    <h2>ייעוץ מוזיקלי<br>במתנה<em>.</em></h2>
    <p>הגעת לכאן בטעות? הרווחת 15 דקות ייעוץ אישי עם יקיר – ללא עלות, ללא התחייבות.</p>
    <a href="https://wa.me/972587555456?text=היי%20יקיר%2C%20הגעתי%20לעמוד%20404%20ואשמח%20לשיחת%20ייעוץ%20במתנה%20%F0%9F%8E%B5" class="btn-wa" target="_blank" rel="noopener">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
      דבר ישירות עם יקיר ב-WhatsApp
    </a>
    <div class="secondary-links">
      <a href="https://www.instagram.com/yakircohenproductions/" target="_blank" rel="noopener">אינסטגרם</a>
      <a href="https://www.yakircohen.com/pricing-full">מחירון</a>
      <a href="https://www.yakircohen.com/home">דף הבית</a>
    </div>
  </section>

  <footer>
    © יקיר כהן הפקות &nbsp;·&nbsp; <a href="https://www.instagram.com/yakircohenproductions/" target="_blank">Instagram</a>
  </footer>

  <!-- ── JAVASCRIPT ───────────────────────────────────────── -->
  <script>
  (function () {
    'use strict';

    /* ── 1. CONSTANTS ─────────────────────────────────── */
    const JSON_URL    = 'https://raw.githubusercontent.com/yakir-c/yakircohenprudoctions/main/search-index.json';
    const WA_BASE     = 'https://wa.me/972587555456?text=';
    const WA_CONSULT  = 'היי%20יקיר%2C%20הגעתי%20לעמוד%20404%20ואשמח%20לשיחת%20ייעוץ%20אישית%20במתנה';
    const POPULAR     = ['תקליטן לחתונה', 'אולפן ירושלים', 'זיקוקים קרים', 'הקלטת שיר לאמא'];

    /* ── 2. SEASONAL CONTENT ──────────────────────────── */
    const seasonalMap = [
      { months: [2, 3],    text: 'הקלטת שיר לאמא ליום האם הקרב',          url: '/bride-groom-blessing' },
      { months: [4, 5],    text: 'חבילת חתונת אביב – תקליטן + זיקוקים',   url: '/dj-events' },
      { months: [6, 7, 8], text: 'בר/בת מצווה בקיץ – אולפן + קליפ',       url: '/bar-mitzvah-clip' },
      { months: [9, 10],   text: 'אירועי חגי תשרי – הפקה מלאה',            url: '/attractions' },
      { months: [11, 0, 1],text: 'אירועי סוף שנה וחברה',                    url: '/dj-events' },
    ];

    const month = new Date().getMonth();
    const seasonal = seasonalMap.find(s => s.months.includes(month));
    const seasonalEl = document.getElementById('seasonal-text');
    if (seasonal && seasonalEl) {
      seasonalEl.innerHTML = \`עכשיו פופולרי: <strong>\${seasonal.text}</strong> – <a href="https://www.yakircohen.com\${seasonal.url}">בואו נדבר ←</a>\`;
    } else if (seasonalEl) {
      document.getElementById('seasonal-strip').style.display = 'none';
    }

    /* ── 3. AVAILABILITY TIMER ────────────────────────── */
    (function setAvailability () {
      const hour  = new Date().getHours();
      const avail = hour >= 9 && hour <= 20;
      const dot   = document.getElementById('avDot');
      const text  = document.getElementById('avText');
      if (dot)  dot.classList.toggle('online', avail);
      if (text) text.textContent = avail ? 'זמין עכשיו' : 'חזור ב-9:00';
    })();

    /* ── 4. LOAD SEARCH INDEX ─────────────────────────── */
    let searchIndex = [];
    fetch(JSON_URL)
      .then(r => r.json())
      .then(data => {
        // clean any accidental whitespace from keys
        searchIndex = data.map(item => {
          const clean = {};
          for (const [k, v] of Object.entries(item)) clean[k.trim()] = v;
          return clean;
        });
      })
      .catch(() => { /* silent – search still works with empty index */ });

    /* ── 5. SEARCH UI ─────────────────────────────────── */
    const input    = document.getElementById('search-input');
    const dropdown = document.getElementById('search-dropdown');

    function esc (str) {
      return str.replace(/[.*+?^\${}()|[\\]\\\\]/g, '\\\\$&');
    }
    function hl (text, q) {
      if (!q) return text;
      return text.replace(new RegExp(\`(\${esc(q)})\`, 'gi'), '<mark>$1</mark>');
    }

    function openDropdown (html) {
      dropdown.innerHTML = html;
      dropdown.classList.add('open');
    }
    function closeDropdown () {
      dropdown.classList.remove('open');
      dropdown.innerHTML = '';
    }

    /* zero-state on focus */
    input.addEventListener('focus', () => {
      if (!input.value.trim()) showZeroState();
    });

    function showZeroState () {
      const chips = POPULAR.map(q =>
        \`<button class="chip" data-q="\${q}">\${q}</button>\`
      ).join('');
      openDropdown(\`
        <div class="zero-state">
          <span class="zero-label">חיפושים נפוצים</span>
          <div class="chips">\${chips}</div>
        </div>\`);
    }

    /* chip click */
    dropdown.addEventListener('click', e => {
      const chip = e.target.closest('.chip');
      if (chip) {
        input.value = chip.dataset.q;
        runSearch(chip.dataset.q);
      }
    });

    /* debounced input */
    let timer;
    input.addEventListener('input', () => {
      clearTimeout(timer);
      const val = input.value.trim();
      if (!val) { showZeroState(); return; }
      timer = setTimeout(() => runSearch(val), 200);
    });

    function runSearch (query) {
      const q = query.toLowerCase();
      const results = searchIndex
        .filter(item =>
          (item.title  || '').toLowerCase().includes(q) ||
          (item.description || '').toLowerCase().includes(q) ||
          (item.keywords || []).some(k => k.toLowerCase().includes(q))
        )
        .slice(0, 8);

      const rows = results.map(item => \`
        <a class="result-row" href="\${item.url}" role="option">
          <div class="result-info">
            <span class="result-title">\${hl(item.title, query)}</span>
            <span class="result-cat">\${item.category}</span>
          </div>
          <svg class="result-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </a>\`).join('');

      const waText = encodeURIComponent(\`היי יקיר, חיפשתי "\${query}" באתר ולא מצאתי. אפשר עזרה?\`);
      const waRow = \`
        <div class="result-wa">
          <p>\${results.length === 0 ? \`לא מצאנו תוצאות עבור "\${query}"\` : 'לא מצאת מה שחיפשת?'}</p>
          <a href="\${WA_BASE}\${waText}" target="_blank" rel="noopener">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
            שאל את יקיר ישירות ב-WhatsApp
          </a>
        </div>\`;

      openDropdown(rows + waRow);
    }

    /* close on outside click */
    document.addEventListener('click', e => {
      if (!e.target.closest('.search-section')) closeDropdown();
    });
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeDropdown();
    });

    /* ── 6. VOICE SEARCH ──────────────────────────────── */
    const voiceBtn = document.getElementById('voice-btn');
    const SR = window.SpeechRecognition || window.webkitSpeechRecognition;

    if (SR) {
      const recognition = new SR();
      recognition.lang = 'he-IL';
      recognition.interimResults = false;
      recognition.maxAlternatives = 1;

      voiceBtn.addEventListener('click', () => {
        voiceBtn.classList.add('listening');
        recognition.start();
      });
      recognition.onresult = e => {
        const transcript = e.results[0][0].transcript;
        input.value = transcript;
        runSearch(transcript);
        voiceBtn.classList.remove('listening');
      };
      recognition.onerror  = () => voiceBtn.classList.remove('listening');
      recognition.onend    = () => voiceBtn.classList.remove('listening');
    } else {
      // hide voice btn if not supported
      voiceBtn.style.display = 'none';
    }

  })();
  </script>
</body>
</html>
`;

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request));
});

async function handleRequest(request) {

  // ── 1. נסה לגשת לדף המקורי ──────────────────────────────
  let response;
  try {
    response = await fetch(request);
  } catch (err) {
    // רשת נכשלה לגמרי – החזר 503
    return new Response('Service Unavailable', { status: 503 });
  }

  // ── 2. דף לא נמצא → החזר עמוד 404 מעוצב ─────────────────
  if (response.status === 404) {

    // ─ אנליטיקה שקטה ─────────────────────────────────────
    try {
      const path     = new URL(request.url).pathname;
      const referrer = request.headers.get('Referer') || '';
      const country  = request.cf?.country || '';
      // כאן ניתן לחבר ל-Cloudflare Analytics Engine בעתיד
      console.log(`[404] path=${path} | ref=${referrer} | country=${country}`);
    } catch (_) {}

    return new Response(ERROR_PAGE_HTML, {
      status: 404,
      statusText: 'Not Found',
      headers: {
        'Content-Type':  'text/html;charset=UTF-8',
        'Cache-Control': 'no-store, no-cache',
        'X-Robots-Tag':  'noindex, nofollow',
      }
    });
  }

  // ── 3. כל שאר הבקשות – עבור ישיר ────────────────────────
  return response;
}