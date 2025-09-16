import { setLogado } from './checkLogin.js';

// Função para criar e renderizar o formulário de login
export function renderLoginForm(containerSelector = 'body') {
  const container = document.querySelector(containerSelector);

  // Cria o HTML do formulário
  const formDiv = document.createElement('div');
  formDiv.innerHTML = `
  <div class="login-form">
    <h2 class="login-form__title">Login</h2>
    <button id="btn-login" class="login-form__button">Entrar</button>
  </div>
  `;

  // Limpa o container e adiciona o formulário
  container.innerHTML = '';
  container.appendChild(formDiv);

  // Adiciona evento ao botão
  formDiv.querySelector('#btn-login').addEventListener('click', () => {
    setLogado(true);
    window.location.href = '/dashboard.html';
  });
}