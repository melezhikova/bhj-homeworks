const formBox = document.getElementById('signin');
const logoutBox = document.querySelector('.logout');
const loginForm = document.getElementById('signin__form');
const button = document.getElementById('signin__btn');
const logout = document.getElementById('logout__btn');
const welcome = document.getElementById('welcome');
const user = document.getElementById('user_id');

const url = loginForm.getAttribute('action');
loginForm.removeAttribute('action');

function userWelcome () {
    formBox.classList.remove('signin_active');
    welcome.classList.add('welcome_active');
    logoutBox.classList.add('logout_active');
}

button.addEventListener('click', (event) => {
    event.preventDefault();
    let formData = new FormData(loginForm);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    
    xhr.addEventListener ('readystatechange', function () {
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            let result = JSON.parse(xhr.response).success;
            let id = JSON.parse(xhr.response).user_id;
            if (result) {
                userWelcome ();
                user.innerText = id;
                localStorage.setItem('user',id);
            } else {
                alert('Неверные логин/пароль');
                loginForm.reset();
            }
            
            console.log(result);
        } 
    })
    xhr.send(formData);
})

window.addEventListener('load', () => {
    let check = localStorage.getItem('user');
    if (check) {
        userWelcome ();
        user.innerText = check;
    }
})

logout.addEventListener('click', () => {
    localStorage.clear();
    location.reload();
})