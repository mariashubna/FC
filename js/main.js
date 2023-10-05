let titlePrograms = document.querySelectorAll(".spec-programs-item-title");
let dropDowns = document.querySelectorAll(".spec-programs-item__content");

// Add a click event listener to each title element
titlePrograms.forEach((titleProgram, index) => {
    titleProgram.addEventListener("click", () => {
        // Toggle the "spec-programs-item__content-active" class on the corresponding dropdown element
        dropDowns[index].classList.toggle("spec-programs-item__content-active");
        titlePrograms[index].classList.toggle("spec-programs-item-title-active");
    });
});


(() => {
    const mobileMenu = document.querySelector('.js-menu-container');
    const openMenuBtn = document.querySelector('.js-open-menu');
    const closeMenuBtn = document.querySelector('.js-close-menu');
    const menuItems = document.querySelectorAll('.mobile-menu__item');

    const toggleMenu = () => {
        const isMenuOpen =
            openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
        openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
        mobileMenu.classList.toggle('is-open');

        const scrollLockMethod = !isMenuOpen
            ? 'disableBodyScroll'
            : 'enableBodyScroll';
        // bodyScrollLock[scrollLockMethod](document.body);
    };

    openMenuBtn.addEventListener('click', toggleMenu);
    closeMenuBtn.addEventListener('click', toggleMenu);

    menuItems.forEach(item => {
        item.addEventListener('click', () => {
            toggleMenu(); // Закрывает модальное окно при нажатии на элемент меню
        });
    });

    window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
        if (!e.matches) return;
        mobileMenu.classList.remove('is-open');
        openMenuBtn.setAttribute('aria-expanded', false);
    });
})();


// -----------MODAL------------


// ----- bg-slider -----



// document.addEventListener("DOMContentLoaded", function () {
//     const counterBlockColor = document.querySelector(".header-counter-block-color");
//     const counterText = document.querySelector(".header-counter-text");
//     const headerCounterBlock = document.querySelector(".header-counter-block");
//     const slideContainer = document.querySelector(".header");

//     const slidesMobile = [
//         {
//             text: "Lift or go f*rk",
//             simpleText: "",
//             bgImage: "url(../images/bg-mobile-1.jpg)",
//         },
//         {
//             text: "Philosophy",
//             simpleText: "of Aesthetic Life",
//             bgImage: "url(../images/bg-mobile-2.jpg)",
//         },
//         {
//             text: "Push",
//             secondText: "or Die",
//             simpleText: "",
//             bgImage: "url(../images/bg-mobile-3.jpg)",
//         },
//     ];

//     const slidesTablet = [
//         {
//             text: "Lift or go f*rk",
//             simpleText: "",
//             bgImage: "url(../images/bg-tablet-1.jpg)",
//         },
//         {
//             text: "Join the Lifestyle",
//             simpleText: "of Aesthetic Life",
//             bgImage: "url(../images/bg-tablet-3.jpg)",
//         },
//         {
//             text: "Philosophy",
//             simpleText: "of Aesthetic Life",
//             bgImage: "url(../images/bg-tablet-2.jpg)",
//         },
//         {
//             text: "Push",
//             secondText: "or Die",
//             simpleText: "",
//             bgImage: "url(../images/bg-tablet-4.jpg)",
//         },
        
//     ];

//     const slides1280 = [
//         {
//             text: "Lift or go f*rk",
//             simpleText: "",
//             bgImage: "url(../images/bg-desktop-1.jpg)",
//         },
//         {
//             text: "Join the Lifestyle",
//             simpleText: "of",
//             simpleTextSecond: "Aesthetic Life",
//             bgImage: "url(../images/bg-desktop-2.jpg)",
//             color: "white",
//             fill: "black",
//             width: "860px",
//         },
//         {
//             text: "Philosophy",
//             simpleText: "of",
//             simpleTextSecond: "Aesthetic Life",
//             bgImage: "url(../images/bg-desktop-3.jpg)",
//             color: "white",
//             fill: "black",
//         },
//         {
//             text: "Push",
//             secondText: "or Die",
//             simpleText: "",
//             bgImage: "url(../images/bg-desktop-4.jpg)",
//         },
        
        
//     ];

//     const slides1920 = [
//         {
//             text: "Lift or go f*rk",
//             simpleText: "",
//             bgImage: "url(../images/bg-full-hd-1.jpg)",
//         },
//         {
//             text: "Join the Lifestyle",
//             simpleText: "of Aesthetic Life",
//             bgImage: "url(../images/bg-full-hd-2.jpg)",
//             fontSize: "88px",
//             fill: "black",
//         },
//         {
//             text: "Philosophy",
//             simpleText: "of Aesthetic Life",
//             bgImage: "url(../images/bg-full-hd-3.jpg)",
//             fontSize: "88px",
//             fill: "black",
//         },
//         {
//             text: "Push",
//             secondText: "or Die",
//             simpleText: "",
//             bgImage: "url(../images/bg-full-hd-4.jpg)",
//         },
//     ];

//     // Высоты контейнера для разных устройств
//     const maxColorHeightMobile = 70; // Высота для мобильных устройств
//     const maxColorHeightTablet = 116; // Высота для планшетных устройств
//     const maxColorHeightDesktop = 176; // Высота для десктопных устройств
//     const maxColorHeightFull = 215;
   

//     let currentSlide = 0;

//     function updateSlide() {
//         let slides;
//         let maxColorHeight;
    
