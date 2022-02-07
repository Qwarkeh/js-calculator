//test area
let numOneArr = [7,0,3];
let numTwoArr = [1,1];
let operator = 'divide';
//

//FUNCTIONS
function add (numOne, numTwo) {
    let answer = numOne + numTwo;
    console.log(`Answer: ${answer}`);
    numOne = answer;
}

function subtract(numOne, numTwo) {
    let answer = numOne - numTwo;
    console.log(`Answer: ${answer}`);
    numOne = answer;
}

function multiply(numOne, numTwo) {
    let answer = numOne * numTwo;
    console.log(`Answer: ${answer}`);
    numOne = answer;
}

function divide (numOne, numTwo) {
    let answer = numOne / numTwo;
    console.log(`Answer: ${answer}`);
    numOne = answer;
}

function operate (numOne, operation, numTwo ){
    if (operation === '+') add();
    if (operation === '-') subtract();
    if (operation === '*') multiply();
    if (operation === '/') divide();
}


function getId (clicked_id) {
   return clicked_id;
}

//EVENT HANDLERS
// number buttons
const numberButtons = document.querySelectorAll('.number');

numberButtons.forEach(number => number.addEventListener('click',() => {
    const numberId = number.id;
    console.log(numberId);
    numOneArr.push(numberId);
} ))

// operation buttons
const operationButtons = document.querySelectorAll('.operation');
operationButtons.forEach(operation => operation.addEventListener('click', () => {
    const operationId = operation.id;
    console.log(operationId); 
    operation = operationId;
}))

// AC
const allClearButton = document.querySelector('#AC');

allClearButton.addEventListener('click', () => {
    const allClearId = allClearButton.id;
    console.log(allClearId);
    numOneArr = [];
    numTwoArr= [];
    operation = null;
});

//decimal
const decimalButton = document.querySelector('#decimal');

decimalButton.addEventListener('click', () => {
    const decimalId = decimalButton.id;
    console.log(decimalId);
})

function operate (numOneArr, operator, numTwoArr) {
    let numOne = parseFloat(numOneArr.join(''));
    console.log(numOne);
    let numTwo = parseFloat(numTwoArr.join(''));
    console.log(numTwo);

    if (operator === 'add') {
        add(numOne, numTwo);
    } else if (operator === 'subtract') {
        subtract(numOne, numTwo);
    } else if (operator === 'multiply') {
        multiply(numOne, numTwo);
    } else if (operator === 'divide') {
        divide(numOne, numTwo);
    }

}

operate(numOneArr, operator, numTwoArr);