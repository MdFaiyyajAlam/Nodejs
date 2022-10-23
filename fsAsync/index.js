const fs = require("fs");

// yahan callback() function ka use hua hai

// fs.writeFile("read.txt","today is awesome day :)",(err)=>{
//     console.log("file is created ");
// });

// Callback ()

// we pass them function as an argument - a callback - that gets called when that task completes.
// The callback has an argument that tells you whether the operation completed successfully.
// Now we need to say what to do when to do when fs.writeFile 
// has completed (even if it's nothing), and start checking for errors.

// Add Data 

// fs.appendFile("read.txt","plz like and share and subs my channel :)",(err)=>{
//     console.log("task is completed");
//     console.log(err);
// })

// read data

// fs.readFile("read.txt","utf-8",(err,data)=>{
//     console.log(data);
// });


