var express = require('express');
var app = express();
var path = require('path');
var fs = require('fs');

app.use('/css',express.static(__dirname));

app.get('/', function (request, response) {
	console.log(request.query.cst)
	response.end(JSON.stringify(request.query))
})

app.listen(1000, function () {
	console.log('listening 1000');
})

