export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>LUXX — Personal Audio</title>

<style>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,500;1,500&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #080808;
  color: #f2f2f2;
  font-family: Inter, sans-serif;
}

a {
  color: inherit;
  text-decoration: none;
}

.container {
  width: min(1050px, 88%);
  margin: auto;
}


/* NAV */

nav {
  height: 90px;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo {
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 6px;
}

.nav-links {
  display: flex;
  gap: 28px;
}

.nav-links a {
  color: #666;
  font-size: 10px;
  letter-spacing: 2px;
  transition: .25s;
}

.nav-links a:hover {
  color: #fff;
}


/* HERO */

.hero {
  min-height: 78vh;

  display: flex;
  align-items: center;

  padding: 70px 0;
}

.hero-label {
  color: #666;
  font-size: 9px;
  letter-spacing: 4px;
  margin-bottom: 25px;
}

.hero h1 {
  font-size: clamp(70px, 15vw, 170px);
  line-height: .8;
  letter-spacing: -7px;
  font-weight: 600;
}

.hero h1 span {
  color: #555;
}

.hero-description {
  max-width: 420px;

  margin-top: 42px;

  color: #777;

  font-size: 13px;
  line-height: 1.9;
}


/* SECTION */

section {
  padding: 120px 0;
}

.section-number {
  color: #555;
  font-size: 9px;
  letter-spacing: 4px;
  margin-bottom: 20px;
}

.section-title {
  font-size: clamp(42px, 7vw, 85px);
  line-height: .9;
  letter-spacing: -3px;
  font-weight: 600;
}


/* ABOUT */

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 100px;
}

.about-text {
  color: #888;
  font-size: 14px;
  line-height: 2;
  padding-top: 8px;
}

.quote {
  margin-top: 70px;

  border-top: 1px solid #202020;
  border-bottom: 1px solid #202020;

  padding: 35px 0;

  font-family: "Playfair Display", serif;

  font-size: clamp(23px, 4vw, 38px);
  line-height: 1.4;
}

.quote small {
  display: block;

  margin-top: 18px;

  color: #555;

  font-family: Inter, sans-serif;

  font-size: 8px;
  letter-spacing: 3px;
}


/* SETUP */

.setup-grid {
  margin-top: 55px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  border-top: 1px solid #202020;
}

.setup-card {
  padding: 35px 25px;

  border-right: 1px solid #202020;
}

.setup-card:last-child {
  border-right: none;
}

.setup-number {
  color: #555;
  font-size: 9px;
  letter-spacing: 2px;
  margin-bottom: 45px;
}

.setup-card h3 {
  font-size: 20px;
  font-weight: 500;
}

.setup-card p {
  margin-top: 9px;

  color: #555;

  font-size: 9px;
  letter-spacing: 2px;
}


/* MUSIC */

.music-list {
  margin-top: 55px;

  border-top: 1px solid #202020;
}

.music-item {
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 28px 5px;

  border-bottom: 1px solid #202020;

  transition: .25s;
}

.music-item:hover {
  padding-left: 15px;
  padding-right: 15px;
  background: #0d0d0d;
}

.music-name {
  font-size: 25px;
  font-weight: 500;
}

.music-type {
  margin-top: 7px;

  color: #555;

  font-size: 8px;
  letter-spacing: 2px;
}

.arrow {
  color: #555;
  font-size: 18px;
}


/* END */

.end {
  min-height: 65vh;

  display: flex;
  align-items: center;
}

.end-text {
  font-size: clamp(45px, 8vw, 100px);
  line-height: .95;
  letter-spacing: -4px;
}

.end-text span {
  color: #555;
}


/* FOOTER */

footer {
  border-top: 1px solid #181818;

  padding: 25px 0 40px;

  display: flex;
  justify-content: space-between;

  color: #444;

  font-size: 8px;
  letter-spacing: 2px;
}


/* MOBILE */

