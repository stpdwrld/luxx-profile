export default {
  async fetch(request) {
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>

<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>LUXX</title>

<!-- FAVICON -->
<link
  rel="icon"
  type="image/png"
  href="https://raw.githubusercontent.com/stpdwrld/bahanprof/main/logo.png"
>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

<link
  href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&family=Inter:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap"
  rel="stylesheet"
>

<style>

/* =========================================================
   ROOT
========================================================= */

:root{
  --bg:#050505;
  --panel:#090909;
  --panel2:#0c0c0c;

  --white:#f1f1ef;
  --soft:#b8b8b8;
  --muted:#777;
  --line:rgba(255,255,255,.12);
  --line-soft:rgba(255,255,255,.07);

  --serif:"Playfair Display", Georgia, serif;
  --sans:"Inter", Arial, sans-serif;
  --mono:"DM Mono", monospace;
}


/* =========================================================
   RESET
========================================================= */

*{
  box-sizing:border-box;
  min-width:0;
}

html{
  width:100%;
  overflow-x:hidden;
  scroll-behavior:smooth;
  -webkit-text-size-adjust:100%;
}

body{
  width:100%;
  min-width:0;
  margin:0;
  overflow-x:hidden;

  background:var(--bg);
  color:var(--white);

  font-family:var(--sans);
  font-weight:300;

  letter-spacing:.02em;
}

a{
  color:inherit;
  text-decoration:none;
}

img{
  display:block;
  max-width:100%;
  user-select:none;
  -webkit-user-drag:none;
}

::selection{
  background:#eee;
  color:#050505;
}


/* =========================================================
   TOP NAV
========================================================= */

.topbar{
  position:absolute;
  z-index:20;

  top:0;
  left:0;

  width:100%;

  padding:28px 3.3vw;

  display:flex;
  align-items:center;
  justify-content:space-between;
}

.brand{
  font-size:17px;
  font-weight:400;
  letter-spacing:.48em;
}


/* MENU BUTTON */

.menu-toggle {
  width: 58px;
  height: 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  border: none;
  border-radius: 50%;
  background: #f5f5f3;
  cursor: pointer;
  z-index: 101;
}

.menu-toggle span {
  width: 23px;
  height: 2px;
  border-radius: 10px;
  background: #050505;
  transition: .35s ease;
}

.menu-toggle span:last-child {
  width: 23px;
}

/* OVERLAY */

.drawer-overlay {
  position: fixed;
  inset: 0;

  background: rgba(0,0,0,.72);
  backdrop-filter: blur(3px);

  opacity: 0;
  visibility: hidden;

  transition: opacity .4s ease,
              visibility .4s ease;

  z-index: 90;
}

.drawer-overlay.show {
  opacity: 1;
  visibility: visible;
}

/* DRAWER */


/* DRAWER */

.side-drawer {
  position: fixed;
  top: 0;
  left: 0;

  width: min(390px, 88vw);
  height: 100dvh;

  display: flex;
  flex-direction: column;

  padding: 35px 30px;

  background: #080808;
  color: #f1f1ef;

  border-right: 1px solid rgba(255,255,255,.12);

  transform: translateX(-105%);
  transition: transform .45s cubic-bezier(.22,.61,.36,1);

  z-index: 100;
}

.side-drawer.show {
  transform: translateX(0);
}

/* HEADER */

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.drawer-title {
  color: #f1f1ef;

  font-family: var(--sans);
  font-size: 22px;
  font-weight: 500;
  letter-spacing: .35em;
}

.drawer-close {
  width: 40px;
  height: 40px;

  border: 1px solid rgba(255,255,255,.15);
  border-radius: 50%;

  background: transparent;
  color: #f1f1ef;

  font-size: 25px;
  cursor: pointer;

  transition: .25s ease;
}

.drawer-close:hover {
  background: #f1f1ef;
  color: #080808;
}

/* CONTENT */

.drawer-content {
  margin-top: 100px;
}

.drawer-label {
  margin-bottom: 25px;

  color: #777;
  font-family: var(--mono);
  font-size: 9px;
  letter-spacing: .18em;
}

.drawer-link {
  display: flex;
  align-items: center;
  gap: 22px;

  padding: 23px 5px;

  border-bottom: 1px solid rgba(255,255,255,.12);

  color: #f1f1ef;
  font-family: var(--serif);
  font-size: 27px;

  transition: padding .25s ease;
}

.drawer-link:hover {
  padding-left: 13px;
}

.drawer-link > span:first-child {
  color: #666;
  font-family: var(--mono);
  font-size: 10px;
}

.drawer-arrow {
  margin-left: auto;
  color: #777;
  font-family: var(--sans);
  font-size: 16px;
}

/* FOOTER */

.drawer-footer {
  margin-top: auto;
  padding-top: 20px;

  display: flex;
  justify-content: space-between;
  gap: 10px;

  border-top: 1px solid rgba(255,255,255,.12);

  color: #666;
  font-family: var(--mono);
  font-size: 8px;
  letter-spacing: .08em;
}

/* MOBILE */

@media(max-width:800px) {
  .side-drawer {
    padding: 28px 24px;
  }

  .drawer-content {
    margin-top: 85px;
  }

  .drawer-link {
    font-size: 25px;
  }
}


/* =========================================================
   HERO
========================================================= */

.hero{
  min-height:760px;

  display:grid;
  grid-template-columns:minmax(340px,42%) minmax(0,58%);

  border-bottom:1px solid var(--line);
}

.hero-image{
  min-height:760px;

  background:
    linear-gradient(
      90deg,
      rgba(0,0,0,.03),
      rgba(0,0,0,.58)
    ),
    url("https://raw.githubusercontent.com/stpdwrld/bahanprof/main/my.jpg")
    center 12% / cover no-repeat;

  filter:grayscale(1);
}

.hero-content{
  position:relative;

  padding:
    120px
    clamp(38px,5.5vw,90px)
    70px;

  display:flex;
  flex-direction:column;
  justify-content:center;
}

.kicker{
  color:#999;

  font-size:10px;
  text-transform:uppercase;
  letter-spacing:.17em;
}

.hero h1{
  margin:27px 0 28px;

  font-family:var(--serif);
  font-weight:400;

  font-size:clamp(76px,9vw,150px);
  line-height:.82;

  letter-spacing:-.055em;
}

.hero-copy{
  max-width:430px;
  margin:0;

  color:#969696;

  font-size:15px;
  line-height:1.85;
}

.scroll{
  width:max-content;

  margin-top:38px;

  display:flex;
  align-items:center;
  gap:13px;

  color:#999;

  font-size:9px;
  text-transform:uppercase;
  letter-spacing:.16em;

  transition:.25s ease;
}

.scroll span{
  color:#ddd;
  font-size:16px;

  transition:.25s ease;
}

.scroll:hover{
  color:#fff;
}

.scroll:hover span{
  transform:translateY(3px);
}

.hero-mark{
  position:absolute;

  right:48px;
  top:190px;

  width:1px;
  height:185px;

  background:var(--line);
}

.hero-mark::before,
.hero-mark::after{
  content:"";

  position:absolute;
  left:-4px;

  width:9px;
  height:1px;

  background:#eee;
}

.hero-mark::before{
  top:0;
}

.hero-mark::after{
  bottom:0;
}


/* =========================================================
   SECTION SYSTEM
========================================================= */

.row{
  display:grid;

  grid-template-columns:
    clamp(150px,18vw,210px)
    minmax(0,1fr);

  border-bottom:1px solid var(--line);
}

.row-label{
  padding:42px 0 35px 3px;
}

.num{
  margin-bottom:11px;

  color:#777;

  font-family:var(--mono);
  font-size:10px;
}

.row-title{
  color:#aaa;

  font-size:10px;
  text-transform:uppercase;
  letter-spacing:.15em;

  line-height:1.5;
}

.dash{
  display:block;

  width:18px;

  margin-top:20px;

  border-top:1px solid #888;
}


/* =========================================================
   PROFILE
========================================================= */

.profile{
  display:grid;

  grid-template-columns:1.2fr .9fr;

  gap:70px;

  padding:52px 5px;

  align-items:center;
}

.profile h2,
.quote h2{
  margin:0;

  font-family:var(--serif);
  font-weight:400;

  font-size:42px;
  line-height:1.1;

  letter-spacing:-.025em;
}

.profile h2 em,
.quote h2 em{
  color:#666;
}

.profile p{
  max-width:390px;
  margin:0;

  color:#888;

  font-size:13px;
  line-height:1.85;
}

.signature{
  margin-top:15px;

  color:#ddd;

  font-family:var(--serif);
  font-size:27px;
  font-style:italic;
}


/* =========================================================
   AUDIO SETUP
========================================================= */

.setup-grid{
  display:grid;

  grid-template-columns:
    repeat(3,minmax(0,1fr));

  gap:15px;

  padding:42px 5px 45px;
}


/* CARD */

.card{
  position:relative;

  height:330px;

  overflow:hidden;

  border:1px solid var(--line);

  background:
    radial-gradient(
      circle at 50% 100%,
      rgba(255,255,255,.055),
      transparent 48%
    ),
    linear-gradient(
      145deg,
      #0d0d0d,
      #070707
    );

  transition:
    transform .35s ease,
    border-color .35s ease;
}

.card:hover{
  transform:translateY(-5px);

  border-color:rgba(255,255,255,.25);
}


/* CARD HEADER */

.card-header{
  position:relative;
  z-index:5;

  padding:20px 20px 0;
}

.card-top{
  display:flex;
  align-items:center;

  gap:9px;
}

.card .index{
  color:#777;

  font-family:var(--mono);
  font-size:10px;
}

.card .type{
  color:#888;

  font-size:9px;
  text-transform:uppercase;
  letter-spacing:.15em;
}

.card h3{
  position:relative;
  z-index:5;

  margin:14px 20px 0;

  font-family:var(--serif);
  font-weight:400;

  font-size:25px;
  line-height:1.1;

  letter-spacing:-.02em;
}


/* IMAGE AREA */

.product-frame{
  position:absolute;

  left:0;
  right:0;
  bottom:0;

  height:67%;

  display:flex;
  align-items:flex-end;
  justify-content:center;

  padding:
    0
    22px
    12px;

  z-index:2;
}

.product-image{
  position:relative;

  width:100%;
  height:100%;

  object-fit:contain;
  object-position:center bottom;

  filter:
    grayscale(1)
    contrast(1.05);

  opacity:.94;

  transition:
    transform .4s ease,
    opacity .4s ease;
}

.card:hover .product-image{
  transform:scale(1.035);

  opacity:1;
}


/* IMAGE LIGHT */

.product-frame::before{
  content:"";

  position:absolute;
  z-index:-1;

  left:12%;
  right:12%;
  bottom:5%;

  height:65%;

  background:
    radial-gradient(
      ellipse,
      rgba(255,255,255,.06),
      transparent 68%
    );
}


/* =========================================================
   MUSIC PLATFORMS
========================================================= */

.platforms{
  display:grid;

  gap:9px;

  padding:42px 5px 45px;
}

.platform{
  min-height:64px;

  display:grid;

  grid-template-columns:
    50px
    minmax(0,1fr)
    minmax(130px,.8fr)
    38px;

  align-items:center;

  gap:8px;

  padding:
    0
    13px
    0
    15px;

  border:1px solid var(--line);

  background:
    linear-gradient(
      90deg,
      #0c0c0c,
      #080808
    );

  transition:
    border-color .25s ease,
    transform .25s ease;
}

.platform:hover{
  border-color:rgba(255,255,255,.28);

  transform:translateX(3px);
}


/* PLATFORM LOGO */

.logo{
  width:30px;
  height:30px;

  display:grid;
  place-items:center;
}

.image-logo{
  overflow:hidden;

  background:transparent;
  border-radius:0;
}

.image-logo img{
  width:30px;
  height:30px;

  object-fit:contain;

  filter:grayscale(1);
}


/* PLATFORM NAME */

.platform-name{
  font-size:14px;
  letter-spacing:.07em;
}

.platform-desc{
  color:#666;

  text-align:right;

  font-size:10px;
}


/* =========================================================
   CLEAN SVG EXTERNAL LINK
========================================================= */

.ext{
  width:30px;
  height:30px;

  display:grid;
  place-items:center;

  justify-self:end;

  border:0;

  color:#666;

  background:transparent;

  transition:
    color .25s ease,
    transform .25s ease;
}

.ext svg{
  width:14px;
  height:14px;

  display:block;

  fill:none;

  stroke:currentColor;
  stroke-width:1.25;

  stroke-linecap:round;
  stroke-linejoin:round;

  transition:
    transform .25s ease;
}

.ext:hover{
  color:#fff;
}

.ext:hover svg{
  transform:translate(2px,-2px);
}


/* =========================================================
   ROBLOX
========================================================= */

.roblox-box{
  min-height:220px;

  display:grid;

  grid-template-columns:
    minmax(220px,30%)
    minmax(0,1fr);

  margin:
    15px
    0
    45px
    5px;

  overflow:hidden;

  border:1px solid var(--line);

  background:#080808;
}

.roblox-art{
  min-width:0;

  background:
    linear-gradient(
      90deg,
      rgba(0,0,0,.02),
      rgba(0,0,0,.12)
    ),
    url("https://raw.githubusercontent.com/stpdwrld/bahanprof/main/roblox.png")
    center / cover no-repeat;

  filter:none;
}

.roblox-info{
  padding:32px;
}

.roblox-name{
  font-family:var(--serif);

  font-size:31px;
  line-height:1;
}

.badge{
  width:17px;
  height:17px;

  display:inline-grid;
  place-items:center;

  margin-left:5px;

  border-radius:50%;

  background:#eee;
  color:#111;

  font-family:Arial,sans-serif;
  font-size:10px;

  vertical-align:middle;
}

.roblox-meta{
  margin:10px 0 18px;

  color:#888;

  font-size:10px;
  letter-spacing:.05em;
}

.roblox-desc{
  color:#777;

  font-size:12px;
  line-height:1.7;
}

.button{
  display:inline-flex;

  align-items:center;
  gap:10px;

  margin-top:24px;

  padding:11px 15px;

  border:1px solid #444;

  color:#aaa;

  font-size:9px;
  text-transform:uppercase;
  letter-spacing:.12em;

  transition:.25s ease;
}

.button:hover{
  border-color:#eee;

  background:#eee;
  color:#111;
}


/* =========================================================
   about
========================================================= */

.quote{
  min-height:210px;

  display:grid;

  grid-template-columns:
    clamp(150px,18vw,210px)
    minmax(0,1fr);

  align-items:center;

  border-bottom:1px solid var(--line);
}

.quote-content{
  position:relative;

  min-width:0;

  padding:45px 5px;

  overflow:hidden;
}

.quote h2{
  position:relative;
  z-index:3;

  font-size:42px;
}

.wave{
  position:absolute;
  z-index:1;

  right:0;
  top:20px;

  width:47%;
  height:140px;

  opacity:.25;

  background:
    repeating-linear-gradient(
      90deg,
      transparent 0 7px,
      rgba(255,255,255,.16) 8px 9px
    );

  mask-image:
    radial-gradient(
      ellipse at center,
      black 0 35%,
      transparent 72%
    );
}


/* =========================================================
   FOOTER
========================================================= */

footer{
  width:min(1180px,92vw);

  min-height:78px;

  margin:auto;

  display:flex;

  align-items:center;
  justify-content:space-between;

  gap:20px;

  color:#666;

  font-size:9px;

  text-transform:uppercase;
  letter-spacing:.14em;
}

.footer-center{
  color:#888;

  text-align:center;
}


/* =========================================================
   TABLET
========================================================= */

@media(max-width:1050px){

  .nav{
    gap:24px;
  }

  .hero h1{
    font-size:clamp(72px,10vw,110px);
  }

  .profile h2,
  .quote h2{
    font-size:36px;
  }

  .setup-grid{
    gap:11px;
  }

  .card{
    height:310px;
  }

  .card h3{
    font-size:22px;
  }

  .platform{
    grid-template-columns:
      45px
      minmax(0,1fr)
      140px
      36px;
  }
}


/* =========================================================
   MOBILE
========================================================= */

@media(max-width:800px){

  /* NAV */

  .topbar{
    padding:20px 18px;
  }

  .brand{
    font-size:14px;
  }

  .nav{
    max-width:245px;

    gap:13px;

    font-size:7.5px;
  }

  .nav a:nth-child(n+4){
    display:none;
  }


  /* HERO */

  .hero{
    grid-template-columns:1fr;

    min-height:0;
  }

  .hero-image{
  min-height:clamp(360px,58vw,470px);

  background-position:center 90%;
}

  .hero-content{
    min-height:0;

    padding:
      65px
      7vw
      65px;
  }

  .hero h1{
    font-size:clamp(70px,18vw,100px);

    margin:20px 0;
  }

  .hero-copy{
    font-size:13px;
    line-height:1.8;
  }

  .hero-mark{
    display:none;
  }


  /* SECTION */

  .row{
    grid-template-columns:
      clamp(78px,24vw,145px)
      minmax(0,1fr);
  }

  .row-label{
    padding:
      36px
      8px
      30px
      6px;
  }

  .row-title{
    font-size:9px;
  }


  /* PROFILE */

  .profile{
    grid-template-columns:1fr;

    gap:27px;

    padding:
      40px
      12px
      42px
      0;
  }

  .profile h2{
    font-size:clamp(30px,8vw,40px);
  }

  .profile p{
    font-size:12px;
  }


  /* AUDIO SETUP */

  .setup-grid{
    grid-template-columns:1fr;

    gap:14px;

    padding:
      30px
      10px
      40px
      0;
  }

  .card{
    height:330px;
  }

  .card h3{
    font-size:27px;
  }

  .product-frame{
    height:65%;

    padding:
      0
      25px
      12px;
  }


  /* MUSIC */

  .platforms{
    padding:
      30px
      10px
      40px
      0;
  }

  .platform{
    grid-template-columns:
      40px
      minmax(0,1fr)
      32px;

    min-height:60px;

    padding:
      0
      10px;
  }

  .platform-desc{
    display:none;
  }

  .platform-name{
    font-size:13px;
  }

  .logo,
  .image-logo img{
    width:28px;
    height:28px;
  }

  .ext{
    width:28px;
    height:28px;
  }

  .ext svg{
    width:13px;
    height:13px;
  }


  /* ROBLOX */

  .roblox-box{
    grid-template-columns:1fr;

    margin:
      28px
      10px
      38px
      0;
  }

  .roblox-art{
    width:100%;

    aspect-ratio:1 / .72;
  }

  .roblox-info{
    padding:
      27px
      20px
      28px;
  }

  .roblox-name{
    font-size:clamp(29px,8vw,36px);
  }

  .button{
    width:100%;

    justify-content:center;
  }


  /* about */

  .quote{
    grid-template-columns:
      clamp(78px,24vw,145px)
      minmax(0,1fr);

    min-height:190px;
  }

  .quote-content{
    padding:
      38px
      10px
      38px
      0;
  }

  .quote h2{
    font-size:clamp(29px,7.8vw,40px);
  }

  .wave{
    width:82%;

    right:-10px;
  }


  /* FOOTER */

  footer{
    min-height:90px;

    padding:
      24px
      5vw;

    font-size:7px;
  }

  .footer-center{
    max-width:150px;
  }
}


/* =========================================================
   SMALL PHONES
========================================================= */

@media(max-width:420px){

  .nav{
    max-width:205px;
    gap:10px;
  }

  .nav a{
    font-size:7px;
  }

  .hero-image{
    min-height:380px;
  }

  .card{
    height:315px;
  }

  .card h3{
    font-size:25px;
  }

  .product-frame{
    height:64%;
  }

  .platform-name{
    font-size:12px;
  }

  footer{
    font-size:6.5px;
  }
}


/* =========================================================
   REDUCED MOTION
========================================================= */

@media(prefers-reduced-motion:reduce){

  html{
    scroll-behavior:auto;
  }

  *,
  *::before,
  *::after{
    transition:none!important;
  }
}

/* TEXT SELECTION */

body {
  -webkit-user-select: text;
  user-select: text;
  -webkit-touch-callout: default;
}

a, button {
  -webkit-user-select: none;
  user-select: none;
}

</style>
</head>


<body>

<!-- =======================================================
     NAVIGATION
======================================================= -->

<header class="topbar">

  <a class="brand" href="https://www.luxx.my.id">LUXX</a>

  <button class="menu-toggle" id="menuToggle"
    aria-label="Open menu"
    aria-expanded="false">
    <span></span>
    <span></span>
    <span></span>
  </button>

</header>

<div class="drawer-overlay" id="drawerOverlay"></div>

<aside class="side-drawer" id="sideDrawer">

  <div class="drawer-header">
    <span class="drawer-title">LUXX</span>

    <button class="drawer-close" id="drawerClose">
      ×
    </button>
  </div>

  <div class="drawer-content">

    <div class="drawer-label">NAVIGATION</div>

    <a href="https://www.luxx.my.id" class="drawer-link">
      <span>01</span>
      Profile
    </a>

    <a href="https://live.luxx.my.id" class="drawer-link">
      <span>02</span>
      Live Music
    </a>

  </div>

  <div class="drawer-footer">
    <span>LUXX</span>
    <span>© 2026</span>
  </div>

</aside>


<!-- =======================================================
     HERO
======================================================= -->

<section class="hero">  <div class="hero-image"></div>  <div class="hero-content"><h1>
  LUXX
</h1>

<p class="hero-copy">
  About music, sound,<br>
  and a few things I enjoy.
</p>

<a class="scroll" href="profile">
  Explore
  <span>↓</span>
</a>

<div class="hero-mark"></div>

  </div></section>


<!-- =======================================================
     PROFILE
======================================================= -->

<section id="profile" class="row">
  <aside class="row-label">
    <div class="num">
      01
    </div><div class="row-title">
  Profile
</div>

<span class="dash"></span>

  </aside>  <div class="profile"><h2>
  Music<br>
  <em>and audio.</em>
</h2>

<div>

  <p>
    A small collection of sounds and gear that make up my everyday life.
  </p>

  <p style="margin-top:14px">
    What I listen to, what I use,<br>
    and what I enjoy.
  </p>

  <div class="signature">
    Luxx
  </div>

</div>

  </div>
</section>

<!-- =======================================================
     AUDIO SETUP
======================================================= -->

<section id="setup" class="row">  <aside class="row-label"><div class="num">
  02
</div>

<div class="row-title">
  Audio Setup
</div>

<span class="dash"></span>

  </aside>  <div class="setup-grid"><article class="card">

  <div class="card-header">
    <div class="card-top">
      <span class="index">01</span>
      <span class="type">Earphones</span>
    </div>
  </div>

  <h3>
    Kiwi Ears Belle
  </h3>

  <div class="product-frame">
    <img
      class="product-image"
      src="https://raw.githubusercontent.com/stpdwrld/bahanprof/main/iem.png"
      alt="Kiwi Ears Belle"
    >
  </div>

</article>

<article class="card">

  <div class="card-header">
    <div class="card-top">
      <span class="index">02</span>
      <span class="type">CABLE</span>
    </div>
  </div>

  <h3>
    Yongse Piano 6N Single Crystal Copper
  </h3>

  <div class="product-frame">
    <img
      class="product-image"
      src="https://raw.githubusercontent.com/stpdwrld/bahanprof/main/kabel.png"
      alt="Yongse Piano 6N Single Crystal Copper"
    >
  </div>

</article>

<article class="card">

  <div class="card-header">
    <div class="card-top">
      <span class="index">03</span>
      <span class="type">DAC</span>
    </div>
  </div>

  <h3>
    Kinera Celest CD-2
  </h3>

  <div class="product-frame">
    <img
      class="product-image"
      src="https://raw.githubusercontent.com/stpdwrld/bahanprof/main/dac2.png"
      alt="Kinera Celest CD-2"
    >
  </div>

</article>


<article class="card">

  <div class="card-header">
    <div class="card-top">
      <span class="index">04</span>
      <span class="type">Music Player</span>
    </div>
  </div>

  <h3>
    USB Audio Player PRO
  </h3>

  <div class="product-frame">
    <img
      class="product-image"
      src="https://raw.githubusercontent.com/stpdwrld/bahanprof/main/uapp.png"
      alt="USB Audio Player PRO"
    >
  </div>

</article>

  </div></section>

<!-- =======================================================
     MUSIC PLATFORMS
======================================================= -->

<section id="music" class="row">


  <aside class="row-label">

    <div class="num">
      03
    </div>

    <div class="row-title">
      Music Platforms
    </div>

    <span class="dash"></span>

  </aside>


  <div class="platforms">


    <!-- TIDAL -->

    <div class="platform">

      <span class="logo image-logo">

        <img
          src="https://raw.githubusercontent.com/stpdwrld/bahanprof/main/tidal.png"
          alt="TIDAL"
        >

      </span>


      <span class="platform-name">
        TIDAL
      </span>


      <span class="platform-desc">
        High Fidelity Streaming.
      </span>


      <a
        class="ext"
        href="https://tidal.com/artist/88813494"
        target="_blank"
        rel="noopener"
        aria-label="Open TIDAL"
      >

        <!-- CLEAN SVG EXTERNAL LINK -->

        <svg
          viewBox="0 0 16 16"
          aria-hidden="true"
        >

          <path d="M4 12L12 4"></path>

          <path d="M6 4H12V10"></path>

        </svg>

      </a>

    </div>


    <!-- QOBUZ -->

    <div class="platform">

      <span class="logo image-logo">

        <img
          src="https://raw.githubusercontent.com/stpdwrld/bahanprof/main/qobuz.png"
          alt="Qobuz"
        >

      </span>


      <span class="platform-name">
        QOBUZ
      </span>


      <span class="platform-desc">
        Hi-Res. Studio Quality.
      </span>


      <a
        class="ext"
        href="https://open.qobuz.com/playlist/68538412"
        target="_blank"
        rel="noopener"
        aria-label="Open Qobuz"
      >

        <svg
          viewBox="0 0 16 16"
          aria-hidden="true"
        >

          <path d="M4 12L12 4"></path>

          <path d="M6 4H12V10"></path>

        </svg>

      </a>

    </div>

  </div>

</section>

<!-- =======================================================
     about
======================================================= -->

<section id="about" class="quote">

  <aside class="row-label">

    <div class="num">
      05
    </div>

    <div class="row-title">
      About
    </div>

    <span class="dash"></span>

  </aside>

  <div class="quote-content">

    <h2>
      Music, audio,<br>
      <em>and a few things I like.</em>
    </h2>

    <div class="wave"></div>

  </div>

</section>


<!-- =======================================================
     FOOTER
======================================================= -->

<footer>

  <span>
    LUXX
  </span>

  <span>
    © 2026
  </span>

</footer>

<script>
const menuToggle = document.getElementById("menuToggle");
const sideDrawer = document.getElementById("sideDrawer");
const drawerOverlay = document.getElementById("drawerOverlay");
const drawerClose = document.getElementById("drawerClose");

function openDrawer() {
  sideDrawer.classList.add("show");
  drawerOverlay.classList.add("show");

  menuToggle.setAttribute("aria-expanded", "true");
  document.body.style.overflow = "hidden";
}

function closeDrawer() {
  sideDrawer.classList.remove("show");
  drawerOverlay.classList.remove("show");

  menuToggle.setAttribute("aria-expanded", "false");
  document.body.style.overflow = "";
}

menuToggle.addEventListener("click", openDrawer);
drawerClose.addEventListener("click", closeDrawer);
drawerOverlay.addEventListener("click", closeDrawer);

document.querySelectorAll(".drawer-link").forEach(link => {
  link.addEventListener("click", closeDrawer);
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeDrawer();
});
</script>

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
