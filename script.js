function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

const numeric = '1234567890';

const buttonContainer = document.querySelector('.buttons');
buttonContainer.addEventListener('click', (e) => {
    const btn = e.target;
    if (btn.tagName === 'BUTTON') {
        onPress(btn.value);
    }
});


let cleared = true;
const display = document.querySelector('.display p');
function onPress(val) {

    if (numeric.includes(val)) {
        if (cleared) {
            display.textContent = '';
            cleared = false;
        }
        display.textContent += val;
    }
}

