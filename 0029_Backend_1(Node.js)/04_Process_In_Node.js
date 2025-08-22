// kishanagarwal@Kishans-MacBook-Air 0029_Backend_1(Node.js) % node
// Welcome to Node.js v24.2.0.
// Type ".help" for more information.
// |
// |
// |
// big object will be printed having many functionalities

// > process.version
// 'v24.2.0'

// > process.release
// {
//   name: 'node',
//   sourceUrl: 'https://nodejs.org/download/release/v24.2.0/node-v24.2.0.tar.gz',
//   headersUrl: 'https://nodejs.org/download/release/v24.2.0/node-v24.2.0-headers.tar.gz'
// }

// > process.cwd
// [Function: wrappedCwd]
// > process.cwd()
// '/Users/kishanagarwal/Documents/Development_Sigma/0029_Backend_1(Node.js)'

// > process.argv
// [ '/opt/homebrew/Cellar/node/24.2.0/bin/node' ]
// > .exit


// console.log(process.argv);

// kishanagarwal@Kishans-MacBook-Air 0029_Backend_1(Node.js) % node 04_Process_In_Node.js
// [
//   '/opt/homebrew/Cellar/node/24.2.0/bin/node',
//   '/Users/kishanagarwal/Documents/Development_Sigma/0029_Backend_1(Node.js)/04_Process_In_Node.js'
// ]


// kishanagarwal@Kishans-MacBook-Air 0029_Backend_1(Node.js) % node 04_Process_In_Node.js hello bye
// [
//   '/opt/homebrew/Cellar/node/24.2.0/bin/node',
//   '/Users/kishanagarwal/Documents/Development_Sigma/0029_Backend_1(Node.js)/04_Process_In_Node.js',
//   'hello',
//   'bye'
// ]

// '/opt/homebrew/Cellar/node/24.2.0/bin/node', --> Executable path for node
// '/Users/kishanagarwal/Documents/Development_Sigma/0029_Backend_1(Node.js)/04_Process_In_Node.js', --> current file path


// argv --> to take some values as input from the user
let args = process.argv;
for (let i = 2; i < args.length; i++) {
    console.log(args[i]);

}

// kishanagarwal@Kishans-MacBook-Air 0029_Backend_1(Node.js) % node 04_Process_In_Node.js Kishan Agarwal
// Kishan
// Agarwal

// kishanagarwal@Kishans-MacBook-Air 0029_Backend_1(Node.js) % node 04_Process_In_Node.js hello bye
// /opt/homebrew/Cellar/node/24.2.0/bin/node
// /Users/kishanagarwal/Documents/Development_Sigma/0029_Backend_1(Node.js)/04_Process_In_Node.js
// hello
// bye