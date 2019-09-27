//Linking our routes to a series of "data" sources
var tableData = require("../data/friends.js");



module.exports = function (app) {

    app.get('/api/friends', function (req, res) {
        res.json(path.join(__dirname, './home.html'))
    });

    app.post('/api/friends', function (req, res) {
    



    //Comparison logic, select closest match, and convert to json object

    // (DONE) Fill out the survey.html and include questions the user answers. Use HTML Form. 

    // (DONE) In the survey.html using a script tag, grab the values of the user selected, and send a post request to /api/friends.

    //Once the data is on the server, console.log(request), compare to find the closest match, and send that match back using res.json.

    //(DONE) Require friends.js file into apiRoutes.js file. Export into apiRoutes.js

    //For comparison, we will need to do a for loop inside of a for loop. 

    //data should come thru on request.body. After this, do comparison logic inside this post route.


        //console.log(res);
            console.log(req.body);
            
      
        //res.json(path.join(__dirname, './survey.html')
        //)

    });

};


/*
Your apiRoutes.js file should contain two routes:



A GET route with the url /api/friends. This will be used to display a JSON of all possible friends.
A POST routes /api/friends. This will be used to handle incoming survey results. This route will also be used to handle the compatibility logic.



You should save your application's data inside of app/data/friends.js as an array of objects. Each of these objects should roughly follow the format below.
*/