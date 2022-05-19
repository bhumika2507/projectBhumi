const path=require("path");

console.log(path.dirname("/home/webclues/Desktop/bhumi/nodejs_programs/pathmodule.js"));
console.log(path.extname("/home/webclues/Desktop/bhumi/nodejs_programs/pathmodule.js"));
console.log(path.basename("/home/webclues/Desktop/bhumi/nodejs_programs/pathmodule.js"));
console.log(path.parse("/home/webclues/Desktop/bhumi/nodejs_programs/pathmodule.js"));

const mypath=path.parse("/home/webclues/Desktop/bhumi/nodejs_programs/pathmodule.js");
 console.log(mypath.name);