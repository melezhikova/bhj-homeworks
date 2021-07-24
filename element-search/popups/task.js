const mainPopup = document.getElementById("modal_main");
mainPopup.className = "modal modal_active";

const successPopup = document.getElementById("modal_success");
const showSuccess = document.querySelector(".show-success");

function successOpen () {
    mainPopup.className = "modal";
    successPopup.className = "modal modal_active";
}
showSuccess.onclick = successOpen;

let closePopup = document.querySelectorAll("div.modal__close");

for (i = 0; i < closePopup.length; i++) {
    let element = closePopup.item(i);
    element.onclick = close;
    
    function close () {
        successPopup.className = "modal";
        mainPopup.className = "modal";
    }
}

