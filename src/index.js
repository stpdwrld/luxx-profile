export default {
  async fetch(request) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<meta name="theme-color" content="#050505">
<meta name="description" content="Luxx — personal portfolio, music and audio setup.">

<title>LUXX — Personal Archive</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Playfair+Display:wght@400;500&display=swap" rel="stylesheet">

<style>

/* =========================================================
   RESET
========================================================= */

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
    color: #eeeeee;
    font-family: "Inter", sans-serif;
    font-weight: 300;
    overflow-x: hidden;
}

a {
    color: inherit;
    text-decoration: none;
}

img {
    max-width: 100%;
}

button {
    font: inherit;
}


/* =========================================================
   VARIABLES
========================================================= */

:root {
    --bg: #050505;
    --surface: #080808;
    --surface-2: #0b0b0b;
    --line: #292929;
    --line-light: #3b3b3b;
    --text: #eeeeee;
    --muted: #858585;
    --soft: #b7b7b7;
}


/* =========================================================
   GLOBAL
========================================================= */

.container {
    width: min(1180px, calc(100% - 48px));
    margin: auto;
}

.serif {
    font-family: "Playfair Display", serif;
}

.mono {
    letter-spacing: .16em;
    text-transform: uppercase;
}


/* =========================================================
   TOP BAR
========================================================= */

.topbar {
    width: min(1180px, calc(100% - 48px));
    margin: auto;

    height: 88px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-bottom: 1px solid var(--line);
}

.logo {
    font-size: 15px;
    font-weight: 500;
    letter-spacing: .28em;
}

.top-status {
    display: flex;
    align-items: center;
    gap: 10px;

    color: var(--muted);

    font-size: 10px;
    letter-spacing: .18em;
    text-transform: uppercase;
}

.status-dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #aaa;
}


/* =========================================================
   HERO
========================================================= */

.hero {
    min-height: calc(100vh - 88px);

    display: grid;
    grid-template-columns: 130px 1fr;

    gap: 55px;

    padding:
        100px 0
        120px;
}

.hero-side {
    color: var(--muted);

    font-size: 11px;
    letter-spacing: .18em;
    line-height: 1.7;
    text-transform: uppercase;
}

.hero-side-number {
    margin-bottom: 22px;
}

.hero-side-line {
    width: 34px;
    height: 1px;

    background: #777;

    margin-top: 30px;
}

.hero-main {
    max-width: 850px;
}

.eyebrow {
    color: var(--muted);

    font-size: 11px;
    letter-spacing: .2em;
    text-transform: uppercase;

    margin-bottom: 28px;
}

.hero-title {
    font-family: "Playfair Display", serif;

    font-size: clamp(72px, 12vw, 160px);

    font-weight: 400;
    line-height: .82;

    letter-spacing: -.055em;

    margin-left: -8px;
}

.hero-description {
    max-width: 510px;

    margin-top: 55px;

    color: #a4a4a4;

    font-size: 14px;
    line-height: 1.9;
}

.hero-links {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;

    margin-top: 35px;
}

.hero-link {
    border: 1px solid var(--line-light);

    padding: 11px 15px;

    color: #bdbdbd;

    font-size: 10px;
    letter-spacing: .14em;
    text-transform: uppercase;

    transition: .3s ease;
}

.hero-link:hover {
    border-color: #777;
    color: white;
    background: #0d0d0d;
}


/* =========================================================
   PROFILE
========================================================= */

.profile-section {
    border-top: 1px solid var(--line);

    padding: 100px 0;
}

.section-layout {
    display: grid;

    grid-template-columns: 130px 1fr;

    gap: 55px;
}

.section-index {
    color: var(--muted);

    font-size: 11px;
    letter-spacing: .18em;
    text-transform: uppercase;
}

.section-content {
    max-width: 900px;
}

.section-heading {
    font-family: "Playfair Display", serif;

    font-size: clamp(42px, 6vw, 72px);

    font-weight: 400;

    line-height: 1;

    letter-spacing: -.03em;
}

.profile-grid {
    display: grid;

    grid-template-columns: 280px 1fr;

    gap: 55px;

    margin-top: 55px;
}

.profile-photo {
    width: 100%;
    aspect-ratio: 1;

    overflow: hidden;

    background: #090909;

    border: 1px solid var(--line);
}

.profile-photo img {
    width: 100%;
    height: 100%;

    object-fit: cover;

    display: block;

    filter: grayscale(100%);

    transition: transform .7s ease;
}

.profile-photo:hover img {
    transform: scale(1.035);
}

