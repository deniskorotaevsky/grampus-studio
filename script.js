const btnModal = document.getElementById('open-modal-btn');
const myModal = document.getElementById('my-modal');
const closeBtn = document.getElementById('close-modal-btn');

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

btnModal.addEventListener('click', function () {
    myModal.classList.add('open')
})

closeBtn.addEventListener('click', function () {
    myModal.classList.remove('open')
})