// Immediately Invoked Function Expressions (IIFE)
// This function is executed immediately ex. database conncetion
// Although we can make normal function invoke immediately, but sometimes functions, variables, etc. pollute from global scope

// named IIFE
(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();   // semicolon is used to handle multiple IIFE

// unnamed IIFE with parameter
( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

