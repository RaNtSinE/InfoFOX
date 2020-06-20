var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    console.log('request starting...');

    let pattern = /^\.\/user_[a-z0-9_-]+$/i;

    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.html';
    if(filePath == './news')
        filePath ='./news.html';
    if(filePath == './addJob')
        filePath ='./addJob.html';
    if(filePath == './changeJob')
        filePath ='./changeJob.html';
    if(filePath == './forgot')
        filePath ='./forgot.html';
    if(filePath == './jobs')
        filePath ='./jobs.html';
    if(filePath == './login')
        filePath ='./login.html';
    if(filePath == './map')
        filePath ='./map.html';
    if(filePath == './newPassword')
        filePath ='./newPassword.html';
    if(filePath == './postForgot')
        filePath ='./postForgot.html';
    if(filePath == './postNewPassword')
        filePath ='./postNewPassword.html';
    if(filePath == './preLogin')
        filePath ='./preLogin.html';
    if(filePath.search(pattern) === 0)
    {
        filePath ='./user.html';
    }
    var extname = path.extname(filePath);
    var contentType = 'text/html';
    switch (extname) {
        case '.js':
            contentType = 'text/javascript';
            break;
        case '.css':
            contentType = 'text/css';
            break;
        case '.json':
            contentType = 'application/json';
            break;
        case '.png':
            contentType = 'image/png';
            break;
        case '.jpg':
            contentType = 'image/jpg';
            break;
        case '.wav':
            contentType = 'audio/wav';
            break;
    }

    fs.readFile(filePath, function(error, content) {
        if (error) {
            if(error.code == 'ENOENT'){
                fs.readFile('./404.html', function(error, content) {
                    response.writeHead(200, { 'Content-Type': contentType });
                    response.end(content, 'utf-8');
                });
            }
            else {
                response.writeHead(500);
                response.end('Sorry, check with the site admin for error: '+error.code+' ..\n');
                response.end();
            }
        }
        else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(3000);
console.log('Server running at http://127.0.0.1:3000/');