//         if (window.innerWidth >= 1920)  {
//             slides = slides1920;
//             maxColorHeight = maxColorHeightFull;
//         } else if (window.innerWidth >= 1280) {
//             slides = slides1280;
//             maxColorHeight = maxColorHeightDesktop;
//         } else if (window.innerWidth >= 768) {
//             slides = slidesTablet;
//             maxColorHeight = maxColorHeightTablet;
//         } else {
//             slides = slidesMobile;
//             maxColorHeight = maxColorHeightMobile;
//         }
    
//         const slide = slides[currentSlide];
    
//         counterBlockColor.style.height = maxColorHeight + "px";
//         slideContainer.style.backgroundImage = slide.bgImage;
//         slideContainer.querySelector(".header-content-text").textContent = slide.text;
//         slideContainer.querySelector(".header-content-text").style.color = slide.color || "black"; // Устанавливаем цвет текста
//         slideContainer.querySelector(".header-content-text").style.fontSize = slide.fontSize || "";  
//         slideContainer.querySelector(".header-content-second").textContent = slide.secondText || "";
//         slideContainer.querySelector(".header-simple-text").textContent = slide.simpleText;
//         slideContainer.querySelector(".header-simple-second").textContent = slide.simpleTextSecond || "";       
//         slideContainer.querySelector(".header-content-text").style.width = slide.width || "";
//         const headerIcons = slideContainer.querySelectorAll(".header-icon");
// headerIcons.forEach(icon => {
//     icon.style.fill = slide.fill || "white";
// });
    
//         updateCounterTextAndColor(currentSlide, slides.length, maxColorHeight);
//     }

//     function nextSlide() {
//         const slides = window.innerWidth >= 768 ? slidesTablet : slidesMobile;
//         currentSlide = (currentSlide + 1) % slides.length;
//         updateSlide();
//     }

//     function prevSlide() {
//         const slides = window.innerWidth >= 768 ? slidesTablet : slidesMobile;
//         currentSlide = (currentSlide - 1 + slides.length) % slides.length;
//         updateSlide();
//     }

//     function updateCounterTextAndColor(slideIndex, slidesLength, maxColorHeight) {
//         const slideNumber = (slideIndex + 1).toString().padStart(2, "0");
//         counterText.textContent = slideNumber;

//         const colorHeight = ((slideIndex + 1) / slidesLength) * maxColorHeight;
//         counterBlockColor.style.height = colorHeight + "px";
//     }

//     const nextButton = document.querySelector(".header-scroll-btn:nth-child(2)");
//     const prevButton = document.querySelector(".header-scroll-btn:nth-child(1)");

//     nextButton.addEventListener("click", nextSlide);
//     prevButton.addEventListener("click", prevSlide);

//     updateSlide();

//     window.addEventListener("resize", updateSlide);
// });



// ----programs-slider-----


document.addEventListener("DOMContentLoaded", function () {
    const programBlocks = document.querySelectorAll('.programs-block-content');
    const programPrevButton = document.getElementById('prevButton');
    const programNextButton = document.getElementById('nextButton');
    const programsCounter = document.querySelector('.programs-slider-counter-block-color');
    const programsSliderCounterText = document.querySelector('.programs-slider-counter-text');

    // Функция для определения ширины maxColorWidth в зависимости от размера экрана
    function getMaxColorWidth() {
        if (window.innerWidth >= 1280) {
            return 240; // Ширина для устройств от 1280px и выше
        } else if (window.innerWidth >= 768) {
            return 120; // Ширина для устройств от 768px до 1279px
        } else {
            return 70; // Ширина для мобильных устройств
        }
    }

    // Находим индекс активного слайда по классам
    function findActiveSlideIndex() {
        for (let i = 0; i < programBlocks.length; i++) {
            if (programBlocks[i].classList.contains('active')) {
                return i;
            }
        }
        // Если активный слайд не найден, возвращаем 0 (первый слайд)
        return 0;
    }

    // Функция для отображения активных слайдов
    function showSlide(index) {
        programBlocks.forEach((block, i) => {
            if (i === index) {
                block.classList.add('active');
            } else {
                block.classList.remove('active');
            }
        });

        updateCounterBlockColorWidth(index, programBlocks.length);
        updateCounterText(index);
    }

    function updateCounterText(slideIndex) {
        const slideNumber = (slideIndex + 1).toString().padStart(2, "0");
        programsSliderCounterText.textContent = slideNumber;
    }

    function updateCounterBlockColorWidth(slideIndex, slidesLength) {
        const maxColorWidth = getMaxColorWidth();
        const colorWidth = (slideIndex + 1) * (maxColorWidth / slidesLength);
        programsCounter.style.width = colorWidth + "px";
    }

    // Функция для переключения на предыдущий слайд
    function prevSlide() {
        let currentSlideIndex = findActiveSlideIndex();
        currentSlideIndex = (currentSlideIndex - 1 + programBlocks.length) % programBlocks.length;
        showSlide(currentSlideIndex);
    }

    // Функция для переключения на следующий слайд
    function nextSlide() {
        let currentSlideIndex = findActiveSlideIndex();
        currentSlideIndex = (currentSlideIndex + 1) % programBlocks.length;
        showSlide(currentSlideIndex);
    }

    // Назначаем обработчики событий для кнопок
    programPrevButton.addEventListener('click', prevSlide);
    programNextButton.addEventListener('click', nextSlide);

    // Показываем первый слайд при загрузке страницы
    showSlide(0);

    // Обновляем ширину при изменении размера окна
    window.addEventListener('resize', function () {
        updateCounterBlockColorWidth(findActiveSlideIndex(), programBlocks.length);
    });
});