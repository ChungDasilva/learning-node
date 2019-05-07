var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');
 

console.log(__dirname)

app.use('/css',express.static(__dirname));

app.get('/', function (request, response) {
	response.sendFile('index.html', {root: path.join(__dirname, '')});
})

app.get(/^(.+)$/, function (request, response) {
	console.log(request.params)
	fs.exists('hello.txt', function(exists) {
	    console.log("file exists ? " + exists);
	});
	 
	fs.exists('demo', function(exists) {
	    console.log("folder exists ? " + exists);
	});
	 
	fs.exists('cat.jpg', function(exists) {
	    console.log("file exists ? " + exists);
	});
})

app.get('/hello', function (request, response) {
	response.send('<h1> hello chung </h1>');
})

app.listen(1993, function () {
	console.log('chung');
})