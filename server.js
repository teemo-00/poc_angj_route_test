/**
 * http://usejsdoc.org/
 */


var express = require("express");
var path = require("path");
var app = express();
var router = express.Router();
var currpath = __dirname;


//app.use("/js", express.static(__dirname + "/js"));

//console.log(path.join(currpath, "js"));
//app.use(logger());
app.use("/js", express.static(path.join(currpath, "js")));
app.use("/partials", express.static(path.join(currpath, "partials")));


router.use(function (req,res,next) {
  console.log("Using: /" + req.method + '-' + req.path);
  next();
});

router.get("/",function(req,res){
  console.log('Router Get /');
  res.sendFile(path.join(currpath,"index.html"));
});

router.get("/managers",function(req,res){
  res.sendFile(path.join(currpath, "managers.html"));
});

app.use("/",router);

app.use("*",function(req,res){
  console.log('File Not Found');
  res.sendFile(path.join(currpath,"404.html"));
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});