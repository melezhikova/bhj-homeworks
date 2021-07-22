const image = document.getElementById("cookie");
const count = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");
let now = new Date();

function changeSize() {
    count.textContent = parseInt(count.textContent) + 1;
    if (count.textContent % 2 === 0) {
        image.width = 200;
    } else {
        image.width = 150;
    }

    let nowAfterClick = new Date();
    let t = (nowAfterClick - now) / 1000;
    speed.textContent = (count.textContent / t).toFixed(2);
}
image.onclick = changeSize;