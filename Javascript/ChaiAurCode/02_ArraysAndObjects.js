// ** Array **

// An array is a special type of object that stores an ordered collection of elements, where each element can be of different data type. Accessed using 0 indexing. Length is dynamic and can grow or shrink as needed.

const myNum = [0, 1, 2, 3, 4, 50]   // Array Literal
const myMumbai = ["Borivali", "Andheri", "Bandra"]  // Array Literal
const myArr = new Array(10, 20, 30, 40) // Array Constructor

// Array Literal vs Array Constructor
const arr1 = [5];         // [5] → literal creates an array with one element
const arr2 = new Array(5); // [ <5 empty items> ] → constructor creates empty slots

// Array Methods
// push(), pop(), unshift(), shift(), includes(), indexOf(), join(), slice(), splice()

// still join, slice, splice is pending to study

// -------------------------------------------------

const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

marvel_heros.push(dc_heros)     // Nested array
console.log(marvel_heros);  // All elements with 4 elements
console.log(marvel_heros[3][1]);  // Nested array access

// -----------------------------------------------

// Learn more...