.profile-text {
    color: #a2a2a2;

    font-size: 14px;
    line-height: 2;
}

.profile-meta {
    display: grid;

    grid-template-columns: repeat(2, minmax(0, 1fr));

    gap: 25px;

    margin-top: 38px;
}

.meta-item {
    border-top: 1px solid var(--line);

    padding-top: 15px;
}

.meta-label {
    display: block;

    color: #656565;

    font-size: 9px;
    letter-spacing: .16em;
    text-transform: uppercase;

    margin-bottom: 8px;
}

.meta-value {
    color: #cfcfcf;

    font-size: 12px;
}


/* =========================================================
   MUSIC
========================================================= */

.music-section {
    border-top: 1px solid var(--line);

    padding: 100px 0;
}

.music-intro {
    display: flex;

    justify-content: space-between;
    align-items: flex-end;

    gap: 30px;

    margin-bottom: 45px;
}

.music-description {
    max-width: 430px;

    color: #777;

    font-size: 12px;
    line-height: 1.8;
}

.platform-grid {
    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 12px;
}

.platform {
    min-height: 190px;

    border: 1px solid var(--line);

    background: var(--surface);

    padding: 25px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    transition:
        transform .35s ease,
        border-color .35s ease,
        background .35s ease;
}

.platform:hover {
    transform: translateY(-3px);

    border-color: #4a4a4a;

    background: var(--surface-2);
}

.platform-top {
    display: flex;

    justify-content: space-between;
}

.platform-number {
    color: #666;

    font-size: 9px;
    letter-spacing: .16em;
}

.platform-symbol {
    color: #888;

    font-size: 16px;
}

.platform-name {
    font-family: "Playfair Display", serif;

    font-size: 32px;

    color: #e9e9e9;
}

.platform-note {
    color: #666;

    font-size: 9px;
    letter-spacing: .13em;
    text-transform: uppercase;
}


/* =========================================================
   AUDIO SETUP
========================================================= */

.audio-section {
    border-top: 1px solid var(--line);

    padding: 100px 0 130px;
}

.audio-layout {
    display: grid;

    grid-template-columns: 130px 1fr;

    gap: 55px;
}

.audio-side {
    color: var(--muted);

    font-size: 11px;
    letter-spacing: .18em;
    line-height: 1.7;

    text-transform: uppercase;
}

.audio-side-line {
    width: 34px;
    height: 1px;

    background: #777;

    margin-top: 30px;
}

.setup-list {
    display: flex;
    flex-direction: column;

    gap: 40px;
}


/* =========================================================
   AUDIO CARD
========================================================= */

.setup-card {
    border: 1px solid var(--line);

    background:
        linear-gradient(
            135deg,
            rgba(255,255,255,.018),
            rgba(255,255,255,0)
        ),
        #080808;

    padding: 38px;

    transition:
        border-color .35s ease,
        transform .35s ease;
}

.setup-card:hover {
    border-color: #484848;

    transform: translateY(-2px);
}

.card-number {
    color: #777;

    font-size: 11px;
    letter-spacing: .2em;

    text-transform: uppercase;

    margin-bottom: 27px;
}

.card-title {
    font-family: "Playfair Display", serif;

    font-size: clamp(40px, 5vw, 62px);

    font-weight: 400;

    line-height: 1;

    letter-spacing: -.025em;

    margin-bottom: 32px;
}


/* =========================================================
   IMPORTANT IMAGE FRAME
========================================================= */

.product-image {
    width: 100%;

    /*
       SEMUA PRODUK MEMPUNYAI FRAME YANG SAMA
    */

    aspect-ratio: 1 / .68;

    background: #020202;

    display: flex;

    align-items: center;
    justify-content: center;

    overflow: hidden;

    position: relative;
}


/*
   Gambar tidak akan gepeng.
   JPG dan PNG sama-sama aman.
*/

.product-image img {
    width: 100%;
    height: 100%;

    object-fit: contain;
    object-position: center;

    display: block;

    transform: scale(.90);

    transition:
        transform .55s cubic-bezier(.2,.7,.2,1);
}


/* INDIVIDUAL SCALE */

.product-image.iem img {
    transform: scale(.88);
}

.product-image.dac img {
    transform: scale(.88);
}

.product-image.player img {
    transform: scale(.78);
}


/* DESKTOP HOVER */

.setup-card:hover .product-image.iem img {
    transform: scale(.92);
}

.setup-card:hover .product-image.dac img {
    transform: scale(.92);
}

