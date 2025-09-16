// Inicializa o comportamento do menu mobile sobre uma navbar já presente no HTML
function initNavbarBehavior() {
  const mobileMenu = document.getElementById('mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  if (!mobileMenu || !navLinks) return;

  mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    mobileMenu.classList.toggle('active');
  });

  // Fecha o menu ao clicar em um link (mobile)
  navLinks.querySelectorAll('a').forEach(anchor => {
    anchor.addEventListener('click', () => {
      if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
        mobileMenu.classList.remove('active');
      }
    });
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavbarBehavior);
} else {
  initNavbarBehavior();
}