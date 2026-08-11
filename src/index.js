export default {
  async fetch(request) {
    const html = `
<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Audio Setup — Luxx</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500&family=Playfair+Display:wght@400;500&display=swap" rel="stylesheet">

<style>
/* =========================
   RESET
========================= */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #050505;
    color: #f2f2f2;
    font-family: "Inter", sans-serif;
    font-weight: 300;
    overflow-x: hidden;
}


/* =========================
   LAYOUT
========================= */

.page {
    width: 100%;
    min-height: 100vh;
}

.setup-wrapper {
    width: min(1200px, 92%);
    margin: 0 auto;
    display: grid;
    grid-template-columns: 130px 1fr;
    gap: 38px;
    padding: 60px 0 100px;
}


/* =========================
   SIDE LABEL
========================= */

.side-label {
    position: sticky;
    top: 50px;
    align-self: start;
    color: #8b8b8b;
    letter-spacing: 0.16em;
    font-size: 12px;
    line-height: 1.7;
    text-transform: uppercase;
}

.side-number {
    color: #777;
    margin-bottom: 24px;
}

.side-title {
    color: #e7e7e7;
    font-size: 15px;
    letter-spacing: 0.18em;
    line-height: 1.55;
}

.side-line {
    width: 35px;
    height: 1px;
    background: #777;
    margin-top: 36px;
}


/* =========================
   SETUP LIST
========================= */

.setup-list {
    display: flex;
    flex-direction: column;
    gap: 42px;
}


/* =========================
   SETUP CARD
========================= */

.setup-card {
    border: 1px solid #383838;
    background:
        linear-gradient(
            135deg,
            rgba(255,255,255,0.018),
            rgba(255,255,255,0)
        ),
        #080808;

    padding: 38px 38px 40px;

    transition:
        border-color 0.35s ease,
        transform 0.35s ease,
        background 0.35s ease;
}

.setup-card:hover {
    border-color: #5a5a5a;
    transform: translateY(-2px);
    background: #0a0a0a;
}


/* =========================
   CARD HEADER
========================= */

.card-number {
    color: #888;
    font-size: 12px;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    margin-bottom: 28px;
}

.card-title {
    font-family: "Playfair Display", serif;
    font-size: clamp(34px, 4vw, 50px);
    font-weight: 400;
    line-height: 1.05;
    letter-spacing: -0.02em;
    margin-bottom: 30px;
}


/* =========================
   IMAGE FRAME
========================= */

.product-image {
    width: 100%;
    aspect-ratio: 1 / 0.72;

    background: #020202;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;

    position: relative;
}


/*
   Semua gambar masuk ke frame
   dengan ukuran yang konsisten.
*/

.product-image img {
    width: 100%;
    height: 100%;

    object-fit: contain;
    object-position: center;

    display: block;

    /*
       Hindari gambar terlihat terlalu
       memenuhi frame.
    */

    transform: scale(0.90);

    transition:
        transform 0.5s cubic-bezier(.2,.7,.2,1);
}


/* Hover desktop */

.setup-card:hover .product-image img {
    transform: scale(0.94);
}


/* =========================
   INDIVIDUAL IMAGE SCALE
========================= */

/*
   Kalau ada foto tertentu yang objeknya
   terlalu kecil/besar, atur di sini.
*/

.product-image.iem img {
    transform: scale(0.88);
}

.product-image.dac img {
    transform: scale(0.90);
}

.product-image.player img {
    transform: scale(0.82);
}

.setup-card:hover .product-image.iem img {
    transform: scale(0.92);
}

.setup-card:hover .product-image.dac img {
    transform: scale(0.94);
}

.setup-card:hover .product-image.player img {
    transform: scale(0.86);
}


/* =========================
   DESCRIPTION
========================= */

.card-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 22px;

    color: #777;
    font-size: 11px;
    letter-spacing: 0.14em;
    text-transform: uppercase;
}

.card-type {
    color: #aaa;
}

.card-detail {
    color: #666;
}


/* =========================
   MOBILE
========================= */

@media (max-width: 768px) {

    .setup-wrapper {
        width: calc(100% - 24px);

        grid-template-columns: 1fr;

        gap: 25px;

        padding:
            22px
            0
            60px;
    }

    .side-label {
        position: static;

        display: flex;
        align-items: flex-end;
        gap: 16px;

        padding-left: 2px;
    }

    .side-number {
        margin: 0;
    }

    .side-title {
        font-size: 13px;
        line-height: 1.4;
    }

    .side-line {
        display: none;
    }

    .setup-list {
        gap: 28px;
    }

    .setup-card {
        padding: 25px 20px 24px;
    }

    .card-number {
        font-size: 10px;
        margin-bottom: 20px;
    }

    .card-title {
        font-size: clamp(30px, 9vw, 42px);
        margin-bottom: 22px;
    }

    .product-image {
        /*
           Tetap ratio yang sama di mobile.
           Ini penting supaya card tidak berubah
           terlalu jauh dibanding desktop.
        */
        aspect-ratio: 1 / 0.78;
    }

    .product-image img {
        transform: scale(0.88);
    }

    .product-image.iem img {
        transform: scale(0.84);
    }

    .product-image.dac img {
        transform: scale(0.86);
    }

    .product-image.player img {
        transform: scale(0.78);
    }

    /*
       Mobile tidak perlu zoom hover.
    */

    .setup-card:hover {
        transform: none;
    }

    .setup-card:hover .product-image img {
        transform: scale(0.88);
    }

    .setup-card:hover .product-image.iem img {
        transform: scale(0.84);
    }

    .setup-card:hover .product-image.dac img {
        transform: scale(0.86);
    }

    .setup-card:hover .product-image.player img {
        transform: scale(0.78);
    }

    .card-footer {
        margin-top: 17px;
        font-size: 9px;
    }
}


/* =========================
   SMALL PHONE
========================= */

@media (max-width: 430px) {

    .setup-wrapper {
        width: calc(100% - 20px);
        padding-top: 18px;
    }

    .setup-card {
        padding: 23px 16px 20px;
    }

    .card-title {
        font-size: 31px;
    }

    .product-image {
        aspect-ratio: 1 / 0.80;
    }
}
</style>
</head>


<body>

<div class="page">

    <main class="setup-wrapper">

        <!-- =====================
             SIDE LABEL
        ====================== -->

        <aside class="side-label">

            <div class="side-number">
                02
            </div>

            <div class="side-title">
                Audio<br>
                Setup
            </div>

            <div class="side-line"></div>

        </aside>


        <!-- =====================
             PRODUCTS
        ====================== -->

        <section class="setup-list">


            <!-- =====================
                 IEM
            ====================== -->

            <article class="setup-card">

                <div class="card-number">
                    01 &nbsp; IEM
                </div>

                <h2 class="card-title">
                    Kiwi Ears Belle
                </h2>

                <div class="product-image iem">

                    <!-- GANTI FILE INI -->
                    <img
                        src="kiwi-ears-belle.jpg"
                        alt="Kiwi Ears Belle"
                        loading="lazy"
                    >

                </div>

                <div class="card-footer">

                    <span class="card-type">
                        In-Ear Monitor
                    </span>

                    <span class="card-detail">
                        Daily Driver
                    </span>

                </div>

            </article>



            <!-- =====================
                 DAC
            ====================== -->

            <article class="setup-card">

                <div class="card-number">
                    02 &nbsp; DAC
                </div>

                <h2 class="card-title">
                    JM7
                </h2>

                <div class="product-image dac">

                    <!-- GANTI FILE INI -->
                    <img
                        src="jm7.jpg"
                        alt="JM7 DAC"
                        loading="lazy"
                    >

                </div>

                <div class="card-footer">

                    <span class="card-type">
                        USB DAC
                    </span>

                    <span class="card-detail">
                        Portable
                    </span>

                </div>

            </article>



            <!-- =====================
                 PLAYER
            ====================== -->

            <article class="setup-card">

                <div class="card-number">
                    03 &nbsp; PLAYER
                </div>

                <h2 class="card-title">
                    UAPP
                </h2>

                <div class="product-image player">

                    <!-- GANTI FILE INI -->
                    <img
                        src="uapp.jpg"
                        alt="USB Audio Player PRO"
                        loading="lazy"
                    >

                </div>

                <div class="card-footer">

                    <span class="card-type">
                        Music Player
                    </span>

                    <span class="card-detail">
                        Hi-Res
                    </span>

                </div>

            </article>


        </section>

<section id="music" class="row">
  <aside class="row-label">
    <div class="num">03</div><div class="row-title">Music Platforms</div><span class="dash"></span>
  </aside>
  <div class="platforms">
    <div class="platform">
      <span class="logo image-logo"><img src="https://raw.githubusercontent.com/stpdwrld/bahanprof/main/tidal.png" alt="TIDAL"></span><span class="platform-name">TIDAL</span>
      <span class="platform-desc">High Fidelity Streaming.</span><a class="ext" href="https://tidal.com" target="_blank" rel="noopener" aria-label="Open TIDAL"><i></i></a>
    </div>
    <div class="platform">
      <span class="logo image-logo"><img src="https://raw.githubusercontent.com/stpdwrld/bahanprof/main/qobuz.png" alt="Qobuz"></span><span class="platform-name">QOBUZ</span>
      <span class="platform-desc">Hi-Res. Studio Quality.</span><a class="ext" href="https://www.qobuz.com" target="_blank" rel="noopener" aria-label="Open Qobuz"><i></i></a>
    </div>
    <div class="platform">
      <span class="logo image-logo"><img src="https://raw.githubusercontent.com/stpdwrld/bahanprof/main/spotify.png" alt="Spotify"></span><span class="platform-name">SPOTIFY</span>
      <span class="platform-desc">Everyday Listening.</span><a class="ext" href="https://open.spotify.com" target="_blank" rel="noopener" aria-label="Open Spotify"><i></i></a>
    </div>
  </div>
</section>

<section id="roblox" class="row">
  <aside class="row-label">
    <div class="num">04</div><div class="row-title">Roblox</div><span class="dash"></span>
  </aside>
  <div class="roblox-box">
    <div class="roblox-art"></div>
    <div class="roblox-info">
      <div class="roblox-name">LUXXER <span class="badge">✓</span></div>
      <div class="roblox-meta">Roblox Player · Creator</div>
      <div class="roblox-desc">Exploring games, building ideas,<br>and having fun.</div>
      <a class="button" href="https://www.roblox.com/users/" target="_blank" rel="noopener">View Roblox Profile ↗</a>
    </div>
  </div>
</section>

<section id="philosophy" class="quote">
  <aside class="row-label" style="padding-left:3px">
    <div class="num">05</div><div class="row-title">Philosophy</div><span class="dash"></span>
  </aside>
  <div class="quote-content">
    <h2>Find the music.<br><em>Forget the noise.</em></h2>
    <div class="wave"></div>
  </div>
</section>
</main>

<footer class="container">
  <span>LUXX</span>
  <span class="footer-center">KIWI EARS BELLE &nbsp; · &nbsp; JM7 &nbsp; · &nbsp; UAPP</span>
  <span>© 2026</span>
</footer>



</body>
</html>
`;

    return new Response(html, {
      headers: {
        "content-type": "text/html; charset=UTF-8"
      }
    });
  }
};
