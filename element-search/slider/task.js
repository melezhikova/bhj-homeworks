const slides = document.getElementsByClassName("slider__item");
const prevButton = document.querySelector(".slider__arrow_prev");
const nextButton = document.querySelector(".slider__arrow_next");
const dots = document.getElementsByClassName("slider__dot");

let arrLinks = Array.from(slides);
let number = 0;

function deactivateSlide(number) {
    slides.item(number).className = "slider__item";
    dots.item(number).className = "slider__dot";
}

function activateSlide (number) {
    slides.item(number).className = "slider__item slider__item_active";
    dots.item(number).className = "slider__dot slider__dot_active";
}

prevButton.onclick = leafLeft;
function leafLeft() {
    let number = arrLinks.findIndex((element) => element.className === "slider__item slider__item_active");
    deactivateSlide(number);
    if (number === 0) {
        number = slides.length - 1;
        activateSlide (number);
    } else {
        number -= 1;
        activateSlide (number);
    }
}

nextButton.onclick = leafRight;
function leafRight() {
    let number = arrLinks.findIndex((element) => element.className === "slider__item slider__item_active");
    deactivateSlide(number);
    if (number === (slides.length - 1)) {
        number = 0;
        activateSlide (number);
    } else {
        number += 1;
        activateSlide (number);
    }
}


for (i = 0; i < dots.length; i++) {
    dot = dots.item(i);
    let numberDot = i;
    dot.onclick = leafDots;

    function leafDots() {
        let number = arrLinks.findIndex((element) => element.className === "slider__item slider__item_active");
        deactivateSlide(number);
        activateSlide(numberDot);
    }
}