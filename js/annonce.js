(function() {
  // ── Configuration ────────────────────────────────────────────
  var _depth = (window.location.pathname.match(/\//g) || []).length - 1;
  var _prefix = _depth > 1 ? '../' : '';
  var ANNONCE = {
    texte:  "📢 Inscriptions 2026–2027 ouvertes\u00a0! Places limitées.",
    bouton: "Nous contacter",
    lien:   _prefix + "contact.html"
  };
  // ─────────────────────────────────────────────────────────────

  var CSS = [
    // Popup overlay
    '#ms-overlay{position:fixed;inset:0;background:rgba(10,40,38,.72);z-index:99999;display:flex;align-items:center;justify-content:center;padding:16px;backdrop-filter:blur(3px);animation:ms-fadein .3s ease}',
    '@keyframes ms-fadein{from{opacity:0}to{opacity:1}}',
    '#ms-popup{background:#fff;border-radius:20px;max-width:480px;width:100%;padding:36px 32px 28px;position:relative;box-shadow:0 32px 80px rgba(0,0,0,.22);animation:ms-slidein .35s cubic-bezier(.22,.68,0,1.2)}',
    '@keyframes ms-slidein{from{opacity:0;transform:translateY(24px) scale(.96)}to{opacity:1;transform:none}}',
    '#ms-popup-badge{display:inline-block;background:#eef8f6;color:#075e57;border-radius:999px;padding:6px 14px;font-size:12px;font-weight:800;letter-spacing:.04em;margin-bottom:18px}',
    '#ms-popup-title{font-size:22px;font-weight:900;color:#0c2b28;line-height:1.3;margin:0 0 10px;font-family:Poppins,Arial,sans-serif}',
    '#ms-popup-sub{font-size:14px;color:#486174;line-height:1.6;margin:0 0 24px}',
    '#ms-popup-actions{display:flex;gap:10px;flex-wrap:wrap}',
    '#ms-popup-btn{background:#d79a12;color:#fff;border:none;border-radius:999px;padding:13px 22px;font-size:14px;font-weight:900;cursor:pointer;text-decoration:none;transition:opacity .2s}',
    '#ms-popup-btn:hover{opacity:.88}',
    '#ms-popup-close-btn{background:#f4f6f8;color:#486174;border:none;border-radius:999px;padding:13px 22px;font-size:14px;font-weight:800;cursor:pointer;transition:background .2s}',
    '#ms-popup-close-btn:hover{background:#e8eaec}',
    '#ms-popup-x{position:absolute;top:14px;right:16px;background:none;border:none;font-size:22px;color:#aaa;cursor:pointer;line-height:1;padding:4px 8px;border-radius:50%;transition:background .2s}',
    '#ms-popup-x:hover{background:#f0f0f0;color:#333}',
    '@media(max-width:480px){#ms-popup{padding:28px 18px 22px;border-radius:16px}#ms-popup-title{font-size:19px}#ms-popup-actions{flex-direction:column}#ms-popup-btn,#ms-popup-close-btn{text-align:center;width:100%;box-sizing:border-box}}',
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

  if (!sessionStorage.getItem('annonce-fermee')) {
    var overlay = document.createElement('div');
    overlay.id = 'ms-overlay';
    overlay.innerHTML = [
      '<div id="ms-popup" role="dialog" aria-modal="true" aria-labelledby="ms-popup-title">',
      '  <button id="ms-popup-x" aria-label="Fermer">✕</button>',
      '  <div id="ms-popup-badge">📣 Annonce importante</div>',
      '  <h2 id="ms-popup-title">' + ANNONCE.texte + '</h2>',
      '  <p id="ms-popup-sub">Rejoignez le Complexe Scolaire Privé Franco-Arabe Mihyarou Souna pour l\'année 2026–2027. Prenez contact avec notre administration pour connaître les modalités et assurer la place de votre enfant.</p>',
      '  <div id="ms-popup-actions">',
      '    <a id="ms-popup-btn" href="' + ANNONCE.lien + '">' + ANNONCE.bouton + '</a>',
      '    <button id="ms-popup-close-btn">Fermer</button>',
      '  </div>',
      '</div>'
    ].join('');
    document.body.appendChild(overlay);

    function fermerPopup() {
      overlay.style.animation = 'ms-fadein .2s ease reverse';
      setTimeout(function() {
        overlay.remove();
        afficherBandeau();
      }, 180);
      sessionStorage.setItem('annonce-fermee', '1');
    }

    document.getElementById('ms-popup-x').addEventListener('click', fermerPopup);
    document.getElementById('ms-popup-close-btn').addEventListener('click', fermerPopup);
    overlay.addEventListener('click', function(e) { if (e.target === overlay) fermerPopup(); });
    document.addEventListener('keydown', function(e) { if (e.key === 'Escape') fermerPopup(); });

  } else {
    // Popup déjà vu → bandeau directement
    afficherBandeau();
  }

})();
