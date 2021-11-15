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
    numButton.type = 'display_on_press';
    numButton.value = i;
    body.appendChild(numButton);

    numButtons.push(numButton);
}

// Display buttons
for (var numButton of numButtons) {

}

// Controller/GUI
let buttons = document.getElementsByTagName('button');
let display = document.getElementById('result');

for (var button of buttons) {
    if (button.getAttribute('type')) {
        let v = button.textContent;
        button.addEventListener("click", (event) => {
            result.value += v;
        });
    }
}

let equalsButton = document.getElementById('equals');
equalsButton.addEventListener('click', () => {
    alert('hello');
});
