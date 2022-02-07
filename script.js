//test area
userInput = [0];
operationInput = '';
temp = [0];

//FUNCTIONS
function operate (userInput, operationInput, temp) {
    let numOne = parseFloat(temp.join(''));
    console.log(numOne);
    let numTwo = parseFloat(userInput.join(''));
    console.log(numTwo);

    console.log(operationInput);

    if (operationInput === '+') {
        add(numOne, numTwo);
    } else if (operationInput === '-') {
        subtract(numOne, numTwo);
    } else if (operationInput === '*') {
        multiply(numOne, numTwo);
    } else if (operationInput === '/') {
        divide(numOne, numTwo);
    }
}

function add (numOne, numTwo) {
    let answer = numOne + numTwo;
    console.log(answer);
    userInput = [answer];
}

function subtract(numOne, numTwo) {
    let answer = numOne - numTwo;
    console.log(`Answer: ${answer}`);
    userInput = [answer];
}

function multiply(numOne, numTwo) {
    let answer = numOne * numTwo;
    console.log(`Answer: ${answer}`);
    userInput = [answer];
}

function divide (numOne, numTwo) {
    if (numTwo === 0) {
        console.log('ERR: DIV BY 0');
        resetValues();
    } else {
        let answer = numOne / numTwo;
        userInput = [answer];
    }
}

function resetValues () {
    userInput= [0];
    operationInput = '';
    temp = [0];
}

//EVENT HANDLERS
// number buttons
const numberButtons = document.querySelectorAll('.number');

numberButtons.forEach(number => number.addEventListener('click',() => {
    const numberId = number.id;
    console.log(numberId);
    userInput.push(numberId);
} ))

// operation buttons
const operationButtons = document.querySelectorAll('.operation');
operationButtons.forEach(operation => operation.addEventListener('click', () => {
    const operationId = operation.id;
    console.log(operationId); 
    operationInput= operationId;
    temp = userInput;
    userInput = [];
}))

// AC
const allClearButton = document.querySelector('#AC');

allClearButton.addEventListener('click', () => {
    const allClearId = allClearButton.id;
    console.log(allClearId);
    resetValues();
});

//decimal
const decimalButton = document.querySelector('#d');

decimalButton.addEventListener('click', () => {
    const decimalId = decimalButton.id;
    console.log(decimalId);
})

// equal button
const equalButton = document.querySelector('.equals');
equalButton.addEventListener('click', () => {
    const equalsId = equalButton.id;
    console.log(equalsId);
    operate(userInput, operationInput, temp);
})
