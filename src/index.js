export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <title>LUXX — Personal Portfolio</title>

  <meta
    name="description"
    content="LUXX — Personal portfolio, music and audio setup."
  >

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link
    href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;1,500&display=swap"
    rel="stylesheet"
  >

  <style>

    :root {
      --black: #070707;
      --white: #f5f5f2;
      --soft: #b5b5b0;
      --muted: #686865;
      --line: #20201f;
      --card: #0d0d0c;
    }

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      scroll-behavior: smooth;
    }

    body {
      background: var(--black);
      color: var(--white);
      font-family: "DM Sans", sans-serif;
      overflow-x: hidden;
    }

    body::selection {
      background: #f5f5f2;
      color: #070707;
    }

    a {
      color: inherit;
      text-decoration: none;
    }

    .page {
      width: min(1180px, 88%);
      margin: auto;
    }

    /* ---------------- NAV ---------------- */

    nav {
      height: 92px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      border-bottom: 1px solid rgba(255,255,255,.06);
    }

    .brand {
      font-size: 14px;
      font-weight: 700;
      letter-spacing: 6px;
    }

    .nav-right {
      display: flex;
      align-items: center;
      gap: 34px;
    }

    .nav-right a {
      color: var(--muted);
      font-size: 9px;
      letter-spacing: 2px;
      transition: .25s ease;
    }

    .nav-right a:hover {
      color: var(--white);
    }

    .available {
      display: flex;
      align-items: center;
      gap: 8px;

      color: #777;

      font-size: 8px;
      letter-spacing: 2px;
    }

    .available-dot {
      width: 5px;
      height: 5px;
      border-radius: 50%;
      background: #d7d7d2;
    }

    /* ---------------- HERO ---------------- */

    .hero {
      min-height: 82vh;

      display: flex;
      align-items: center;

      padding: 90px 0;
    }

    .hero-inner {
      width: 100%;
    }

    .eyebrow {
      color: var(--muted);

      font-size: 9px;
      font-weight: 500;

      letter-spacing: 4px;

      margin-bottom: 25px;
    }

    .hero h1 {
      font-size: clamp(82px, 17vw, 205px);

      line-height: .78;

      font-weight: 600;

      letter-spacing: -9px;
    }

    .hero h1 span {
      color: #4a4a47;
    }

    .hero-bottom {
      display: flex;

      justify-content: space-between;
      align-items: flex-end;

      margin-top: 55px;
    }

    .hero-intro {
      width: min(430px, 100%);

      color: #81817d;

      font-size: 13px;

      line-height: 1.9;
    }

    .hero-scroll {
      color: #4e4e4b;

      font-size: 8px;

      letter-spacing: 3px;
    }

    /* ---------------- SECTION ---------------- */

    section {
      padding: 145px 0;

      border-top: 1px solid var(--line);
    }

    .section-head {
      display: flex;

      justify-content: space-between;
      align-items: flex-start;

      margin-bottom: 65px;
    }

    .section-number {
      color: #4d4d4a;

      font-size: 8px;

      letter-spacing: 3px;
    }

    .section-title {
      font-size: clamp(45px, 7vw, 90px);

      line-height: .9;

      letter-spacing: -4px;

      font-weight: 600;
    }

    /* ---------------- PROFILE ---------------- */

    .profile-grid {
      display: grid;

      grid-template-columns: 1fr 1fr;

      gap: 110px;
    }

    .profile-large {
      font-size: clamp(25px, 3vw, 39px);

      line-height: 1.3;

      font-weight: 500;
    }

    .profile-large span {
      color: #656561;
    }

    .profile-copy {
      color: #858581;

      font-size: 13px;

      line-height: 2;
    }

    .profile-copy p + p {
      margin-top: 24px;
    }

    .quote {
      margin-top: 80px;

      padding: 45px 0;

      border-top: 1px solid var(--line);
      border-bottom: 1px solid var(--line);

      font-family: "Playfair Display", serif;

      font-size: clamp(24px, 4vw, 43px);

      line-height: 1.35;
    }

    .quote small {
      display: block;

      margin-top: 20px;

      color: #4d4d4a;

      font-family: "DM Sans", sans-serif;

      font-size: 8px;

      letter-spacing: 3px;
    }

    /* ---------------- AUDIO SETUP ---------------- */

    .setup-grid {
      display: grid;

      grid-template-columns: repeat(3, 1fr);

      border-top: 1px solid var(--line);
      border-left: 1px solid var(--line);
    }

    .setup-card {
      min-height: 340px;

      padding: 30px;

      position: relative;

      border-right: 1px solid var(--line);
      border-bottom: 1px solid var(--line);

      background:
        linear-gradient(
          145deg,
          rgba(255,255,255,.025),
          transparent 55%
        );

      transition:
        background .3s ease,
        transform .3s ease;
    }

    .setup-card:hover {
      background: #10100f;
      transform: translateY(-3px);
    }

    .setup-index {
      color: #494946;

      font-size: 8px;

      letter-spacing: 3px;
    }

    .setup-category {
      position: absolute;

      left: 30px;
      bottom: 80px;

      color: #555551;

      font-size: 8px;

      letter-spacing: 3px;
    }

    .setup-name {
      position: absolute;

      left: 30px;
      bottom: 34px;

      font-size: 23px;

      font-weight: 500;
    }

    /* ---------------- MUSIC ---------------- */

    .music-intro {
      max-width: 520px;

      color: #777773;

      font-size: 13px;

      line-height: 1.9;

      margin-bottom: 60px;
    }

    .platform-list {
      border-top: 1px solid var(--line);
    }

    .platform {
      display: flex;

      justify-content: space-between;
      align-items: center;

      padding: 32px 8px;

      border-bottom: 1px solid var(--line);

      transition:
        padding .3s ease,
        background .3s ease;
    }

    .platform:hover {
      padding-left: 20px;
      padding-right: 20px;

      background: #0c0c0b;
    }

    .platform-left {
      display: flex;
      align-items: baseline;
      gap: 22px;
    }

    .platform-name {
      font-size: 28px;
      font-weight: 500;
    }

    .platform-type {
      color: #555552;

      font-size: 8px;

      letter-spacing: 2px;
    }

    .platform-arrow {
      color: #555552;

      font-size: 17px;
    }

    /* ---------------- PHILOSOPHY ---------------- */

    .philosophy {
      min-height: 75vh;

      display: flex;

      align-items: center;
    }

    .philosophy-inner {
      width: 100%;
    }

    .philosophy-label {
      color: #4e4e4b;

      font-size: 8px;

      letter-spacing: 4px;

      margin-bottom: 35px;
    }

    .philosophy h2 {
      max-width: 950px;

      font-family: "Playfair Display", serif;

      font-size: clamp(48px, 8vw, 105px);

      font-weight: 500;

      line-height: 1.02;

      letter-spacing: -3px;
    }

    .philosophy h2 em {
      color: #555552;
    }

    /* ---------------- FOOTER ---------------- */

    footer {
      padding: 30px 0 45px;

      border-top: 1px solid var(--line);

      display: flex;

      justify-content: space-between;

      color: #464643;

      font-size: 8px;

      letter-spacing: 2px;
    }

    /* ---------------- MOBILE ---------------- */

    @media (max-width: 720px) {

      .page {
        width: 88%;
      }

      nav {
        height: 76px;
      }

      .nav-right {
        gap: 14px;
      }

      .available {
        display: none;
      }

      .nav-right a {
        font-size: 7px;
      }

      .hero {
        min-height: 70vh;

        padding: 70px 0;
      }

      .hero h1 {
        font-size: 25vw;

        letter-spacing: -5px;
      }

      .hero-bottom {
        display: block;

        margin-top: 40px;
      }

      .hero-scroll {
        margin-top: 30px;
      }

      section {
        padding: 95px 0;
      }

      .section-head {
        margin-bottom: 45px;
      }

      .profile-grid {
        grid-template-columns: 1fr;

        gap: 35px;
      }

      .quote {
        margin-top: 55px;
      }

      .setup-grid {
        grid-template-columns: 1fr;
      }

      .setup-card {
        min-height: 250px;
      }

      .platform-left {
        gap: 10px;
      }

      .platform-name {
        font-size: 21px;
      }

      .platform-type {
        display: none;
      }

      .philosophy {
        min-height: 60vh;
      }

      .philosophy h2 {
        letter-spacing: -1.5px;
      }

      footer {
        flex-direction: column;
        gap: 14px;
      }
    }

  </style>
