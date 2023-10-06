// Надати li class no-mobile, для приховування в мобільній версії

function removeNoMobileElements() {
    if (window.innerWidth <= 767) {
        const noMobileElements = document.querySelectorAll('.no-mobile');
        noMobileElements.forEach(element => {
            element.remove();
        });
    }
}


document.addEventListener("DOMContentLoaded", function () {
    removeNoMobileElements();

    const heroBlocks = document.querySelectorAll('.hero-content');
    const heroPrevButton = document.getElementById('hero-left');
    const heroNextButton = document.getElementById('hero-right');
    const heroCounter = document.querySelector('.hero-counter-block-color');
    const heroSliderCounterText = document.querySelector('.hero-counter-text');

    // Функция для определения максимальной высоты блока счетчика в зависимости от размера экрана
    function getMaxColorHeight() {
        if (window.innerWidth >= 1280) {
            return 236; // Максимальная высота для устройств от 1280px и выше
        } else if (window.innerWidth >= 768) {
            return 118; // Максимальная высота для устройств от 768px до 1279px
        } else {
            return 71; // Максимальная высота для мобильных устройств
        }
    }

    // Находим индекс активного слайда по классам
    function findActiveSlideIndex() {
        for (let i = 0; i < heroBlocks.length; i++) {
            if (heroBlocks[i].classList.contains('hero-active')) {
                return i;
            }
        }
        // Если активный слайд не найден, возвращаем 0 (первый слайд)
        return 0;
    }

    // Функция для отображения активных слайдов
    function showSlide(index) {
        heroBlocks.forEach((block, i) => {
          if (i === index) {
            block.classList.add('hero-active');
          } else {
            block.classList.remove('hero-active');
          }
        });

        updateCounterBlockColorHight(index, heroBlocks.length);
        updateCounterText(index);
    }

    function updateCounterText(slideIndex) {
        const slideNumber = (slideIndex + 1).toString().padStart(2, "0");
        heroSliderCounterText.textContent = slideNumber;
    }

    function updateCounterBlockColorHight(slideIndex, slidesLength) {
        const maxColorHeight = getMaxColorHeight();
        const colorHeight = (slideIndex + 1) * (maxColorHeight / slidesLength);
        heroCounter.style.height = colorHeight + "px";
    }

    // Функция для переключения на предыдущий слайд
    function prevSlide() {
        let currentSlideIndex = findActiveSlideIndex();
        currentSlideIndex = (currentSlideIndex - 1 + heroBlocks.length) % heroBlocks.length;
        showSlide(currentSlideIndex);
    }

    // Функция для переключения на следующий слайд
    function nextSlide() {
        let currentSlideIndex = findActiveSlideIndex();
        currentSlideIndex = (currentSlideIndex + 1) % heroBlocks.length;
        showSlide(currentSlideIndex);
    }

    // Назначаем обработчики событий для кнопок
    heroPrevButton.addEventListener('click', prevSlide);
    heroNextButton.addEventListener('click', nextSlide);

    // Показываем первый слайд при загрузке страницы
    showSlide(0);

    // Обновляем высоту блока при изменении размера окна
    window.addEventListener('resize', function () {
        updateCounterBlockColorHight(findActiveSlideIndex(), heroBlocks.length);
    });
});
