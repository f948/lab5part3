var app = require('express')();
var http = require('http').Server(app);


const port = process.env.PORT || 3000


app.get('/', function (req, res) {
	

	res.send("Enter https://dsfhjyt.herokuapp.com/lab4part1.html as a url");
	
});

app.get('/lab4part1.html', function (req, res) {
	

	res.sendfile("lab4part1.html");
	
});

app.get('/lab4part2.html', function (req, res) {
	

	res.sendfile("lab4part2.html");
	
});

app.get('/lab5part1.html', function (req, res) {
	

	res.sendfile("lab5part1.html");
	
});

app.get('/lab5part2.html', function (req, res) {
	

	res.sendfile("lab5part2.html");
	
});



http.listen(port, function() {
   console.log('listening on localhost:'+port);
});
