const btn = document.getElementById('menu-btn')
const nav = document.getElementById('menu')

btn.addEventListener('click', () => {
  btn.classList.toggle('open')
  nav.classList.toggle('flex')
  nav.classList.toggle('hidden')

  const isOpen = btn.classList.contains('open');
  btn.src = isOpen ? 'images/hamburger-close.svg' : 'images/hamburger-open.svg';
})
