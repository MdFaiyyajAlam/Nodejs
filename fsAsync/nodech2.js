// Challenge Time 2

// 1: create a folder name it thapa
// 2: create a file in it named Bio.txt and data into it .
// 3: Add more data into the file at the end of the existing data.
// 4: Read the data without getting the buffer the buffer data at first.
// 5: Rename the file name to mybio.txt
// 6: now delete both the file and the folder

const fs= require("fs");

// fs.mkdir("Faizi",() => (err) => {
//     console.log("folder is created");
// });


// fs.writeFile("./Faizi/bio.txt","My name is Md Faiyyaj Alam ", (err)=>{
//     console.log("File created");
// });

// fs.appendFile("./Faizi/bio.txt","Plz like me", (err)=>{
//     console.log("files data appended");
// });

// fs.readFile("./Faizi/bio.txt","utf-8",(err,data)=>{
//     console.log(data);
// });

// fs.rename("./Faizi/bio.txt","./Faizi/mybio.txt",(err)=>{
//     console.log("rename done");
// });

// fs.unlink("./Faizi/mybio.txt", (err)=>{
//     console.log("file deleted");
// });

// // folder delete

// fs.rmdir("./Faizi",(err)=> {
//     console.log("folder is deleted");
// });