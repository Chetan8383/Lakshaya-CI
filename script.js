
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


// ///////////////////////WEB_DEV_PROJECT///////////////////////////

var swiper = new Swiper(".web-dev-project", {
    slidesPerView: 1,
    spaceBetween: 10,
    scrollbar: {
        el: ".swiper-scrollbar",
        hide: true,
    },
    autoplay: {
        delay: 250,
        disableOnInteraction: false,
    },

    breakpoints: {
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 4,
            spaceBetween: 40,
        },
        1024: {
            slidesPerView: 5,
            spaceBetween: 50,
        },
    },
});

// /////////////WEB_DEV_PROJECT//////////

document.addEventListener('DOMContentLoaded', () => {

    //------ Slider Begin
    const CaroS = document.querySelector('.web-dev-carousel');
    const CaroSlider = new MicroSlider(CaroS, { indicators: true, indicatorText: '' });
    const hammer = new Hammer(CaroS);
    const CaroSTimer = 2000;
    let CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);

    //------- Mouseenter Event
    CaroS.onmouseenter = function (e) {
        clearInterval(CaroAutoplay);
        console.log(e.type + ' mouse detected');
    }

    //----- Mouseleave Event
    CaroS.onmouseleave = function (e) {
        clearInterval(CaroAutoplay);
        CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
        console.log(e.type + ' mouse detected');
    }

    //----- Mouseclick Event
    CaroS.onclick = function (e) {
        clearInterval(CaroAutoplay);
        console.log(e.type + ' mouse detected');
    }

    //------ Gesture Tap Event
    hammer.on('tap', function (e) {
        clearInterval(CaroAutoplay);
        console.log(e.type + ' gesture detected');
    });

    //----- Gesture Swipe Event
    hammer.on('swipe', function (e) {
        clearInterval(CaroAutoplay);
        CaroAutoplay = setInterval(() => CaroSlider.next(), CaroSTimer);
        console.log(e.type + ' gesture detected');
    });

});