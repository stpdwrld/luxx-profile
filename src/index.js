export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>LUXX — Music Is The End Game</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link
  href="https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@400;500;600;700;800&display=swap"
  rel="stylesheet"
>

<style>

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  background: #030508;
  color: #f5f5f5;
  font-family: Inter, sans-serif;
  overflow-x: hidden;
}

body::before {
  content: "";
  position: fixed;
  inset: 0;

  background:
    radial-gradient(
      circle at 80% 10%,
      rgba(0,120,255,.14),
      transparent 30%
    ),
    radial-gradient(
      circle at 10% 70%,
      rgba(0,50,100,.10),
      transparent 35%
    );

  pointer-events: none;
  z-index: -1;
}


/* NAV */

nav {
  position: fixed;

  top: 0;
  left: 0;

  width: 100%;

  padding: 24px 6%;

  display: flex;
  justify-content: space-between;
  align-items: center;

  z-index: 100;

  background: linear-gradient(
    to bottom,
    rgba(3,5,8,.9),
    transparent
  );

  backdrop-filter: blur(8px);
}

.logo {
  font-size: 18px;
  font-weight: 800;
  letter-spacing: 6px;
}

.navlinks {
  display: flex;
  gap: 28px;
}

.navlinks a {
  color: #777;
  text-decoration: none;

  font-size: 9px;
  font-weight: 600;

  letter-spacing: 2px;

  transition: .3s;
}

.navlinks a:hover {
  color: white;
}


/* GENERAL */

section {
  width: 88%;
  max-width: 1200px;

  margin: auto;
}

.label {
  color: #666;

  font-size: 9px;
  letter-spacing: 4px;

  margin-bottom: 18px;
}

.bigtitle {
  font-family: Anton, sans-serif;

  font-size: clamp(
    55px,
    10vw,
    150px
  );

  line-height: .85;

  letter-spacing: 2px;

  text-transform: uppercase;
}


/* HERO */

.hero {
  min-height: 100vh;

  display: flex;
  align-items: center;

  position: relative;

  padding-top: 80px;
}

.hero-content {
  width: 100%;
}

.hero-small {
  color: #888;

  font-size: 10px;

  letter-spacing: 5px;

  margin-bottom: 25px;
}

.hero h1 {
  font-family: Anton, sans-serif;

  font-size: clamp(
    90px,
    20vw,
    260px
  );

  line-height: .75;

  letter-spacing: -3px;

  color: #f5f5f5;
}

.hero h1 span {
  color: #202b38;
  -webkit-text-stroke: 1px #526273;
}

.hero-bottom {
  display: flex;

  justify-content: space-between;
  align-items: end;

  margin-top: 45px;
}

.hero-description {
  max-width: 430px;

  color: #777;

  font-size: 12px;

  line-height: 1.8;
}

.scroll {
  color: #555;

  font-size: 9px;

  letter-spacing: 3px;
}


/* ABOUT */

.about {
  padding: 150px 0;
}

.about-grid {
  display: grid;

  grid-template-columns:
    1fr 1.4fr;

  gap: 80px;

  align-items: start;
}

.about-text {
  color: #888;

  font-size: 14px;

  line-height: 2;
}

.about-text strong {
  color: white;
}


/* QUOTE */

.quote {
  margin-top: 60px;

  padding: 35px 0;

  border-top: 1px solid #18202a;
  border-bottom: 1px solid #18202a;

  font-family: Georgia, serif;

  font-size: clamp(
    24px,
    4vw,
    48px
  );

  line-height: 1.25;

  color: #ddd;
}

.quote span {
  display: block;

  margin-top: 18px;

  font-family: Inter, sans-serif;

  font-size: 8px;

  letter-spacing: 4px;

  color: #555;
}


/* SETUP */

.setup {
  padding: 100px 0;
}

.setup-header {
  display: flex;

  justify-content: space-between;

  align-items: end;

  margin-bottom: 45px;
}

.setup-grid {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 14px;
}

.setup-card {
  min-height: 300px;

  padding: 30px;

  border: 1px solid #17202a;

  background:
    linear-gradient(
      145deg,
      #0b1118,
      #05070a
    );

  position: relative;

  overflow: hidden;

  transition: .4s;
}

.setup-card::after {
  content: "";

  position: absolute;

  width: 150px;
  height: 150px;

  background: rgba(0,130,255,.08);

  filter: blur(70px);

  right: -60px;
  bottom: -60px;
}

.setup-card:hover {
  transform: translateY(-8px);

  border-color: #35485b;
}

.number {
  font-size: 9px;

  color: #4d5c6b;

  letter-spacing: 3px;
}

.setup-card h3 {
  position: absolute;

  left: 30px;
  bottom: 55px;

  font-family: Anton, sans-serif;

  font-size: 38px;

  letter-spacing: 1px;
}

.setup-card p {
  position: absolute;

  left: 30px;
  bottom: 30px;

  color: #666;

  font-size: 9px;

  letter-spacing: 2px;
}


/* MUSIC */

.music {
  padding: 130px 0;
}

.music-list {
  margin-top: 45px;

  border-top: 1px solid #18202a;
}

.music-item {
  display: flex;

  justify-content: space-between;

  align-items: center;

  padding: 30px 5px;

  border-bottom: 1px solid #18202a;

  text-decoration: none;

  color: white;

  transition: .3s;
}

.music-item:hover {
  padding-left: 18px;

  background: rgba(255,255,255,.015);
}

.music-name {
  font-family: Anton, sans-serif;

  font-size: 42px;

  letter-spacing: 1px;
}

.music-desc {
  color: #555;

  font-size: 9px;

  letter-spacing: 2px;
}

