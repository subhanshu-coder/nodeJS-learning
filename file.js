const fs = require("fs"); // Importing the built-in 'fs' module for file system operations


fs.writeFileSync("./hello.txt", "Hello World!"); // Writing "Hello World!" to a file named 'hello.txt' in the current directory
// The fs.writeFileSync() method is a synchronous operation that writes data to a file. If the file does not exist, it will be created. If it already exists, its content will be replaced with the new data. In this case, it writes "Hello World!" to 'hello.txt'.

// The following code snippet demonstrates how to write to a file asynchronously using the fs.writeFile() method. This method takes three arguments: the file path, the data to be written, and a callback function that is executed once the write operation is complete. If an error occurs during the write operation, it will be passed to the callback function as an argument.
fs.writeFile("./hello.txt", "hello world Async", (err) => {}); // Writing "hello world Async" to 'hello.txt' asynchronously

fs.appendFileSync("./hello.txt", ` ${Date.now()} hey there\n`); //appending the current timestamp and "hey there" to 'hello.txt' synchronously
 // Appending text to 'hello.txt' synchronously
// The fs.appendFileSync() method is a synchronous operation that appends data to a file. If the file does not exist, it will be created. In this case, it appends " Appending this text to the file." to 'hello.txt'.