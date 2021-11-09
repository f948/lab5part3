var app = require('express')();
var http = require('http').Server(app);


const port = process.env.PORT || 3000


app.get('/lab4part1', function (req, res) {
	

		res.sendfile("lab4part1.html");
	
});

app.get('/lab4part2', function (req, res) {
	

		res.sendfile("lab4part2.html");
	
});

app.get('/lab5part1', function (req, res) {
	

		res.sendfile("lab5part1.html");
	
});

app.get('/lab5part2', function (req, res) {
	

		res.sendfile("lab5part2.html");
	
});



http.listen(port, function() {
   console.log('listening on localhost:'+port);
});
