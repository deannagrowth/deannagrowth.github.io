var unirest = require("unirest");
var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
const write = require('write');
var req = unirest("GET", "https://horoscopeapi-horoscope-v1.p.rapidapi.com/daily");


req.query({
	"date": "today"
});

req.headers({
	"x-rapidapi-host": "horoscopeapi-horoscope-v1.p.rapidapi.com",
	"x-rapidapi-key": "f28c22adfamsh21bd0f5bc46cd0dp191dc2jsn4c63e79979af"
});
server.listen(8001);

app.use(express.static(__dirname + '/'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
console.log("connected")
req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
    
    write.sync('foo.html', res.body, { newline: true });
});
    
    });