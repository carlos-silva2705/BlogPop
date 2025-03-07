document.addEventListener('DOMContentLoaded', () => {
  // Pega a URL atual da página sem o dominio
  let currentPage = window.location.pathname.split('/').pop();

  // Seleciona todos os botoes que possuem link
  let menuButtons = document.querySelectorAll('div a');

  menuButtons.forEach(menuButton => {
    // Obtém o href do botao, removendo a barra inicial se necessario
    let pageLink = menuButton.getAttribute('href').split('/').pop();

    // Se a pag atual for igual ao link do botao, desabilita-o
    if (pageLink === currentPage) {
      menuButton.classList.add('inactive'); // Adiciona classe no CSS

    }
  })
});