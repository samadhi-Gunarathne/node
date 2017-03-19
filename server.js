
//import http module

//var http = require('http');

//handle the sending request and returning responses

//function handleRequests(req,res) {

    //return string
   // res.end('hello Samadhi! ');
    
//}

//create the server

//var server = http.createServer(handleRequests);

//start the server and listen on the port x

//server.listen(8080,function () {
 //   console.log("Hey i am listening on port 8080");
//});

// require Express//

//require our dependencies
var express = require('express');
var app = express();
var port = 8080;

//route our app
var router = require ('./app/routes');
app.use('/',router);

//set static files(css,images and etc)location
app.use(express.static(__dirname + '/public'));


// start the server//

app.listen(port, function(){
     console.log('App started');

});







