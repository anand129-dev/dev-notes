// Basic functions in JavaScript
function sayHello(){
    console.log("Hello, World!");
}
sayHello();

// Add two numbers
function addTwoNumners(num1, num2){
    return num1 + num2;
}
console.log(`Result : ${addTwoNumners(10, 20)}`);

// Pass parameters by default
function loginUserMessage(username = "sam"){
    if(!username){
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

function calculateCartPrice(val1, val2, ...num1){
    return num1      // <-- only returns the array of extra values (i.e. except val1, val2)
}

//object
const bestPen = {
    brand: "pentonic",
    price: 10
}

// object as parameter
function priceOfPen(penObject){
    console.log(`Brand : ${penObject.brand} and price is ${penObject.price}`);
}

priceOfPen(bestPen);
priceOfPen({
    brand: "cello",
    price: 20
})


// ---------------- Scopes in JavaScript -----------------

let a = 300
if(true){
    let a = 10 // block scope where a is 10
}
console.log(a);  // global scope where a is 300

// vaiable inside a block ex. if block is not accessible outside the block

// function can be called before its declaration due to hoisting***???


// ---------------- Arrow functions in JavaScript -----------------
// Refer to video for detailed explanation
const myArrowFunction = () => {
    let type = "arrow"
    console.log(`This is an ${this} function`);
}

myArrowFunction();


const chaiFunction =  () => {
    let username = "hitesh"
    console.log(this);
}


chaiFunction();


(function iife(){
    console.log(`DB connected`);
})();


// Arrow Functions and 'this' keyword in JavaScript
{
    function chai(){
    let username = "hitesh"
    console.log(this.username);
}
chai()

const chai = function() {
    let username = "anand"
    console.log(this.username);
}

const chai = () => {
    let username = "anand"
    console.log(this);  
}

const sum = (num1, num2) => {
    return num1 + num2
}
}

//IIFE - Immediately Invoked Function Expressions
{
    (function dbstatus(){
        console.log(`DB CONNECTED`);
    })()
    
    ((name) => {
        console.log(`DB CONNECTED TO ${}`);    
    })
}
