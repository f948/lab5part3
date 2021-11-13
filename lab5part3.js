var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);


const port = process.env.PORT || 3000

app.get('/', function(req, res){
   res.sendfile("lab5.html");
});



  
  var result=[];
  
  result.push(['1', 'Dogs','Alberta','09/09/2012','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.goodhousekeeping.com%2Flife%2Fpets%2Fadvice%2Fg1921%2Flarge-dog-breeds%2F&psig=AOvVaw2xX7Kzokg13-hb-Fef0miw&ust=1636681253215000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCIiU4PKWj_QCFQAAAAAdAAAAABAJ']);

  
  result.push(['2', 'Ontario','Ontario','09/06/2018','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.ontario.ca%2Fpage%2Fontario-place&psig=AOvVaw14cRbqhJXJHshFtmfTuaAP&ust=1636682212079000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCPDShvCaj_QCFQAAAAAdAAAAABAD']);
  
  result.push(['3', 'Cars','Africa','01/08/2002','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.forbes.com%2Fsites%2Fjimgorzelany%2F2019%2F07%2F23%2Fhere-are-the-coolest-new-cars-for-2020%2F&psig=AOvVaw11rU1PLTld9dMDjHf1a4oI&ust=1636682361547000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJC-iIObj_QCFQAAAAAdAAAAABAD']);
  
  
  
  



io.on('connection', function(socket){
	
	socket.on('event', function(data){
		
		for (var i = 0;i<=2;i++){
			
			if (data[0] == result[i][2] && data[1] == result[i][3].slice(0,2) && data[2] == result[i][3].slice(3,5) && data[3] == result[i][3].slice(6,10)){
				socket.emit("display",result[i]);
			}
		}
   });
});

http.listen(port, function() {
   console.log('listening on localhost:'+port);
});
