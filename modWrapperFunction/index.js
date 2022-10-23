// Module Wrapper Function in Node js

(function (exports, require, module, _filename, _dirname) {
    const a = require("fs");
    const name = "vinod";
    console.log(name);
    module.exports={}
});

// node js bonous what is IIFE

// // Functions are one of the building blocks of any programming language and JavaScript has 
// taken the Functions to a whole new level. Functions are said to be a collection of statements 
// to be executed in a proper sequence in a particular context. Now JavaScript provides a variety
//  of methods to define and execute Functions, there are named functions, anonymous functions and
//   then there are Functions that are executed as soon as they are mounted, these functions are known
//    as Immediately Invoked Function Expressions or IIFEs. Let us dive deeper to know more about IIFEs.

// Syntax: IIFEs follows a particular syntax as shown below.

// (function (){ 
// // Function Logic Here. 
// })();

(function(){
    var a = "vinod thapa";
    console.log(a);
})();

console.log(_dirname);
console.log(_filename);