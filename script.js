// Declaring Variables
let subtext = document.querySelector(".subtext");
let submitOneButton = document.querySelector("#submitOne");
let amtDiv = document.querySelector("#amtDiv");

let choiceDiv = document.querySelector("#choice");
let ugoalDiv = document.querySelector("#userGoal");
let wgoalDiv = document.querySelector("#webGoal");


let catagoryInput = document.querySelector("#catagory");
let cText = document.querySelector("#cText")


// New inputs.

let newBreak = document.createElement("hr");

let userGoal = document.createElement("button");
let webGoal = document.createElement("button");

let perSymb = document.createElement("p");
let gText = document.createElement("p");
let perText = document.createElement("p");

let goalInput = document.createElement("input");

// Functions

submitOneButton.onclick = function(event) {
    event.preventDefault();
    ugoalDiv.style.display = "";
    ugoalDiv.innerHTML = "";

    wgoalDiv.style.display = "";
    wgoalDiv.innerHTML = "";

    if (catagoryInput.value != "") {
        choiceDiv.appendChild(newBreak);

        userGoal.innerHTML = "I would like to choose my own goal.";
        webGoal.innerHTML = "I would like the website to choose my goal.";

        choiceDiv.appendChild(userGoal);
        choiceDiv.appendChild(webGoal);

        userGoal.onclick = function(event) {
            console.log("User sets their own goal.");
            webGoal.remove();

            goalInput.setAttribute("placeholder", "Please input a percentage you want to reduce.")
            goalInput.setAttribute("type", "number");

            perSymb.innerHTML = "%";
            perSymb.style.fontSize = "19px";

            ugoalDiv.style.display = "flex";

            ugoalDiv.appendChild(goalInput);
            ugoalDiv.appendChild(perSymb);

            goalInput.addEventListener("keyup", function(event){
                if (event.key === "Enter") {
                    if (goalInput.value != "") {
                        
                        let num = (catagoryInput.value/100)*goalInput.value;
                        let userTrashGoal = num.toFixed(1);
                        perText.innerHTML = "You have set your reduction percentage to " + goalInput.value + "%";  
                        gText.innerHTML = "Your goal will be to reduce trash down to only " + userTrashGoal + "kg!";

                        ugoalDiv.appendChild(perText);
                        ugoalDiv.appendChild(gText);
                    } else {
                        alert("Please input a number for your percentage.")
                    }
                    
                }
            })

        }

        webGoal.onclick = function(event) {
            console.log("We set the users goal.")
            userGoal.remove();

            let num = catagoryInput.value - (catagoryInput.value * 0.3);
            let webTrashGoal = num.toFixed(1);

            perText.innerHTML = "We will automatically set your reduction percentage to 30%!";
            gText.innerHTML = "Your goal will be to reduce trash down to only " + webTrashGoal + "kg!";

            perText.style.fontSize = "22px";
            gText.style.fontSize = "22px";

            wgoalDiv.appendChild(perText);
            wgoalDiv.appendChild(gText);
        }


    } else {
        alert("Please input an approximate weight of your trash in kilograms.")
    }

}