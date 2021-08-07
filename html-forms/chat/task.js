const sideButton = document.querySelector(".chat-widget__side");
const chat = document.querySelector(".chat-widget");
const messages = document.querySelector(".chat-widget__messages");
const clientMessage = document.getElementById("chat-widget__input");

sideButton.onclick = () => {
    chat.classList.toggle("chat-widget_active");
    timer ();
}

let idTimer; 

function timer () {
    let count = 0;
    idTimer = setInterval (() => {
        count += 1;
        if (count === 10) {
            let time = getTime();
            messages.innerHTML += `
                <div class="message">
                    <div class="message__time">${time}</div>
                    <div class="message__text">Ну не молчите, напишите уже что-нибудь</div>
                </div>
            `;
            clearInterval(idTimer);
            timer ();
        }
    }, 1000);
}

let botMessages = [
    "Добрый день!",
    "До свидания!",
    "Я затрудняюсь... пойду позову кого-нибудь!",
    "Вы только не волнуйтесь!",
    "Как интересно... мы примем во внимание:)"
]

function addBotMessage () {
    let message = botMessages[Math.floor(Math.random() * botMessages.length)];
    let time = getTime();
    messages.innerHTML += `
        <div class="message">
            <div class="message__time">${time}</div>
            <div class="message__text">${message}</div>
        </div>
    `;
}

function getTime () {
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    if (hours < 10 && minutes < 10) {
        return "0" + hours + ":" + "0" + minutes;
    } else if (hours < 10) {
        return "0" + hours + ":" + minutes;
    } else if (minutes < 10) {
        return hours + ":" + "0" + minutes;
    } else {
        return hours + ":" + minutes;
    }
}

function addClientMessage () {
    let time = getTime();
    messages.innerHTML += `
        <div class="message message_client">
            <div class="message__time">${time}</div>
            <div class="message__text">${clientMessage.value}</div>
        </div>
    `;
    clientMessage.value = "";
    addBotMessage ();
    clearInterval(idTimer);
    timer ();
}

clientMessage.onchange = addClientMessage;