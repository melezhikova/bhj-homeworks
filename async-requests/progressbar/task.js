const progress = document.getElementById('progress');
const sendingForm = document.getElementById('form');
const url = form.getAttribute('action');
console.log(url);

sendingForm.addEventListener('submit', function () {
    let formData = new FormData(sendingForm);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    xhr.addEventListener('readystatechange', function () {
        if (xhr.readyState === xhr.LOADING) {
            progress.value = 0.7;
        }
        if (xhr.readyState === xhr.DONE && xhr.status === 200) {
            progress.value = 1;
        }
    })
    xhr.send(formData);
    event.preventDefault();
    
})

