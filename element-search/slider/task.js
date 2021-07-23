const slides = document.getElementsByClassName("slider__item");
const prevButton = document.querySelector(".slider__arrow_prev");
const nextButton = document.querySelector(".slider__arrow_next");
const dots = document.getElementsByClassName("slider__dot");

let currentSlide = 0;
let currentDot = 0;

//не пойму, как нужно применить findIndex((
let arrLinks = Array.from(slides);
let index = arrLinks.findIndex((element) => element === "div.slider__item.slider__item_active");
console.log(arrLinks);
console.log(index);

//эту часть добавляю, чтобы переключать по точкам, но currentSlide почему-то не определяется, 
//видимо сюда нужно findIndex, но там проблема:(
for (i = 0; i < dots.length; i++) {
    dot = dots.item(i);
    slide = slides.item(i);
    dot.onclick = leafDots;

    function leafDots() {
       slides.item(currentSlide).className = "slider__item";
       dots.item(currentSlide).className = "slider__dot";

        slide.className = "slider__item slider__item_active";
        dot.className = "slider__dot slider__dot_active";

        currentSlide = i;
        currentDot = i;
    }
}
//-----------------------------------

prevButton.onclick = leafLeft;
function leafLeft() {
    slides.item(currentSlide).className = "slider__item";
    dots.item(currentSlide).className = "slider__dot";
    if (currentSlide === 0) {
        currentSlide = slides.length - 1;
        slides.item(currentSlide).className = "slider__item slider__item_active";
        dots.item(currentSlide).className = "slider__dot slider__dot_active";
    } else {
        currentSlide -= 1;
        slides.item(currentSlide).className = "slider__item slider__item_active";
        dots.item(currentSlide).className = "slider__dot slider__dot_active";
    }
    currentDot = currentSlide;
}

nextButton.onclick = leafRight;
function leafRight() {
    slides.item(currentSlide).className = "slider__item";
    dots.item(currentSlide).className = "slider__dot";
    if (currentSlide === (slides.length - 1)) {
        currentSlide = 0;
        slides.item(currentSlide).className = "slider__item slider__item_active";
        dots.item(currentSlide).className = "slider__dot slider__dot_active";
    } else {
        currentSlide += 1;
        slides.item(currentSlide).className = "slider__item slider__item_active";
        dots.item(currentSlide).className = "slider__dot slider__dot_active";
    }
    currentDot = currentSlide;
}

