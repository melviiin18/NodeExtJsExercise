
/*
var http = require("http");
http.createServer(function (request, response) {
      response.writeHead(200, {
         'Content-Type': 'text/plain'
      });
      response.write('Simple Simple Fun')
      response.end();
}).listen(5002);

*/


var express = require('express');
var Bparser = require('body-parser');
var app = express();

app.use(express.static(__dirname));
 
 app.use(Bparser());
 
//var bodyParser = require('body-parser');
//app.use(bodyParser());

app.get('/', function(req, res){
  //res.send('Hello World');  
  res.sendfile(__dirname + '/index.html');
 });

app.post('/user/add', function(req, res) { 
    /* some server side logic */
    res.send(req.body.Fname + " " + req.body.Lname);
	//res.send("OK");
	//console.log("pasok");
  });
 


var server = app.listen(8080, function() {
    console.log('Listening on port %d', server.address().port);
});




