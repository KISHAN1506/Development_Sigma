var figlet = require("figlet");

figlet("Kishan Agarwal! !", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});

// kishanagarwal@Kishans-MacBook-Air 08a_Figlet % node index.js
//   _  ___     _                      _                                  _   _   _ 
//  | |/ (_)___| |__   __ _ _ __      / \   __ _  __ _ _ ____      ____ _| | | | | |
//  | ' /| / __| '_ \ / _` | '_ \    / _ \ / _` |/ _` | '__\ \ /\ / / _` | | | | | |
//  | . \| \__ \ | | | (_| | | | |  / ___ \ (_| | (_| | |   \ V  V / (_| | | |_| |_|
//  |_|\_\_|___/_| |_|\__,_|_| |_| /_/   \_\__, |\__,_|_|    \_/\_/ \__,_|_| (_) (_)
//                                         |___/                                    
// kishanagarwal@Kishans-MacBook-Air 08a_Figlet % 