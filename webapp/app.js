var express = require("express");
var path = require("path");
var app = express();


app.use(express.static("."));

app.get("/", function(req, res, next){
  res.sendFile(path.join(__dirname, "tesselUI.html"));
});


app.listen(3000, function(){
  console.log("Server is running!");
})
