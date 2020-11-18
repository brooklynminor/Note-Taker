# Note-Taker

## Objective
In this assignment a server-side APIs using the Express.js framework is created. Express is the most widely used Node.js server framework. It will allow for quickly and easily established API routes and associated HTTP request methods.

Routing handles responses when a client makes a request at a specific endpoint, or URL. These requests are handled on the server-side. The server will _listen_ for a specific type of request at a specific endpoint and  _hears_ responds to the request accordingly. HTTP POST request method submits data to the server.

## Key Concepts

* HTTP: Hypertext Transfer Protocol is an application layer protocol for distributed, collaborative, hypermedia information systems.

* Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License. It is designed for building web applications and APIs. It has been called the de facto standard server framework for Node.js.

* Routing refers to how an application’s endpoints (URIs) respond to client requests. Define routing using methods of the Express app object that correspond to HTTP methods.

* Express.static() is a built-in middleware function in Express. It serves static files and is based on serve-static.

## Algorithms

*** app.post(path, callback [, callback ...]) *** routes HTTP POST requests to the specified path with the specified callback functions. The path invokes the middleware function. Multiple callback functions that behave just like middleware can be called, except the callbacks can invoke next('route') to bypass the remaining route callback(s).
```
app.post('/api/notes', function(req, res) {
```

app.use mounts specified middleware function(s) at a specified path: the middleware function is executed when the base of the requested path matches path. A route will match any path that follows its path immediately with a “/”.
```
app.use( express.static('public') )

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
```

app.delete routes HTTP DELETE requests to the specified path with the specified callback functions. For more information, see the routing guide.
```
app.delete('/api/notes/:noteId', function(req, res) {
```

app.listen binds and listens for connections on the specified host and port. In this case, the PORT that is being listened too is 3000.
```
const PORT = process.env.PORT || 3000
```
The app returned by express() is a JavaScript Function.
```
const app = express()
```
The application “listens” for requests that match the specified route(s) and method(s), and when it detects a match, it calls the specified callback function.
```
app.listen(PORT, function() {
    console.log('Serving notes on PORT ' + PORT)
})
```

## Installation
A server.js file was created in order to create the aforementioned methods. npm init and npm install is ran on the terminal to create the package.json, the package-lock.json and the node_modules file. The node_modules file is a hidden file that is contained within the dependencies of the gitignore file.

## License
[License](https://choosealicense.com/licenses/mit)