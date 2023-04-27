
var os = require('os');

console.log(os.tmpdir());
console.log(os.totalmem());
console.log(os.freemem());
console.log(os.hostname());
console.log(os.cpus());

if (os.freemem() > 2047072768) {
    console.log("above 1 GB Free Memory")
}
else {
    console.log("less than 1 GB Free memory");
}