@media (max-width: 700px) {

  .container {
    width: 88%;
  }

  nav {
    height: 75px;
  }

  .nav-links {
    gap: 13px;
  }

  .nav-links a {
    font-size: 7px;
  }

  .hero {
    min-height: 70vh;
  }

  .hero h1 {
    letter-spacing: -4px;
  }

  section {
    padding: 90px 0;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .setup-grid {
    grid-template-columns: 1fr;
  }

  .setup-card {
    border-right: none;
    border-bottom: 1px solid #202020;
    padding: 30px 5px;
  }

  .setup-card:last-child {
    border-bottom: none;
  }

  .setup-number {
    margin-bottom: 25px;
  }

  .music-name {
    font-size: 20px;
  }

  footer {
    gap: 15px;
    flex-direction: column;
  }
}
</style>
</head>

<body>

<div class="container">

<nav>
  <div class="logo">LUXX</div>

  <div class="nav-links">
    <a href="#about">ABOUT</a>
    <a href="#setup">SETUP</a>
    <a href="#music">MUSIC</a>
  </div>
</nav>


<!-- HERO -->

<header class="hero">

  <div>

    <div class="hero-label">
      PERSONAL AUDIO · 2026
    </div>

    <h1>
      L<span>U</span>XX
    </h1>

    <p class="hero-description">
      A quiet space for music, sound,
      and the pursuit of better listening.
    </p>

  </div>

</header>


<!-- ABOUT -->

<section id="about">

  <div class="section-number">
    01 / ABOUT
  </div>

  <div class="about-grid">

    <h2 class="section-title">
      MUSIC<br>
      FIRST.
    </h2>

    <div class="about-text">

      <p>
        Music has always been more than
        background noise.
      </p>

      <br>

      <p>
        Every piece of the setup exists
        for one purpose — to get closer
        to the music itself.
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

  <div class="section-number">
    02 / END GAME SETUP
  </div>

  <h2 class="section-title">
    THE<br>
    CHAIN.
  </h2>

  <div class="setup-grid">

    <div class="setup-card">

      <div class="setup-number">
        01 / IEM
      </div>

      <h3>
        Kiwi Ears Belle
      </h3>

      <p>
        IN-EAR MONITOR
      </p>

    </div>


    <div class="setup-card">

      <div class="setup-number">
        02 / DAC
      </div>

      <h3>
        JM7
      </h3>

      <p>
        USB DAC
      </p>

    </div>


    <div class="setup-card">

      <div class="setup-number">
        03 / PLAYER
      </div>

      <h3>
        UAPP
      </h3>

      <p>
        USB AUDIO PLAYER PRO
      </p>

    </div>

  </div>

</section>


<!-- MUSIC -->

<section id="music">

  <div class="section-number">
    03 / MUSIC
  </div>

  <h2 class="section-title">
    SOURCES.
  </h2>

  <div class="music-list">

    <a
      class="music-item"
      href="https://tidal.com/"
      target="_blank"
      rel="noopener noreferrer"
    >

      <div>
        <div class="music-name">TIDAL</div>

        <div class="music-type">
          LOSSLESS · HIGH FIDELITY
        </div>
      </div>

      <div class="arrow">↗</div>

    </a>


    <a
      class="music-item"
      href="https://www.qobuz.com/"
      target="_blank"
      rel="noopener noreferrer"
    >

      <div>
        <div class="music-name">QOBUZ</div>

        <div class="music-type">
          HI-RES · STUDIO QUALITY
        </div>
      </div>

      <div class="arrow">↗</div>

    </a>


    <a
      class="music-item"
      href="https://open.spotify.com/"
      target="_blank"
      rel="noopener noreferrer"
    >

      <div>
        <div class="music-name">SPOTIFY</div>

        <div class="music-type">
          DAILY LISTENING
        </div>
      </div>

      <div class="arrow">↗</div>

    </a>

  </div>

</section>


<!-- END -->

<section class="end">

  <div>

    <div class="section-number">
      04 / END
    </div>

    <div class="end-text">
      JUST<br>
      <span>LISTEN.</span>
    </div>

  </div>

</section>


<footer>

  <div>LUXX</div>

  <div>
    KIWI EARS BELLE × JM7 × UAPP
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
