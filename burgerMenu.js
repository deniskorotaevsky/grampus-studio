const headerBurger = document.querySelector('.header__burger');
const headerMenu = document.querySelector('.header__box__row');
const back = document.querySelector('body');
const menuItem = document.querySelector('header__menu__item');

headerBurger.addEventListener('click', function () {
    headerBurger.classList.toggle('active');
    headerMenu.classList.toggle('active');
    back.classList.toggle('lock');
});

menuItem.addEventListener('click', function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
});