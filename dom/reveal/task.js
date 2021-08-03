const reveals = document.querySelectorAll('.reveal');
console.log(reveals);

const isInView = function (element) {
    const viewportHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    if ((elementTop < viewportHeight) && (elementTop > 0)) {
        return true;
    } else {
        return false;
    }
}

function checkReveals () {
    reveals.forEach((item) => {
        if (isInView(item)) {
            item.classList.add('reveal_active');
        } else {
            item.classList.remove('reveal_active');
        }
    })
}

window.onscroll = checkReveals;
    