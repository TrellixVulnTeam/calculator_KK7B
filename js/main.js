// Domain
// let stack = [];


let numButtons = constructNumButtons();
let addButton = constructButton('+');
let equalsButton = constructButton('=');

let allButtons = [].concat(numButtons);
allButtons.push(addButton);
allButtons.push(equalsButton);

// Add event listeners to buttons
for (let button of allButtons) {
    let v = button.value;
    button.addEventListener("click", () => {
        result.value += v;
    });
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

function constructEqualsButton() {
    let equalsButton = document.createElement('button');
    let text = document.createTextNode('=');
    equalsButton.appendChild(text);
    equalsButton.value = '=';
    return equalsButton;
}

function constructAddButton() {
    let addButton = document.createElement('button');
    let text = document.createTextNode('+');
    addButton.appendChild(text);
    addButton.value = '+';
    return addButton;
}

function constructNumButtons() {
    let numButtons = [];
    for (var i = 0; i < 10; i++) {
        let numButton = document.createElement('button');
        let text = document.createTextNode(i);
        numButton.appendChild(text);
        numButton.value = i;
        numButtons.push(numButton);
    }
    return numButtons;
}