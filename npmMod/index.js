const chalk = require("chalk");
const validator = require("validator");


console.log(chalk.blue.underline.inverse("Hello World"));

const res= validator.isEmail("faizi@ishi.com");

console.log(res?chalk.green.inverse(res) : chalk.red.inverse(res));