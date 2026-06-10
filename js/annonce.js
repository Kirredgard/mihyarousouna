(function() {
  // ── Configuration ────────────────────────────────────────────
  var _depth = (window.location.pathname.match(/\//g) || []).length - 1;
  var _prefix = _depth > 1 ? '../' : '';
  var _lang = localStorage.getItem('ms_lang') || 'fr';
  var ANNONCE = {
    texte:  _lang === 'ar' ? "📢 التسجيلات 2026–2027 مفتوحة! الأماكن محدودة." : "📢 Inscriptions 2026–2027 ouvertes\u00a0! Places limitées.",
    bouton: _lang === 'ar' ? "تواصل معنا" : "Nous contacter",
    lien:   _prefix + "contact.html"
  };
  // ─────────────────────────────────────────────────────────────

  var CSS = [
    // Bandeau flottant
    '#ms-bandeau{position:fixed;bottom:20px;left:50%;transform:translateX(-50%);z-index:9999;display:flex;align-items:center;gap:12px;background:#075e57;color:#fff;border-radius:999px;padding:10px 16px 10px 18px;box-shadow:0 8px 28px rgba(7,94,87,.35);font-family:Nunito,Arial,sans-serif;white-space:nowrap;animation:ms-slidein-up .4s cubic-bezier(.22,.68,0,1.2);max-width:calc(100vw - 32px)}',
    '@keyframes ms-slidein-up{from{opacity:0;transform:translateX(-50%) translateY(18px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}',
    '#ms-bandeau-dot{width:8px;height:8px;border-radius:50%;background:#d79a12;flex-shrink:0;animation:ms-pulse 2s infinite}',
    '@keyframes ms-pulse{0%,100%{opacity:1;transform:scale(1)}50%{opacity:.6;transform:scale(.85)}}',
    '#ms-bandeau-texte{font-size:13px;font-weight:700;overflow:hidden;text-overflow:ellipsis}',
    '#ms-bandeau-btn{background:#d79a12;color:#fff;border:none;border-radius:999px;padding:7px 14px;font-size:12px;font-weight:900;cursor:pointer;text-decoration:none;white-space:nowrap;flex-shrink:0;transition:opacity .2s}',
    '#ms-bandeau-btn:hover{opacity:.88}',
    '#ms-bandeau-x{background:rgba(255,255,255,.15);border:none;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:13px;cursor:pointer;flex-shrink:0;transition:background .2s;line-height:1}',
    '#ms-bandeau-x:hover{background:rgba(255,255,255,.28)}',
    '@media(max-width:600px){#ms-bandeau{bottom:12px;padding:9px 12px 9px 14px;gap:8px}#ms-bandeau-texte{font-size:12px}#ms-bandeau-btn{padding:6px 10px;font-size:11px}}'
  ].join('');

  var style = document.createElement('style');
  style.textContent = CSS;
  document.head.appendChild(style);

  // ── Popup (une seule fois par session) ───────────────────────
  function afficherBandeau() {
    if (document.getElementById('ms-bandeau')) return;
    var b = document.createElement('div');
    b.id = 'ms-bandeau';
    b.innerHTML = [
      '<span id="ms-bandeau-dot"></span>',
      '<span id="ms-bandeau-texte">' + ANNONCE.texte + '</span>',
      '<a id="ms-bandeau-btn" href="' + ANNONCE.lien + '">' + ANNONCE.bouton + '</a>',
      '<button id="ms-bandeau-x" aria-label="Fermer la bannière">✕</button>'
    ].join('');
    document.body.appendChild(b);
    document.getElementById('ms-bandeau-x').addEventListener('click', function() {
      b.style.animation = 'ms-slidein-up .25s ease reverse';
      setTimeout(function() { b.remove(); }, 220);
    });
  }

  // Popup supprimé — bandeau flottant uniquement
  afficherBandeau();

})();
