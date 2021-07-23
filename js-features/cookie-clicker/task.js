const image = document.getElementById("cookie");
const count = document.getElementById("clicker__counter");
const speed = document.getElementById("clicker__speed");
let timeLastClick = 0;

function changeSize() {
    count.textContent = parseInt(count.textContent) + 1;
    if (count.textContent % 2 === 0) {
        image.width = 200;
    } else {
        image.width = 150;
    }

    let nowAfterClick = new Date();
    let timeAfterClick = nowAfterClick.getTime();
    let t = (timeAfterClick - timeLastClick) / 1000;
    speed.textContent = (1 / t).toFixed(2);

    timeLastClick = timeAfterClick;
}

image.onclick = changeSize;