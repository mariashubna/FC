import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs'

// const swiper = new Swiper('.swiper-reviews', {
//     slidesPerView: 1.5,
//     perspective: true,
//     spaceBetween: 30,
//     // prev: {
//     //     translate: ['-50%', 0, 0],
//     //     rotate: [0, 0, -45],
//     //     opacity: 0.5,
//     //     scale: 0.8,
//     //     shadow: true,
//     //     origin: 'left bottom',
//     // },
//     pagination: '.swiper-pagination',
//     paginationClickable: true,
//     effect: 'coverflow',
//     loop: true,
//     centeredSlides: true,
//     // slidesPerView: 'auto',
//     coverflow: {
//         rotate: 0,
//         stretch: 100,
//         depth: 150,
//         modifier: 1.5,
//         slideShadows : false,
//     }
// });

const swiper = new Swiper('.swiper-reviews', {
    loop:true,
    effect: 'coverflow',
    grabCursor: false,
    centeredSlides: true,
    slidesPerView: 3,
    coverflowEffect: {
        rotate: 0,
        stretch: 10,
        depth: 800,
        modifier: 1,
        slideShadows : true,
    },
});

