const add = (a, b) => {
    return a + b;
};

const sub = (a, b) => {
    return a-b;
};

const mul = (a, b) => {
    return a*b;
};

const mod = (a,b) => {
    return a%b;
};

const div = (a,b) => {
    return a/b;
};
const name = "Faizi";

// module.exports =name;

// *************************

// module.exports.add = add;
// module.exports.sub = sub;
// module.exports.mul = mul;
// module.exports.mod = mod;
// module.exports.div = div;


// object destructuring

module.exports = {add,sub,mul,mod,div,name};