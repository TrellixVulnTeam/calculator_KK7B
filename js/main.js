// Domain
// let stack = [];


let numButtons = constructNumButtons();
let addButton = document.createElement('button');
let text = document.createTextNode('+');
addButton.appendChild(text);
addButton.value = '+';

let allButtons = [].concat(numButtons);
allButtons.push(addButton);

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

// Controller/GUI
let equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
    alert('hello');
});

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