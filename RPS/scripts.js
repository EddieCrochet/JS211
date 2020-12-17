'use strict'

const p1fg = document.getElementById("p1fg");
const p2fg = document.getElementById("p2fg");
const h1fg = document.getElementById("h1fg");
const h2fg = document.getElementById("h2fg");

const drpItemSelected = (e) => {
    let dropSelected = e.innerHTML;
    console.log(document.getElementsByClassName("p1fg"))
    p1fg.classList.remove("hide");
    setTimeout(function() {
        h1fg.innerHTML= e.innerHTML;
    }, 1000);
    setTimeout(function() {
        p2fg.classList.remove("hide");
    }, 2000);
    setTimeout(function() {
        h2fg.innerHTML= e.innerHTML;
    }, 3000);
}

const compRPS = () => {
    let RPS;
    let ranNum = Math.floor(Math.random() * 2);
    if(ranNum = 0) {
        RPS = "Rock";
    } else if(ranNum=1) {
        RPS = "Paper";
    } else if (ranNum = 2) {
        RPS = "Scissors";
    }
    return RPS;
}