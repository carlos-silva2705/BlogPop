// Obtém o caminho atual da página
const currentPage = window.location.pathname;

// Seleciona o link do header
const booksLink = document.getElementById('books-link');

// Verifica se estamos na página certa e desabilita o botão do header
if (currentPage.includes('books.html')) {
  booksLink.classList.add('inactive');
}

// Funcionalidade da barra de pesquisa
document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector('.input');
  const bookItems = document.querySelectorAll('.item');

  // Mostrar resultado ao pesquisar
  const filterBooks = () => {
    const query = searchInput.value.toLowerCase(); // Converte as buscar para letras minusculas

    bookItems.forEach (book => {
      const title = book.getAttribute('data-title').toLowerCase();

      if (title.includes(query)) {
        book.style.display = "block";
      } else {
        book.style.display = "none";
      }
    });
  };

  searchInput.addEventListener('input', filterBooks);
});