const rotators = Array.from(document.querySelectorAll('.rotator__case'));

rotators.forEach ((item) => {
    let color = item.getAttribute("data-color");
    item.setAttribute('style', "color:" + color);
})

let speed;

setTimeout (function rotation () {
    let currentRotator = rotators.findIndex((item) => 
        item.classList.contains('rotator__case_active'));
    rotators[currentRotator].classList.remove('rotator__case_active');
    currentRotator += 1;
    if (currentRotator === rotators.length) {
        currentRotator = 0;
        rotators[currentRotator].classList.add('rotator__case_active');
    } else {
        rotators[currentRotator].classList.add('rotator__case_active');
    }

    speed = rotators[currentRotator].getAttribute("data-speed");

    setTimeout(rotation, speed);
    
}, speed)
