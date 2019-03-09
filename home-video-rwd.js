var http = require('http');
var express = require('express');
var fs = require('fs');
var app = express();

app.use(express.static('site/media'));

app.get("/", function(request, response) {
	fs.readFile('site/pages/index.html', function(err, data) {
		response.writeHead(200, {
			'Content-Type' : 'text/html'
		});
		response.end(data, 'utf-8');
	});
});

app.get("/more", function(request, response) {
	fs.readFile('site/pages/more.html', function(err, data) {
		response.writeHead(200, {
			'Content-Type' : 'text/html'
		});
		response.end(data, 'utf-8');
	});
});

app.listen(3000, function() {
	console.log('Server running at http://127.0.0.1:3000/');
});

/*http.createServer(function handler(request, response) {
	if (request.url === '/') {
		fs.readFile('site/pages/home.html', function(err, data) {
			response.writeHead(200, {
				'Content-Type' : 'text/html'
			});
			response.end(data, 'utf-8');
		});
	} else if (request.url === '/more') {
		fs.readFile('side/pages/more.html', function(err, data) {
			response.writeHead(200, {
				'Content-Type' : 'text/html'
			});
			response.end(data, 'utf-8');
		});
	} 
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');*/
