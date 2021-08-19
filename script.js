// Declaring Variables
let subtext = document.querySelector("#subtext");
let submitOneButton = document.querySelector("#submitOne");
let amtDiv = document.querySelector("#amtDiv");
let formOne = document.querySelector("#formOne");

let choiceDiv = document.querySelector("#choice");
let ugoalDiv = document.querySelector("#userGoal");
let utGoalDiv = document.querySelector("#userText");
let wgoalDiv = document.querySelector("#webGoal");

let catagoryInput = document.querySelector("#catagory");
let header = document.querySelector("#header");

// Element Creation

let newBreak = document.createElement("hr");

let userGoal = document.createElement("button");
let webGoal = document.createElement("button");
let conButton = document.createElement("button");

let perSymb = document.createElement("p");
let gText = document.createElement("p");
let perText = document.createElement("p");
let conText = document.createElement("p");

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
            ugoalDiv.style.justifyContent = "center";

            ugoalDiv.appendChild(goalInput);
            ugoalDiv.appendChild(perSymb);

            goalInput.addEventListener("keyup", function(event){ // Enter keyup listener
                if (event.key === "Enter") {
                    if (goalInput.valueAsNumber < 101 && goalInput.value != "") {
                        

                        // Percentage Calc
                        let num = catagoryInput.value - (catagoryInput.value/100)*goalInput.value;
                        let userTrashGoal = num.toFixed(1);

                        perText.style.fontSize = "22px";
                        gText.style.fontSize = "22px";

                        perText.innerHTML = "You have set your reduction percentage to " + goalInput.value + "%";  
                        gText.innerHTML = "Your goal will be to reduce trash down to only " + userTrashGoal + "kg!";

                        utGoalDiv.appendChild(perText);
                        utGoalDiv.appendChild(gText);

                        utGoalDiv.style.textAlign = "center";

                        conButton.innerHTML = "Confirm";
                        conText.innerHTML = "Are you sure you want to confirm? You can still set a new goal and prediciton.";

                        utGoalDiv.appendChild(conText);
                        utGoalDiv.appendChild(conButton);

                        conButton.onclick = function() {

                            console.log("User Confirmed.")

                            var percReduc = localStorage["percReduc"];
                            localStorage["percReduc"] = goalInput.valueAsNumber;

                            var weightPrediction = localStorage["weightPrediction"];
                            localStorage["weightPrediction"] = catagoryInput.value;

                            var TrashGoalOne = localStorage["TrashGoalOne"];
                            localStorage["TrashGoalOne"] = userTrashGoal;

                            window.location.href = "manage.html";

                        }


                    } else if (goalInput.valueAsNumber >= 101) {
                        alert("Please input a number in the range of 1 to 100.")
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
            conButton.innerHTML = "Confirm";
            conText.innerHTML = "Are you sure you want to confirm? You can still set a new goal and prediciton.";
           
            conText.style.fontSize = "22px";

            wgoalDiv.style.textAlign = "center";

            wgoalDiv.appendChild(perText);
            wgoalDiv.appendChild(gText);
            wgoalDiv.appendChild(conText);
            wgoalDiv.appendChild(conButton);

            conButton.onclick = function() {
                console.log("User confirmed.");

                var TrashGoalTwo = localStorage["TrashGoalTwo"];
                localStorage["TrashGoalTwo"] = webTrashGoal;

                var weightPrediction = localStorage["weightPrediction"];
                localStorage["weightPrediction"] = catagoryInput.value;

                window.location.href = "manage2.html";
            }
        }


    } else { // No input on start / Wrong input.
        alert("Please input an approximate weight of your trash in kilograms.")
    }

}

