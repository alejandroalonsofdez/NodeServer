var http = require("http");
var fs   = require("fs");
var visitsHome = 0;
var visitsGeneric = 0;
var visitsElements = 0;
http.createServer(function(request, response){
 
    response.writeHead(200, {'Content-Type': 'text/html; charset=UTF-8'});
    switch(request.url){
        case '/':
            page = "index.html";
            visitsHome++;
            fs.writeFileSync('visitsIndex.txt', visitsHome);
            console.log(fs.readFileSync("visitsIndex.txt","utf8"));   
            break;
        case '/generic':
            page = "generic.html";
            visitsGeneric++;
            fs.writeFileSync('visitsGeneric.txt', visitsGeneric);
            console.log(fs.readFileSync("visitsGeneric.txt","utf8"));  
                break;
        case '/elements':
            page = "elements.html";
            visitsElements++;
            fs.writeFileSync('visitsElements.txt', visitsElements);
            console.log(fs.readFileSync("visitsElements.txt","utf8"));  
            break;
        default:
            response.writeHead(404, {'Content-Type': 'text/html; charset=UTF-8'});c
            break;
    }
     
fs.readFile(page, function(error, data){
        response.write(data);
        response.end();
    }); 
 
 
}).listen(8080);