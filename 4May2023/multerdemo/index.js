var express = require('express');
var multer = require('multer');
var multerRef = multer({
    dest: './userfiles'
})
var app = express();
app.get('/', (req, res) => {
    res.sendFile(__dirname + "/index.html");
})

// single File
// app.post("/uploadFile", multerRef.single('profilePic'), (req, res) => {
//     console.log(req.file);
// })


// Multfile 

app.post("/uploadFile", multerRef.array('profilePic', 10), (req, res) => {
    console.log(req.files);
})


app.listen(9011, () => console.log("server started"));

