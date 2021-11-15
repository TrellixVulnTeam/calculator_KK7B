// Domain
// let stack = [];


let numButtons = constructButtons();

// Add event listeners to buttons
for (let numButton of numButtons) {
    let v = numButton.value;
    numButton.addEventListener("click", () => {
        result.value += v;
    });
}

// Display buttons
for (let numButton of numButtons) {
    document.body.appendChild(numButton);
}

// Controller/GUI
let display = document.getElementById('result');
let buttons = document.getElementsByTagName('button');

let equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
    alert('hello');
});

function constructButtons() {
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