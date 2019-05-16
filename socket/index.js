var express = require("express");
var app = express();
app.use(express.static("./public"));
app.set("view engine", "ejs");
app.set("views", "./views");


var server = require("http").Server(app);
var io = require("socket.io")(server);
server.listen(3000);

io.on("connection", function(socket) {
	// show danh sách room đang có
	console.log(socket.adapter.rooms);
   console.log("co nguoi ket noi" + socket.id);

   socket.on("disconnect", function() {
   		console.log(socket.id + " ngat ket noi");
   });

   socket.on("client-send-data", function (data) {
   		console.log(socket.id + " vua gui:" +data);
   		// -> send về cho tất cả client
   		//io.sockets.emit("server-send-data", "server da nhan dc");
   		// -> send về cho 1 client mà gửi đến
   		//socket.emit("server-send-data", "server da nhan dc");
   		// -> send về cho các client khác mà không phải client gửi đến server
   		socket.broadcast.emit("server-send-data", "server da nhan dc");
   		// -> send đến client chỉ định
   		//io.to("socketid").emit();
   })

   socket.on("create-room", function (room) {
   	socket.join(room);
   	socket.phong = room;
   	var mang = [];
   	for (r in socket.adapter.rooms) {
   		mang.push(r);
   	}
   	io.sockets.emit("server-room", mang);
   	//send đến client trong room
   	io.sockets.in(socket.phong).emit("chat-room", room)
   	console.log(socket.phong)
   })
});

app.get("/", function(req, res) {
	res.render("trangchu");
})