.setup-card:hover .product-image.player img {
    transform: scale(.82);
}


/* =========================================================
   IMAGE CAPTION
========================================================= */

.card-footer {
    display: flex;

    justify-content: space-between;
    align-items: center;

    margin-top: 19px;
}

.card-type {
    color: #aaa;

    font-size: 9px;
    letter-spacing: .15em;
    text-transform: uppercase;
}

.card-detail {
    color: #555;

    font-size: 9px;
    letter-spacing: .13em;
    text-transform: uppercase;
}


/* =========================================================
   ROBLOX
========================================================= */

.roblox-section {
    border-top: 1px solid var(--line);

    padding: 100px 0;
}

.roblox-card {
    border: 1px solid var(--line);

    padding: 42px;

    background: #080808;

    display: flex;

    align-items: center;

    justify-content: space-between;

    gap: 40px;
}

.roblox-label {
    color: #777;

    font-size: 10px;
    letter-spacing: .18em;
    text-transform: uppercase;

    margin-bottom: 15px;
}

.roblox-name {
    font-family: "Playfair Display", serif;

    font-size: clamp(42px, 6vw, 70px);

    font-weight: 400;

    line-height: 1;
}

.roblox-id {
    color: #777;

    margin-top: 16px;

    font-size: 11px;
    letter-spacing: .12em;
}

.roblox-button {
    border: 1px solid #444;

    padding: 14px 20px;

    color: #cfcfcf;

    font-size: 9px;

    letter-spacing: .15em;

    text-transform: uppercase;

    transition: .3s ease;
}

.roblox-button:hover {
    background: #eee;
    color: #050505;
}


/* =========================================================
   FOOTER
========================================================= */

footer {
    border-top: 1px solid var(--line);

    padding: 50px 0 70px;
}

.footer-inner {
    display: flex;

    justify-content: space-between;

    align-items: center;

    gap: 30px;
}

.footer-logo {
    font-size: 12px;
    letter-spacing: .25em;
}

.footer-copy {
    color: #555;

    font-size: 9px;

    letter-spacing: .12em;

    text-transform: uppercase;
}


/* =========================================================
   REVEAL ANIMATION
========================================================= */

.reveal {
    opacity: 0;

    transform: translateY(18px);

    animation: reveal .8s ease forwards;
}

.reveal.delay-1 {
    animation-delay: .12s;
}

.reveal.delay-2 {
    animation-delay: .24s;
}

.reveal.delay-3 {
    animation-delay: .36s;
}

@keyframes reveal {

    to {
        opacity: 1;

        transform: translateY(0);
    }

}


/* =========================================================
   TABLET
========================================================= */

@media (max-width: 800px) {

    .container,
    .topbar {
        width: calc(100% - 32px);
    }

    .hero {
        grid-template-columns: 1fr;

        gap: 28px;

        min-height: auto;

        padding:
            75px 0
            90px;
    }

    .hero-title {
        font-size: clamp(70px, 20vw, 130px);
    }

    .section-layout,
    .audio-layout {
        grid-template-columns: 1fr;

        gap: 28px;
    }

    .profile-grid {
        grid-template-columns: 220px 1fr;

        gap: 35px;
    }

    .platform-grid {
        grid-template-columns: 1fr;
    }

}


/* =========================================================
   MOBILE
========================================================= */

