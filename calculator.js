// var buttons = document.querySelectorAll('button');
// var display = document.getElementById("display");
// var operand1 = 0;
// var operand2 = null;
// var operator = null;

// for (var i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', function (event) {
//         var value = this.getAttribute('data-value');
//         if (value == '+') {
//             operand1 = parseFloat(display.innerText);
//             display.innerText = '+';

//         } else if (value == '-') {
//             operand1 = parseFloat(display.innerText);
//             display.innerText = '-';

//         } else if (value == '*') {
//             operand1 = parseFloat(display.innerText);
//             display.innerText = '*';

//         } else if (value == '/') {
//             operand1 = parseFloat(display.innerText);
//             display.innerText = '/';

//         } else if (value == "delete") {
//             display.innerText = display.innerText.slice(0, -1);

//         } else if (value == 'A/C') {
//             display.innerText = " ";

//         } else if (value == '%') {
//             operand1 = parseFloat(display.innerText);
//             display.innerText = '%';
            

//         } else if (value == '=') {
//             operand2 = parseFloat(display.innerText);
//             var result = operand1 + operator + operand2;
//             display.style.backgroundColor = "rgba(255,255,255,.4)"
//             display.innerText = result;

//         }else if(value == 'clicked'){
//             display.style.fontSize = "1.7rem";
//             display.style.paddingLeft = ".4em"
//             display.style.backgroundColor = "rgba(255,255,255,.4)"
//             display.innerText = "Welcome to Rishu's calculator" ;
//         } else {
//             display.innerText += value;
//         }


//     });
// }



var buttons = document.getElementsByClassName("button");
var display = document.getElementById("display");

// display.textContent = 0;
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
            display.textContent = operand1
        } else if (value == "=") {
            operand2 = parseFloat(text);
            var result = eval(operand1 + ' ' + operator + ' ' + operand2);
            if (result) {
                display.textContent = result;
                operand1 = result;
                operand2 = null;
                operator = null;
            }
        }else if(value == 'clicked'){
                         display.style.fontSize = "1.7rem";
                         display.style.paddingLeft = ".4em"
                         display.style.backgroundColor = "rgba(255,255,255,.4)"
                         display.innerText = "Welcome to Rishu's calculator" ;
        
        }else {
            display.textContent += value;
        }
    });
}

