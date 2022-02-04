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

//test area
let numOne = 2;
let operation = '/';
let numTwo = 3;
 
operate(numOne,operation,numTwo);
console.log(numOne);