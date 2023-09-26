"use strict";
const firstOne = 'I am learning';
const secondOne = 'typescript!';
// const mainSentence = firstOne + ' ' + secondOne;  //this is one way to write this but the following line is the better way
const mainSentence = `${firstOne} ${secondOne}`; //I don't know why I dont have to add the space 
console.log(mainSentence); //this was just an exercise in making concatenated strings 
//date and time output for console 
const date = new Date();
const options = {
    weekday: "long", month: "short", day: "numeric", year: "numeric"
};
const formattedDate = date.toLocaleDateString('en-GB');
document.addEventListener("DOMContentLoaded", function () {
    const dateElement = document.getElementById("dateTime");
    if (dateElement) {
        dateElement.textContent = formattedDate;
    }
    else {
        console.error("Element with ID 'dateTime' not found.");
    }
});
//console.log(formattedDate);
let button = document.querySelector('#button'); //querySelector always needs a CSS selector
let total = document.querySelector('#total'); // this is for recording how many times button is clicked
let count = 0; // for setting the count 
//increment function
function increment() {
    count += 1; //increment count by 1
    if (total) { // if total is not null.   The if statement is making sure that this passes the null check. Which I still don't understand 
        total.textContent = count.toString(); // here the total text counts as string
        // the .textcontent refers to the inner part of the h2 html tag 
    }
}
if (button) {
    button.addEventListener('click', increment); // after many tries I found this solution online. Up until then I kept getting button is possibly null error. 
}
// Creating an array for the site
let words = ['Typescript!', 'It takes at least ' + 12000, 'hours to learn', 'typescript.', "My hands", 'get so cold', 'sitting', 'at the computer', 'for', 8, 'hours a day'];
let list1 = document.querySelector('#arrayList');
let list2 = document.querySelector('#randomList');
for (let i = 0; i < words.length; i++) { //this is a for loop.  for (initializaionl; condition; increment)
    let li = document.createElement('li');
    li.innerText = words[i].toString(); // toString converts each item in list to a string
    list1 === null || list1 === void 0 ? void 0 : list1.appendChild(li); //there's that question mark again to avoid the null error. It seems to be okay to have the ?
}
//creating another array that randomized the output in a list
let randomNumbers = [17, 8, 5, 789, 73, 9.8, 57, 32, 235];
for (let i = randomNumbers.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // this is fisher-yates shuffle algorithm to randomize
    [randomNumbers[i], randomNumbers[j]] = [randomNumbers[j], randomNumbers[i]];
}
for (let i = 0; i < randomNumbers.length; ++i) {
    let li = document.createElement('li');
    li.innerHTML = `${randomNumbers[i]}`;
    list2 === null || list2 === void 0 ? void 0 : list2.appendChild(li);
}
// just trying out some console.logs 
console.log(list1);
console.log(list2);
console.log(mainSentence);
console.log(words);
// functions are used for code that we want to use again and again
// parameter is defining a function
// argument is when you are calling a function
