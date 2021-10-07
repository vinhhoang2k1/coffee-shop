let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");


menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
document.querySelectorAll(".image-slide img").forEach(images => {
    images.onclick = () => {
        var src = images.getAttribute("src");
        document.querySelector('.home-img').src = src
    };
})
var swiper = new Swiper(".review-slider", {
    spaceBetween: 20,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 7500,
        disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView: 0,

        },
        768: {
            slidesPerView: 2,

        },
        loop : true,
        grabCursor : true,

    },
});