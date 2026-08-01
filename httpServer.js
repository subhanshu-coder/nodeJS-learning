const http =  require("http"); // Importing the built-in 'http' module to create an HTTP server
// const fs = require("fs"); 
// Importing the built-in 'fs' module for file system operations

const myServer = http.createServer((req, res) => { // Creating an HTTP server and defining a callback function to handle incoming requests
const log = `${Date.now()}: New Req Received\n`; { // Creating a log message with the current timestamp and a message indicating that a new request has been received
    fs.appendFileSync("./log.txt", log, (err, data) => { // Appending the log message to a file named 'log.txt' synchronously

    }); // Appending the log message to 'hello.txt' synchronously
    res.end("Hello from Worldwide"); // Sending a response back to the client with the message "Hello World"
}


// console.log(req); 
// Logging the request object to the console, which contains information about the incoming request, such as the URL, method, headers, etc.
// console.log("New Req Rec."); 
// Logging a message to the console whenever a new request is received
res.end("Hello from Worldwide"); 
// Sending a response back to the client with the message "Hello World"
});

myServer.listen(5000, () => console.log("server is listening on port 5000")); 
