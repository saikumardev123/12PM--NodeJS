var fs = require('fs');
var writeStream = fs.createWriteStream('abc.txt');
var str = "Hello! how are you?";
writeStream.write(str, function (err) {
    if (err) {
        console.log(err);
    }
});

writeStream.end();

writeStream.on('finish', function () {
    console.log("data writing finished")
})
