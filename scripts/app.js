const swiper = new Swiper('.swiper', {
    spaceBetween:24,
    slidesPerView: 3,
    direction:'horizontal',
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
    breakpoints:{
        1373:{
            slidesPerView: 2.5,
            width: 700,
        },
        900:{
            slidesPerView: 1.5,
            width: 500,
        },
        697:{
            slidesPerView: 1,
            width: 290,
            spaceBetween:16,
        },
        420:{
            slidesPerView: 1,
            width: 250,
            spaceBetween:16,
        },
        364:{
            slidesPerView: 1,
            width: 240,
            spaceBetween:16,
        }
    },
    navigation:{
        nextEl:'.swiper-navigation-next',
        prevEl:'.swiper-navigation-prev',
    },
    
})
window.onscroll = function(){
    const header = document.getElementById('sticky-header');
    if(window.pageYOffset > 0){
        header.style.backgroundColor = '#475569';
    }else{
        header.style.backgroundColor = 'transparent';
    }
}
