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