.arrow {
  color: #555;

  font-size: 20px;
}


/* END */

.end {
  min-height: 90vh;

  display: flex;

  align-items: center;

  justify-content: center;

  text-align: center;

  position: relative;
}

.end h2 {
  font-family: Anton, sans-serif;

  font-size: clamp(
    60px,
    13vw,
    180px
  );

  line-height: .8;

  letter-spacing: -2px;
}

.end h2 span {
  color: #26313d;
}

.end p {
  margin-top: 35px;

  color: #666;

  font-size: 10px;

  letter-spacing: 4px;
}


/* FOOTER */

footer {
  padding: 35px 6%;

  border-top: 1px solid #111820;

  display: flex;

  justify-content: space-between;

  color: #444;

  font-size: 8px;

  letter-spacing: 3px;
}


/* MOBILE */

@media(max-width: 700px) {

  nav {
    padding: 20px 6%;
  }

  .navlinks {
    gap: 12px;
  }

  .navlinks a {
    font-size: 7px;
  }

  .hero h1 {
    font-size: 25vw;
  }

  .hero-bottom {
    display: block;
  }

  .scroll {
    margin-top: 30px;
  }

  .about {
    padding: 100px 0;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 35px;
  }

  .setup {
    padding: 80px 0;
  }

  .setup-header {
    display: block;
  }

  .setup-grid {
    grid-template-columns: 1fr;
  }

  .setup-card {
    min-height: 240px;
  }

  .music {
    padding: 80px 0;
  }

  .music-name {
    font-size: 28px;
  }

  .music-item {
    gap: 20px;
  }

  footer {
    display: block;
    line-height: 2;
  }

}

</style>

</head>

<body>


<!-- NAV -->

<nav>

  <div class="logo">
    LUXX
  </div>

  <div class="navlinks">

    <a href="#profile">
      PROFILE
    </a>

    <a href="#setup">
      SETUP
    </a>

    <a href="#music">
      MUSIC
    </a>

    <a href="#contact">
      CONTACT
    </a>

  </div>

</nav>


<!-- HERO -->

<section
  class="hero"
  id="profile"
>

  <div class="hero-content">

    <div class="hero-small">
      PERSONAL AUDIO · 2026
    </div>

    <h1>
      LU<span>XX</span>
    </h1>

    <div class="hero-bottom">

      <div class="hero-description">

        A personal space dedicated to music,
        sound and the endless pursuit of
        better listening.

        <br><br>

        No noise.
        Just music.

      </div>

      <div class="scroll">
        SCROLL TO EXPLORE ↓
      </div>

    </div>

  </div>

</section>


<!-- ABOUT -->

<section class="about">

  <div class="label">
    01 / PROFILE
  </div>

  <div class="about-grid">

    <div>

      <div class="bigtitle">
        MUSIC<br>
        FIRST.
      </div>

    </div>

    <div class="about-text">

      <p>

        Welcome to <strong>LUXX</strong>.

        This is a small corner of the internet
        built around one obsession:

        <strong>music.</strong>

      </p>

      <br>

      <p>

        From streaming platforms to dedicated
        audio gear, every part of the setup exists
        for one reason — getting closer to the music.

      </p>

    </div>

  </div>


  <div class="quote">

    “Music is the end game.”

    <span>
      LUXX · PERSONAL AUDIO
    </span>

  </div>

</section>


<!-- SETUP -->

<section
  class="setup"
  id="setup"
>

  <div class="setup-header">

    <div>

      <div class="label">
        02 / END GAME
      </div>

      <div class="bigtitle">
        THE<br>
        SETUP
      </div>

    </div>

  </div>


  <div class="setup-grid">


    <div class="setup-card">

      <div class="number">
        01 / IEM
      </div>

      <h3>
        KIWI EARS
      </h3>

      <p>
        BELLE
      </p>

    </div>


    <div class="setup-card">

      <div class="number">
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

      <div class="number">
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

<section
  class="music"
  id="music"
>

  <div class="label">
    03 / MUSIC SOURCES
  </div>

  <div class="bigtitle">
    WHAT<br>
    I LISTEN.
  </div>


  <div class="music-list">


    <a
      class="music-item"
      href="https://tidal.com/"
      target="_blank"
    >

      <div>

        <div class="music-name">
          TIDAL
        </div>

        <div class="music-desc">
          LOSSLESS · HIGH FIDELITY
        </div>

      </div>

      <div class="arrow">
        ↗
      </div>

    </a>


    <a
      class="music-item"
      href="https://www.qobuz.com/"
      target="_blank"
    >

      <div>

        <div class="music-name">
          QOBUZ
        </div>

        <div class="music-desc">
          HI-RES · STUDIO QUALITY
        </div>

      </div>

      <div class="arrow">
        ↗
      </div>

    </a>


    <a
      class="music-item"
      href="https://open.spotify.com/"
      target="_blank"
    >

      <div>

        <div class="music-name">
          SPOTIFY
        </div>

        <div class="music-desc">
          DAILY LISTENING
        </div>

      </div>

      <div class="arrow">
        ↗
      </div>

    </a>


  </div>

</section>


<!-- END -->

<section
  class="end"
  id="contact"
>

  <div>

    <div class="label">
      04 / CONTACT
    </div>

    <h2>
      KEEP<br>
      <span>LISTENING.</span>
    </h2>

    <p>
      MUSIC · SOUND · OBSESSION
    </p>

  </div>

</section>


<!-- FOOTER -->

<footer>

  <div>
    LUXX
  </div>

  <div>
    KIWI EARS BELLE × JM7 × UAPP
  </div>

  <div>
    © 2026
  </div>

</footer>


</body>
</html>`;

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=UTF-8"
      }
    });
  }
};
