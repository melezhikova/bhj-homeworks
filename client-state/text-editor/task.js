const editor = document.getElementById('editor');
const clear = document.getElementById('clear');

window.addEventListener('unload', () => {
    localStorage.setItem('message', editor.value);
})

window.addEventListener('load', () => {
    editor.value = localStorage.message;
})

clear.addEventListener('click', () => {
    editor.value = '';
})