@media (max-width: 600px) {

    .container,
    .topbar {
        width: calc(100% - 24px);
    }

    .topbar {
        height: 70px;
    }

    .logo {
        font-size: 13px;
    }

    .top-status {
        font-size: 8px;
    }


    /* HERO */

    .hero {
        padding:
            55px 0
            75px;
    }

    .hero-side {
        display: flex;

        align-items: center;

        gap: 15px;
    }

    .hero-side-number {
        margin: 0;
    }

    .hero-side-line {
        display: none;
    }

    .hero-title {
        font-size: clamp(62px, 21vw, 105px);

        margin-left: -3px;
    }

    .hero-description {
        margin-top: 35px;

        font-size: 13px;

        line-height: 1.85;
    }


    /* SECTION */

    .profile-section,
    .music-section,
    .audio-section,
    .roblox-section {
        padding:
            70px 0
            80px;
    }

    .section-heading {
        font-size: 44px;
    }


    /* PROFILE */

    .profile-grid {
        grid-template-columns: 1fr;

        gap: 30px;

        margin-top: 38px;
    }

    .profile-photo {
        max-width: 240px;
    }

    .profile-text {
        font-size: 13px;
    }


    /* MUSIC */

    .music-intro {
        display: block;

        margin-bottom: 30px;
    }

    .music-description {
        margin-top: 20px;
    }

    .platform {
        min-height: 160px;
    }


    /* AUDIO */

    .audio-layout {
        gap: 30px;
    }

    .audio-side {
        display: flex;

        gap: 15px;

        align-items: center;
    }

    .audio-side-line {
        display: none;
    }

    .setup-list {
        gap: 25px;
    }

    .setup-card {
        padding:
            25px
            18px
            22px;
    }

    .card-number {
        font-size: 9px;

        margin-bottom: 20px;
    }

    .card-title {
        font-size: 39px;

        margin-bottom: 23px;
    }


    /*
       FRAME TETAP SAMA.
       Ini yang bikin IEM / DAC / UAPP
       nggak berantakan di mobile.
    */

    .product-image {
        aspect-ratio: 1 / .78;
    }

    .product-image img {
        transform: scale(.86);
    }

    .product-image.iem img {
        transform: scale(.82);
    }

    .product-image.dac img {
        transform: scale(.84);
    }

    .product-image.player img {
        transform: scale(.74);
    }


    /*
       Matikan efek hover di mobile
    */

    .setup-card:hover {
        transform: none;
    }

    .setup-card:hover .product-image.iem img {
        transform: scale(.82);
    }

    .setup-card:hover .product-image.dac img {
        transform: scale(.84);
    }

    .setup-card:hover .product-image.player img {
        transform: scale(.74);
    }


    /* ROBLOX */

    .roblox-card {
        padding: 28px 22px;

        display: block;
    }

    .roblox-button {
        display: inline-block;

        margin-top: 28px;
    }


    /* FOOTER */

    .footer-inner {
        flex-direction: column;

        align-items: flex-start;
    }

}


/* =========================================================
   SMALL PHONES
========================================================= */

@media (max-width: 390px) {

    .hero-title {
        font-size: 62px;
    }

    .section-heading {
        font-size: 39px;
    }

    .card-title {
        font-size: 35px;
    }

    .setup-card {
        padding-left: 15px;
        padding-right: 15px;
    }

}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media (prefers-reduced-motion: reduce) {

    html {
        scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
        animation-duration: .01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: .01ms !important;
    }

}

</style>
</head>


<body>


<!-- ========================================================
     TOP BAR
========================================================= -->

<header class="topbar">

    <div class="logo">
        LUXX
    </div>

    <div class="top-status">
        <span class="status-dot"></span>
        Personal Archive
    </div>

</header>



<!-- ========================================================
     HERO
========================================================= -->

<main>

<section class="container hero">

    <aside class="hero-side">

        <div class="hero-side-number">
            01
        </div>

        <div>
            Personal<br>
            Archive
        </div>

        <div class="hero-side-line"></div>

    </aside>


    <div class="hero-main">

        <div class="eyebrow reveal">
            Music · Audio · Digital
        </div>

        <h1 class="hero-title reveal delay-1">
            Luxx
        </h1>

        <p class="hero-description reveal delay-2">
            A minimal personal archive of music, audio equipment,
            digital interests and things I enjoy.
        </p>

        <div class="hero-links reveal delay-3">

            <a
                class="hero-link"
                href="#profile"
            >
                Profile
            </a>

            <a
                class="hero-link"
                href="#music"
            >
                Music
            </a>

            <a
                class="hero-link"
                href="#audio"
            >
                Audio Setup
            </a>

        </div>

    </div>

</section>



<!-- ========================================================
     PROFILE
========================================================= -->

<section
    class="profile-section"
    id="profile"
>

<div class="container section-layout">

    <aside class="section-index">
        02<br>
        Profile
    </aside>


    <div class="section-content">

        <h2 class="section-heading">
            About me.
        </h2>


        <div class="profile-grid">


            <div class="profile-photo">

                <!-- GANTI DENGAN FOTO LU -->

                <img
                    src="profile.jpg"
                    alt="Luxx"
                    onerror="this.style.display='none'"
                >

            </div>


            <div>

                <p class="profile-text">

                    I'm Luxx. I enjoy music, audio equipment,
                    digital design and creating things on the web.

                    <br><br>

                    This page is a small collection of the things
                    I listen to, use and enjoy.

                </p>


                <div class="profile-meta">

                    <div class="meta-item">

                        <span class="meta-label">
                            Focus
                        </span>

                        <span class="meta-value">
                            Music / Audio
                        </span>

                    </div>


                    <div class="meta-item">

                        <span class="meta-label">
                            Style
                        </span>

                        <span class="meta-value">
                            Minimal / Editorial
                        </span>

                    </div>


                    <div class="meta-item">

                        <span class="meta-label">
                            Setup
                        </span>

                        <span class="meta-value">
                            Portable Hi-Fi
                        </span>

                    </div>


                    <div class="meta-item">

                        <span class="meta-label">
                            Currently
                        </span>

                        <span class="meta-value">
                            Listening
                        </span>

                    </div>

                </div>

            </div>

        </div>

    </div>

