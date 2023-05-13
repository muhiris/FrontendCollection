const hamburger = document.querySelector(`.hamburger`);
const navUl = document.querySelector(`.myLinks`);
const crossMenu = document.querySelector('.cross-menu');
hamburger.addEventListener('click', () => {
  navUl.classList.add('show');
  crossMenu.classList.remove('hidden');
});

document.querySelector('.cross-menu').addEventListener('click', () => {
  navUl.classList.remove('show');
  crossMenu.classList.add('hidden');
});
