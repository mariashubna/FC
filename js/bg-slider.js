document.addEventListener("DOMContentLoaded", function () {
    const counterBlockColor = document.querySelector(".header-counter-block-color");
    const counterText = document.querySelector(".header-counter-text");
    const headerCounterBlock = document.querySelector(".header-counter-block");
    const slideContainer = document.querySelector(".header");

    const slidesMobile = [
        {
            text: "Lift or go f*rk",
            simpleText: "",
            bgImage: "url(../images/bg-mobile-1.jpg)",
        },
        {
            text: "Philosophy",
            simpleText: "of Aesthetic Life",
            bgImage: "url(../images/bg-mobile-2.jpg)",
        },
        {
            text: "Push",
            secondText: "or Die",
            simpleText: "",
            bgImage: "url(../images/bg-mobile-3.jpg)",
        },
    ];

    const slidesTablet = [
        {
            text: "Lift or go f*rk",
            simpleText: "",
            bgImage: "url(../images/bg-tablet-1.jpg)",
        },
        {
            text: "Join the Lifestyle",
            simpleText: "of Aesthetic Life",
            bgImage: "url(../images/bg-tablet-3.jpg)",
        },
        {
            text: "Philosophy",
            simpleText: "of Aesthetic Life",
            bgImage: "url(../images/bg-tablet-2.jpg)",
        },
        {
            text: "Push",
            secondText: "or Die",
            simpleText: "",
            bgImage: "url(../images/bg-tablet-4.jpg)",
        },
        
    ];

    const slides1280 = [
        {
            text: "Lift or go f*rk",
            simpleText: "",
            bgImage: "url(../images/bg-desktop-1.jpg)",
        },
        {
            text: "Join the Lifestyle",
            simpleText: "of",
            simpleTextSecond: "Aesthetic Life",
            bgImage: "url(../images/bg-desktop-2.jpg)",
            color: "white",
            fill: "black",
            width: "860px",
        },
        {
            text: "Philosophy",
            simpleText: "of",
            simpleTextSecond: "Aesthetic Life",
            bgImage: "url(../images/bg-desktop-3.jpg)",
            color: "white",
            fill: "black",
        },
        {
            text: "Push",
            secondText: "or Die",
            simpleText: "",
            bgImage: "url(../images/bg-desktop-4.jpg)",
        },
        
        
    ];

    const slides1920 = [
        {
            text: "Lift or go f*rk",
            simpleText: "",
            bgImage: "url(../images/bg-full-hd-1.jpg)",
        },
        {
            text: "Join the Lifestyle",
            simpleText: "of Aesthetic Life",
            bgImage: "url(../images/bg-full-hd-2.jpg)",
            fontSize: "88px",
            fill: "black",
        },
        {
            text: "Philosophy",
            simpleText: "of Aesthetic Life",
            bgImage: "url(../images/bg-full-hd-3.jpg)",
            fontSize: "88px",
            fill: "black",
        },
        {
            text: "Push",
            secondText: "or Die",
            simpleText: "",
            bgImage: "url(../images/bg-full-hd-4.jpg)",
        },
    ];

    // Высоты контейнера для разных устройств
    const maxColorHeightMobile = 70; // Высота для мобильных устройств
    const maxColorHeightTablet = 116; // Высота для планшетных устройств
    const maxColorHeightDesktop = 176; // Высота для десктопных устройств
    const maxColorHeightFull = 215;
   

    let currentSlide = 0;

    function updateSlide() {
        let slides;
        let maxColorHeight;
    
        if (window.innerWidth >= 1920)  {
            slides = slides1920;
            maxColorHeight = maxColorHeightFull;
        } else if (window.innerWidth >= 1280) {
            slides = slides1280;
            maxColorHeight = maxColorHeightDesktop;
        } else if (window.innerWidth >= 768) {
            slides = slidesTablet;
            maxColorHeight = maxColorHeightTablet;
        } else {
            slides = slidesMobile;
            maxColorHeight = maxColorHeightMobile;
        }
    
        const slide = slides[currentSlide];
    
        counterBlockColor.style.height = maxColorHeight + "px";
        slideContainer.style.backgroundImage = slide.bgImage;
        slideContainer.querySelector(".header-content-text").textContent = slide.text;
        slideContainer.querySelector(".header-content-text").style.color = slide.color || "black"; // Устанавливаем цвет текста
        slideContainer.querySelector(".header-content-text").style.fontSize = slide.fontSize || "";  
        slideContainer.querySelector(".header-content-second").textContent = slide.secondText || "";
        slideContainer.querySelector(".header-simple-text").textContent = slide.simpleText;
        slideContainer.querySelector(".header-simple-second").textContent = slide.simpleTextSecond || "";       
        slideContainer.querySelector(".header-content-text").style.width = slide.width || "";
        const headerIcons = slideContainer.querySelectorAll(".header-icon");
headerIcons.forEach(icon => {
    icon.style.fill = slide.fill || "white";
});
    
        updateCounterTextAndColor(currentSlide, slides.length, maxColorHeight);
    }

    function nextSlide() {
        const slides = window.innerWidth >= 768 ? slidesTablet : slidesMobile;
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlide();
    }

    function prevSlide() {
        const slides = window.innerWidth >= 768 ? slidesTablet : slidesMobile;
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        updateSlide();
    }

    function updateCounterTextAndColor(slideIndex, slidesLength, maxColorHeight) {
        const slideNumber = (slideIndex + 1).toString().padStart(2, "0");
        counterText.textContent = slideNumber;

        const colorHeight = ((slideIndex + 1) / slidesLength) * maxColorHeight;
        counterBlockColor.style.height = colorHeight + "px";
    }

    const nextButton = document.querySelector(".header-scroll-btn:nth-child(2)");
    const prevButton = document.querySelector(".header-scroll-btn:nth-child(1)");

    nextButton.addEventListener("click", nextSlide);
    prevButton.addEventListener("click", prevSlide);

    updateSlide();

    window.addEventListener("resize", updateSlide);
});
