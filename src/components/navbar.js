// Importação da função para fazer logout (condicional)
let setLogado, isLogado;

// Verifica se estamos em uma página protegida
const isProtectedPage = document.querySelector('script[src*="checkLogin.js"]') !== null;

// Apenas importa as funções de login se estiver em uma página protegida
if (isProtectedPage) {
  import('./checkLogin.js').then(module => {
    setLogado = module.setLogado;
    isLogado = module.isLogado;
    
    // Adiciona o botão de logout se necessário
    if (isLogado()) {
      addLogoutButton();
    }
  });
}

// Função para adicionar o botão de logout
function addLogoutButton() {
  // Verificar se o botão já existe para evitar duplicação
  if (!document.getElementById('logout-btn')) {
    const container = document.querySelector('.navbar .container');
    const logoutBtn = document.createElement('button');
    logoutBtn.id = 'logout-btn';
    logoutBtn.className = 'logout-btn';
    logoutBtn.textContent = 'Logout';
    
    // Inserir antes do botão do menu mobile
    container.insertBefore(logoutBtn, document.getElementById('mobile-menu'));
    
    // Adicionar evento
    logoutBtn.addEventListener('click', () => {
      setLogado(false);
      window.location.href = '/login.html';
    });
  }
}

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
  
  // Se já existe um botão de logout, adiciona o evento
  const existingLogoutBtn = document.getElementById('logout-btn');
  if (existingLogoutBtn) {
    existingLogoutBtn.addEventListener('click', () => {
      setLogado(false);
      window.location.href = '/login.html';
    });
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initNavbarBehavior);
} else {
  initNavbarBehavior();
}