// Grabbing Values from other HTML/JS doc.
let weightPrediction = localStorage.getItem("weightPrediction");
let percReduc = localStorage.getItem("percReduc");
let TTO = localStorage.getItem("TrashGoalOne");

// Document Variables


// Parent Divs
let infoRec = document.querySelector("#infoRecorder");

// Buttons
let submitButton = document.querySelector("#append");
let endButton = document.querySelector("#end");

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

// Other

let numOfInputs = 0;
let totalWeight = 0;

submitButton.onclick = function(event) { // Submit Button Click Listener
    event.preventDefault();

    if (typeInput.value != "" && weightInput.value != "" && amountInput.value != "" && dateInput.value != "") {

        // Defining Perams

        let newType = document.createElement("p");
        let newWeight = document.createElement("p");
        let newAmount = document.createElement("p");
        let newDate = document.createElement("p");

        // Styling Perams

        newType.innerHTML = typeInput.value;
        newWeight.innerHTML = weightInput.value;
        newAmount.innerHTML = amountInput.value + "x";
        newDate.innerHTML = dateInput.value;

        totalWeight += parseFloat(weightInput.value * amountInput.value);
        console.log(totalWeight);

        

        // Appending Perams

        typeDiv.appendChild(newType);
        weightDiv.appendChild(newWeight);
        amountDiv.appendChild(newAmount);
        dateDiv.appendChild(newDate);

        // Clearing Perams

        typeInput.value = "";
        weightInput.value = "";
        amountInput.value = "";
        dateInput.value = "";



    } else {
        alert("Please enter all the fields required.")
    }
}

endButton.onclick = function(event) { // End Session Button
    event.preventDefault();

    if (confirm("Are you sure you want to end this sesion?")) {
        infoRec.remove();
        submitButton.remove();

        if (totalWeight < TTO) {
            console.log("User succeeded in their goal.")

            

        }

        
    } else {

    }
}

