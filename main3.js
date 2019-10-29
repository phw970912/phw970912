/*var http = require('http');
http.createServer(function handler(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World\n');
}).listen(1337, '127.0.0.1');
console.log('Server running at http://127.0.0.1:1337/');*/
/*
var url = require('url');
console.log(url.parse('http://hanb.co.kr/book/look.html?isbn = 978-89-7914-874-9', true));

var util = require('util');
var data = util.format('%d + %d = %d', 52, 273, 52+273);
console.log(data);

var fs = require('fs');
var data = 'Hello, world ..!';
try {
	var data = fs.readfileSync('testfile.txt', 'utf8');
	console.log(data);
} catch(e) {
	console.log(e);
}
try {
	fs.writeFileSync('testfile.txt', 'Hello, World ..!', 'utf8');
	console.log('FILE WRITE COMPLETE');
} catch (e) {
	console.log(e);
}

var url = require('url');

var parsedObject = url.parse('http://hanb.co.kr/trackback/978-89-7914-874-9');
console.log(parsedObject);









*/



/*process.on('exit', function() {
	console.log('안녕히 가거라 ^_^ .. !');
});

process.on('uncaughtException', function (error) {
	console.log('예외가 발생했군 ^^ 봐주겠다 ^^ .. !');
});

var count = 0;
var id = setInterval(function() {
	count++;
	if(count ==3) { clearInterval(id);}
	
	error.error.error();
}, 2000);*/

/*var onUncaughtException = function (error) {
	console.log('예외가 발생했군 ^^ 이번에만 봐주겠다 ^^ .. !');
};
	process.on('uncatughtException', onUncaughtException);
	setInterval(function() {
		error.error.error('^_^');
	}, 2000);
*/
/*var onUncaughtException = function (error) {
	console.log('예외가 발생했군 ^_^ 이번에만 봐주겠다 ^_^ .. !');
	process.removeListener('uncatughtException', onUncaughtException);
};
	process.on('uncaughtException', onUncaughtException);
	setInterval(function () {
		error.error.error('^_^');
		}, 2000);
	*/

/*
process.once('uncaughtException', function error(){
	console.log('예외가 발생했군 ^^ 이번에만 봐주겠다 ^^ .. !');
});

setInterval(function() {
	error.error.error('^_^');
}, 2000);

process.on('exit', function() {
	console.log('안녕히계세요 .. !');
});
*/

/*
process.exit();
process.emit('exit');
process.emit('exit');
process.emit('exit');
process.emit('exit');
consloe.log('프로그램 실행 중');*/

/*var rint = require('./module');
rint.timer.on('tick', function() {
	console.log('이벤트를 실행합니다. ^_^');
});

var fs = require('fs');
fs.readFile('textfile.txt', 'utf8', function(error, data) {
	if(error) console.log(error);
	else console.log(data);
});
fs.writeFile('textfile.txt', 'utf8', function(error) {
	if(error) console.log(error);
	else console.log('FILE WRITE COMPLETE');
});*/
/*
console.log(Boolean(0));
console.log(Boolean(NaN));
console.log(Boolean(''));
console.log(Boolean(null));
console.log(Boolean(undefined));
*/
/*var server = require('http').createServer();
server.listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});

setInterval(function(){
	server.close();
}, 10000);
*//*
var http = require('http');
var server = http.createServer();
server.on('request', function() {
	console.log('Request On');
});
server.on('connection', function() {
	console.log('Connection On');
});
server.on('close', function() {
	console.log('Close On');
});
server.listen(52273);*/

/*require('http').createServer(function(request, response) {
	response.writeHead(200, { 'Content-Type' : 'text/html'});
	response.end('<h1>Hello Web Server with Node.js</h1>');
}).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
})*/
/*
var fs = require('fs');*/

/*var http = require('http');
http.createServer(function (request, response) {
	var date = new Date();
	date.setDate(date.getDate() + 7);
	response.writeHead(200, {
		'Content-Type' : 'text/html',
		'Set-cookie' : ['breakfast = toast;Expires = ' + date.toUTCString(), 'dinner = chicken']
	});
	response.end('<h1>' + request.headers.cookie + '</h1>');
}).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});*/
/*var http = require('http');
http.createServer(function (request, response) {
	response.writeHead(302, {
		'Location' : 'http://hanb.co.kr'})
		response.end();
}).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});
*/
/*
http.createServer(function (request, response) {
	fs.readFile('Kalimba.mp3', function (error, data) {
		response.writeHead(200, { 'Content-Type' : 'audio/mp3'});
		response.end(data);
		});
}).listen(52274, function() {
	console.log('Server Running at http://127.0.0.1:52274');
});*/
/*
var http = require('http');
http.createServer(function (request, response) {
	response.writeHead(200, { 'Content-Type' : 'text/html'});
	response.end('<h1>Test - File - 1</h1>');
}).listen(52273, function() {
	console.log('Server Running at http://127.0.0.1:52273');
});*/

require('http').createServer(function (request, response) {
	if (request.url == '/') {
		response.write('<!DOCTYPE html>');
		response.write('<html>');
		response.write('<head>');
		response.write('<title>forever</title>');
		response.write('</head>');
		response.write('<body>');
		response.write('<h1>Forever</h1>');
		response.write('</body>');
		response.write('</html>');
		response.end();
	} else {
		error.error.error();
	}
}).listen(52273, function () {
	console.log('Server Running at http://127.0.0.1:52273');
});