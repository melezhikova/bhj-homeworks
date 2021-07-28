const buttons = Array.from(document.getElementsByClassName("dropdown__value"));
const items = Array.from(document.getElementsByClassName("dropdown__link"));

buttons.forEach((button) => button.addEventListener('click', showMenu));

function showMenu () {
    let list = document.querySelector("ul");
    if (list.className === "dropdown__list") {
        list.className = "dropdown__list dropdown__list_active";
    } else {
        list.className = "dropdown__list";
    }
}

for (i = 0; i < items.length; i++) {
    let item = items[i];
    let box = item.closest("div");
    let selectedItem = box.querySelector(".dropdown__value");
    let list = item.closest("ul");
    item.onclick = function () {
        selectedItem.textContent = item.textContent;
        list.className = "dropdown__list";
        return false;
    }
}