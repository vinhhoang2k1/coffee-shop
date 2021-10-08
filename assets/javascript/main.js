let menu = document.querySelector("#menu-btn");
let navbar = document.querySelector(".navbar");
let navLink = navbar.querySelectorAll('.navbar-link')
// console.log(navLink);

Array.from(navLink).forEach((item) => {
    item.onclick = () => {
        let curren = document.querySelector('.navbar-link.active');
        curren.classList.remove('active');
        item.classList.add('active');
    }
})

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
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
        loop: true,
        grabCursor: true,

    },
});