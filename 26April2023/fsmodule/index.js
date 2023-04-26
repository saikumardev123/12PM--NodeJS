var fs = require('fs');

fs.appendFile('hello.txt', " world", function (error) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("file written");
    }
})