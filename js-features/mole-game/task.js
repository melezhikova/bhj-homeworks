const kill = document.getElementById("dead");
const miss = document.getElementById("lost");


for (index = 1; index <= 9; index++) {
    getHole = index => document.getElementById(`hole${index}`);
    let hole = getHole(index);
    hole.onclick = check;
    function check() {
        if (hole.className.includes("hole_has-mole")) {
            kill.textContent = parseInt(kill.textContent) + 1;
        } else {
            miss.textContent = parseInt(miss.textContent) + 1;
        }

        if (parseInt(kill.textContent) === 10) {
            alert("Победа!");
            kill.textContent = 0;
            miss.textContent = 0;
        } 
        if (parseInt(miss.textContent) === 5) {
            alert("Вы проиграли!");
            kill.textContent = 0;
            miss.textContent = 0;
        } 
    }
} 



