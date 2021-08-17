// Grabbing Values from other HTML/JS doc.
let weightPrediction = localStorage.getItem("weightPrediction");
let percReduc = localStorage.getItem("percReduc");
let TTO = localStorage.getItem("TrashGoalOne");

// Doc Variables

// Buttons
let submitButton = document.querySelector("#append");

// Inputs
let typeInput = document.querySelector("#type");
let weightInput = document.querySelector("#weight");
let amountInput = document.querySelector("#amount");
let dateInput = document.querySelector("#date");

// Divs
let typeDiv = document.querySelector(".typeAppend");
let weightDiv = document.querySelector(".weightAppend");
let amountDiv = document.querySelector(".amountAppend");
let dateDiv = document.querySelector(".dateAppend");

// Test Info Transfer
console.log(weightPrediction);
console.log(percReduc);
console.log(TTO);

submitButton.onclick = function() {
    
}



