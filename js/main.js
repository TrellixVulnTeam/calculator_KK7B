// Domain
// let stack = [];

// Controller
let numButtons = [];

// Layout HTML
// Construct buttons
let body = document.body;
for (var i = 0; i < 10; i++) {
    let numButton = document.createElement('button');
    let text = document.createTextNode(i);
    numButton.appendChild(text);
    numButton.value = i;
    numButtons.push(numButton);
}

// Add event listeners to buttons
for (let numButton of numButtons) {
    let v = numButton.value;
    numButton.addEventListener("click", () => {
        result.value += v;
    });
}

// Display buttons
for (let numButton of numButtons) {
    body.appendChild(numButton);
}

// Controller/GUI
let display = document.getElementById('result');
let buttons = document.getElementsByTagName('button');

let equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
    alert('hello');
});
