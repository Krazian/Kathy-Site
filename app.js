var express = require('express');
var ejs = require('ejs');
var app = express();
app.use(express.static('public'));
app.set('view_engine','ejs');

//single page only need
app.get("/",function(req,res){
	res.render('index.ejs');
})

app.listen(8888,function(){
	console.log("Kathy's site is live");
})