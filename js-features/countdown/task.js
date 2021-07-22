const countdown = function () {
    const countdownFigure = document.getElementById("timer");
    if (parseInt(countdownFigure.textContent) === 0) {
        alert("Вы победили в конкурсе!");
        clearInterval(id);
        return;
    }
    countdownFigure.textContent = parseInt(countdownFigure.textContent) - 1;
}

const id = setInterval(countdown, 1000);

