'use strict';
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
const formattedDate = date.toLocaleDateString('en-GB'); // toLocaleDateString returns a formatted date
/* Here is a string that returns a formatted date.
 The DOMContentLoaded means that when the page is fully loaded,
 it will retrieve the html element with ID "dateTime" and set the textcontent to the formatted date and time.
 If the element doesn't exist it will log an error.
*/
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
// Creating an empty object. 
const person = {}; // I define the person as any to avoid errors. I should be defining an interface but will make do with this this time around. 
// adding properties to that object and printing it out in console only
person.firstName = 'Pila';
person.lastName = 'Pina';
console.log(person);
// creating the elements I need for the button click
let button = document.querySelector('#button'); //querySelector always needs a CSS selector
let total = document.querySelector('#total'); // this is for recording how many times button is clicked
let count = 0; // for setting the count 
//increment function made for the button click. 
function increment() {
    count += 1; //increment count by 1
    if (total) { // if total is not null.   The if statement is making sure that this passes the null check. Which I still don't understand 
        total.textContent = count.toString(); // here the total text counts as string
        // the .textcontent prints out the text inside the HTML element (visible on website)
    }
}
/* The if button checks to see if there is a button and if it is null or undefined
before adding a click event listener.
Everytime it is clicked it will increase the count and updates the total element.
*/
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
