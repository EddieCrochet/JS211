'use strict'

const p1fg = document.getElementById("p1fg");
const p2fg = document.getElementById("p2fg");
const h1fg = document.getElementById("h1fg");
const h2fg = document.getElementById("h2fg");
const userHand = document.getElementById("userHand");
const actionInGame = document.getElementById("actionInGame");
const compHand = document.getElementById("compHand");
const result = document.getElementById("result");

//this function assigns the user and comp to their choices
const drpItemSelected = (e) => {
    p1fg.classList.remove("hide");
    setTimeout(function() {
        h1fg.innerHTML= e.innerHTML.trim();
    }, 1000);
    setTimeout(function() {
        p2fg.classList.remove("hide");
    }, 2000);
    setTimeout(function() {
        h2fg.innerHTML= compRPS();
    }, 3000);
    setTimeout(function() {
        console.log(h1fg.innerHTML, h2fg.innerHTML)
        determineWinner();
    }, 4000);
}

//compare the two selections and determine winner
const determineWinner = () => {
    if (h1fg.innerHTML == h2fg.innerHTML) {
        userHand.innerHTML = h1fg.innerHTML;
        actionInGame.innerHTML = " is ";
        compHand.innerHTML = h2fg.innerHTML;
        result.innerHTML = "Well, I'll be damned, it's a tie";
    } else if (h1fg.innerHTML == "Rock") {
        if (h2fg.innerHTML == "Paper") {

        } else if (h2fg.innerHTML == "Scissors") {

        }
    } else if (h1fg.innerHTML == "Paper") {
        if (h2fg.innerHTML == "Rock") {

        } else if (h2fg.innerHTML == "Scissors") {
            
        }
    } else if (h1fg.innerHTML == "Scissors") {
        if (h2fg.innerHTML == "Paper") {

        } else if (h2fg.innerHTML == "Rock") {
            
        }
    }
}

//function for the computer to select an option for the game
const compRPS = () => {
    let RPS;
    let ranNum = Math.floor(Math.random() * 3);
    console.log(ranNum)
    if(ranNum == 0) {
        RPS = "Rock";
    } else if(ranNum==1) {
        RPS = "Paper";
    } else if (ranNum == 2) {
        RPS = "Scissors";
    }
    return RPS.trim();
}