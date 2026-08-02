// http method

//  there are several HTTP methods that can be used to perform different actions on a server. The most common HTTP methods are:
// 1. GET: The GET method is used to retrieve data from a server. It is the most commonly used HTTP method and is typically used to request web pages or other resources.
// 2. POST: The POST method is used to send data to a server to create or update a resource. It is commonly used when submitting form data or uploading files.
// 3. PUT: The PUT method is used to update an existing resource on the server. It is similar to the POST method, but it is idempotent, meaning that multiple identical requests will have the same effect as a single request.
// 4. DELETE: The DELETE method is used to delete a resource from the server. It is typically used when a client wants to remove a specific resource.
// 5. PATCH: The PATCH method is used to apply partial modifications to a resource. It is similar to the PUT method, but it allows for updating only specific fields of a resource rather than replacing the entire resource. 

// express.js is a popular web application framework for Node.js that simplifies the process of building web applications and APIs. It provides a set of features and tools that make it easier to handle routing, middleware, and request/response handling. Express.js is built on top of the Node.js HTTP module and provides a more convenient and flexible way to create web servers and handle HTTP requests.

const http = require ("http"); // Importing the built-in 'http' module to create an HTTP server
const express = require("express"); // Importing the 'express' module to use the Express framework for building web applications

const app = express(); // Creating an instance of the Express application

app.get ("/", (req, res) => {
    return res.send("Hello from Express.js"); // Sending a response back to the client with the message "Hello from Express.js" when a GET request is made to the root URL ("/")
})

app.get("/about", (req, res) =>{
    return res.send("This is the about page"); // Sending a response back to the client with the message "This is the about page" when a GET request is made to the "/about" URL
});

const myServer = http.createServer(app); // Creating an HTTP server using the Express application as the request handler

myServer.listen(8000, () => console.log("server is listening on port 5000")); // Starting the server and listening for incoming requests on port 5000, and logging a message to the console when the server is ready

// express routing definition take the following structure:
app.METHOD(PATH, HANDLER) // METHOD: The HTTP method (GET, POST, PUT, DELETE, etc.) that the route will respond to. PATH: The URL path that the route will match. HANDLER: A callback function that will be executed when the route is matched. It takes two parameters: req (the request object) and res (the response object).

// where:
// app: This is the instance of the Express application that you created using express(). It represents your web application and provides methods for defining routes and handling requests.
// METHOD is an http request method, such as GET, POST, PUT, DELETE, etc. It specifies the type of HTTP request that the route will respond to. For example, app.get() defines a route that responds to GET requests, while app.post() defines a route that responds to POST requests. in lowercase.
// path: is a path on the server.
// handler is the function executed when the route is matched.