const fs =require("fs");
// const buf_data =fs.readFileSync("read.text");
// org_data = buf_data.toString();

// console.log(org_data);

fs.renameSync("read.text","readwrite.text");
