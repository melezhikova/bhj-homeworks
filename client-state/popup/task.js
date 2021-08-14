const popup = document.getElementById('subscribe-modal');
const popupClose = document.querySelector('.modal__close');

window.addEventListener('load', () => {
    let check = getCookie('closed');
    if (!check) {
        popup.classList.add('modal_active');
    }
})

popupClose.addEventListener('click', () => {
    popup.classList.remove('modal_active');
    document.cookie = 'closed=done';
})

function getCookie (name) {
    const cookies = document.cookie.split('; ');
    const result = cookies.find(c => c.startsWith(name + '='));
    return result ? decodeURIComponent(result.substr(name.length + 1)) : null;
}