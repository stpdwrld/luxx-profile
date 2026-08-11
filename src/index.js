export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>LUXX — Audiophile</title>

<meta
  name="description"
  content="LUXX — Music is the end game."
>

<style>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:ital,wght@400;500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;

  background:
    radial-gradient(
      circle at 50% 0%,
      rgba(255,255,255,.08),
      transparent 30%
    ),
    radial-gradient(
      circle at 10% 90%,
      rgba(255,255,255,.035),
      transparent 25%
    ),
    #050505;

  color: #f5f5f5;

  font-family: Inter, sans-serif;

  overflow-x: hidden;
}


/* Ambient glow */

body::before {
  content: "";

  position: fixed;

  width: 500px;
  height: 500px;

  background: rgba(255,255,255,.025);

  filter: blur(120px);

  border-radius: 50%;

  top: -250px;
  left: 50%;

  transform: translateX(-50%);

  pointer-events: none;
}


/* MAIN */

.container {

  width: min(900px, 92%);

  margin: auto;

  padding: 70px 0 50px;

}


/* TOP NAV */

.nav {

  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: 80px;

}

.logo {

  font-size: 14px;

  font-weight: 700;

  letter-spacing: 6px;

}

.status {

  font-size: 10px;

  color: #777;

  letter-spacing: 2px;

  display: flex;

  align-items: center;

  gap: 8px;

}

.dot {

  width: 6px;
  height: 6px;

  border-radius: 50%;

  background: #ddd;

  box-shadow: 0 0 10px #fff;

}


/* HERO */

.hero {

  text-align: center;

  margin-bottom: 70px;

}

.avatar {

  width: 96px;
  height: 96px;

  margin: auto;

  border-radius: 50%;

  display: flex;

  align-items: center;
  justify-content: center;

  font-size: 25px;

  font-weight: 700;

  letter-spacing: 5px;

  color: #fff;

  background:
    linear-gradient(
      145deg,
      #242424,
      #080808
    );

  border: 1px solid #333;

  box-shadow:
    0 0 0 8px rgba(255,255,255,.015),
    0 20px 60px rgba(0,0,0,.8);

  margin-bottom: 25px;

}


.hero h1 {

  font-size: clamp(42px, 8vw, 72px);

  letter-spacing: 12px;

  font-weight: 600;

  margin-bottom: 15px;

}


.subtitle {

  color: #777;

  font-size: 11px;

  letter-spacing: 5px;

  text-transform: uppercase;

}


/* QUOTE */

.quote {

  margin: 45px auto 0;

  max-width: 600px;

  font-family:
    "Playfair Display",
    serif;

  font-size: clamp(21px, 4vw, 29px);

  font-style: italic;

  color: #d8d8d8;

  line-height: 1.5;

}

.quote span {

  display: block;

  margin-top: 15px;

  font-family: Inter, sans-serif;

  font-size: 9px;

  font-style: normal;

  letter-spacing: 3px;

  color: #555;

}


/* PLAYER CARD */

.player {

  position: relative;

  background:
    linear-gradient(
      145deg,
      rgba(255,255,255,.075),
      rgba(255,255,255,.025)
    );

  border: 1px solid rgba(255,255,255,.1);

  border-radius: 28px;

  padding: 30px;

  backdrop-filter: blur(20px);

  box-shadow:
    0 30px 80px rgba(0,0,0,.5);

  margin-bottom: 18px;

}


.player-top {

  display: flex;

  justify-content: space-between;

  align-items: center;

  margin-bottom: 28px;

}

.now {

  font-size: 9px;

  letter-spacing: 3px;

  color: #666;

  text-transform: uppercase;

}

.quality {

  border: 1px solid #333;

  border-radius: 50px;

  padding: 7px 12px;

  font-size: 9px;

  color: #aaa;

  letter-spacing: 1px;

}


/* WAVEFORM */

.wave {

  height: 70px;

  display: flex;

  align-items: center;

  justify-content: center;

  gap: 4px;

  margin-bottom: 22px;

}

.bar {

  width: 3px;

  border-radius: 10px;

  background: #aaa;

  animation: wave 1.2s infinite ease-in-out;

}

.bar:nth-child(1){height:18px}
.bar:nth-child(2){height:30px;animation-delay:.1s}
.bar:nth-child(3){height:45px;animation-delay:.2s}
.bar:nth-child(4){height:27px;animation-delay:.3s}
.bar:nth-child(5){height:55px;animation-delay:.15s}
.bar:nth-child(6){height:35px;animation-delay:.25s}
.bar:nth-child(7){height:48px;animation-delay:.35s}
.bar:nth-child(8){height:25px;animation-delay:.1s}
.bar:nth-child(9){height:40px;animation-delay:.2s}
.bar:nth-child(10){height:18px;animation-delay:.3s}
.bar:nth-child(11){height:32px;animation-delay:.15s}
.bar:nth-child(12){height:50px;animation-delay:.25s}
.bar:nth-child(13){height:28px;animation-delay:.35s}

