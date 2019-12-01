// Series of NPM packages that we will use to give our server useful functionality
var express = require('express');
var path = require('path');

//This sets up the basic properties for our express server. 
// Tells node we are creating an "express" server 
var app = express();

// Sets an initial port. We'll use this later in our listener.
var PORT = process.env.PORT || 3000;

// Express.json and express.urlEncoded make it easy for our server to interpret data sent to it. 
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


// Router
// The below points our server to a series of "route" files
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);


//Listener
//The Below code effectively "starts our server"
app.listen(PORT, function () {
    console.log('App listening on PORT: ', PORT)
});