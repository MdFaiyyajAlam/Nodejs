const fs = require("fs");

const bioData = {
    name : "vinod",
    age : 25,
    channel : "thapa technical",
};

// const jsonData = JSON.stringify(bioData);
// console.log(jsonData);

// // {"name":"vinod","age":25,"channel":"thapa technical"}

// const objData = JSON.parse(jsonData);
// console.log(objData.channel);

// output

// thapa technical

// 1 : Convert to JSON
// 2 : Dusre file add krna hai
// 3 : readfile
// 4 : Again convert back to js obj ori
// 5 : console.log

const jsonData = JSON.stringify(bioData);
fs.writeFile("json1.json", jsonData, (err) => {
    console.log("done");
});


fs.readFile("json1.json", "utf-8", (err, data) => {
    
    const orgData = JSON.parse(data);
    console.log(data);
    console.log(orgData);
});