// ** Variable **
// Use const (can not be changed) and let
// tempVar = "anand"    // not allowed in newer version {kinldy rectify}

// -----------------------------------------------

// ** Data Types in JS **
"use strict"    // treat all JS code as newer version
// Datatypes : number (2 to power 53), bigint, string, boolean, null (standalone value -> object), undefined, symbol (unique), object
//console.log(typeof undefined);  // typeof or typeof() - used to get type 

// -----------------------------------------------

// ** Conversion **

// // string to number
// let score = "anand"
// console.log(typeof(score));     // string
// console.log(Number(score));     // NaN - Not a Number
// console.log(typeof Number(score));     // Number
// // "33" => 33, "33abc" => NaN, true => 1, false => 0

// // boolean to number
// let isLoggedIn = "anand"
// // 1 => true; 0 => false; "anand" => true; "" => false

// // number to string
// let someNumber = 33
// console.log(String(someNumber));   // "33"

// ** Operations **

// let value = 3
// // Negative: -value; Add: +; Sub: -; Mul: *; Exp: **; Div: /; Mod: %;

// // Concatenate string
// let str = "apple " + "world";
// console.log(str);   // apple world

// // string and number (all of the below have typeof string)
// console.log("1" + 2);   // "12"
// console.log(1 + "2");   // "12"
// console.log("1" + 2 + 2);   // "122"
// console.log(1 + 2 + "2");   // "32"

// console.log( (3 + 4) * 5 % 3);   // 2 {(3+4)=7 → 7*5=35 → 35%3=2 (remainder)}

// console.log(+true);   // 1  {Need Explanation}
// console.log(+"");     // 0  {Need Explanation}
// console.log(+"anand"); // NaN  {Need Explanation}

// // Mulit Variable Declaration & Initialization
// let num1, num2, num3
// num1 = num2 = num3 = 5+5    // Chained Assignment (Right to Left)
// console.log(num1, num2, num3);   // 10 10 10
// let x1, x2, x3 = 10+20
// console.log(x1, x2, x3);   // undefined undefined 30

// -----------------------------------------------

// ** Comparision **

// // > , < , >= , <= , 
// // == , != (only checks value, type conversion allowed) 
// // === , !== (check value + type, no conversion)
// console.log("2" == 2);   // true
// console.log("2" === 2);   // false

// -----------------------------------------------

// ** Strings **

// const name = "Anand"; // primitive string (constant)
// let address = 'Thane, India'; // primitive string
// const myName = new String("Anand"); // String object (not just a primitive string)
// console.log("My name is : " + myName);  // String concatenation using '+' operator
// console.log(`My name is : ${myName}`);  // String interpolation using template literals (backticks and ${})

// console.log(myName.length);  // property
// console.log(myName.toUpperCase()); // method
// console.log(myName.charAt(2)); // method
// console.log(myName.indexOf('a')); // method

// const city = address.substring(0, 5);   // start (inclusive,    0 based) , end (exclusive)
// console.log(city);   // Thane
// const country = address.slice();    // {Need to Understand}
// console.log(country);

// const spaces = "     Anand     "
// console.log(spaces.trim());   // removes leading and trailing spaces

// const url = "https://anand.icu/ai%20canvas%20project"
// console.log(url.replace('%20', '-'));   // replaces first instance
// console.log(url.replaceAll('%20', '-'));   // replaces all instance
// console.log(url.includes('canvas'));   // true
// console.log(url.replaceAll('%20', '-').split('/'));   // replaces %20 and splits based on delimiter and returns array

// -----------------------------------------------

// ** Numbers and Math **

// Now i am bored with this basic js, moving to another topic for now...













