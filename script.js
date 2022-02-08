//test area
let userInput = [0];
let operationInput = '';
let temp = [0];

let screenTrigger = false;
let equalsTrigger = false;
let operationsTrigger = false;
let decimalTrigger = false;
let negativeTrigger = false;
let chainingTrigger = false;

//FUNCTIONS
function operate (userInput, operationInput, temp) {
    let numOne = parseFloat(temp.join(''));
    let numTwo = parseFloat(userInput.join(''));

    if (operationInput === '+') {
        add(numOne, numTwo);
    } else if (operationInput === '-') {
        subtract(numOne, numTwo);
    } else if (operationInput === '*') {
        multiply(numOne, numTwo);
    } else if (operationInput === '/') {
        divide(numOne, numTwo);
    } else {
        updateDisplayText(numTwo);
    }
}

function decimalCheck(answer) {
    if (answer.toString().includes('.')){
        updateDisplayText(answer.toFixed(3));
    } else updateDisplayText(answer);

}

function add (numOne, numTwo) {
    let answer = numOne + numTwo;
    decimalCheck(answer);
    userInput = [answer];
}

function subtract(numOne, numTwo) {
    let answer = numOne - numTwo;
    decimalCheck(answer);
    userInput = [answer];
}

function multiply(numOne, numTwo) {
    let answer = numOne * numTwo;
    decimalCheck(answer);
    userInput = [answer];
}

function divide (numOne, numTwo) {
    if (numTwo === 0) {
        resetValues();
        updateDisplayText('NO.');
    } else {
        let answer = numOne / numTwo;
        decimalCheck(answer);
        userInput = [answer];
    }
}

function resetValues () {
    userInput= [0];
    temp = [0];
    updateDisplayText(0);
}

function updateDisplayText(answer) {
    const display = document.querySelector('.screen');
    display.textContent = answer;
}

//EVENT HANDLERS

// number buttons
const numberButtons = document.querySelectorAll('.number');
numberButtons.forEach(number => number.addEventListener('click',() => {
    operationsTrigger = false;

    equalsTrigger = false;
    if (screenTrigger === true) {
        screenTrigger = false;
        userInput=[0];
        updateDisplayText(0);
    }

    const numberId = number.id;
    userInput.push(numberId);
    
    if (userInput[0] == 0) {
        userInput.shift();
    }

    if (userInput[0] === '.'){
        updateDisplayText('0' + userInput.join(''));
    } else {
        updateDisplayText(userInput.join(''));
    }

} ))

// operation buttons
const operationButtons = document.querySelectorAll('.operation');
operationButtons.forEach(operation => operation.addEventListener('click', () => {
    if (operationsTrigger === true) {
        return;
    } else {
        if (chainingTrigger === false) {
            const operationId = operation.id;
            console.log(operationId); 
            operationInput= operationId;

            temp = userInput;   
            userInput = [0];

            chainingTrigger = true;
        } else {
            const equalsId = equalButton.id;
            console.log(equalsId);
            operate(userInput, operationInput, temp);
            screenTrigger = true;
            equalsTrigger = true;

            const operationId = operation.id;
            console.log(operationId); 
            operationInput= operationId;


            temp = userInput;   
            userInput = [0];
        }
    }
    operationsTrigger = true;
    decimalTrigger = false;
}))

// AC
const allClearButton = document.querySelector('#AC');
allClearButton.addEventListener('click', () => {
    const allClearId = allClearButton.id;
    console.log(allClearId);
    resetValues();

    chainingTrigger = false;
    decimalTrigger = false;
});

//decimal
const decimalButton = document.querySelector('#d');
decimalButton.addEventListener('click', () => {

    if (screenTrigger === true) {
        userInput = [0];
        screenTrigger = false;
    }

    if (decimalTrigger === true) {
        return;
    } else {
        const decimalId = decimalButton.id;

        userInput.push('.');
        updateDisplayText(userInput.join(''));
            
        decimalTrigger = true;
    }
})

// equal button
const equalButton = document.querySelector('.equals');
equalButton.addEventListener('click', () => {

    if (equalsTrigger === true) {
        return;
    } else {
        const equalsId = equalButton.id;
        console.log(equalsId);

        operate(userInput, operationInput, temp);

        screenTrigger = true;
        equalsTrigger = true;
        chainingTrigger = false;
        decimalTrigger = false;
    }
})

const negativeToggleButton = document.querySelector('#negative');
negativeToggleButton.addEventListener('click', () => {
    if (userInput[0] === 0){
        return;
        
    } else if (userInput[0] < 0) {
        let negativeNumber = userInput[0];
        let positiveNumber = Math.abs(negativeNumber);
        userInput[0] = positiveNumber;
        updateDisplayText(userInput);

    } else if(userInput[0] === '-'){
        if (userInput[1] === '.') {
            userInput.shift('-');
            userInput.unshift('0');
        } else {
            userInput.shift('-');
        }
        updateDisplayText(userInput.join(''));

    } else if (userInput[0] === '.') {
        userInput.unshift('0');
        userInput.unshift('-')
        updateDisplayText(userInput.join(''));
    }
    
    else{
        userInput.unshift('-') 
        updateDisplayText(userInput.join(''));
    } 
})
