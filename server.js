const express = require("express");
const app = express();
const PORT = 3009;
const middleware = require("./middleware");

app.use(middleware.logger)

// app.use(middleware.requireAuthentication)

app.get("/hakkimda", middleware.requireAuthentication, function(req, res) {
    res.send("hakkımda sayfasına başarılı bir şekilde giriş yappıldı");
});

app.use(express.static(__dirname + '/public'));

app.listen(PORT, function() {
    console.log("Server has been running" + PORT);
});