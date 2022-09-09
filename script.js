

document.getElementById("reset-btn").addEventListener("click", function () {

location.reload();

})




let billInput = document.getElementById('bill');
let numOfPeople = document.getElementById('people');
let tipPercent = document.getElementById('tipbut');
let buttons = document.querySelectorAll(".tip-btn");
const buttonSelected = document.getElementsByClassName('active');

let tipValue = document.getElementById('tip-amnt');


/* Functions */


/* Calculates totals */

function addTip() {


   
    let tipPercentage = buttonSelected[0].value;


    let tipAmount = (billInput.value * tipPercentage) / numOfPeople.value;



    tipValue.innerHTML = tipAmount;

}


/* Calculates tip percentages */

function calculateTip () {

    buttons.forEach((button) => {

        button.classList.remove('active');

    });

    this.classList.add('active');

    addTip();

}





/* Event Listeners */

/* Prints tips/totals after entering number of people */

numOfPeople.addEventListener('keyup', addTip);


/* Clickable tip buttons */

buttons.forEach((button) => {

    button.addEventListener('click', calculateTip);

})


