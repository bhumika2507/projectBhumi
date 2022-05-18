const fs=require("fs");

// fs.writeFile("read.txt","today is a awesome day:)",(err) =>
// {
//     console.log("File is created");
//     console.log(err);
// });


// fs.appendFile("read.txt","yes right........",(err) =>
// {
//     console.log("Task is completed...");
// });

// fs.readFile("read.txt","utf8",(err,data) =>
// {
//     console.log(data);
// });


// fs.mkdir("Bhumika",(err) =>
// {
//     console.log("Folder created...");
// });

// fs.writeFile("./Bhumika/bio.txt","My Name is bhumi..." ,(err) =>
// {
//     console.log("File Creared...");
// });

// fs.appendFile("./Bhumika/bio.txt","My Name is bhumika..." ,(err) =>
// {
//     console.log("File Creared...");
// });

// fs.readFile("./Bhumika/bio.txt","utf8",(err,data) =>
// {
//     console.log(data);
// });

// fs.rename("./Bhumika/bio.txt","./Bhumika/Mybio.txt",(err) =>
// {
//     console.log("rename done");
// });

// fs.unlink("./Bhumika/Mybio.txt",(err) =>
// {
//     console.log("file deleted");
// });
fs.rmdir("./Bhumika",(err) =>
{
    console.log("folder deleted..");
});


