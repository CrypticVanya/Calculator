const add = (a, b) => a + b
const subtract = (a, b) => a - b
const multiply = (a, b) => a * b
const devide = (a, b) => a / b


function displayEl(clickEl) {
const displayScreen = document.querySelector('.display-screen')
displayScreen.classList.add('displayScreen')
displayScreen.textContent += clickEl
}

const displayScreen = document.querySelector('.display-screen')
const btns = document.querySelectorAll('button')
const clear = document.querySelector('#c')



btns.forEach((button) => {
button.addEventListener("click", () => {
    displayScreen.textContent = ''
    clickEl = button.id
    displayEl(clickEl) 
    operate()
    })
})


function operate() {
    if (clickEl === '+') {
        add(a, b)
    }
}