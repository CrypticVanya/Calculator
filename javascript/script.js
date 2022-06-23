//declare the global variables and dom items

let firstNum = ''
let secondNum = ''
let currentOperation = null
let shouldResetScreen = false
const displayScreen = document.querySelector('.display-screen')
const btns = document.querySelectorAll('.btn')
const operators = document.querySelectorAll('.ops')
const lastOperationScreen = document.getElementById('lastOperationScreen')
const currentOperationScreen = document.getElementById('currentOperationScreen')
const eraseBtn = document.getElementById('c')

//add event listenners to the calculator cells which will execute 

eraseBtn.addEventListener('click', () => backSpaceNumber())

btns.forEach((button) => 
    button.addEventListener("click", () => getNumber(button.textContent))
)

operators.forEach((op) => 
    op.addEventListener("click", () => setOperation(op.textContent))
)

// declare the functions that will do the math

function add(a, b) {
    return a + b
}

function substract(a, b) {
    return a - b
}

function multiply(a, b) {
    return a * b
}

function devide(a, b) {
    return a / b
}

// function with switch statements that will take in the operator and numbers 
function operate(operator, a, b) {
    a = Number(a)
    b = Number(b)
    switch (operator) {
        case '+':
            return add(a, b)
        case '-':
            return substract(a, b)
        case 'x':
            return multiply(a, b)
        case '/':
            if (b===0) return null 
            else return devide(a,b)
        default:
            return null
    }
}


// function that will take in the second number and display the math problem just solved
function evaluate() {
    if (currentOperation === null || shouldResetScreen) { 
        return
    }
    if (currentOperation === '/' && currentOperationScreen.textContent === '0') {
        return alert("Silly goose, you cant devide by 0!")
        
    }
    secondNum = currentOperationScreen.textContent
    currentOperationScreen.textContent = operate(currentOperation, firstNum, secondNum)
    lastOperationScreen.textContent = `${firstNum} ${currentOperation} ${secondNum} =`
    currentOperation = null
}


// function that will get and print the numbers on screen
function getNumber(num) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen)
    resetScreen()
    currentOperationScreen.textContent += num
}

//resets the screen after number or operator has been pressed 
function resetScreen() {
    currentOperationScreen.textContent = null
    shouldResetScreen = false
}

//deletes the previous number 
function backSpaceNumber() {
    currentOperationScreen.textContent = currentOperationScreen.textContent
    .toString()
    .slice(0, -1)
}


//function that gathers the operator and prints first number on screen
// --bug: could not include the operator to display on screen without = printing on the result which creates NaN 
function setOperation(operators) {
    if (currentOperation !== null) evaluate()

    firstNum = currentOperationScreen.textContent
    currentOperation = operators
    currentOperationScreen.innerText= firstNum 
    shouldResetScreen = true
}



