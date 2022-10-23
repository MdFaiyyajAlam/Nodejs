const http = require("http");

const server = http.createServer((req,res) => {
    // console.log(req.url);

    if (req.url == "/") {
        res.end("Hello from the home sides");
    } else if(req.url == "/about"){
        res.end("Hello from the about sides");
    }else if(req.url == "/contact"){
        res.end("hello from the contact side");
    }else{
        res.writeHead(404, {"Content-type": "text/html"});
        res.end("<h1><b>404</b> error pages. page doesn't exist</h1>");
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});