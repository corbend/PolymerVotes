var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var path = require('path');
var app = express();

app.use('/templates', express.static(__dirname + "/templates"));
app.use('/js', express.static(path.join(__dirname, '/js')));
app.use('/public', express.static(path.join(__dirname, '/public')));
app.use('/components', express.static(path.join(__dirname, '/components')));
app.use('/bower_components', express.static(path.join(__dirname, '/bower_components')));

app.use(bodyParser.json());

var port = process.env.PORT || 3000;
var env = process.env.NODE_ENV || 'development';

app.get('/', function(req, res) {
	res.sendfile(__dirname + '/index.html');
})

app.get('/ajax', function(req, res) {
	//res.writeHeader({'Content-Type': 'application/json'});
	res.json({message: 'Send from core-ajax component'});
})

var server = http.createServer(app);
server.listen(port, function() {
	console.log("Server is running on port" + port)
});