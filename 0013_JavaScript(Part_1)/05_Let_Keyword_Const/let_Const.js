let a = 5;
let b;

// let === var

let age= 19;
age+=1;
console.log(age);



const num = 32;
num+=12;
console.log(num);

// /Users/kishanagarwal/Documents/Development_Sigma/0013_JavaScript(Part_1)/05_Let_Keyword_Const/let_Const.js:11
// num+=12;
//    ^

// TypeError: Assignment to constant variable.
//     at Object.<anonymous> (/Users/kishanagarwal/Documents/Development_Sigma/0013_JavaScript(Part_1)/05_Let_Keyword_Const/let_Const.js:11:4)
//     at Module._compile (node:internal/modules/cjs/loader:1734:14)
//     at Object..js (node:internal/modules/cjs/loader:1899:10)
//     at Module.load (node:internal/modules/cjs/loader:1469:32)
//     at Module._load (node:internal/modules/cjs/loader:1286:12)
//     at TracingChannel.traceSync (node:diagnostics_channel:322:14)
//     at wrapModuleLoad (node:internal/modules/cjs/loader:235:24)
//     at Module.executeUserEntryPoint [as runMain] (node:internal/modules/run_main:152:5)
//     at node:internal/main/run_main_module:33:47

// Node.js v24.2.0
