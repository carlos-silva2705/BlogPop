
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