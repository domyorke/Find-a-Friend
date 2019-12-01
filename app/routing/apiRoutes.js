
// LOAD DATA
//Linking our routes to a series of "data" sources
// These data sources hold arrays of information on all possible friends
var friends = require("../data/friends.js");
var path = require('path');

//ROUTING

module.exports = function (app) {

    // API GET Requests
    // Below code handles when users "visit" a page.
    // In each of the below cases when a user visits a link (ex: localhost:PORT/api/admin...) they are shown a JSON of the data in the table. 

    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    // API POST Requests
    // Below code handles when a user submits a form and thus submits data to the server
    // In each of the below cases, when a user submits form data (a JSON object)... the JSON is pushed to the appropriate Javascript array

    app.post('/api/friends', function (req, res) {
        // Note the code here. Our "server" will respond to a user"s survey result
        // Then compare those results against every user in the database.
        // It will then calculate the difference between each of the numbers and the user"s numbers.
        // It will then choose the user with the least differences as the "best friend match."
        // In the case of multiple users with the same result it will choose the first match.
        // After the test, it will push the user to the database.

        // We will use this object to hold the "best match". We will constantly update it as we
        // loop through all of the options

        var bestMatch = {
            name: "",
            photo: "",
            friendDifference: Infinity
        }

        // Here  we take the result of the user's survey POST and parse it. 
        var userData = req.body;
        var userScores = userData.scores;

        // This variable will calculate the difference between the user's scores and the scores of each user in the database
        var totalDifference;

        // Here we loop through all the friend possibilities in the database.
        for (let i = 0; i < friends.length; i++) {
            var currentFriend = friends[i];
            totalDifference = 0;


            console.log(currentFriend.name);

            // We then loop through all the scores of each friend
            for (let j = 0; j < currentFriend.scores.length; j++) {
                var currentFriendScore = currentFriend.scores[j];
                var currentUserScore = userScores[j];

                // We calculate the difference between the scores and sum them into the totalDifference
                totalDifference += Math.abs(parseInt(currentUserScore) - parseInt(currentFriendScore));
            }

            // If the sum of differences is less than the differences of the current "best match"
            if (totalDifference <= bestMatch.friendDifference) {
                // Reset the bestMatch to be the new Friend.
                bestMatch.name = currentFriend.name;
                bestMatch.photo = currentFriend.photo;
                bestMatch.friendDifference = totalDifference;
            }
        }

        // Finally save the user's data to the database (this has to happen AFTER the check. Otherwise, the database will always return that the user is the user's best friend)
        friends.push(userData);

        // Return a JSON with the user's bestMatch. this will be used by the HTML in the next page. 
        res.json(bestMatch);
    });
};



//         console.log("REQ.BODY = ", req.body);
//         var newFriend = req.body;
//         var diffArray = [];
//         //For all elements in var friends from the friends.js file....
//         for (let i = 0; i < friends.length; i++) {
//             //Store existing Friends from friends into a variable "friend"
//             var friend = friends[i];
//             //console.log("EXISTING FRIEND = ", friend);
//             //Define the sum of the difference between score arrays of the friend and newFriend.
//             var diffSum = 0;
//             //Read all the Friends' userdata in the array...
//             for (let j = 0; j < friend.scores.length; j++) {
//                 //Store the old friend's score in variable "friendScore"
//                 var friendScore = friend.scores[j];
//                 //Store the absolute value of the differences of the new Friend's scores vs the old friends' score
//                 var diff = Math.abs(newFriend.dataScore[j] - friendScore);
//                 //console.log("SCORE DIFFERENCE = ", diff);
//                 //Diff sum shows the total difference between the new score and old friend's score
//                 diffSum = diffSum + diff;
//             }
//             //Push these sums into the diffArray
//             diffArray.push(diffSum)
//         }


//         //Why is DiffArray not displaying the correct

//         console.log("DIFFARRAY = ", diffArray);
//         //indexOfResult will be the smallest number in the diffArray, which will be the closest friend match displayed
//         var indexOfResult =
//             //This equals the indexof the diff array
//             diffArray.indexOf(Math.min.apply(Math, diffArray));
//         //
//         console.log("TEST = ", Math.min.apply(Math, diffArray))

//         console.log("RESULT = ", indexOfResult);


//         var finalResult = friends[indexOfResult];
//         console.log("FINAL RESULT = ", friends[indexOfResult]);

//         //putting into the friend array
//         friends.push(newFriend);
//         res.json(friends[indexOfResult]);
//         //console.log("UPDATED TABLE DATA? = ", friends);

//         console.log("======================================")


//         // friends().push(req.body);
//         // res.json(true);

//         //res.json(path.join(__dirname, './survey.html')
//         //)

//     });

// };

