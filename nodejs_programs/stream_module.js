const fs =require("fs");
const http=require("http");

const server = http.createServer();

server.on("request",(req,res) =>
{
   let fs =require('fs');
   fs.readFile("input.txt",function(err,data)
   {
       if(err) return console.error(err);
       res.end(data.toString());
   }); 
})

server.listen(8000,"127.0.0.1");