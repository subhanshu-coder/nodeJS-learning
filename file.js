const fs = require("fs"); // Importing the built-in 'fs' module for file system operations


fs.writeFileSync("./hello.txt", "Hello World!"); // Writing "Hello World!" to a file named 'hello.txt' in the current directory
fs.writeFile("./hello.txt", "hello world Async", (err) => {}); // Writing "hello world Async" to 'hello.txt' asynchronously