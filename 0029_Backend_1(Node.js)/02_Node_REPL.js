// Node REPL
// Read
// Evaluate
// Print
// Loop

// DOM elements cannot be modified using node 

// window is not available in node but 
// global is avaialable which is equivalent to windows

// Last login: Wed Aug 13 18:49:23 on ttys010
// kishanagarwal@Kishans-MacBook-Air ~ % node
// Welcome to Node.js v24.2.0.
// Type ".help" for more information.
// > 1+2
// 3
// > console.log("Hello")
// Hello
// undefined
// > console.log("Hello"+" kishan")
// Hello kishan
// undefined
// > window
// Uncaught ReferenceError: window is not defined
// > global
// <ref *1> Object [global] {
//   global: [Circular *1],
//   clearImmediate: [Function: clearImmediate],
//   setImmediate: [Function: setImmediate] {
//     Symbol(nodejs.util.promisify.custom): [Getter]
//   },
//   clearInterval: [Function: clearInterval],
//   clearTimeout: [Function: clearTimeout],
//   setInterval: [Function: setInterval],
//   setTimeout: [Function: setTimeout] {
//     Symbol(nodejs.util.promisify.custom): [Getter]
//   },
//   queueMicrotask: [Function: queueMicrotask],
//   structuredClone: [Function: structuredClone],
//   atob: [Function: atob],
//   btoa: [Function: btoa],
//   performance: [Getter/Setter],
//   fetch: [Function: fetch],
//   crypto: [Getter],
//   navigator: [Getter]
// }
// > .help
// .break    Sometimes you get stuck, this gets you out
// .clear    Alias for .break
// .editor   Enter editor mode
// .exit     Exit the REPL
// .help     Print this help message
// .load     Load JS from a file into the REPL session
// .save     Save all evaluated commands in this REPL session to a file

// Press Ctrl+C to abort current expression, Ctrl+D to exit the REPL
// > .save
// The "file" argument must be specified
// > 
// (To exit, press Ctrl+C again or Ctrl+D or type .exit)
// > 
// kishanagarwal@Kishans-MacBook-Air ~ % 