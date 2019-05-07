var express = require('express');
var cookieParser = require('cookie-parser');
var app = express();
app.use(cookieParser())

app.get('/', function(req, res) {
    res.cookie('name', 'chung');
    res.end('end');
})

app.get('/remove-cookie', function(req, res) {
    res.clearCookie('name');
    res.end('end');
})

app.listen(1000, function () {
	console.log('listening 1000');
})