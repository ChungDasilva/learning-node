var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.use(bodyParser())

app.get('/', function(req, res) {
    res.sendFile('index.html', {root: path.join(__dirname, '')});
})

app.post('/', function (request, response) {
	response.end(JSON.stringify(request.body))
})

app.listen(1000, function () {
	console.log('listening 1000');
})