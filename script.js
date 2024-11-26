let currentIndex = 0;

function changeImage(direction) {
  const items = document.querySelectorAll('.carousel-item');
  items[currentIndex].classList.remove('active');

  currentIndex = (currentIndex + direction + items.length) % items.length;

  items[currentIndex].classList.add('active');
}