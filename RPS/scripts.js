'use strict'

const p1fg = document.getElementById("p1fg");
const p2fg = document.getElementById("p2fg");
const h1fg = document.getElementById("h1fg");
const h2fg = document.getElementById("h2fg");

//this function assigns the user and comp to their choices
const drpItemSelected = (e) => {
    p1fg.classList.remove("hide");
    setTimeout(function() {
        h1fg.innerHTML= e.innerHTML;
    }, 1000);
    setTimeout(function() {
        p2fg.classList.remove("hide");
    }, 2000);
    setTimeout(function() {
        h2fg.innerHTML= compRPS();
    }, 3000);
    determineWinner();
}

//compare the two selections and determine winner
const determineWinner = () => {
    if 
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
    return RPS;
}