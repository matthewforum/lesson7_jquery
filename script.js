/*
Program Name: Recipe Display Application
Author: Matthew Forum
Date: 7/27/18
Filename: script.js
*/
/* global $ */

//displays the next element after the current target
function display(event) {
    $(event.currentTarget) .next().fadeIn(/*global“slow”*/);
}//end of display

//attach event listener to h3 elements to invoke display function when clicked
$("h3").click(display);