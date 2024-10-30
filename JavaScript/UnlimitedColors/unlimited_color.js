//generate a random color

const randomColor = function() {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

let intrevalId;
const startChangeingColor = function() {
    if (!intrevalId) {
        intrevalId = setInterval(changeBgColor, 1000)
    }
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor();
    }
};

const stopChangeingColor = function () {
    clearInterval(intrevalId);
    intrevalId = null;
}

document.querySelector('#start').addEventListener('click', startChangeingColor);
document.querySelector('#stop').addEventListener('click', stopChangeingColor);
