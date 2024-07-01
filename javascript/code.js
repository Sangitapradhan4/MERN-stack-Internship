const display = document.getElementById('display');
const buttons = Array.from(document.getElementsByClassName('digit'));
const operators = Array.from(document.getElementsByClassName('operator'));
const clear = document.getElementById('clear');

let currentNum = '';
let prevNum = '';
let result = null;
let currentOperator = null;

function appendNumber(num) {
	currentNum += num;
	display.value = currentNum;
}

function chooseOperator(operator) {
	if (currentOperator!== null) calculate();
	currentOperator = operator;
	prevNum = currentNum;
	currentNum = '';
}

function calculate() {
	let num1 = Number(prevNum);
	let num2 = Number(currentNum);
	let calculation;

	switch (currentOperator) {
		case '+':
			calculation = num1 + num2;
			break;
		case '-':
			calculation = num1 - num2;
			break;
		case '*':
			calculation = num1 * num2;
			break;
		case '/':
			calculation = num1 / num2;
			break;
		default:
			return;
	}

	result = calculation;
	display.value = result;
	currentNum = result.toString();
	prevNum = '';
	currentOperator = null;
}

function clearDisplay() {
	currentNum = '';
	prevNum = '';
	result = null;
	currentOperator = null;
	display.value = '';
}

buttons.map( button => button.addEventListener('click', (e) => {
	appendNumber(e.target.value);
}));

operators.map( operator => operator.addEventListener('click', (e) => {
	chooseOperator(e.target.value);
}));

clear.addEventListener('click', clearDisplay);