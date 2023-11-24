const swiper = new Swiper('.swiper', {
    spaceBetween:24,
    slidesPerView: 3,
    direction:'horizontal',
    // loopedSlides: 1,
    loopFillGroupWithBlank: true,
    slidesPerGroup: 1,
    loop: true,
    speed:1200,
    grabCursor: true,
    centeredSlides: true,
    mousewheel: true,
    width: 1000,
    
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    navigation:{
        nextEl:'.swiper-navigation-next',
        prevEl:'.swiper-navigation-prev',
    },
    
})