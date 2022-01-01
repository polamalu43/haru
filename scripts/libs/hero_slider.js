class heroSlider {
    constructor(el) {
        this.el = el;
    }

    initSwiper() {
        return new Swiper( this.el, {
            loop: true,
        
            pagination: {
            el: '.swiper-pagination',
            },
            autoplay: {
                delay: 4000,
                disableOnInteraction: false,
            },
        });
    }

    initSwiper2() {
        return new Swiper( this.el, {
            loop: true,
            slidesPerView: 1.5,
            spaceBetween: 25,
            centeredSlides : true,
            roundLengths: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }

    initSwiper3() {
        return new Swiper( this.el, {
            slidesPerView: 1.5,
            spaceBetween: 25,
            centeredSlides : true,
            roundLengths: true,
            navigation: {
                nextEl: '.swiper-button-next',
                prevEl: '.swiper-button-prev',
            },
        });
    }
}

  