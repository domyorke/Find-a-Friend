//Linking our routes to a series of "data" sources
var tableData = require("../data/friends");



module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(path.join(__dirname, './home.html'))
    });

    app.post('/api/friends', function (req, res) {

    //Comparison logic, select closest match, and convert to json object

    // Fill out the survey.html and include questions the user answers. Use HTML Form. 

    //In the survey.html using a script tag, grab the values of the user selected, and send an post request to /api/friends.

    //Once the data is on the server, console.log(request), compare to find the closest match, and send that match back using res.json.

    //Require friends.js file into apiRoutes.js file. Export into apiRoutes.js

    //For comparison, we will need to do a for loop inside of a for loop. 


        res.json(path.join(__dirname, './survey.html')
        )
    });

};