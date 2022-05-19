const EventEmitter = require("events");

const events = new EventEmitter();

// events.on("sayMyname",() =>
// {
//     console.log("your name is bhumi");
// });
// events.emit("sayMyname");

events.on("checkPage",(sc,msg) =>
{
    console.log(`status code is ${sc} and the page is ${msg}`);
});

events.emit("checkPage",200,"ok");