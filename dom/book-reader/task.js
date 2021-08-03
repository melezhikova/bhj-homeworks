const fonts = Array.from(document.querySelectorAll(".font-size"));
const colors = Array.from(document.querySelectorAll(".book__control_color .color"));
const bgColors = Array.from(document.querySelectorAll(".book__control_background .color"));

const controls = document.querySelector(".book__controls");
const content = document.querySelector(".book__content");

function updateContent () {
    let contentSize = controls.getAttribute("data-fontsize");
    let textColor = controls.getAttribute("data-textcolor");
    let bgColor = controls.getAttribute("data-bgcolor");
    content.className = "book__content book_fs-" + contentSize + " book_color-" + textColor + " book_bg-" + bgColor;
}

for (let i = 0; i < fonts.length; i++) {
    let userFont = fonts[i];
    let number = i;
    userFont.onclick = changeFonts;
    
    function changeFonts() {
        let currentFont = fonts.findIndex((element) => element.classList.contains("font-size_active"));
        if (currentFont === number) {
            return false;
        } 
        fonts[currentFont].classList.remove("font-size_active");
        fonts[number].classList.add("font-size_active");

        let size = fonts[number].getAttribute("data-size");
        controls.dataset.fontsize = size;

        updateContent();
        return false;
    }
}

for (let i = 0; i < colors.length; i++) {
    let userColor = colors[i];
    let number = i;
    userColor.onclick = changeColor;

    function changeColor () {
        let currentColor = colors.findIndex((element) => element.classList.contains("color_active"));
        if (currentColor === number) {
            return false;
        } 
        colors[currentColor].classList.remove("color_active");
        colors[number].classList.add("color_active");

        let color = colors[number].getAttribute("data-text-color");
        controls.dataset.textcolor = color;

        updateContent();
        return false;
    }
}

for (let i = 0; i < bgColors.length; i++) {
    let userBgColor = bgColors[i];
    let number = i;
    userBgColor.onclick = changeBgColor;

    function changeBgColor () {
        let currentBgColor = bgColors.findIndex((element) => element.classList.contains("color_active"));
        if (currentBgColor === number) {
            return false;
        } 
        bgColors[currentBgColor].classList.remove("color_active");
        bgColors[number].classList.add("color_active");

        let bgColor = bgColors[number].getAttribute("data-bg-color");
        controls.dataset.bgcolor = bgColor;

        updateContent();
        return false;
    }
}