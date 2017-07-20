var express = require("express");
var bodyParser = require("body-parser");
var assert = require('assert');
var urlencodedParser = bodyParser.urlencoded({ extended : false });

var app = express();

app.post('/checkLogin',urlencodedParser,function(req,res){

	var loginId = req.body.txtUser;
	var passId = req.body.passUser;
	
	if(loginId === "Akki" && passId === "David"){
		res.write("hello world");
		res.end();
	}
	else{
		res.write("Sorry world");
		res.end();
	}
	
});

app.get('/',function(req,res){

	res.sendFile(__dirname+'/'+'Login.html');
});


app.listen(8081,function(){
	console.log("server Started")
});