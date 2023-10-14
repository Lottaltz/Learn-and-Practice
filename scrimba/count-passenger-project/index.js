// Create a variable
// let myAge = 25;
//  console.log(myAge);

//  Calculate the humanyear age VS the dogyear age
// let age = 25;
// let humanDogRatio = 7;
// let myDogAge = age * humanDogRatio;
// console.log(myDogAge);

//Reassigning and Incrementing
// let bonusPoints = 50;
// bonusPoints = bonusPoints * 2
// console.log(bonusPoints);
// bonusPoints = bonusPoints / 4;
// console.log(bonusPoints);
// bonusPoints = bonusPoints + 45;
// console.log(bonusPoints);

// Count Passenger Project
// let countEl = document.getElementById("count-el");
// console.log(countEl) Output : should be <h2 id="count-el">0</h2> 
// it work on browser console but not in local why?  >> answer: because when run on vscode it run index.js directly without html file it doesn't work when run directly javascript
let count = 0;
 console.log(count);

let saveEl = document.getElementById("save-el");

function increment() { //everytime when click button it increase count value by 1
    // count = count + 1;
    // conut += 1;
    count++;
    document.getElementById("count-el").innerHTML = count;
    // console.log('The button was clicked');
    // console.log(count)
 }

 function save() { //everytime when click save it log count value into <p></p> and render on screen
    let saveCount = ` ${count} - `;
    saveEl.innerText += saveCount;
    // saveEl.textContent += saveCount; //another way to use because innerText is not show any hidden from human or a character human can not read as white space
    console.log(count)
 }


//>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> practice exercise<<<<<<<<<<<<<<<<<<<<<<<<<<

//  Create function
function countdown() {
    console.log(5)
    console.log(4)
    console.log(3)
    console.log(2)
    console.log(1)
}

countdown(); //call function

//Exercise: 1
// Create a function (you decide the name) that logs out the number 42 to the console
// Call/invoke the function
function printNumber(){
    console.log(42)
}
printNumber()  //call funciton

// Exercise: 2
// Create a function that logs out the sum of all the lap times
let lap1 = 34
let lap2 = 33
let lap3 = 36

function sumLapTime() {
    let sum = lap1 + lap2 + lap3;
    console.log(sum);
}
sumLapTime() //call function

//Exercise: 3
// Create a function that increments the lapsCompleted variable with one
// Run it three times
let lapsCompleted = 0

function incrementLapTime() {  
    //Reassign new value into exist variable
    lapsCompleted = lapsCompleted + 1; //Everytime this function has called value of lapsCompleted + 1
}
incrementLapTime() //call 1 output: 1
incrementLapTime() //call 2 output: 2
incrementLapTime() //call 3 output: 3
console.log(lapsCompleted)

// Create srting variable
let username = 'per' //you can use '' or "" when create a string type
console.log(username);
//Exercise
let message = 'You have tree new notifications'
console.log(message + ', ' + username + '!')

let messageToUser = message + ', ' + username + '!'; 
//let messageToUser = `${message}, ${username}!`
console.log(messageToUser)

// how to connect a string
let name = 'Lotta';
let greeting = 'Hi, My name is';
let myGreeting = `${greeting} ${name}!`;
console.log(myGreeting)
//when a number + string, a number will always trun to string and string always win

//Render text to HTML
let welcomeEl = document.getElementById("welcome-el");
const nameWelcome = 'John Doe';
const welcomGreting = 'Welcome to my World!';
welcomeEl.innerText = `${welcomGreting} I am ${nameWelcome}`;
welcomeEl.innerText = welcomeEl.innerText + "👋"; //can use + for add new text and reassign
// welcomeEl.innerText += "👋"; another way to assign value with the same variable





