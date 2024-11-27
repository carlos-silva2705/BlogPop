document.querySelectorAll('.btn-one').forEach(button => {
  button.addEventListener('click', function (e) {
    // Remove qualquer efeito anterior
    const existingRipple = button.querySelector('ripple');
    if(existingRipple) {
      existingRipple.remove();
    }
    // Criar o efeito do ripple
    const ripple = document.createElement('span');
    ripple.classList.add('ripple');

    const rect = button.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Definir tamanho e posição do ripple
    ripple.style.width = ripple.style.height = Math.max(rect.width, rect.height) + 'px';
    ripple.style.left = `${x - ripple.offsetWidth / 2}px`;
    ripple.style.top = `${y - ripple.offsetHeight / 2}px`;

    // Adicionar o ripple ao botão
    button.appendChild(ripple);

    // Remover o rippler após animar
    ripple.addEventListener('animationend', () => ripple.remove());

    // Abrir menu
    const menuOverlay = document.querySelector('.menu-overlay');
    menuOverlay.classList.remove('hidden');
  })
});

// Fechar menu ao clicar fora
document.querySelector('.menu-overlay').addEventListener('click', function(e) {
  if (e.target === this) {
    this.classList.add('hidden');
  }
});

