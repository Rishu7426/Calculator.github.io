// Apply CSS dynamically
var style = document.createElement('style');
document.head.appendChild(style);
style.innerHTML = `
/* Responsive */
* {
    box-sizing: border-box;
    margin: 0 auto;
    transition: .3s;
}

/* Calculator heading text */
#heading {
    text-align: center;
    color: blueviolet;
    padding-top: 19vh;
    font-weight: 800;
    font-size: 2rem;
    font-family: sans-serif;
}

/* Text Display */
#display{
    font-size: 3rem;
    color: rgb(0, 0, 0);
}

/* table layout */
#table {
    background-color: lightblue;
    box-shadow: inset 0px 0px 100px rgb(81, 0, 255), inset 0px 0px 100px rgb(153, 93, 93);
    border-radius: 5px;
}

/* Calculator button */
.button {
    height: 10vh;
    width: 13vh;
    background-color: rgb(219, 163, 163);
    cursor: pointer;
    border: 2px solid rgb(255, 255, 0);
    border-radius: 2px;
}

.button:hover {
    height: 9.7vh;
    width: 12.7vh;
    background-color: rgb(255, 180, 173);
    box-shadow: inset 100px 0px 0px rgb(168, 197, 240), inset 0px 0px 200px whitesmoke;
    border-radius: 10px;
    border: 3px solid rgb(76, 0, 255);
}

/* responsive <=600px */
@media screen and (max-width:600px) {
    * {
        box-sizing: border-box;
        margin: 0 auto;
        transition: .3s;
    }

    #heading {
        text-align: center;
        color: rgb(0, 0, 0);
        font-weight: 600;
        font-size: 2rem;
        font-family: sans-serif;
    }

    /* table layout */
    #table {
        background-color: lightblue;
        border-radius: 5px;
        display: flexbox;
        flex-wrap: wrap;
    }

    /* Calculator button */
    .button {
        height: 6vh;
        width: 9vh;
        background-color: rgb(219, 163, 163);
    }

    .button:hover {
        height: 5.9vh;
        width: 8.9vh;
        background-color: rgb(255, 180, 173);
        box-shadow: inset 0px 0px 0px rgb(255, 255, 255);
        border-radius: 4px;
    }
}
`;

// JavaScript Calculator Functionality

var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

var operand1 = 0;
var operand2 = null;
var operator = null;

function isOperator(value) {
    return value == "+" || value == "-" || value == "*" || value == "/";
}

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {

        var value = this.getAttribute('data-value');
        var text = display.textContent.trim();

        if (isOperator(value)) {
            operator = value;
            operand1 = parseFloat(text);
            display.textContent = "";
        } else if (value == "A/C") {
            display.textContent = "";
        } else if (value == "delete") {
            display.innerText = display.innerText.slice(0, -1);
        } else if (value == ".") {
            if (text.length && !text.includes('.')) {
                display.textContent = text + '.';
            }
        } else if (value == "%") {
            operand1 = parseFloat(text);
            operand1 = operand1 / 100;
            display.textContent = operand1;
        } else if (value == "=") {
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        } else if(value == 'clicked') {
            display.style.fontSize = "1.7rem";
            display.style.backgroundColor = "rgba(255,255,255,.4)";
            display.innerText = "Welcome to Rishu's calculator";
        } else {
            display.textContent += value;
        }
    });
}
