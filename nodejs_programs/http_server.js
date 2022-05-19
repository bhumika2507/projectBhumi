const http = require("http");

const server = http.createServer((req,res) =>
{
    // console.log(req.url);
    if(req.url == "/")
    {
        res.end("hello..."); 
    }
    else if(req.url == "/about")
    {
        res.end("hello... from the AboutUs side");
    }
    else if(req.url == "/contact")
    {
        res.end("hello... from the contactUs side");
    }
    else
    {
        res.writeHead(404,{"content-type": "text/html"});
        res.end("404 error pages.page does't exit")
    }
    
});

server.listen(8000,"127.0.0.1",() =>
{
    console.log("listening to the part no 8000");
});