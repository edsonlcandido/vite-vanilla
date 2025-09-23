// Função para definir o status de login
export function setLogado(status) {
  localStorage.setItem('logado', status ? 'true' : 'false');
}

// Função para verificar se o usuário está logado
export function isLogado() {
  return localStorage.getItem('logado') === 'true';
}

// Redireciona para login.html se não estiver logado
export function checarLoginOuRedirecionar() {
  // Não redireciona se já estiver na página de login
  const paginaAtual = window.location.pathname;
  const ehPaginaLogin = paginaAtual.includes('login.html');
  
  if (!isLogado() && !ehPaginaLogin) {
    window.location.href = '/login.html';
  }
}

// No início do carregamento da página, verifica o status de login
window.addEventListener('load', checarLoginOuRedirecionar);

// Exemplo de uso:
// setLogado(true);  // Marca como logado
// setLogado(false); // Marca como deslogado
//