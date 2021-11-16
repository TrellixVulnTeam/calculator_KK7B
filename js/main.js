// Domain
var a;
var b;

let numButtons = constructNumButtons();
let addButton = constructButton('+');
let equalsButton = constructButton('=');

let allButtons = [].concat(numButtons);
allButtons.push(addButton);
allButtons.push(equalsButton);

equalsButton.addEventListener('click', () => {
    clearInput();
});

for (let button of allButtons) {
    button.addEventListener('click', () => {
        if (typeof a === 'undefined' && typeof b === 'undefined') {
            clearInput();
        }
    });
}

// Add event listeners to buttons
for (let button of allButtons) {
    let v = button.value;
    button.addEventListener("click", () => {
        result.value += v;
    });
}

equalsButton.addEventListener('click', () => {
    result.value += a + b;
    a = undefined;
    b = undefined;
});

for (var button of numButtons) {
    let v = button.value;
    button.addEventListener('click', () => {
        if (typeof a === 'undefined') {
            a = parseInt(v, 10);
        } else {
            b = parseInt(v, 10);
        }
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

function constructNumButtons() {
    let numButtons = [];
    for (var i = 0; i < 10; i++) {
        let numButton = constructButton(i);
        numButtons.push(numButton);
    }
    return numButtons;
}

function clearInput() {
    result.value = "";
}