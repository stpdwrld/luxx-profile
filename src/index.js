export default {
  async fetch(request) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>LUXX — Personal Portfolio</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=DM+Mono:wght@300;400&family=Inter:wght@300;400;500&family=Playfair+Display:ital,wght@0,400;0,500;1,400&display=swap" rel="stylesheet">

<style>
:root{
  --bg:#050505;
  --panel:#0a0a0a;
  --line:rgba(255,255,255,.13);
  --muted:#8c8c8c;
  --soft:#c7c7c7;
  --white:#f2f2f0;
  --serif:"Playfair Display",Georgia,serif;
  --sans:"Inter",Arial,sans-serif;
  --mono:"DM Mono",monospace;
}
*{box-sizing:border-box}
html{scroll-behavior:smooth}
body{
  margin:0;background:var(--bg);color:var(--white);
  font-family:var(--sans);font-weight:300;
  letter-spacing:.02em;
}
a{color:inherit;text-decoration:none}
img{display:block;max-width:100%}
::selection{background:#eee;color:#050505}

.container{width:min(1180px,92vw);margin:auto}
.topbar{
  position:absolute;z-index:10;top:0;left:0;width:100%;
  padding:28px 3.3vw;display:flex;align-items:center;justify-content:space-between;
}
.brand{font-size:17px;letter-spacing:.48em;font-weight:400}
.nav{display:flex;gap:42px;font-size:11px;text-transform:uppercase;letter-spacing:.1em}
.nav a{opacity:.78;transition:.25s}
.nav a:hover{opacity:1}
.nav a.active:after{
  content:"";display:block;width:4px;height:4px;border-radius:50%;
  background:#fff;margin:10px auto 0;
}

.hero{
  min-height:650px;display:grid;grid-template-columns:42% 58%;
  border-bottom:1px solid var(--line);
}
.hero-image{
  min-height:650px;
  background:
    linear-gradient(90deg,rgba(0,0,0,.05),rgba(0,0,0,.52)),
    url("https://raw.githubusercontent.com/stpdwrld/bahanprof/main/my.jpg")
    center/cover no-repeat;
  filter:grayscale(1);
}
.hero-content{
  position:relative;padding:145px 7vw 70px 5.5vw;
  display:flex;flex-direction:column;justify-content:center;
}
.kicker,.section-label{
  font-size:11px;text-transform:uppercase;letter-spacing:.14em;color:#aaa;
}
.hero h1{
  font-family:var(--serif);font-weight:400;font-size:clamp(80px,10vw,150px);
  line-height:.82;margin:27px 0 25px;letter-spacing:-.055em;
}
.hero-copy{max-width:430px;color:#9b9b9b;font-size:16px;line-height:1.8}
.scroll{
  margin-top:38px;font-size:10px;letter-spacing:.15em;text-transform:uppercase;
  color:#aaa;display:flex;gap:12px;align-items:center
}
.scroll span{font-size:17px;color:#ddd}
.hero-mark{
  position:absolute;right:48px;top:190px;height:185px;border-left:1px solid var(--line);
}
.hero-mark:before,.hero-mark:after{
  content:"";position:absolute;left:-5px;width:9px;height:1px;background:#eee
}
.hero-mark:before{top:0}.hero-mark:after{bottom:0}

.row{
  display:grid;grid-template-columns:190px 1fr;
  border-bottom:1px solid var(--line);min-height:220px;
}
.row-label{padding:40px 0 35px 3px}
.num{font-family:var(--mono);font-size:11px;color:#aaa;margin-bottom:10px}
.row-title{
  font-size:12px;text-transform:uppercase;letter-spacing:.13em
}
.dash{display:block;width:19px;border-top:1px solid #aaa;margin-top:20px}

.profile{
  display:grid;grid-template-columns:1.2fr .9fr;gap:70px;padding:48px 5px;
  align-items:center
}
.profile h2,.quote h2{
  font-family:var(--serif);font-size:42px;line-height:1.1;font-weight:400;
  margin:0;letter-spacing:-.025em
}
.profile h2 em,.quote em{color:#777}
.profile p{color:#8f8f8f;line-height:1.8;font-size:14px;margin:0;max-width:390px}
.signature{font-family:var(--serif);font-style:italic;font-size:27px;margin-top:12px;color:#ddd}

.setup-grid{
  display:grid;grid-template-columns:repeat(3,1fr);gap:17px;padding:38px 5px 42px
}
.card{
  min-height:270px;border:1px solid var(--line);background:linear-gradient(145deg,#0b0b0b,#070707);
  padding:20px;position:relative;overflow:hidden;transition:.3s
}
.card:hover{transform:translateY(-4px);border-color:rgba(255,255,255,.28)}
.card .index{font-family:var(--mono);font-size:11px;color:#aaa}
.card .type{font-size:11px;letter-spacing:.1em;text-transform:uppercase;color:#aaa;margin-left:8px}
.card h3{font-family:var(--serif);font-weight:400;font-size:25px;margin:20px 0 10px}
.product-image{
  position:absolute;left:50%;bottom:-5px;transform:translateX(-50%);
  width:86%;height:150px;object-fit:contain;filter:grayscale(1) contrast(1.1);
  opacity:.9;
}

.platforms{padding:38px 5px 45px;display:grid;gap:9px}
.platform{
  min-height:58px;border:1px solid var(--line);display:grid;
  grid-template-columns:58px 1fr 1fr 25px;align-items:center;padding:0 16px;
  background:linear-gradient(90deg,#0b0b0b,#080808);transition:.25s
}
.platform:hover{border-color:#555;transform:translateX(3px)}
.logo{
  width:32px;height:32px;border-radius:50%;display:grid;place-items:center;
  font-size:16px;font-weight:500;background:#eee;color:#111
}
.logo.tidal{border-radius:0;background:transparent;color:#eee;font-size:23px}
.platform-name{font-size:16px;letter-spacing:.06em}
.platform-desc{text-align:right;color:#777;font-size:12px}
.ext{font-size:19px;color:#999}

.roblox-box{
  margin:15px 0 42px 5px;border:1px solid var(--line);min-height:170px;
  display:grid;grid-template-columns:30% 1fr;overflow:hidden;background:#080808
}
.roblox-art{
  background:
    linear-gradient(90deg,rgba(0,0,0,.08),rgba(0,0,0,.62)),
    url("https://raw.githubusercontent.com/stpdwrld/bahanprof/main/roblox.png")
    center/cover no-repeat;
  filter:grayscale(1);
}
.roblox-info{padding:30px}
.roblox-name{font-family:var(--serif);font-size:31px}
.badge{
  display:inline-grid;place-items:center;width:17px;height:17px;
  background:#eee;color:#111;border-radius:50%;font-size:10px;margin-left:5px
}
.roblox-meta{font-size:12px;color:#999;margin:9px 0 18px}
.roblox-desc{font-size:13px;color:#777;line-height:1.6}
.button{
  display:inline-flex;align-items:center;gap:12px;border:1px solid #555;
  padding:12px 16px;font-size:10px;text-transform:uppercase;letter-spacing:.1em;
  float:right;margin-top:-42px;transition:.25s
}
.button:hover{background:#eee;color:#111}

.quote{
  min-height:180px;display:grid;grid-template-columns:190px 1fr;
  border-bottom:1px solid var(--line);align-items:center
}
.quote-content{position:relative;padding:40px 5px;overflow:hidden}
.quote h2{font-size:42px}
.wave{
  position:absolute;right:0;top:20px;width:47%;height:120px;opacity:.28;
  background:
   repeating-linear-gradient(90deg,transparent 0 7px,rgba(255,255,255,.16) 8px 9px);
  mask-image:radial-gradient(ellipse at center,black 0 35%,transparent 72%);
}

footer{
  min-height:74px;display:flex;align-items:center;justify-content:space-between;
  color:#777;font-size:10px;text-transform:uppercase;letter-spacing:.14em
}
.footer-center{color:#aaa}

@media(max-width:800px){
  .topbar{padding:22px 5vw}
  .nav{gap:14px;font-size:9px}.nav a:nth-child(n+4){display:none}
  .hero{grid-template-columns:1fr;min-height:760px}
  .hero-image{min-height:390px}
  .hero-content{min-height:370px;padding:65px 7vw}
  .hero h1{font-size:78px;margin:20px 0}
  .hero-mark{display:none}
  .row,.quote{grid-template-columns:85px 1fr}
  .profile{grid-template-columns:1fr;gap:28px}
  .setup-grid{grid-template-columns:1fr}
  .card{min-height:250px}
  .roblox-box{grid-template-columns:1fr;margin-left:0}
  .roblox-art{height:190px}
  .button{float:none;margin:20px 0 0}
  .platform{grid-template-columns:45px 1fr 25px}
  .platform-desc{display:none}
  .quote h2{font-size:31px}
}

.image-logo{background:transparent;border-radius:0;overflow:hidden}
.image-logo img{width:32px;height:32px;object-fit:contain;filter:grayscale(1)}
.product-image{width:72%;height:auto;aspect-ratio:1/1;object-fit:contain;bottom:-18px}
.hero-image{background-position:center top}
@media(max-width:800px){.hero-image{background-position:center 18%}}


.roblox-art{
  background-size:cover;
  background-position:center;
}


/* --- Mobile refinement --- */
@media (max-width: 800px){
  body{overflow-x:hidden}
  .container{width:100%}
  .topbar{
    position:absolute;
    padding:20px 18px;
    align-items:flex-start;
  }
  .brand{font-size:15px;letter-spacing:.38em}
  .nav{
    gap:13px;
    font-size:8px;
    letter-spacing:.08em;
    flex-wrap:wrap;
    justify-content:flex-end;
    max-width:245px;
  }
  .nav a:nth-child(n+4){display:none}

  .hero{grid-template-columns:1fr;min-height:780px}
  .hero-image{
    min-height:430px;
    background-position:center 15%;
  }
  .hero-content{
    min-height:350px;
    padding:52px 24px 55px;
  }
  .hero h1{
    font-size:76px;
    margin:18px 0 20px;
  }
  .hero-copy{font-size:14px;line-height:1.7}
  .scroll{margin-top:27px}

  .row{
    grid-template-columns:94px minmax(0,1fr);
    min-height:0;
  }
  .row-label{
    padding:39px 7px 30px 6px;
  }
  .row-title{
    font-size:11px;
    line-height:1.55;
    letter-spacing:.12em;
    word-break:normal;
  }
  .num{font-size:10px}
  .dash{margin-top:18px}

  /* Audio cards: no overlap between heading and image */
  .setup-grid{
    display:grid;
    grid-template-columns:1fr;
    gap:20px;
    padding:28px 10px 36px 0;
  }
  .card{
    min-height:360px;
    padding:22px 20px 0;
  }
  .card h3{
    position:relative;
    z-index:2;
    font-size:29px;
    margin:18px 0 0;
    line-height:1.05;
    white-space:normal;
  }
  .card .index,.card .type{position:relative;z-index:3}
  .product-image{
    position:absolute;
    z-index:1;
    width:82%;
    height:auto;
    aspect-ratio:1/1;
    left:50%;
    bottom:-2px;
    transform:translateX(-50%);
    object-fit:contain;
  }

  .platforms{
    padding:28px 10px 36px 0;
    gap:10px;
  }
  .platform{
    grid-template-columns:45px minmax(0,1fr) 25px;
    min-height:62px;
    padding:0 13px;
  }
  .platform-desc{display:none}
  .platform-name{font-size:14px}
  .image-logo img{width:29px;height:29px}
  .ext{
    display:grid;
    place-items:center;
    width:28px;
    height:28px;
    border:1px solid #444;
    font-size:15px;
    text-decoration:none;
  }

  .roblox-box{
    grid-template-columns:1fr;
    margin:28px 10px 36px 0;
    min-height:0;
  }
  .roblox-art{
    height:auto;
    aspect-ratio:1/1;
    background-size:cover;
    background-position:center;
  }
  .roblox-info{padding:27px 22px 28px}
  .roblox-name{font-size:34px}
  .roblox-meta{font-size:13px;margin:9px 0 18px}
  .roblox-desc{font-size:14px;line-height:1.65}
  .button{
    float:none;
    margin:24px 0 0;
    width:100%;
    justify-content:center;
    padding:14px 10px;
  }

  .quote{
    grid-template-columns:94px minmax(0,1fr);
    min-height:225px;
  }
  .quote-content{
    padding:42px 10px 42px 0;
  }
  .quote h2{
    font-size:34px;
    line-height:1.08;
    position:relative;
    z-index:2;
  }
  .wave{
    width:85%;
    right:-20px;
    opacity:.2;
  }

  footer{
    width:100%;
    padding:24px 27px;
    min-height:76px;
    font-size:8px;
    gap:12px;
  }
  .footer-center{
    text-align:center;
    line-height:1.5;
  }
}

/* Prevent text/image selection from feeling like a navigation action */
.platform .platform-name,
.platform .platform-desc,
.card h3,
.row-title,
.quote h2{
  cursor:default;
}

</style>
</head>

<body>
<header class="topbar">
  <a class="brand" href="#">LUXX</a>
  <nav class="nav">
    <a class="active" href="#profile">Profile</a>
    <a href="#setup">Setup</a>
    <a href="#music">Music</a>
    <a href="#roblox">Roblox</a>
    <a href="#philosophy">Philosophy</a>
  </nav>
</header>

<main>
<section class="hero">
  <div class="hero-image"></div>
  <div class="hero-content">
    <div class="kicker">Personal Portfolio</div>
    <h1>LUXX</h1>
    <p class="hero-copy">A personal space for music,<br>sound, and the pursuit of<br>better listening.</p>
    <a class="scroll" href="#profile">Scroll to explore <span>↓</span></a>
    <div class="hero-mark"></div>
  </div>
</section>

<section id="profile" class="row">
  <aside class="row-label">
    <div class="num">01</div><div class="row-title">Profile</div><span class="dash"></span>
  </aside>
  <div class="profile">
    <h2>I listen to music<br><em>carefully.</em></h2>
    <div>
      <p>Not just for the sound, but for everything it makes me feel.</p>
      <p style="margin-top:14px">This is where I collect, enjoy, and appreciate music in the best way I can.</p>
      <div class="signature">Luxx</div>
    </div>
  </div>
</section>

<section id="setup" class="row">
  <aside class="row-label">
    <div class="num">02</div><div class="row-title">Audio Setup</div><span class="dash"></span>
  </aside>
  <div class="setup-grid">
    <article class="card">
      <span class="index">01</span><span class="type">IEM</span>
      <h3>Kiwi Ears Belle</h3>
      <img class="product-image" src="https://raw.githubusercontent.com/stpdwrld/bahanprof/main/iem.jpg" alt="IEM">
    </article>
    <article class="card">
      <span class="index">02</span><span class="type">DAC</span>
      <h3>JM7</h3>
      <img class="product-image" src="https://raw.githubusercontent.com/stpdwrld/bahanprof/main/dac.jpg" alt="Audio DAC">
    </article>
    <article class="card">
      <span class="index">03</span><span class="type">Player</span>
      <h3>UAPP</h3>
      <img class="product-image" src="https://raw.githubusercontent.com/stpdwrld/bahanprof/main/uapp.jpg" alt="Music player">
    </article>
  </div>
</section>

<section id="music" class="row">
  <aside class="row-label">
    <div class="num">03</div><div class="row-title">Music Platforms</div><span class="dash"></span>
  </aside>
  <div class="platforms">
    <div class="platform">
      <span class="logo image-logo"><img src="https://raw.githubusercontent.com/stpdwrld/bahanprof/main/tidal.png" alt="TIDAL"></span><span class="platform-name">TIDAL</span>
      <span class="platform-desc">High Fidelity Streaming.</span><a class="ext" href="https://tidal.com" target="_blank" rel="noopener" aria-label="Open TIDAL">↗</a>
    </div>
    <div class="platform">
      <span class="logo image-logo"><img src="https://raw.githubusercontent.com/stpdwrld/bahanprof/main/qobuz.png" alt="Qobuz"></span><span class="platform-name">QOBUZ</span>
      <span class="platform-desc">Hi-Res. Studio Quality.</span><a class="ext" href="https://www.qobuz.com" target="_blank" rel="noopener" aria-label="Open Qobuz">↗</a>
    </div>
    <div class="platform">
      <span class="logo image-logo"><img src="https://raw.githubusercontent.com/stpdwrld/bahanprof/main/spotify.png" alt="Spotify"></span><span class="platform-name">SPOTIFY</span>
      <span class="platform-desc">Everyday Listening.</span><a class="ext" href="https://open.spotify.com" target="_blank" rel="noopener" aria-label="Open Spotify">↗</a>
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

<script>
document.addEventListener('DOMContentLoaded', () => {
  // Only explicit buttons/icons should open external pages.
  document.querySelectorAll('.platform').forEach(row => {
    row.addEventListener('click', e => {
      if (!e.target.closest('a')) e.preventDefault();
    });
  });
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
