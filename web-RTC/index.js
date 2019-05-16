var express = require("express");
var app = express();
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");

app.get("/", function(reg, res) {
	res.render("home");
})

app.listen( process.env.PORT || 4000, function () {
	console.log("server start");
})