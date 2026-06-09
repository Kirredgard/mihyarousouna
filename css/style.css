@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&family=Poppins:wght@400;500;600;700;800;900&display=swap');

:root {
  --green: #007b78;
  --dark: #005b59;
  --gold: #d4880a;
  --ink: #101524;
  --muted: #596173;
  --soft: #f6faf9;
  --card: #fff;
  --line: #e6eeee;
}

* { box-sizing: border-box; }
body { margin: 0; font-family: 'Nunito', Arial, sans-serif; color: var(--ink); background: #fff; }
a { text-decoration: none; color: inherit; }

/* ─── HEADER ─── */
.header {
  height: 80px;
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 0 40px;
  background: #fff;
  border-bottom: 1px solid #eef2f2;
  position: sticky;
  top: 0;
  z-index: 100;
}
.brand img { width: 160px; display: block; }
.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 28px;
  flex: 1;
  font-weight: 700;
  font-size: 13.5px;
  color: #101b33;
}
.nav a {
  padding: 28px 0 24px;
  border-bottom: 3px solid transparent;
  white-space: nowrap;
  transition: color 0.2s;
}
.nav a.active { color: var(--green); border-color: var(--green); }
.nav a:hover { color: var(--green); }

.space-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(135deg, #00807c, #005d59);
  color: #fff;
  padding: 14px 22px;
  border-radius: 8px;
  font-weight: 800;
  font-size: 13.5px;
  box-shadow: 0 6px 16px #006b6726;
  white-space: nowrap;
}
.space-btn svg { flex-shrink: 0; }
.menu { display: none; }

