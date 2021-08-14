const loginForm = document.getElementById('signin__form');
const button = document.getElementById('signin__btn');

const url = loginForm.getAttribute('action');
loginForm.removeAttribute('action');

button.addEventListener('click', () => {
    let formData = new FormData(loginForm);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    
    if (xhr.readyState === xhr.DONE && xhr.status === 200) {
        let result = xhr.responseText;
        console.log(result);
    } else {
        let result = xhr.responseText;
        console.log(result);
    }

    xhr.send(formData);
    event.preventDefault();
})
