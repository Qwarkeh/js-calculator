function add () {
    let answer = numOne + numTwo;
    console.log(`Answer: ${answer}`);
    numOne = answer;
}

function subtract() {
    let answer = numOne - numTwo;
    console.log(`Answer: ${answer}`);
    numOne = answer;
}

function multiply() {
    let answer = numOne * numTwo;
    console.log(`Answer: ${answer}`);
    numOne = answer;
}

function divide () {
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

//THREE EVENT HANDLERS, ONE FOR EACH BUTTON
//listen for first number press
//listen for operation press
//listen for second number
//run the above values through operate();

function getId (clicked_id) {
   return clicked_id;
}

function handlers () {

    // number buttons
    const numberButtons = document.querySelectorAll('.number');

    numberButtons.forEach(number => number.addEventListener('click',() => {
        const numberId = number.id;
        console.log(numberId);
    } ))

    // operation buttons
    const operationButtons = document.querySelectorAll('.operation');
    operationButtons.forEach(operation => operation.addEventListener('click', () => {
       const operationId = operation.id;
       console.log(operationId); 
    }))

    // AC
    const allClearButton = document.querySelector('#AC');

    allClearButton.addEventListener('click', () => {
        const allClearId = allClearButton.id;
        console.log(allClearId);
    });

    //decimal
    const decimalButton = document.querySelector('#decimal');
    
    decimalButton.addEventListener('click', () => {
        const decimalId = decimalButton.id;
        console.log(decimalId);
    })
}

//test area
let numOne = 2;
let operation = '/';
let numTwo = 3;
 
handlers();