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
let statDiv = document.querySelector(".statAppend")

// One time element creation

let goalText = document.createElement("p");
let percText = document.createElement("p");
let finalTotal = document.createElement("p");
let totalReduced = document.createElement("p");
let dateStart = document.createElement("p");
let dateEnd = document.createElement("p");
let tipsText = document.createElement("p");
let statText = document.createElement("p");

// Other

let numOfInputs = 0;
let totalWeight = 0;
let dateList = [];

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
        dateList.push(dateInput.value);

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
            console.log("User succeeded in their goal.");

            statText.innerHTML = "Final Statistics: ";
            percText.innerHTML = "You wanted to reduce trash by: " + percReduc + "%";
            goalText.innerHTML = "Your Goal was: " + TTO + " kg <br>";
            finalTotal.innerHTML = "The final weight on your trash was: " +  totalWeight.toFixed(1) + " kg";
            
            let num = TTO - totalWeight;
            let redTrash = num.toFixed(1);
            totalReduced.innerHTML = "You reduced a total of " + redTrash + " kg of trash!" + "<br>";

            dateStart.innerHTML = "Date Start : " + dateList[0];
            dateEnd.innerHTML = "Date End : " + dateList[dateList.length - 1];

            statDiv.appendChild(statText);
            statDiv.appendChild(percText);
            statDiv.appendChild(goalText);
            statDiv.appendChild(finalTotal);
            statDiv.appendChild(totalReduced);
            statDiv.appendChild(dateStart);
            statDiv.appendChild(dateEnd);

        } else {
            infoRec.remove();
            submitButton.remove();

            console.log("User failed in their goal.")

            statText.innerHTML = "Final Statistics: ";
            percText.innerHTML = "You wanted to reduce trash by: " + percReduc + "%";
            goalText.innerHTML = "Your Goal was: " + TTO + " kg <br>"
            finalTotal.innerHTML = "The final weight on your trash was: " + totalWeight.toFixed(1) + " kg";

            let num = totalWeight - TTO;
            let gainTrash = num.toFixed(1);
            totalReduced.innerHTML = "You gained a total of " + gainTrash + " kg of trash! <br>";
            
            dateStart.innerHTML = "Date Start : " + dateList[0];
            dateEnd.innerHTML = "Date End : " + dateList[dateList.length - 1];

            statDiv.appendChild(statText);
            statDiv.appendChild(percText);
            statDiv.appendChild(goalText);
            statDiv.appendChild(finalTotal);
            statDiv.appendChild(totalReduced);
            statDiv.appendChild(dateStart);
            statDiv.appendChild(dateEnd);
        }

        
    } else {

    }
}

