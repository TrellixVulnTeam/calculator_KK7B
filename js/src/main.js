import {
    NumberBuilder
} from './domain/number.mjs'

import {
    Calculator
} from './domain/calculator.mjs';

// Domain
let a;
let b;
let builder = NumberBuilder();

const calculator = Calculator();

let lastPressWasEquals = false;

let numButtons = constructNumButtons();
let addButton = constructButton('+');
let equalsButton = constructButton('=');

let allButtons = [].concat(numButtons);
allButtons.push(addButton);
allButtons.push(equalsButton);

for (let button of numButtons) {
    const v = button.value;
    button.addEventListener('click', () => {
        calculator.pressNumber(parseInt(v, 10))
    });
}

addButton.addEventListener('click', () => {
    calculator.pressAdd();
});

equalsButton.addEventListener('click', () => {
    calculator.pressEquals();
});

for (let button of allButtons) {
    button.addEventListener('click', () => {
        result.value = calculator.readDisplay();
    })
}

/*

equalsButton.addEventListener('click', () => {
    clearInput();
});

for (let button of allButtons) {
    button.addEventListener('click', () => {
        if (lastPressWasEquals) {
            clearInput();
        }
    });
}

for (let button of numButtons.concat([addButton])) {
    button.addEventListener('click', () => {
        lastPressWasEquals = false;
    });
}

// Add event listeners to buttons
for (let button of allButtons) {
    let v = button.value;
    button.addEventListener("click", () => {
        result.value += v;
    });
}

addButton.addEventListener('click', () => {
    a = builder.build().value;
});

equalsButton.addEventListener('click', () => {
    lastPressWasEquals = true;
    result.value += a + builder.build().value;
});

for (let button of numButtons) {
    let v = button.value;
    button.addEventListener('click', () => {
        if (typeof a === 'undefined') {
            builder.add(parseInt(v, 10));
        } else {
            builder.add(parseInt(v, 10));
        }
    });
}
*/

// Display buttons
for (let button of allButtons) {
    document.body.appendChild(button);
}

function constructButton(symbol) {
    let button = document.createElement('button');
    let text = document.createTextNode(symbol);
    button.appendChild(text);
    button.value = symbol;
    return button;
}

function constructNumButtons() {
    let numButtons = [];
    for (let i = 0; i < 10; i++) {
        let numButton = constructButton(i);
        numButtons.push(numButton);
    }
    return numButtons;
}

function clearInput() {
    result.value = "";
}