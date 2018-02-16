let ejs = require("ejs");
let express = require("express")
let app = express()

app.get("/",function(req,res){
    res.render("index.ejs")
});

app.listen(8080)