</head>

<body>

<div class="page">

  <!-- NAVIGATION -->

  <nav>

    <div class="brand">
      LUXX
    </div>

    <div class="nav-right">

      <div class="available">
        <div class="available-dot"></div>
        PERSONAL AUDIO
      </div>

      <a href="#profile">
        PROFILE
      </a>

      <a href="#setup">
        SETUP
      </a>

      <a href="#music">
        MUSIC
      </a>

    </div>

  </nav>


  <!-- HERO -->

  <header class="hero">

    <div class="hero-inner">

      <div class="eyebrow">
        PERSONAL PORTFOLIO · 2026
      </div>

      <h1>
        LU<span>XX</span>
      </h1>

      <div class="hero-bottom">

        <p class="hero-intro">
          Music, sound and the pursuit of a better
          listening experience. A personal archive of
          what I listen to and the gear I use.
        </p>

        <div class="hero-scroll">
          SCROLL TO EXPLORE ↓
        </div>

      </div>

    </div>

  </header>


  <!-- PROFILE -->

  <section id="profile">

    <div class="section-head">

      <div class="section-number">
        01 / PROFILE
      </div>

    </div>

    <div class="profile-grid">

      <div class="profile-large">

        I listen to music
        <span>carefully.</span>

        <br><br>

        Not just for the sound,
        but for everything
        it makes me feel.

      </div>


      <div class="profile-copy">

        <p>
          Welcome to LUXX — a small personal
          space built around music and audio.
        </p>

        <p>
          I enjoy discovering different artists,
          exploring streaming platforms and
          experimenting with personal audio gear.
        </p>

        <p>
          The goal is simple:
          <strong>less noise, better music.</strong>
        </p>

      </div>

    </div>


    <div class="quote">

      “Music is the end game.”

      <small>
        LUXX · PERSONAL AUDIO
      </small>

    </div>

  </section>


  <!-- SETUP -->

  <section id="setup">

    <div class="section-head">

      <div>

        <div class="section-number">
          02 / AUDIO
        </div>

        <h2 class="section-title">
          MY<br>
          SETUP
        </h2>

      </div>

    </div>


    <div class="setup-grid">


      <article class="setup-card">

        <div class="setup-index">
          01
        </div>

        <div class="setup-category">
          IN-EAR MONITOR
        </div>

        <div class="setup-name">
          Kiwi Ears Belle
        </div>

      </article>


      <article class="setup-card">

        <div class="setup-index">
          02
        </div>

        <div class="setup-category">
          USB DAC
        </div>

        <div class="setup-name">
          JM7
        </div>

      </article>


      <article class="setup-card">

        <div class="setup-index">
          03
        </div>

        <div class="setup-category">
          MUSIC PLAYER
        </div>

        <div class="setup-name">
          UAPP
        </div>

      </article>


    </div>

  </section>


  <!-- MUSIC -->

  <section id="music">

    <div class="section-head">

      <div>

        <div class="section-number">
          03 / MUSIC
        </div>

        <h2 class="section-title">
          WHERE I<br>
          LISTEN
        </h2>

      </div>

    </div>


    <p class="music-intro">

      Different platforms, different libraries,
      same reason — finding music worth listening to.

    </p>


    <div class="platform-list">


      <a
        class="platform"
        href="https://tidal.com/"
        target="_blank"
        rel="noopener noreferrer"
      >

        <div class="platform-left">

          <div class="platform-name">
            TIDAL
          </div>

          <div class="platform-type">
            HIGH FIDELITY STREAMING
          </div>

        </div>

        <div class="platform-arrow">
          ↗
        </div>

      </a>


      <a
        class="platform"
        href="https://www.qobuz.com/"
        target="_blank"
        rel="noopener noreferrer"
      >

        <div class="platform-left">

          <div class="platform-name">
            QOBUZ
          </div>

          <div class="platform-type">
            HI-RES MUSIC
          </div>

        </div>

        <div class="platform-arrow">
          ↗
        </div>

      </a>


      <a
        class="platform"
        href="https://open.spotify.com/"
        target="_blank"
        rel="noopener noreferrer"
      >

        <div class="platform-left">

          <div class="platform-name">
            SPOTIFY
          </div>

          <div class="platform-type">
            EVERYDAY LISTENING
          </div>

        </div>

        <div class="platform-arrow">
          ↗
        </div>

      </a>


    </div>

  </section>


  <!-- PHILOSOPHY -->

  <section class="philosophy">

    <div class="philosophy-inner">

      <div class="philosophy-label">
        04 / PHILOSOPHY
      </div>

      <h2>
        Find the music.
        <em>Forget the noise.</em>
      </h2>

    </div>

  </section>


  <!-- FOOTER -->

  <footer>

    <div>
      LUXX
    </div>

    <div>
      KIWI EARS BELLE · JM7 · UAPP
    </div>

    <div>
      © 2026
    </div>

  </footer>

</div>

</body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=UTF-8"
      }
    });
  }
};
