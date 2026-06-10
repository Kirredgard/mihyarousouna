const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav');
const spaceBtn = document.querySelector('.space-btn');

if (menu && nav) {
  menu.addEventListener('click', () => nav.classList.toggle('open'));
}

// Sur mobile : déplacer le bouton Parents/Professeurs dans le nav
function gererSpaceBtn() {
  if (!spaceBtn) return;
  const isMobile = window.innerWidth <= 767;
  const lienPortail = nav ? nav.querySelector('.nav-portail') : null;

  if (isMobile) {
    // Cacher le bouton flottant du header
    spaceBtn.style.display = 'none';
    // Ajouter un lien dans le nav si pas déjà présent
    if (nav && !lienPortail) {
      const a = document.createElement('a');
      a.href = spaceBtn.getAttribute('href');
      a.className = 'nav-portail';
      a.textContent = 'Parents / Professeurs';
      nav.appendChild(a);
    }
  } else {
    // Desktop : remettre le bouton, supprimer le lien nav
    spaceBtn.style.display = '';
    if (nav && lienPortail) lienPortail.remove();
  }
}

gererSpaceBtn();
window.addEventListener('resize', gererSpaceBtn);