</div>

</section>



<!-- ========================================================
     MUSIC
========================================================= -->

<section
    class="music-section"
    id="music"
>

<div class="container section-layout">

    <aside class="section-index">

        03<br>
        Music

    </aside>


    <div class="section-content">

        <div class="music-intro">

            <h2 class="section-heading">
                What I use.
            </h2>

            <p class="music-description">

                Music is part of the everyday setup.
                Different platforms, same obsession with
                sound quality.

            </p>

        </div>


        <div class="platform-grid">


            <!-- TIDAL -->

            <a
                href="#"
                class="platform"
            >

                <div class="platform-top">

                    <span class="platform-number">
                        01
                    </span>

                    <span class="platform-symbol">
                        /
                    </span>

                </div>


                <div class="platform-name">
                    TIDAL
                </div>


                <div class="platform-note">
                    Hi-Fi Streaming
                </div>

            </a>



            <!-- QOBUZ -->

            <a
                href="#"
                class="platform"
            >

                <div class="platform-top">

                    <span class="platform-number">
                        02
                    </span>

                    <span class="platform-symbol">
                        /
                    </span>

                </div>


                <div class="platform-name">
                    Qobuz
                </div>


                <div class="platform-note">
                    Hi-Res Streaming
                </div>

            </a>



            <!-- SPOTIFY -->

            <a
                href="#"
                class="platform"
            >

                <div class="platform-top">

                    <span class="platform-number">
                        03
                    </span>

                    <span class="platform-symbol">
                        /
                    </span>

                </div>


                <div class="platform-name">
                    Spotify
                </div>


                <div class="platform-note">
                    Everyday Listening
                </div>

            </a>


        </div>

    </div>

</div>

</section>



<!-- ========================================================
     AUDIO SETUP
========================================================= -->

<section
    class="audio-section"
    id="audio"
>

<div class="container audio-layout">


    <aside class="audio-side">

        <div>
            04
        </div>

        <div>
            Audio<br>
            Setup
        </div>

        <div class="audio-side-line"></div>

    </aside>



    <section class="setup-list">


        <!-- ==================================================
             IEM
        =================================================== -->

        <article class="setup-card">

            <div class="card-number">
                01 &nbsp; IEM
            </div>


            <h2 class="card-title">
                Kiwi Ears Belle
            </h2>


            <div class="product-image iem">

                <!--
                    Bisa JPG atau PNG.

                    Contoh:
                    kiwi-ears-belle.jpg

                    atau:
                    kiwi-ears-belle.png
                -->

                <img
                    src="iem.jpg"
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



        <!-- ==================================================
             DAC
        =================================================== -->

        <article class="setup-card">

            <div class="card-number">
                02 &nbsp; DAC
            </div>


            <h2 class="card-title">
                JM7
            </h2>


            <div class="product-image dac">

                <img
                    src="dac.jpg"
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



        <!-- ==================================================
             PLAYER
        =================================================== -->

        <article class="setup-card">

            <div class="card-number">
                03 &nbsp; PLAYER
            </div>


            <h2 class="card-title">
                UAPP
            </h2>


            <div class="product-image player">

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

</div>

</section>



<!-- ========================================================
     ROBLOX
========================================================= -->

<section class="roblox-section">

<div class="container">

    <div class="roblox-card">

        <div>

            <div class="roblox-label">
                05 / Digital
            </div>

            <div class="roblox-name">
                Roblox
            </div>

            <div class="roblox-id">
                @Luxx
            </div>

        </div>


        <a
            class="roblox-button"
            href="https://www.roblox.com/"
            target="_blank"
            rel="noopener"
        >
            View Profile
        </a>

    </div>

</div>

</section>



</main>



<!-- ========================================================
     FOOTER
========================================================= -->

<footer>

<div class="container footer-inner">

    <div class="footer-logo">
        LUXX
    </div>

    <div class="footer-copy">
        Personal archive · 2026
    </div>

</div>

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
