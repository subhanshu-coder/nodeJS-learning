// blocking...
const fs = require("fs"); // Importing the 'fs' module to work with the file system
const os = require("os"); // Importing the 'os' module to access operating system-related utility methods and properties

console.log(os.cpus().length); // Logging information about the system's CPUs to the console

// console.log(1);
const result = fs.readFileSync("hello2.txt", "utf-8"); // Writing "Hello World!" to a file named 'hello.txt' in the current directory
console.log("result is ", result);
// console.log(2);

// utf-8 is a character encoding that represents text in computers and other devices. 
// It is a widely used encoding that can represent a wide range of characters from different languages and scripts.
// In this case, it specifies that the content being written to the file should be encoded using the UTF-8 character encoding.

// non-blocking...

// console.log(1);
fs.readFile("hello2.txt", "utf-8", (err, result) => {
    console.log("result is ", result);
}); // Writing "Hello World!" to a file named 'hello.txt' in the current directory
// console.log(2);
// console.log(3);