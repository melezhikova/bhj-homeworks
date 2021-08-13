const progress = document.getElementById('progress');
const sendingForm = document.getElementById('form');
const url = form.getAttribute('action');
console.log(url);

sendingForm.addEventListener('submit', function () {
    let formData = new FormData(sendingForm);
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url);
    
    xhr.upload.onloadstart = function(event) {
        progress.value = 0.5;;
    };
    xhr.upload.onprogress = function(event) {
        progress.value = 0.7;;
    };
    xhr.upload.onload = function(event) {
        progress.value = 1;;
    };

    xhr.send(formData);
    event.preventDefault();
    
})

