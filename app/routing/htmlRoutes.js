var path = require("path");

module.exports = function(app) {

// the / states this is the root route
app.get('/', function (req, res) {
    //Responding to the request of the backend by providing an html file. 
        res.sendFile(path.join(__dirname, './home.html'))
    });
    
    app.get('/survey', function (req, res){
        res.sendFile(path.join(__dirname, './survey.html')
        )
    });

};