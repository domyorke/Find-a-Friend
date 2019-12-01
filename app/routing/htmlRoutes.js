// Dependencies
// We need to include the path package to get the correct file path for our html
var path = require("path");

// Routing
module.exports = function (app) {

    //  HTML GET requests
    // Below code handles when users "visit" a page
    // In each of the below cases, tyhe user is shown an HTML page of content
    // the / states this is the root route
    app.get('/', function (req, res) {
        //Responding to the request of the backend by providing an html file. 
        res.sendFile(path.join(__dirname, '../public/home.html'))
    });

    //Route to survey html file
    app.get('/survey', function (req, res) {
        res.sendFile(path.join(__dirname, '../public/survey.html') 
        )
    });


    //If no matching route is found, default to home
    app.get("*", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/home.html"));
      });
};