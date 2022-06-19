let firstNum = ''
let secondNum = ''
let currentOperation = null
let shouldResetScreen = false


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



const displayScreen = document.querySelector('.display-screen')
const btns = document.querySelectorAll('.btn')
const operators = document.querySelectorAll('.ops')
const lastOperationScreen = document.getElementById('lastOperationScreen')
const currentOperationScreen = document.getElementById('currentOperationScreen')




btns.forEach((button) => 
button.addEventListener("click", () => getNumber(button.textContent))
)

operators.forEach((op) => 
    op.addEventListener("click", () => setOperation(op.textContent))
)

function getNumber(num) {
    if (currentOperationScreen.textContent === '0' || shouldResetScreen)
    resetScreen()
    currentOperationScreen.textContent += num
}


function resetScreen() {
    currentOperationScreen.textContent = ''
    shouldResetScreen = false
}

function clear() {
    currentOperationScreen.textContent = '0'
    lastOperationScreen.textContent = ''
    firstNum = ''
    secondNum = ''
    currentOperation = null
}

function deleteNumber() {
    currentOperationScreen.textContent = currentOperationScreen.textContent
    .toString()
    .slice(0, -1)
}

function setOperation(operator) {
    if (currentOperation !== null) evaluate()
    firstNum = currentOperationScreen.textContent
    currentOperation = operator
    lastOperationScreen.textContent = `${firstNum} ${currentOperation}`
    shouldResetScreen = true
}

function evaluate() {
    if (currentOperation === null || shouldResetScreen) return
    if (currentOperation === '÷' && currentOperationScreen.textContent === '0') {
        alert("you cant devide by 0!")
        return 
    }
    secondNum = currentOperationScreen.textContent
    currentOperationScreen.textContent = roundResult(
        operate(currentOperation, firstNum, secondNum)
    )
    lastOperationScreen.textContent = `${firstNum} ${currentOperation} ${secondNum} =`
    currentOperation = null
}

function roundResult(num) {
    return Math.round(num * 1000) / 1000
}
