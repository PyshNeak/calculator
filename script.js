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
    } else if (val === 'percentage') {
        showPercentage();
    } else if (val === 'equals') {
        runEquals();
    } else {
        runOperator(val);
    }
}

let v1 = null;
let v2 = null;
let o1 = null;

function runEquals() {
    if (v1 !== null && o1 !== null) {
        submitFunc();
        o1 = null;
    }
}

function runOperator(val) {
    cleared = true
    if (o1 === null) {
        v1 = display.textContent;
        o1 = val;
    } else {
        submitFunc();
        o1 = val;
    }
}

function submitFunc() {
    v2 = display.textContent;
    let res;
    if (o1 === 'add') {
        res = +v1 + +v2;
    } else if (o1 === 'subtract') {
        res = +v1 - +v2;
    } else if (o1 === 'divide') {
        res = +v1 / +v2;
    } else if (o1 === 'multiply') {
        res = +v1 * +v2;
    }
    display.textContent = res;
    v1 = display.textContent;
}


function insertDecimal() {
    if (cleared) {
        display.textContent = '0.';
    } else if (display.textContent.includes('.')) {
        return;
    } else {
        display.textContent += '.';
    }
    cleared = false;
}

function clearEntry() {
    v1 = null;
    v2 = null;
    o1 = null;
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

function showPercentage() {
    const val = +display.textContent;
    display.textContent = val / 100;
}