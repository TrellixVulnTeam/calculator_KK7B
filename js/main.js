// Domain
let stack = [];

// Layout HTML
let body = document.body;
let testButton = document.createElement('button');
let text = document.createTextNode('123');
tag.appendChild(text);
body.appendChild(testButton);


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
