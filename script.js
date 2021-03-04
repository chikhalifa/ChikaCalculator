let checkboxDark = document.querySelector('input[name="theme"]');

let checkboxTurnOn = document.querySelector('input[name="turnOn"]');
const buttons = document.querySelectorAll('button')

let valuesOntheScreen = document.querySelector('.upper-value')
let output = document.querySelector('.lower-value')
const allNumbers = document.querySelectorAll('.number');
const clearAll = document.getElementById('clear');
const clearLast = document.getElementById('backspace')
const rest = document.getElementById('%');
const addition = document.getElementById('+');
const subtraction = document.getElementById('-')
const multiply = document.getElementById('*')
const divide = document.getElementById('/')
const result = document.getElementById('=')

//  DARK THEME
checkboxDark.addEventListener('change',function(){
    if(this.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light');
    }
});

// TURN CALCULATOR
// buttons.forEach(item => item.disabled = true)

// checkboxTurnOn.addEventListener('change',function(){{
//   if(!this.checked){
//     buttons.forEach(item => item.disabled = true); 

//     output.innerHTML = "";
//   }else {
//     buttons.forEach(item => item.disabled = false);
//     output.innerHTML = "0";
//   }
// }})

// FUNCTION TO CLEAR VALUES
function clearValues(){
  output.innerHTML = "0";
  valuesOntheScreen.innerHTML = "";
}

clearAll.addEventListener('click', clearValues)

// CALCULATION NUMBERS
allNumbers.forEach(item => item.addEventListener('click', number => {
  if(output.innerText[0] === "0" && output.innerText === "0"){
    output.innerText = ""
  }
  
  if(output.innerText[0] === "."){
    output.innerText = "0.";
  } 
  output.innerText += number.target.innerText
}))

// FUNCTION TO CLEAR LAST ITEM ON SCREEN
function clearLastItem(){
  const valueItem = output.innerText
  let currentValue = valueItem.substring(0, valueItem.length-1)
  if (currentValue ==="0" || currentValue === ""){
    output.innerText = "0";
    return
  } else {
    output.innerText = currentValue
  }
}
clearLast.addEventListener('click', clearLastItem)

// FUNCTION TO CALCULATE PERCENTAGE
function restValue(){
  const percentage = output.innerText/100
  
  output.innerText = percentage
}

rest.addEventListener('click', restValue)

// FUNCTION TO CALCULATE 

function calc(){
  if(output.innerHTML === '' || output.innerHTML === '0'){
    let value = valuesOntheScreen.innerHTML;

    valuesOntheScreen.innerHTML = value.substr(0, value.length-1) + this.id;
  } else {
    valuesOntheScreen.innerHTML += output.innerHTML + this.id
  }
  
  output.innerHTML = '';
}
addition.addEventListener('click', calc)
subtraction.addEventListener('click', calc)
multiply.addEventListener('click', calc)
divide.addEventListener('click', calc)

// FUNCTION TO OUTPUT RESULT
function resultOperation(){
  const calculateResult = valuesOntheScreen.innerText + output.innerText;
  const outputFormatted = eval(calculateResult)
  valuesOntheScreen.innerText = "";
  output.innerText= outputFormatted;

}

result.addEventListener('click', resultOperation)
