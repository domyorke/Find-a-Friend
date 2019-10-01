//Linking our routes to a series of "data" sources
var tableData = require("../data/friends.js");



module.exports = function (app) {

    app.get('/', function (req, res) {
        res.json(path.join(__dirname, './home.html'))
    });

    app.get('/api/friends', function (req, res) {
        res.json(tableData);
    });

    app.post('/api/friends', function (req, res) {

        // (DONE) In the survey.html using a script tag, grab the values of the user selected, and send a post request to /api/friends.

        //Once the data is on the server, console.log(request), compare to find the closest match, and send that match back using res.json.

        //(DONE) Require friends.js file into apiRoutes.js file. Export into apiRoutes.js

        //For comparison, we will need to do a for loop inside of a for loop.

        //data should come thru on request.body. After this, do comparison logic inside this post route.


        console.log("REQ.BODY = ", req.body);

        var newFriend = req.body;
        var diffArray = [];


        //Compare new user dataScore to the datascores in the tableData

        //For all elements in var friends from the friends.js file....
        for (let i = 0; i < tableData.length; i++) {
            //Store existing Friends from tableData into a variable "friend"
            var friend = tableData[i];
            //console.log("EXISTING FRIEND = ", friend);

            //Define the sum of the difference between score arrays of the friend and newFriend.
            var diffSum = 0;
            //Read all the Friends' userdata in the array...
            for (let j = 0; j < friend.scores.length; j++) {
                //Store the old friend's score in variable "friendScore"
                var friendScore = friend.scores[j];
                //Store the absolute value of the differences of the new Friend's scores vs the old friends' score
                var diff = Math.abs(newFriend.dataScore[j] - friendScore);
                //console.log("SCORE DIFFERENCE = ", diff);
                //Diff sum shows the total difference between the new score and old friend's score
                diffSum = diffSum + diff;
            }
            //Push these sums into the diffArray
            diffArray.push(diffSum)
        }


        //Why is DiffArray not displaying the correct

        console.log("DIFFARRAY = ", diffArray);
        //indexOfResult will be the smallest number in the diffArray, which will be the closest friend match displayed
        var indexOfResult =
            //This equals the indexof the diff array
            diffArray.indexOf(Math.min.apply(Math, diffArray));
        //
        console.log("TEST = ", Math.min.apply(Math, diffArray))

        console.log("RESULT = ", indexOfResult);




        

        console.log(tableData[indexOfResult]);

        //putting into the friend array
        tableData.push(newFriend);
        res.json(tableData[indexOfResult]);
        //console.log("UPDATED TABLE DATA? = ", tableData);

        console.log("======================================")


        // tableData().push(req.body);
        // res.json(true);

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