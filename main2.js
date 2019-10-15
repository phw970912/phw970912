var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');

var connect = require('connect');
var fs = require('fs');
var server = connect.createServer();
var id = 'rintiantta';
var password = '12345678';

server.use(connect.cookieParser());
server.use(connect.bodyParser());
server.use(connect.router(function (app) {
	app.get('/Login', function (request, response) {
		if(request.cookies.auth == true) {
			response.writeHead(200, { 'Content-Type' : 'text/html' });
			response.end('<h1>Login OK</h1>');	
		}	else {
			fs.readFile('Login.htm', function (error, data) {
				response.writeHead(200, { 'Content-Type' : 'text/html'});
				response.end(data);
			});
		}
	});
	
	app.post('/Login', function (request, response) {
		if(request.body.id == id && request.body.password == password) {
			response.writeHead(302, {
				'Location' : '/Login',
				'Set-Cookie' : ['auth = true']
			});
			response.end();	
		}	else {
				response.writeHead(200, { 'Content-Type' : 'text/html'});
				response.end('<h1>Login FAIL</h1>');
			}
		
	});
}));
server.listen(52273, function() {
	console.log('Server running at http://127.0.0.1:52273/');
	
});

