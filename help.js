let fs = require("fs");
let path = require("path");
function helpFn()
{
    console.log(`
    These are the following commands supported:
    node main.js tree "directoryPath"
    node main.js organize "directoryPath"
    node main.js help`);
}
module.exports={
    helpKey: helpFn
}