// Path
// Windows vs. POSIX
// path.basename(path[, suffix])
// path.delimiter
// path.dirname(path)
// path.extname(path)
// path.format(pathObject)
// path.isAbsolute(path)
// path.join([...paths])
// path.normalize(path)
// path.parse(path)
// path.posix
// path.relative(from, to)
// path.resolve([...paths])
// path.sep
// path.toNamespacedPath(path)
// path.win32


// # Path


// The node:path module provides utilities for working with file and directory paths. It can be accessed using:

const path = require('node:path');

// path.dirname(path) ----->
console.log(path.dirname('C:/Users/Md Faiyyaj Alam/OneDrive/Desktop/Nodejs/PathModule/pathmod.js'));

// path.extname(path)
console.log(path.extname('C:/Users/Md Faiyyaj Alam/OneDrive/Desktop/Nodejs/PathModule/pathmod.js'));

// path.basename(path[, suffix])
console.log(path.basename('C:/Users/Md Faiyyaj Alam/OneDrive/Desktop/Nodejs/PathModule/pathmod.js'));

// path.parse(path)
console.log(path.parse('C:/Users/Md Faiyyaj Alam/OneDrive/Desktop/Nodejs/PathModule/pathmod.js'));


const MyPath = path.parse('C:/Users/Md Faiyyaj Alam/OneDrive/Desktop/Nodejs/PathModule/pathmod.js');
console.log(MyPath.name);
console.log(MyPath.root);
