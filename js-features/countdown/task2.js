const countdown = function () {
    const countdownTime = document.getElementById("timer");
    let hh = countdownTime.textContent.substring(0, 2);
    let mm = countdownTime.textContent.substring(3, 5);
    let ss = countdownTime.textContent.substring(6, 8);
    const link = document.getElementById("link");

    //проверяем, что время истекло
    if (parseInt(hh) === 0 && parseInt(mm) === 0 && parseInt(ss) === 0) {
            alert("Вы победили в конкурсе!");
            clearInterval(id);
            link.click();
            return;  
    //если ровно сколько-то часов
    } else if (parseInt(ss) === 0 && parseInt(mm) === 0) {
        hh = parseInt(hh) - 1;
        mm = 59;
        ss = 59;
        if (hh < 10) {
            countdownTime.textContent = "0" + hh + ":" + mm + ":" + ss;
        } else {
            countdownTime.textContent = hh + ":" + mm + ":" + ss;
        }
    //если ровно сколько-то минут
    } else if (parseInt(ss) === 0) {
        mm = parseInt(mm) - 1;
        ss = 59;
        if (mm < 10) {
            countdownTime.textContent = hh + ":0" + mm + ":" + ss;
        } else {
            countdownTime.textContent = hh + ":" + mm + ":" + ss;
        }
    //в остальных случаях
    } else {
        ss = parseInt(ss) - 1;
        if (ss < 10) {
            countdownTime.textContent = hh + ":" + mm + ":0" + ss;
        } else {
            countdownTime.textContent = hh + ":" + mm + ":" + ss;
        }
    }
}

const id = setInterval(countdown, 1000);