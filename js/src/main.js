import {
    Calculator
} from './domain/calculator.mjs';
const calculator = Calculator();

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