const btnModal = document.getElementById('open-modal-btn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('close-modal-btn');
const btnModalAside = document.getElementById('open-aside-btn');
const asideMod = document.getElementById('aside__mod');
const asideCloseBtn = document.getElementById('aside__modal__close-btn');
const openAsideModalBtn = document.getElementById('open-aside-modal-btn');
const asideFormBtn = document.querySelector('.aside__modal__form');

btnModal.addEventListener('click', function () {
    modal.classList.add('open');
})

closeBtn.addEventListener('click', function () {
    modal.classList.remove('open');
})

btnModalAside.addEventListener('click', function () {
    asideMod.classList.add('open');
})

asideCloseBtn.addEventListener('click', function () {
    asideMod.classList.remove('open')
})

openAsideModalBtn.addEventListener('click', function () {
    asideMod.classList.remove('open')
    modal.classList.add('open');
})

asideFormBtn.addEventListener('click', function (e) {
    e.preventDefault()
})

let swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    mousewheel: true,
    keyboard: true,
    loop: true,
    slidesPerView: 3
});