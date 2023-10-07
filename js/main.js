
let titlePrograms = document.querySelectorAll(".spec-programs-item-title");
let dropDowns = document.querySelectorAll(".spec-programs-item__content");

titlePrograms.forEach((titleProgram, index) => {
  titleProgram.addEventListener("click", () => {
    dropDowns[index].classList.toggle("spec-programs-item__content-active");
    titlePrograms[index].classList.toggle("spec-programs-item-title-active");
  });
});

(() => {
  const mobileMenu = document.querySelector(".js-menu-container");
  const openMenuBtn = document.querySelector(".js-open-menu");
  const closeMenuBtn = document.querySelector(".js-close-menu");
  const menuItems = document.querySelectorAll(".mobile-menu__item");

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute("aria-expanded") === "true" || false;
    openMenuBtn.setAttribute("aria-expanded", !isMenuOpen);
    mobileMenu.classList.toggle("is-open");

    const scrollLockMethod = !isMenuOpen
      ? "disableBodyScroll"
      : "enableBodyScroll";
  };

  openMenuBtn.addEventListener("click", toggleMenu);
  closeMenuBtn.addEventListener("click", toggleMenu);

  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      toggleMenu(); 
    });
  });

  window.matchMedia("(min-width: 768px)").addEventListener("change", (e) => {
    if (!e.matches) return;
    mobileMenu.classList.remove("is-open");
    openMenuBtn.setAttribute("aria-expanded", false);
  });
})();



// ------------модифікація картинок------------

const programListItem = document.getElementById("program-list");

  const img2 = document.querySelector(".spec-programs-img-2");
  const imagesContainer = document.querySelector(".spec-programs-images");
  const img1 = document.querySelector(".spec-programs-img-1");

if (window.matchMedia("(max-width: 768px)").matches) {
  
  programListItem.addEventListener("click", function () {
    img2.style.display = "none";

    imagesContainer.style.width = "226px";
    imagesContainer.style.height = "226px";

    img1.style.width = "226px";
    img1.style.height = "226px";
  });
}

const programListFirst = document.getElementById("program-list-first");
const programList = document.querySelector(".spec-programs-item-last ");
const descImg1 = document.querySelector(".spec-programs-desc-img-1");
const descImg2 = document.querySelector(".spec-programs-desc-img-2");


programListFirst.addEventListener("click", function () {

  if (window.innerWidth > 1920) {
    descImg1.style.width = "568px";
    descImg1.style.height = "568px";
    descImg1.style.right = "0";
  }
 
  else if (window.innerWidth >= 768 && window.innerWidth <= 1279) {
    descImg2.style.right = "64px";
  }
});

programList.addEventListener("click", function () {
    if (window.innerWidth > 1920) {
      descImg2.style.width = "508px";
      descImg2.style.height = "508px";
      descImg2.style.right = "227px";
    }

    else if (window.innerWidth >= 1290 && window.innerWidth <= 1919) {
      descImg2.style.right = "64px"; 
    }
  });


// ----programs-slider-----

document.addEventListener("DOMContentLoaded", function () {
  const programBlocks = document.querySelectorAll(".programs-block-content");
  const programPrevButton = document.getElementById("prevButton");
  const programNextButton = document.getElementById("nextButton");
  const programsCounter = document.querySelector(
    ".programs-slider-counter-block-color"
  );
  const programsSliderCounterText = document.querySelector(
    ".programs-slider-counter-text"
  );

 
  function getMaxColorWidth() {
    if (window.innerWidth >= 1280) {
      return 240; 
    } else if (window.innerWidth >= 768) {
      return 120; 
    } else {
      return 72; 
    }
  }

  function findActiveSlideIndex() {
    for (let i = 0; i < programBlocks.length; i++) {
      if (programBlocks[i].classList.contains("active")) {
        return i;
      }
    }
    return 0;
  }

  function showSlide(index) {
    programBlocks.forEach((block, i) => {
      if (i === index) {
        block.classList.add("active");
      } else {
        block.classList.remove("active");
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

  
  function prevSlide() {
    let currentSlideIndex = findActiveSlideIndex();
    currentSlideIndex =
      (currentSlideIndex - 1 + programBlocks.length) % programBlocks.length;
    showSlide(currentSlideIndex);
  }

  function nextSlide() {
    let currentSlideIndex = findActiveSlideIndex();
    currentSlideIndex = (currentSlideIndex + 1) % programBlocks.length;
    showSlide(currentSlideIndex);
  }

  programPrevButton.addEventListener("click", prevSlide);
  programNextButton.addEventListener("click", nextSlide);

  showSlide(0);

  window.addEventListener("resize", function () {
    updateCounterBlockColorWidth(findActiveSlideIndex(), programBlocks.length);
  });
});
