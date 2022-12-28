let header__burger = document.querySelector('.header-top__burger');
let header_menu = document.querySelector('.header-top__menu');
let lock = document.querySelector('body');

header__burger.onclick = function () {
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    lock.classList.toggle('lock');
}
