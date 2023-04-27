var fs = require('fs');

var readStream = fs.createReadStream("package.json");

var info = "";

readStream.on('data', function (chunk) {
    console.log("streaming started");
    info += chunk;
})

readStream.on('error', function (err) {
    console.log(error);
})

readStream.on('end', function () {
    console.log("streaming ended");
    console.log(info);
})