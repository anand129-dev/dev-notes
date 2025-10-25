// this (used inside object)
const user = {
    username: "hitesh",
    price: 999,
    // this defines the context
    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomeMessage()    // log the message and the context
// user.username = "sam"    // updates the context
// user.welcomeMessage()    // log the updated message and context

// console.log(this);       // gives an empty object {} bcoz node env runs stand alone, but in browser it gives window object

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);      // gives undefined, since this keyword works only with objects
// }
// chai()
// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);      // gives undefined, even in this type of declaration of function
// }

// Arrow function
const chai =  () => {
    let username = "hitesh"
    console.log(this);      // {} empty object
}
// chai()

// Basic arrow function: () => {}
    // You can also hold it inside a function name : const myfunction = (parameters/arguments) => {//code}

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// Implicit return function : remove {} & return keyword, assuming we have single line return ßtatement
// const addTwo = (num1, num2) =>  num1 + num2
// const addTwo = (num1, num2) =>  (num1 + num2)        // same thing, just using a paranthese
// If {} curly braces is used, return keyword is required compulsory.
const addTwo = (num1, num2) => ({username: "hitesh"})   // return an object without return keyword and with ()
console.log(addTwo(3, 4))

// const myArray = [2, 5, 3, 7, 8]
// myArray.forEach()