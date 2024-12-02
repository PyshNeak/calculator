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
    } else if (val === '.') {
        insertDecimal();
    } else if (val === 'clear') {
        clearEntry();
    } else if (val === 'sign') {
        toggleSign();
    }
}

function insertDecimal() {
    if (display.textContent.includes('.')) {
        return;
    }
    display.textContent += '.';
    cleared = false;
}

function clearEntry() {
    cleared = true;
    display.textContent = 0;
}

function toggleSign() {
    if (cleared) {
        return;
    }
    if (display.textContent.charAt(0) === '-') {
        display.textContent = display.textContent.slice(1);
    } else {
        display.textContent = "-" + display.textContent;
    }
}