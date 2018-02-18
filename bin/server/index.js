let ejs = require("ejs");
let express = require("express")
let app = express()

app.get("/",function(req,res){
    res.render("index.ejs")
});
app.use(express.static(__dirname + '../../../'));

app.listen(8080)