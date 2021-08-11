const hasTooltips = Array.from(document.querySelectorAll(".has-tooltip"));

for (let i = 0; i < hasTooltips.length; i++) {
    hasTooltip = hasTooltips[i];
    let tooltip = hasTooltip.getAttribute("title");
    hasTooltip.insertAdjacentHTML("afterEnd", 
        `<div class = 'tooltip'> ${tooltip} </div>`);
}

let tooltips = Array.from(document.querySelectorAll(".tooltip"));

for (let i = 0; i < hasTooltips.length; i++) {
    hasTooltip = hasTooltips[i];
    let number = i;
    hasTooltip.onclick = () => {
        if (tooltips[number].className === "tooltip tooltip_active") {
            tooltips[number].classList.remove("tooltip_active");
        } else {
            tooltips.forEach((element) =>
            element.classList.remove("tooltip_active"));
            tooltips[number].classList.add("tooltip_active");
            let elementTop = hasTooltips[number].getBoundingClientRect().bottom;
            let elementLeft = hasTooltips[number].getBoundingClientRect().left;
            tooltips[number].setAttribute("style", `top: ${elementTop}px; left: ${elementLeft}px`);
        }
        return false;
    }
}

