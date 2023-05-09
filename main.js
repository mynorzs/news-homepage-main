const navMenu = document.querySelector('.nav-default');
const btnMenu = document.querySelector('.icon-nav-menu');
const btnClose = document.querySelector('.icon-nav-close');

btnMenu.addEventListener('click', function() {
  navMenu.classList.add('nav-modal');
  navMenu.classList.remove('nav-default');
})

btnClose.addEventListener('click', function() {
  navMenu.classList.add('nav-default');
  navMenu.classList.remove('nav-modal');
})