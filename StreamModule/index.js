// 2nd way 
// Reading from a Stream
// Create a readable stream
// Handle stream events -> data, end , and error

const fs = require("fs");
const http = require("http");

const server = http.createServer();

server.on('request', (req, res) => {
   // First way
    // fs.readFile('input.txt' , (err, data) => {
    //     if(err) return console.error(err);
    //     res.end(data.toString());
    // });

    // 2nd way 
// Reading from a Stream
// Create a readable stream
// Handle stream events -> data, end , and error

// const rsstream = fs.createReadStream("input.txt");

// rsstream.on("data", (chunkdata) => {
//     res.write(chunkdata);
// });

// rsstream.on("end", () => {
//     res.end();
// });

// rsstream.on("error", (err) => {
//     console.log(err);
//     res.end("File not found");
// });


// 3rd way pipe() method

const rsstream = fs.createReadStream("input.txt");
rsstream.pipe(res);

});

server.listen(8000, "127.0.0.1");