@keyframes wave {

  0%,100% {
    transform: scaleY(.65);
    opacity: .5;
  }

  50% {
    transform: scaleY(1);
    opacity: 1;
  }

}


/* TRACK */

.track {

  display: flex;

  justify-content: space-between;

  align-items: end;

}

.track-name {

  font-size: 17px;

  font-weight: 600;

}

.track-desc {

  margin-top: 7px;

  color: #666;

  font-size: 10px;

  letter-spacing: 1px;

}

.play {

  width: 45px;
  height: 45px;

  border-radius: 50%;

  border: 1px solid #444;

  display: flex;

  align-items: center;

  justify-content: center;

  font-size: 13px;

}


/* GEAR */

.section-title {

  color: #555;

  font-size: 9px;

  letter-spacing: 4px;

  margin: 35px 5px 13px;

  text-transform: uppercase;

}


.gear {

  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 12px;

}


.card {

  padding: 24px;

  border-radius: 20px;

  background: #0d0d0d;

  border: 1px solid #1e1e1e;

  transition: .25s;

}

.card:hover {

  transform: translateY(-4px);

  border-color: #444;

  background: #111;

}

.card small {

  display: block;

  color: #555;

  font-size: 8px;

  letter-spacing: 3px;

  margin-bottom: 12px;

}

.card strong {

  font-size: 14px;

  font-weight: 500;

}


/* SERVICES */

.services {

  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 12px;

}


.service {

  text-decoration: none;

  color: #ddd;

  padding: 20px;

  border-radius: 18px;

  border: 1px solid #1e1e1e;

  background: #0b0b0b;

  transition: .25s;

}

.service:hover {

  background: #151515;

  border-color: #444;

  transform: translateY(-3px);

}

.service span {

  display: block;

  font-size: 8px;

  color: #555;

  letter-spacing: 2px;

  margin-bottom: 8px;

}

.service strong {

  font-size: 14px;

}


/* FOOTER */

footer {

  text-align: center;

  margin-top: 70px;

  color: #444;

  font-size: 9px;

  letter-spacing: 3px;

}


@media(max-width:650px) {

  .container {
    padding-top: 40px;
  }

  .nav {
    margin-bottom: 55px;
  }

  .gear,
  .services {
    grid-template-columns: 1fr;
  }

  .hero h1 {
    letter-spacing: 7px;
  }

  .player {
    padding: 22px;
  }

}

</style>
</head>


<body>

<div class="container">


  <!-- NAV -->

  <div class="nav">

    <div class="logo">
      LX
    </div>

    <div class="status">

      <div class="dot"></div>

      AUDIOPHILE MODE

    </div>

  </div>


  <!-- HERO -->

  <section class="hero">

    <div class="avatar">
      LX
    </div>

    <h1>
      LUXX
    </h1>

    <div class="subtitle">
      Music · Sound · Obsession
    </div>

    <div class="quote">

      “Music is not background.
      It is the destination.”

      <span>
        — LUXX
      </span>

    </div>

  </section>


  <!-- PLAYER -->

  <section class="player">

    <div class="player-top">

      <div class="now">
        Now Listening
      </div>

      <div class="quality">
        HI-RES · LOSSLESS
      </div>

    </div>


    <div class="wave">

      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>

    </div>


    <div class="track">

      <div>

        <div class="track-name">
          Music Is The End Game
        </div>

        <div class="track-desc">
          LUXX · PERSONAL SOUND SYSTEM
        </div>

      </div>

      <div class="play">
        ▶
      </div>

    </div>

  </section>


  <!-- GEAR -->

  <div class="section-title">
    End Game Setup
  </div>


  <section class="gear">

    <div class="card">

      <small>
        IEM
      </small>

      <strong>
        Kiwi Ears Belle
      </strong>

    </div>


    <div class="card">

      <small>
        DAC
      </small>

      <strong>
        JM7
      </strong>

    </div>


    <div class="card">

      <small>
        PLAYER
      </small>

      <strong>
        UAPP
      </strong>

    </div>

  </section>


  <!-- MUSIC -->

  <div class="section-title">
    Music Sources
  </div>


  <section class="services">

    <a
      class="service"
      href="https://tidal.com/"
      target="_blank"
    >

      <span>
        STREAMING
      </span>

      <strong>
        TIDAL
      </strong>

    </a>


    <a
      class="service"
      href="https://www.qobuz.com/"
      target="_blank"
    >

      <span>
        HI-RES
      </span>

      <strong>
        QOBUZ
      </strong>

    </a>


    <a
      class="service"
      href="https://open.spotify.com/"
      target="_blank"
    >

      <span>
        DAILY
      </span>

      <strong>
        SPOTIFY
      </strong>

    </a>

  </section>


  <footer>

    KIWI EARS BELLE × JM7 × UAPP

  </footer>


</div>

</body>
</html>`;


    return new Response(html, {
      headers: {
        "content-type": "text/html;charset=UTF-8"
      }
    });

  }
};