/* ─── HERO ─── */
main { overflow: hidden; }
.hero {
  min-height: 460px;
  display: grid;
  grid-template-columns: 48% 52%;
  align-items: stretch;
  position: relative;
}
.hero-copy {
  padding: 56px 32px 48px 72px;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.welcome {
  color: var(--green);
  font-weight: 900;
  letter-spacing: 0.06em;
  font-size: 13px;
  margin: 0 0 10px;
}
.hero h1 {
  font-family: 'Poppins', sans-serif;
  font-size: 42px;
  line-height: 1.18;
  margin: 0 0 18px;
  letter-spacing: -0.5px;
  font-weight: 800;
  color: var(--ink);
}
.hero h1 span { color: var(--green); }
.hero h1 strong { color: var(--gold); font-weight: 800; }
.lead {
  max-width: 500px;
  color: #1d2740;
  font-size: 15.5px;
  line-height: 1.7;
  margin: 0 0 24px;
}
.actions {
  display: flex;
  gap: 16px;
  margin-bottom: 28px;
}
.btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  border-radius: 7px;
  padding: 14px 22px;
  font-weight: 800;
  font-size: 14px;
  cursor: pointer;
  transition: opacity 0.2s, transform 0.15s;
}
.btn:hover { opacity: 0.9; transform: translateY(-1px); }
.primary { background: linear-gradient(135deg, #00807c, #005d59); color: #fff; }
.outline { border: 2px solid var(--green); color: var(--dark); background: #fff; }

.mini-row {
  display: flex;
  gap: 28px;
  max-width: 680px;
  padding-top: 4px;
}
.mini-row > div {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  font-size: 12px;
}
.mini-row .mini-icon {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  flex-shrink: 0;
  margin-top: 2px;
}
.mini-row .mini-text b { display: block; color: #0c4950; font-size: 12.5px; margin-bottom: 3px; }
.mini-row .mini-text small { color: #344054; line-height: 1.4; display: block; font-size: 11.5px; }

.hero-photo {
  position: relative;
  overflow: hidden;
}
.hero-photo::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg, #fff 0%, #ffffffdd 5%, #ffffff2a 22%, transparent 42%);
  z-index: 1;
}
.hero-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

/* ─── PILLARS ─── */
.pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
  padding: 10px 72px 18px;
  background: #fff;
}
.card {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 12px;
  box-shadow: 0 4px 18px #0b2d3512;
}
.pillar {
  min-height: 100px;
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 20px 24px;
}
.round {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #00807c, #005d59);
  color: #fff;
  font-size: 26px;
  flex-shrink: 0;
}
.round.gold { background: linear-gradient(135deg, #d6a037, #a86b0f); }
.round.arabic { font-size: 28px; font-weight: 900; font-family: 'Poppins', sans-serif; }
.pillar h3 { margin: 0 0 6px; color: var(--green); font-size: 18px; font-weight: 800; }
.pillar p { margin: 0; color: #223049; font-size: 13px; line-height: 1.5; }
.badge {
  margin-left: auto;
  width: 46px;
  height: 46px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #e6e8e8;
  background: #fff;
  font-size: 24px;
  color: #222;
  flex-shrink: 0;
}

/* ─── CONTENT GRID ─── */
.content-grid {
  display: grid;
  grid-template-columns: 1fr 1.6fr 1fr;
  gap: 20px;
  padding: 0 72px 18px;
}

/* Mission card */
.mission {
  border-radius: 12px;
  background: linear-gradient(155deg, #008078, #005e59 80%);
  color: #fff;
  padding: 30px 26px;
  min-height: 280px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 8px 22px #0b2d3518;
  position: relative;
  overflow: hidden;
}
.mission::before {
  content: "";
  position: absolute;
  top: -20px;
  right: -20px;
  width: 160px;
  height: 160px;
  background: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Cpath d='M50 5 L61 35 L95 35 L68 57 L79 90 L50 70 L21 90 L32 57 L5 35 L39 35 Z' fill='none' stroke='rgba(255,255,255,0.08)' stroke-width='1'/%3E%3C/svg%3E") center/contain no-repeat;
  opacity: 0.4;
  pointer-events: none;
}
.mission::after {
  content: "";
  position: absolute;
  bottom: -30px;
  left: -30px;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.07);
  pointer-events: none;
}
.mission > p { margin: 0 0 12px; font-size: 12px; font-weight: 700; letter-spacing: 0.06em; opacity: 0.85; }
.mission h2 { font-size: 26px; line-height: 1.3; margin: 0 0 14px; font-weight: 800; }
.mission > span { line-height: 1.6; font-size: 13px; opacity: 0.9; }
.gold-btn {
  background: #d5962b;
  color: #fff;
  border-radius: 7px;
  padding: 11px 18px;
  margin-top: 20px;
  width: max-content;
  font-weight: 800;
  font-size: 13.5px;
  display: inline-flex;
  align-items: center;
  gap: 6px;
  transition: opacity 0.2s;
}
.gold-btn:hover { opacity: 0.9; }

/* Photo card */
.photo-card {
  border-radius: 12px;
  overflow: hidden;
  background: #fff;
  box-shadow: 0 4px 18px #0b2d3512;
  border: 1px solid var(--line);
}
.photo-card img { width: 100%; height: 195px; object-fit: cover; display: block; }
.stat-row {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 16px 18px;
  gap: 10px;
}
.stat-row > div {
  display: flex;
  flex-direction: column;
  gap: 5px;
  border-right: 1px solid #e5eaea;
  padding-right: 10px;
  align-items: flex-start;
}
.stat-row > div:last-child { border: 0; }
.stat-row b { color: #173a45; font-size: 12.5px; display: block; }
.stat-row small { color: #3e4b5e; font-size: 11.5px; line-height: 1.3; }

/* Why card */
.why {
  background: #fff;
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 28px 26px;
  box-shadow: 0 4px 18px #0b2d3512;
}
.why h2 { font-size: 16px; color: var(--ink); font-weight: 900; letter-spacing: 0.04em; margin: 0 0 18px; }
.why ul { list-style: none; padding: 0; margin: 0; display: grid; gap: 15px; }
.why li { display: flex; gap: 12px; align-items: flex-start; }
.why-check {
  width: 22px;
  height: 22px;
  border-radius: 50%;
  background: var(--green);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  flex-shrink: 0;
  margin-top: 1px;
  font-weight: 900;
}
.why b { display: block; font-size: 13.5px; color: #0d1f2d; margin-bottom: 3px; }
.why span { display: block; color: #344054; font-size: 12.5px; line-height: 1.4; }

/* ─── BOTTOM CARDS ─── */
.bottom-cards {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 0 72px 24px;
}
.bottom-cards article {
  border: 1px solid var(--line);
  border-radius: 10px;
  background: #fff;
  min-height: 80px;
  display: flex;
  align-items: center;
  gap: 14px;
  padding: 18px 20px;
  box-shadow: 0 4px 14px #0b2d3510;
}
.bottom-icon {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 22px;
  flex-shrink: 0;
}
.icon-gold { background: #fdf4e3; color: var(--gold); }
.icon-teal { background: #e6f7f6; color: var(--green); }
.icon-blue { background: #e8f0fc; color: #3b6fce; }
.icon-green { background: #e8f9e8; color: #2e7d32; }

.bottom-cards b { color: #0d1f2d; display: block; margin-bottom: 5px; font-size: 13.5px; }
.bottom-cards small { color: #39465a; line-height: 1.35; font-size: 12.5px; }

/* ─── CONTACT ─── */
.contact-section {
  margin: 0 72px 32px;
  padding: 28px;
  border-radius: 12px;
  background: var(--soft);
  border: 1px solid var(--line);
}
.contact-section h2 { color: var(--green); }

/* ─── FOOTER ─── */
.site-footer {
  width: 100%;
  background: linear-gradient(135deg, #064f4c 0%, #087a72 100%);
  color: #fff;
  margin-top: 32px;
  border-top: 4px solid var(--gold);
  box-shadow: 0 -10px 28px rgba(4, 78, 74, 0.10);
}
.footer-inner {
  width: min(1280px, calc(100% - 48px));
  margin: 0 auto;
  padding: 18px 0 14px;
  display: grid;
  grid-template-columns: 1.05fr 1.55fr 1.1fr 1.25fr;
  gap: 22px;
  align-items: center;
}
.footer-brand {
  display: flex;
  align-items: center;
  gap: 12px;
  min-width: 0;
}
.footer-brand img {
  width: 48px;
  height: 48px;
  object-fit: contain;
  background: #fff;
  border-radius: 12px;
  padding: 5px;
  border: 1px solid rgba(225, 164, 39, 0.65);
  box-shadow: 0 6px 18px rgba(0,0,0,.12);
}
.footer-brand strong {
  display: block;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 1.1;
  font-weight: 800;
  color: #fff;
}
.footer-brand span,
.footer-contact span {
  display: block;
  color: rgba(255,255,255,0.88);
  font-size: 11.5px;
  line-height: 1.4;
}
.footer-brand span { margin-top: 3px; }
.footer-links {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 7px 14px;
  font-weight: 800;
  font-size: 12px;
}
.footer-links a {
  color: rgba(255,255,255,0.94);
  transition: color .2s, transform .2s;
  white-space: nowrap;
}
.footer-links a:hover {
  color: var(--gold);
  transform: translateY(-1px);
}
.footer-newsletter {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
}
.newsletter-form {
  display: flex;
  align-items: center;
  gap: 6px;
}
.newsletter-form input {
  width: 145px;
  height: 34px;
  border: 1px solid rgba(255,255,255,.24);
  background: rgba(255,255,255,.95);
  border-radius: 999px;
  padding: 0 12px;
  font-size: 11.5px;
  outline: none;
}
.newsletter-form button {
  height: 34px;
  border: 0;
  border-radius: 999px;
  background: var(--gold);
  color: #fff;
  font-weight: 800;
  font-size: 11.5px;
  padding: 0 13px;
  cursor: pointer;
  transition: transform .2s, filter .2s;
}
.newsletter-form button:hover { transform: translateY(-1px); filter: brightness(1.05); }
.social-links {
  display: flex;
  align-items: center;
  gap: 7px;
}
.social-links a {
  width: 31px;
  height: 31px;
  border-radius: 50%;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-weight: 900;
  font-size: 14px;
  border: 1px solid rgba(255,255,255,.28);
  background: rgba(255,255,255,.10);
  box-shadow: inset 0 0 0 1px rgba(255,255,255,.06);
  transition: transform .2s, background .2s, color .2s;
}
.social-links a:hover { transform: translateY(-2px); background: var(--gold); color: #073f3c; }
.social-links .facebook { font-family: Arial, sans-serif; font-size: 17px; }
.social-links .youtube { font-size: 12px; }
.social-links .instagram { font-size: 17px; }
.footer-contact {
  text-align: right;
}
.footer-bottom {
  border-top: 1px solid rgba(255,255,255,0.13);
  text-align: center;
  padding: 8px 20px 10px;
  color: rgba(255,255,255,0.82);
  font-size: 11.5px;
}

/* ================================================================
   RESPONSIVE COMPLET — Mihyarou Souna
   320px  → très petit mobile
   481px  → grand mobile
   768px  → tablette
   1025px → petit laptop
   1281px → écran moyen
   1537px → grand écran
   1921px → très grand écran (full width)
================================================================ */

/* ── Très grand écran 1921px+ ── */
@media (min-width: 1921px) {
  .header { padding: 0 80px; }
  .hero { min-height: 560px; }
  .hero-copy { padding: 72px 48px 60px 100px; }
  .hero h1 { font-size: 54px; }
  .lead { font-size: 18px; max-width: 620px; }
  .pillars { padding: 14px 100px 22px; gap: 22px; }
  .content-grid { padding: 0 100px 22px; gap: 28px; }
  .mission h2 { font-size: 32px; }
  .section-block { margin: 0 100px 36px; }
  .adm-hero, .adm-wrap { max-width: 1700px; }
  .schools-hero, .schools-wrap { max-width: 1700px; }
  .programs-hero, .programs-wrap { max-width: 1700px; }
  .contact-hero, .contact-wrap { max-width: 1700px; }
  .presentation-hero, .presentation-wrap { max-width: 1700px; }
  .ms-footer-wrap { max-width: 1800px; padding: 14px 40px; }
}

/* ── Grand écran 1537–1920px ── */
@media (min-width: 1537px) and (max-width: 1920px) {
  .header { padding: 0 60px; }
  .hero-copy { padding: 64px 40px 56px 88px; }
  .hero h1 { font-size: 48px; }
  .pillars { padding: 12px 88px 20px; }
  .content-grid { padding: 0 88px 20px; }
  .section-block { margin: 0 88px 32px; }
  .ms-footer-wrap { max-width: 1700px; padding: 12px 60px; }
}

/* ── Écran moyen 1281–1536px ── */
@media (min-width: 1281px) and (max-width: 1536px) {
  .header { padding: 0 48px; }
  .hero-copy { padding: 60px 36px 52px 80px; }
  .hero h1 { font-size: 44px; }
  .pillars { padding: 10px 80px 18px; }
  .content-grid { padding: 0 80px 18px; }
  .section-block { margin: 0 80px 28px; }
  .ms-footer-wrap { max-width: 1500px; padding: 10px 48px; }
}

/* ── Petit laptop 1025–1280px ── */
@media (min-width: 1025px) and (max-width: 1280px) {
  .header { padding: 0 32px; gap: 16px; }
  .nav { gap: 16px; font-size: 12.5px; }
  .space-btn { padding: 12px 16px; font-size: 12.5px; }
  .hero { min-height: 420px; }
  .hero-copy { padding: 48px 28px 40px 60px; }
  .hero h1 { font-size: 38px; }
  .lead { font-size: 14.5px; }
  .pillars { padding: 10px 32px 16px; gap: 14px; }
  .content-grid { padding: 0 32px 16px; gap: 16px; }
  .mission h2 { font-size: 23px; }
  .section-block { margin: 0 32px 24px; }
  .campus-grid, .info-grid, .contact-grid { grid-template-columns: repeat(2, 1fr); }
  .ms-footer-wrap { max-width: 100%; padding: 10px 32px; }
  .footer-inner { grid-template-columns: 1fr 1fr; }
  .footer-contact { text-align: left; }
}

/* ── Footer responsive partagé 1050px et moins ── */
@media (max-width: 1050px) {
  .footer-inner { grid-template-columns: 1fr 1fr; text-align: left; }
  .footer-links { justify-content: flex-start; }
  .footer-newsletter { justify-content: flex-start; flex-wrap: wrap; }
  .footer-contact { text-align: left; }
  .ms-footer-wrap { grid-template-columns: 1fr; justify-items: center; text-align: center; }
  .ms-footer-brand { justify-self: center; }
  .ms-footer-right { justify-self: center; flex-wrap: wrap; justify-content: center; }
  .ms-footer-nav { flex-wrap: wrap; }
  .ms-footer-contact { text-align: left; }
}

/* ── Tablette 768–1024px ── */
@media (min-width: 768px) and (max-width: 1024px) {
  .header { padding: 0 24px; gap: 12px; height: auto; flex-wrap: wrap; }
  .nav { gap: 12px; font-size: 12px; flex: 1; }
  .nav a { padding: 20px 0 16px; }
  .space-btn { padding: 10px 14px; font-size: 12px; }
  .hero { grid-template-columns: 50% 50%; min-height: 380px; }
  .hero-copy { padding: 40px 20px 36px 40px; }
  .hero h1 { font-size: 34px; }
  .lead { font-size: 14px; max-width: 100%; }
  .mini-row { gap: 16px; }
  .pillars { padding: 10px 24px 16px; gap: 12px; grid-template-columns: repeat(3, 1fr); }
  .content-grid { padding: 0 24px 16px; grid-template-columns: 1fr 1.4fr 1fr; gap: 14px; }
  .mission h2 { font-size: 22px; }
  .section-block { margin: 0 24px 22px; }
  .campus-grid, .info-grid { grid-template-columns: repeat(2, 1fr); }
  .contact-grid { grid-template-columns: repeat(2, 1fr); }
  .adm-grid { grid-template-columns: 1fr 1fr; }
  .contact-main { grid-template-columns: 1fr; }
  .form-grid { grid-template-columns: 1fr; }
  .ms-footer-wrap { grid-template-columns: 1fr; text-align: center; padding: 12px 24px; }
  .ms-footer-brand { justify-self: center; }
  .ms-footer-right { justify-self: center; flex-wrap: wrap; justify-content: center; }
  .footer-inner { grid-template-columns: 1fr 1fr; }
}

/* ── Grand mobile 481–767px ── */
@media (min-width: 481px) and (max-width: 767px) {
  .header { padding: 10px 16px; height: auto; flex-wrap: wrap; position: sticky; top: 0; z-index: 100; }
  .brand img { width: 130px; }
  .menu { display: block; margin-left: auto; background: #fff; border: 1px solid var(--line); font-size: 22px; border-radius: 8px; padding: 6px 10px; cursor: pointer; }
  .nav { display: none; flex-direction: column; align-items: flex-start; width: 100%; gap: 0; border-top: 1px solid var(--line); margin-top: 8px; }
  .nav.open { display: flex; }
  .nav a { padding: 11px 0; font-size: 14px; width: 100%; border-bottom: 1px solid #f0f0f0; }
  .space-btn { display: none; }
  .hero { grid-template-columns: 1fr; }
  .hero-copy { padding: 32px 20px; }
  .hero h1 { font-size: 30px; }
  .hero-photo { height: 220px; }
  .lead { font-size: 14px; }
  .actions { flex-direction: row; flex-wrap: wrap; gap: 10px; }
  .btn { font-size: 13px; padding: 12px 18px; }
  .mini-row { flex-direction: column; gap: 12px; }
  .pillars { grid-template-columns: 1fr; padding: 10px 16px 16px; gap: 10px; }
  .content-grid { grid-template-columns: 1fr; padding: 0 16px 16px; }
  .section-block { margin: 0 16px 18px; }
  .campus-grid, .info-grid, .contact-grid { grid-template-columns: 1fr; }
  .adm-grid { grid-template-columns: 1fr; }
  .adm-banner { padding: 26px 20px; }
  .adm-banner h1 { font-size: 26px; }
  .schools-stats, .features { grid-template-columns: repeat(2, 1fr); }
  .contact-main { grid-template-columns: 1fr; }
  .form-grid { grid-template-columns: 1fr; }
  .stat-row { grid-template-columns: 1fr; }
  .ms-footer-wrap { grid-template-columns: 1fr; text-align: center; padding: 12px 16px; gap: 16px; }
  .ms-footer-brand { justify-self: center; margin-left: 0 !important; }
  .ms-footer-right { justify-self: center; flex-wrap: wrap; justify-content: center; gap: 12px; }
  .ms-footer-newsletter input { width: 130px; }
  .footer-inner { grid-template-columns: 1fr; text-align: center; }
  .footer-brand, .footer-links, .footer-newsletter { justify-content: center; }
  .footer-contact { text-align: center; }
}

/* ── Petit mobile 320–480px ── */
@media (max-width: 480px) {
  .header { padding: 8px 12px; height: auto; flex-wrap: wrap; position: sticky; top: 0; z-index: 100; background: #fff; }
  .brand img { width: 110px; }
  .menu { display: block; margin-left: auto; background: #fff; border: 1px solid var(--line); font-size: 20px; border-radius: 8px; padding: 6px 10px; cursor: pointer; }
  .nav { display: none; flex-direction: column; align-items: flex-start; width: 100%; gap: 0; border-top: 1px solid var(--line); margin-top: 6px; }
  .nav.open { display: flex; }
  .nav a { padding: 10px 0; font-size: 13.5px; width: 100%; border-bottom: 1px solid #f0f0f0; }
  .space-btn { display: none; }
  .hero { grid-template-columns: 1fr; }
  .hero-copy { padding: 24px 14px 20px; }
  .hero h1 { font-size: 26px; line-height: 1.2; }
  .welcome { font-size: 11px; }
  .lead { font-size: 13.5px; line-height: 1.6; }
  .actions { flex-direction: column; gap: 8px; }
  .btn { width: 100%; justify-content: center; font-size: 13px; padding: 12px 16px; }
  .mini-row { flex-direction: column; gap: 10px; }
  .mini-row > div { font-size: 11px; }
  .hero-photo { height: 190px; }
  .pillars { grid-template-columns: 1fr; padding: 8px 12px 14px; gap: 8px; }
  .pillar { padding: 14px 16px; min-height: auto; }
  .round { width: 44px; height: 44px; font-size: 20px; }
  .pillar h3 { font-size: 15px; }
  .pillar p { font-size: 12px; }
  .content-grid { grid-template-columns: 1fr; padding: 0 12px 14px; gap: 12px; }
  .mission { padding: 22px 18px; min-height: auto; }
  .mission h2 { font-size: 20px; }
  .mission > span { font-size: 12.5px; }
  .gold-btn { font-size: 12.5px; padding: 9px 14px; }
  .why h2 { font-size: 14px; }
  .why b { font-size: 12.5px; }
  .why span { font-size: 11.5px; }
  .section-block { margin: 0 12px 16px; }
  .section-title h2 { font-size: 20px; }
  .campus-grid, .info-grid, .contact-grid { grid-template-columns: 1fr; gap: 10px; }
  .campus-card, .info-card { padding: 16px; }
  .campus-card h3, .info-card h3 { font-size: 16px; }
  .soft-block { padding: 14px; }
  .adm-banner { padding: 22px 14px; border-radius: 14px; }
  .adm-banner h1 { font-size: 22px; }
  .adm-banner p { font-size: 13px; }
  .adm-grid { grid-template-columns: 1fr; gap: 10px; }
  .adm-card { padding: 16px; border-radius: 14px; }
  .adm-card h2 { font-size: 17px; }
  .adm-tabs { gap: 6px; }
  .adm-tab { font-size: 11.5px; padding: 6px 10px; }
  .adm-cta { padding: 18px 14px; flex-direction: column; gap: 12px; border-radius: 14px; }
  .adm-cta h2 { font-size: 18px; }
  .schools-banner { padding: 22px 14px !important; border-radius: 14px !important; }
  .schools-banner h1 { font-size: 24px !important; }
  .schools-stats, .features { grid-template-columns: 1fr 1fr !important; gap: 8px !important; }
  .schools-stat { padding: 14px 10px !important; }
  .programs-banner { padding: 22px 14px; border-radius: 14px; }
  .programs-banner h1 { font-size: 24px; }
  .program-card { padding: 18px 14px; border-radius: 14px; }
  .grid { grid-template-columns: 1fr !important; gap: 10px !important; }
  .stats { grid-template-columns: 1fr 1fr !important; gap: 10px !important; }
  .contact-hero { padding: 0 12px !important; }
  .contact-banner { padding: 22px 14px !important; border-radius: 14px !important; }
  .contact-banner h1 { font-size: 22px !important; }
  .contact-wrap { padding: 0 12px !important; }
  .contact-grid { grid-template-columns: 1fr !important; }
  .contact-main { grid-template-columns: 1fr !important; }
  .form-grid { grid-template-columns: 1fr !important; }
  .contact-card { padding: 14px !important; }
  .contact-card h2 { font-size: 17px !important; }
  .presentation-hero { padding: 0 12px !important; }
  .presentation-wrap { padding: 0 12px !important; }
  .presentation-grid { grid-template-columns: 1fr !important; gap: 10px !important; }
  .presentation-card { padding: 18px 14px !important; }
  .stats-compact { grid-template-columns: 1fr 1fr !important; gap: 8px !important; }
  .stat-row { grid-template-columns: 1fr; }
  .stat-row > div { border-right: none; border-bottom: 1px solid #e5eaea; padding-bottom: 8px; }
  .stat-row > div:last-child { border-bottom: 0; }
  .ms-footer-wrap { grid-template-columns: 1fr; text-align: center; padding: 10px 12px; gap: 14px; }
  .ms-footer-brand { justify-self: center; margin-left: 0 !important; flex-direction: column; align-items: center; text-align: center; gap: 8px; }
  .ms-footer-right { justify-self: center; flex-direction: column; align-items: center; gap: 10px; width: 100%; }
  .ms-footer-newsletter { flex-direction: column; align-items: center; gap: 6px; width: 100%; }
  .ms-footer-newsletter input { width: 100%; max-width: 240px; }
  .ms-footer-newsletter button { width: 100%; max-width: 240px; }
  .ms-footer-nav { gap: 10px 14px; justify-content: center; flex-wrap: wrap; }
  .ms-footer-nav a { font-size: 12px; }
  .footer-inner { grid-template-columns: 1fr; text-align: center; gap: 12px; }
  .footer-brand, .footer-links, .footer-newsletter { justify-content: center; }
  .footer-contact { text-align: center; }
  .newsletter-form { justify-content: center; flex-wrap: wrap; gap: 6px; }
  .newsletter-form input { width: 100%; max-width: 220px; }
  .quick-contact-content { grid-template-columns: 1fr !important; padding: 18px 14px !important; }
  .contact-stats { grid-template-columns: 1fr 1fr !important; }
}

/* Lien Parents/Professeurs dans le menu hamburger mobile */
@media (max-width: 767px) {
  .nav-portail {
    display: flex;
    align-items: center;
    padding: 10px 0;
    font-size: 13.5px;
    font-weight: 800;
    color: #075e57;
    border-top: 2px solid #eef2f2;
    margin-top: 4px;
    width: 100%;
    border-bottom: none;
  }
  .nav-portail::before {
    content: "👤";
    margin-right: 8px;
    font-size: 15px;
  }
}
@media (max-width: 480px) {
  .nav-portail {
    font-size: 13px;
  }
}
