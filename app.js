const buttons = document.querySelectorAll('button')
const screenDisplay = document.querySelector('.disp')

let calculation = []
let accCalculation 

function calculate(button){

    const value = button.innerHTML

    if(value === "CLEAR"){
        calculation = []
        screenDisplay.innerHTML = '...'
    }
    else if(value === "="){
        screenDisplay.innerHTML = eval(accCalculation)
    }

    else{
        calculation.push(value)
        accCalculation = calculation.join('')
        screenDisplay.innerHTML = accCalculation
    }
    
    

    console.log(value)
    console.log(calculation)
}
buttons.forEach(button => button.addEventListener('click', () => calculate(button)))

