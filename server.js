var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    console.log('request starting...');

    let pattern = /^\.\/user_[a-z0-9_-]+$/i;
    let nohtml = /^\.\/[a-z0-9_-]+\.html$/i;

    var filePath = '.' + request.url;
    if (filePath == './')
        filePath = './index.html';
    else
    if(filePath == './news')
        filePath ='./news.html';
    else
    if(filePath == './addJob')
        filePath ='./addJob.html';
    else
    if(filePath == './changeJob')
        filePath ='./changeJob.html';
    else
    if(filePath == './forgot')
        filePath ='./forgot.html';
    else
    if(filePath == './jobs')
        filePath ='./jobs.html';
    else
    if(filePath == './login')
        filePath ='./login.html';
    else
    if(filePath == './map')
        filePath ='./map.html';
    else
    if(filePath == './newPassword')
        filePath ='./newPassword.html';
    else
    if(filePath == './postForgot')
        filePath ='./postForgot.html';
    else
    if(filePath == './postNewPassword')
        filePath ='./postNewPassword.html';
    else
    if(filePath == './preLogin')
        filePath ='./preLogin.html';
<<<<<<< HEAD
    else
    if(filePath == './register')
        filePath = './register.html';
    else
=======
    if(filePath == './register')
        filePath ='./register.html';
>>>>>>> d53b2e320d7ac64e0c4b5a18121a1229f8241848
    if(filePath.search(pattern) === 0)
    {
        filePath ='./user.html';
    }
    else
    if(filePath.search(nohtml) === 0)
    {
        filePath ="./404.html"
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
        case '.svg':
            contentType = 'image/svg';
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

}).listen(process.env.PORT || 3000);
console.log('Server running');