const buttonContainer = document.querySelector('.buttons');
const display = document.querySelector('.display');
const ERROR_MSG = 'OOPS!';

let v1 = null;
let v2 = null;
let o1 = null;
let cleared = true;

buttonContainer.addEventListener('click', (e) => {
    const btn = e.target;
    if (btn.tagName === 'BUTTON') {
        onPress(btn.value);
    }
});

function onPress(val) {
    if (/\d/.test(val)) {
        runDigit(val);
    } else if (val === '.') {
        runDecimal();
    } else if (val === 'clear') {
        runClear();
    } else if (display.textContent === ERROR_MSG) {
        // Following functions invalid if error displayed
        return;
    } else if (val === 'sign') {
        runSign();
    } else if (val === 'percentage') {
        runPercentage();
    } else if (val === 'equals') {
        runEquals();
    } else {
        runOperator(val);
    }
}

function runDigit(val) {
    if (cleared) {
        display.textContent = '';
        cleared = false;
    }
    display.textContent += val;
}

function runDecimal() {
    if (cleared) {
        display.textContent = '0.';
    } else if (display.textContent.includes('.')) {
        return;
    } else {
        display.textContent += '.';
    }
    cleared = false;
}

function runClear() {
    v1 = null;
    v2 = null;
    o1 = null;
    cleared = true;
    display.textContent = 0;
}

function runSign() {
    if (display.textContent === '0') {
        return;
    }
    if (display.textContent.charAt(0) === '-') {
        display.textContent = display.textContent.slice(1);
    } else if (/\d/.test(display.textContent.charAt(0))) {
        display.textContent = "-" + display.textContent;
    }
}

function runPercentage() {
    const val = +display.textContent;
    display.textContent = val / 100;
}

function runEquals() {
    if (v1 !== null && o1 !== null) {
        submitFunc();
        o1 = null;
        cleared = true;
    }
}

function runOperator(val) {
    cleared = true
    if (v1 === null || o1 === null) {
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
        if (+v2 === 0) {
            res = NaN;
            console.log('what!');
        }
    } else if (o1 === 'multiply') {
        res = +v1 * +v2;
    }

    if (isNaN(res)) {
        runClear();
        display.textContent = 'OOPS!';
    } else {
        display.textContent = res;
        v1 = display.textContent;
    }
}