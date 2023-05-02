const express = require('express');
var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set('views', './views');
app.set('view engine', 'pug');

// http://localhost:9011/login
app.get('/login', function (req, res) {
    res.render('index');
})
app.post('/authenticate', function (req, res) {
    var body = req.body;
    console.log("body", body);

    if (body.username == "aman" && body.password == "aman") {
        res.render('success', { message: body.username });
    }
    else {
        res.render('index', { message: "Login failure" });
    }

})
app.listen(9011, () => {
    console.log("server started!");
})