// import Swiper from 'swiper';
const swiper = new Swiper('.swiper', {
    spaceBetween:24,
    slidesPerView: 3,
    loop:true,
    width: 500,
    pagination:{
        el:'.swiper-pagination',
        clickable:true,
    }
})