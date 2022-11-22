var buttons = document.querySelectorAll('button');
var display = document.getElementById("display");
var operand1 = 0;
var operand2 = null;
var operator = null;

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function (event) {
        var value = this.getAttribute('data-value');
        if (value == '+') {
            operand1 = parseFloat(display.innerText);
            display.innerText = '+';

        } else if (value == '-') {
            operand1 = parseFloat(display.innerText);
            display.innerText = '-';

        } else if (value == '*') {
            operand1 = parseFloat(display.innerText);
            display.innerText = '*';

        } else if (value == '/') {
            operand1 = parseFloat(display.innerText);
            display.innerText = '/';

        } else if (value == "delete") {
            display.innerText = display.innerText.slice(0, -1);

        } else if (value == 'A/C') {
            display.innerText = " ";

        } else if (value == '%') {
            operand1 = parseFloat(display.innerText);
            display.innerText = '%';
            

        } else if (value == '=') {
            operand2 = parseFloat(display.innerText);
            var result = operand1 + operator + operand2;
            display.style.backgroundColor = "rgba(255,255,255,.4)"
            display.innerText = result;

        }else if(value == 'clicked'){
            display.style.fontSize = "1.7rem";
            display.style.paddingLeft = ".4em"
            display.style.backgroundColor = "rgba(255,255,255,.4)"
            display.innerText = "Welcome to Rishu's calculator" ;
        } else {
            display.innerText += value;
        }


    });
}


