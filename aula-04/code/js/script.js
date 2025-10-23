// Aguarda o documento HTML ser completamente carregado
document.addEventListener('DOMContentLoaded', function () {
  const btnMobile = document.getElementById('btn-mobile');
  const nav = document.getElementById('nav');

  function toggleMenu(event) {
    // Evita o comportamento padrão de borbulhamento do evento (útil em formulários)
    if (event.type === 'touchstart') event.preventDefault();

    // Adiciona ou remove a classe 'active' do elemento nav
    nav.classList.toggle('active');

    // Atualiza os atributos de acessibilidade
    const isActive = nav.classList.contains('active');
    btnMobile.setAttribute('aria-expanded', isActive);

    if (isActive) {
      btnMobile.setAttribute('aria-label', 'Fechar Menu');
    } else {
      btnMobile.setAttribute('aria-label', 'Abrir Menu');
    }
  }

  // Adiciona o evento de clique ao botão
  btnMobile.addEventListener('click', toggleMenu);
  // Adiciona o evento de toque (para melhor responsividade em dispositivos móveis)
  btnMobile.addEventListener('touchstart', toggleMenu);
});
