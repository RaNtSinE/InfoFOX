var http = require('http');
var fs = require('fs');
var path = require('path');

http.createServer(function (request, response) {
    // console.log('request starting...');

    let pattern = /^\.\/user_[a-z0-9_-]+$/i;
    let nohtml = /^\.\/[a-z0-9_-]+\.html$/i;
    let activate =  /^\.\/activate\/[a-z0-9_-]+\/[a-z0-9_-]+\-[a-z0-9_-]+$/i;
    let activation = /^\.\/activation\?id=[a-z0-9_-]+$/i;
    let login = /^\.\/login\_success$/i;
    let reset = /^\.\/password_reset\?token=[a-z0-9_-]+$/i;
    let profile = /^\.\/profile\?id=[a-z0-9_-]+$/i;
    let bracelet = /^\.\/bracelet\?id=[a-z0-9_-]+$/i;
    let disconnect = /^\.\/disconnect\?brac_id=[a-z0-9_-]+$/i;

    var filePath = '.' + request.url;
    console.log(filePath);
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
    if(filePath == './post_forgot')
        filePath ='./postForgot.html';
    else
    if(filePath == './jobs')
        filePath ='./jobs.html';
    else
    if(filePath == './login')
        filePath ='./login.html';
    else
    if(filePath == './user')
        filePath ='./user.html';
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
    if(filePath == './addNews')
        filePath ='./addNews.html';
    else
    if(filePath == './redactNews')
        filePath ='./redactNews.html';
    else
    if(filePath == './postNewPassword')
        filePath ='./postNewPassword.html';
    else
    if(filePath == './preLogin')
        filePath ='./preLogin.html';
    else
    if(filePath == './register')
        filePath = './register.html';
    else
    if(filePath == './postRegister')
        filePath = './postRegister.html';
    else
    if(filePath.search(pattern) === 0)
    {
        filePath ='./user.html';
    }
    else
    if(filePath.search(bracelet) === 0)
    {
        filePath ='./redirection.html';
    }
    else
    if(filePath.search(activation) === 0)
    {
        filePath ='./activation.html';
    }
    else
    if(filePath.search(login) === 0)
    {
        filePath ='./login.html';
    }
    else
    if(filePath.search(reset) === 0)
    {
        filePath ='./newPassword.html';
    }
    else
    if(filePath.search(disconnect) === 0)
    {
        filePath ='./linkedBracelets.html';
    }
    else
    if(filePath.search(profile) === 0)
    {
        filePath ='./user.html';
    }
    else
    if(filePath == './userpage')
    {
        filePath ='./profile.html';
    }
    else
    if(filePath.search(nohtml) === 0)
    {
        filePath ="./404.html"
    }
    else
    if(filePath.search(activate) === 0)
    {
        filePath = './activate.html';
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