var swiper = new Swiper(".courses-slider", {
    spaceBetween: 10,
    grabCursor: true,
    // loop: true,


    pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
    },

    breakpoints: {
        540: {
            slidesPerView: 1.2,
        },
        768: {
            slidesPerView: 2.2,
        },
        1024: {
            slidesPerView: 3.2,
        },
    },
});


////////////////////////STUDENTS PROJECT//////////////

var swiper = new Swiper(".students-projects-slider", {
    effect: "cards",
    grabCursor: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
