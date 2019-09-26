var path = require("path");

module.exports = function (app) {

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
