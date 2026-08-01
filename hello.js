// console.log("Hello World");

const math = require('./math.js'); // Importing the math.js module
// require is a built-in function in Node.js that allows you to 
// include and use external modules or files in your code. 
// In this case, it is used to import the math.js module, 
// which contains the add and subtract functions.

// The ./ indicates that the math.js file is located in the same directory as the current file (hello.js).

console.log("math value is ", math.add(2,3)); // Calling the add function from the math.js module
console.log("math value is ", math.subtract(5,3)); // Calling the subtract function from the math.js module