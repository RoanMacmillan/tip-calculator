
/* Refresh values to 0 */


document.getElementById("reset-btn").addEventListener("click", function () {

location.reload();

}) 

/* activate reset button if fields have input */


document.addEventListener('input', () => {


    if (billInput.value.length > 0 || numOfPeople.value.length > 0 || customTip.value.length > 0) {

        resetButton.removeAttribute('disabled');
        resetButton.style.opacity = "1";
        resetButton.style.cursor = 'pointer';
    
    } else {

        resetButton.setAttribute('disabled', 'disabled');
        resetButton.style.opacity = "0.2";
        
    }


}) 


/* Required variables */

const resetButton = document.getElementById('reset-btn');

let billInput = document.getElementById('bill');
let numOfPeople = document.getElementById('people');
let tipPercent = document.getElementById('tipbut');
let buttons = document.querySelectorAll(".tip-btn");

const buttonSelected = document.getElementsByClassName('active');
const customTip = document.getElementById('custom');
const errorMsg = document.getElementById('error');
let tipValue = document.getElementById('tip-amnt');
let totalAmount = document.getElementById('total-cost');

/* Functions */


/* Calculates totals/tips */

function addTip() {


   
    let tipPercentage;


    let tipAmount;

    let totalCost;


    if (numOfPeople.value !== '') {

        errorMsg.style.display = 'none';
        numOfPeople.style.outline = 'none';
    
    } else {

        errorMsg.style.display = 'block';
        numOfPeople.style.outline = "2px solid orange";
    }


    if(customTip.classList.contains('active')){

        tipPercentage = customTip.value;


    } 
    
    

    
    else {

        tipPercentage = buttonSelected[0].value;
    }

    tipAmount = (billInput.value * tipPercentage / 100) / numOfPeople.value;

    totalCost = tipAmount + billInput.value / numOfPeople.value;

    tipAmount = tipAmount.toFixed(2);
    totalCost = totalCost.toFixed(2);


    tipValue.innerHTML = '$' + tipAmount;

    totalAmount.innerHTML = '$' + totalCost;
 
}


/* Calculates tip percentages */

function calculateTip () {

    buttons.forEach((button) => {

        button.classList.remove('active');

    });


    customTip.value = '';

    this.classList.add('active');

    addTip();

}

function calculateCustomTip () {

    buttons.forEach((button) => {

        button.classList.remove('active');

    });

    this.classList.add('active');

    addTip();


}



/* Event Listeners */

/* Prints tips/totals after entering number of people */

numOfPeople.addEventListener('keyup', addTip);

billInput.addEventListener('keyup', addTip);


/* Clickable tip buttons */

buttons.forEach((button) => {

    button.addEventListener('click', calculateTip);

})


customTip.addEventListener('keyup', calculateCustomTip);