const  http = require("http");
const fs = require("fs");
const server = http.createServer((req,res) => {

    const data = fs.readFileSync(`${__dirname}/userApi/userapi.json`, "utf-8");
    const objData=JSON.parse(data);

    // console.log(req.url);

    if (req.url == "/") {
        res.end("Hello from the home sides");
    } else if(req.url == "/about"){
        res.end("Hello from the about sides");
    }else if(req.url == "/contact"){
        res.end("hello from the contact side");
    }else if(req.url == "/userapi"){
        // fs.readFile(`${__dirname}/userApi/userapi.json`, "utf-8", (err, data) =>{
        //     console.log(data);
        //     const objData = JSON.parse(data);
        // });
        res.writeHead(200, {"content-type": "application/json"})
        res.end(objData[2].name);

    }else{
        res.writeHead(404, {"Content-type": "text/html"});
        res.end("<h1><b>404</b> error pages. page doesn't exist</h1>");
    }
});

server.listen(8000,"127.0.0.1",()=>{
    console.log("listening to the port no 8000");
});