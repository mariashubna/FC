document.addEventListener("DOMContentLoaded", function () {
    const leftButton = document.getElementById("leftButton");
    const rightButton = document.getElementById("rightButton");
    const reviewBlocks = document.querySelectorAll(".reviews-wrap-block");
    let currentIndex = 0;

    // Функция для отображения текущего блока и скрытия остальных
    function showReview(index) {
        reviewBlocks.forEach((block, i) => {
            if (i === index) {
                block.classList.add("active-review");
            } else {
                block.classList.remove("active-review");
            }
        });
    }

    // Обновление текста при изменении слайда
    const pageText = document.querySelector(".reviews-wrap-scroll-page");

    function updatePageText() {
        const totalPages = reviewBlocks.length;
        const currentPage = currentIndex + 1;
        pageText.textContent = `${currentPage} of ${totalPages}`;
    }

    // Обработчик для кнопки "Влево"
    leftButton.addEventListener("click", function () {
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = reviewBlocks.length - 1;
        }
        showReview(currentIndex);
        updatePageText(); // Обновление текста
    });

    // Обработчик для кнопки "Вправо"
    rightButton.addEventListener("click", function () {
        currentIndex++;
        if (currentIndex >= reviewBlocks.length) {
            currentIndex = 0;
        }
        showReview(currentIndex);
        updatePageText(); // Обновление текста
    });

    // Инициализация текста на странице
    updatePageText();
});