var http = require("https");

var options = {
	"method": "GET",
	"hostname": "horoscopeapi-horoscope-v1.p.rapidapi.com",
	"port": null,
	"path": "/daily?date=today",
	"headers": {
		"x-rapidapi-host": "horoscopeapi-horoscope-v1.p.rapidapi.com",
		"x-rapidapi-key": "f28c22adfamsh21bd0f5bc46cd0dp191dc2jsn4c63e79979af"
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();