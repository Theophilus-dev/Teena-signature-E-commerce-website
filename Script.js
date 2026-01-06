const bar = document.getElementsByClassName('ri-menu-fold-line')[0];
const close = document.getElementsByClassName('ri-close-line')[0];
const nav = document.getElementById('nav-bar');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}


if (close) {
  close.addEventListener('click', () => {
    nav.classList.toggle('active');
  });
}
