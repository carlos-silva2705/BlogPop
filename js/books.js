// Obtém o caminho atual da página
const currentPage = window.location.pathname;

// Seleciona o link do header
const booksLink = document.getElementById('books-link');

// Verifica se estamos na página certa e desabilita o botão do header
if (currentPage.includes('books.html')) {
  booksLink.classList.add('inactive');
}