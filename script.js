// Declaring Variables
let subtext = document.querySelector(".subtext");
let submitOneButton = document.querySelector("#submitOne");
let amtDiv = document.querySelector("#amtDiv");

let choiceDiv = document.querySelector("#choice");
let ugoalDiv = document.querySelector("#userGoal");
let utGoalDiv = document.querySelector("#userText");
let wgoalDiv = document.querySelector("#webGoal");


let catagoryInput = document.querySelector("#catagory");
let cText = document.querySelector("#cText")


// Element Creation

let newBreak = document.createElement("hr");

let userGoal = document.createElement("button");
let webGoal = document.createElement("button");

let perSymb = document.createElement("p");
let gText = document.createElement("p");
let perText = document.createElement("p");

let goalInput = document.createElement("input");



// Functions

submitOneButton.onclick = function(event) { // Submit button click
    event.preventDefault(); // Prevent Web Refresh

    // Reset Calculations / Divs
    ugoalDiv.style.display = "";
    ugoalDiv.innerHTML = "";

    wgoalDiv.style.display = "";
    wgoalDiv.innerHTML = "";

    utGoalDiv.style.display = "";
    utGoalDiv.innerHTML = "";
    
    if (catagoryInput.value != "") { // Catagory is not empty then run.
        choiceDiv.appendChild(newBreak);

        userGoal.innerHTML = "I would like to choose my own goal.";
        webGoal.innerHTML = "I would like the website to choose my goal.";

        choiceDiv.appendChild(userGoal);
        choiceDiv.appendChild(webGoal);

        userGoal.onclick = function(event) { // Option 1
            console.log("User sets their own goal.");
            webGoal.remove();

            goalInput.setAttribute("placeholder", "Please input a percentage you want to reduce.")
            goalInput.setAttribute("type", "number");

            perSymb.innerHTML = "%";
            perSymb.style.fontSize = "19px";

            ugoalDiv.style.display = "flex";

            ugoalDiv.appendChild(goalInput);
            ugoalDiv.appendChild(perSymb);

            goalInput.addEventListener("keyup", function(event){ // Enter keyup listener
                if (event.key === "Enter") {
                    if (goalInput.value != "") {
                        

                        // Percentage Calc
                        let num = catagoryInput.value - (catagoryInput.value/100)*goalInput.value;
                        let userTrashGoal = num.toFixed(1);

                        perText.style.fontSize = "22px";
                        gText.style.fontSize = "22px";

                        perText.innerHTML = "You have set your reduction percentage to " + goalInput.value + "%";  
                        gText.innerHTML = "Your goal will be to reduce trash down to only " + userTrashGoal + "kg!";

                        utGoalDiv.appendChild(perText);
                        utGoalDiv.appendChild(gText);
                    } else {
                        alert("Please input a number for your percentage.")
                    }
                    
                }
            })

        }

        webGoal.onclick = function(event) { // Option 2
            console.log("We set the users goal.")
            userGoal.remove();

            // Percentage Calc
            let num = catagoryInput.value - (catagoryInput.value * 0.3);
            let webTrashGoal = num.toFixed(1);

            perText.innerHTML = "We will automatically set your reduction percentage to 30%!";
            gText.innerHTML = "Your goal will be to reduce trash down to only " + webTrashGoal + "kg!";

            perText.style.fontSize = "22px";
            gText.style.fontSize = "22px";

            wgoalDiv.appendChild(perText);
            wgoalDiv.appendChild(gText);
        }


    } else { // No input on start / Wrong input.
        alert("Please input an approximate weight of your trash in kilograms.")
    }

}