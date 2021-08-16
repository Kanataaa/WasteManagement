// Declaring Variables
let subtext = document.querySelector(".subtext");
let submitOneButton = document.querySelector("#submitOne");
let amtDiv = document.querySelector("#amtDiv");

let choiceDiv = document.querySelector("#choice");
let ugoalDiv = document.querySelector("#userGoal");


let catagoryInput = document.querySelector("#catagory");
let cText = document.querySelector("#cText")


// New inputs.

let newBreak = document.createElement("hr");

let userGoal = document.createElement("button");
let webGoal = document.createElement("button");

let perText = document.createElement("p");
let gText = document.createElement("p");

let goalInput = document.createElement("input");

// Functions

submitOneButton.onclick = function(event) {
    event.preventDefault();
    ugoalDiv.style.display = "";
    ugoalDiv.innerHTML = "";

    if (catagoryInput.value != "") {
        choiceDiv.appendChild(newBreak);

        userGoal.innerHTML = "I would like to choose my own goal.";
        webGoal.innerHTML = "I would like the website to choose my goal."

        choiceDiv.appendChild(userGoal);
        choiceDiv.appendChild(webGoal);

        userGoal.onclick = function(event) {
            console.log("User sets their own goal.");
            webGoal.remove();

            goalInput.setAttribute("placeholder", "Please input a percentage you want to reduce.")
            perText.innerHTML = "%";
            perText.style.fontSize = "19px";

            ugoalDiv.style.display = "flex";

            ugoalDiv.appendChild(goalInput);
            ugoalDiv.appendChild(perText);

        }

        webGoal.onclick = function(event) {
            console.log("We set the users goal.")
            userGoal.remove();

            let webTrashGoal = catagoryInput.value - Math.floor(catagoryInput.value * 0.3);

            perText.innerHTML = "We will automatically set your reduction percentage to 30%!";
            gText.innerHTML = "Your goal will be to reduce trash down to only " + webTrashGoal + "kg!";
            perText.style.fontSize = "22px";
            gText.style.fontSize = "22px";

            ugoalDiv.appendChild(perText);
            ugoalDiv.appendChild(gText);
        }


    } else {
        alert("Please input the weight of your trash (kg) in the field.")
    }

}