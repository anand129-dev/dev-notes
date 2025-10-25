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
