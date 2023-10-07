const swiper = new Swiper(".swiper", {
    // Optional parameters
    direction: "horizontal",
    loop: true,
    slidesPerView: 2,
    slidesPerView: "auto",
    spaceBetween: -80,
  
    breakpoints: {
      425: {
        spaceBetween: -140,
      },
      580: {
        slidesPerView: 3,
        spaceBetween: 150,
      },
      768: {
          slidesPerView: 2,
        spaceBetween: 150,
      },
      1280: {
          slidesPerView: 3,
        spaceBetween: 250,
      },
      1920: {
          slidesPerView: 5,
        spaceBetween: 390,
      },
    },
  });