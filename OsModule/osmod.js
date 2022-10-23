const os = require("os");

console.log(os.arch());
// console.log(os.constants);
console.log(os.hostname());
console.log(os.platform());
console.log(os.tmpdir());
console.log(os.machine);
console.log(os.type());

// #
// os.hostname()
console.log(os.hostname());
// Returns: <string>
// Returns the host name of the operating system as a string.

// freememory

// const freeMemory = os.freemem();
// // console.log(freeMemory);
// console.log(`${freeMemory/1024/1024/1024}`);

// # os.totalmem

// const totalmem= os.totalmem();
// console.log(`${totalmem/1024/1024/1024}`);



