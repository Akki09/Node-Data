var express = require("express");
var bodyParser = require("body-parser");
var MongoClient = require("mongodb").MongoClient;
var assert = require('assert');
var urlencodedParser = bodyParser.urlencoded({ extended : false });

var app = express();

var url = "mongodb://localhost:27017/LoginDb";
var collection = undefined;

MongoClient.connect(url,function(err,db){

	assert.equal(err,null);
	console.log("connection established");

	collection = db.collection('Login');

})
app.post('/checkLogin',urlencodedParser,function(req,res){

	var loginId = req.body.txtUser;
	var passId = req.body.passUser;

	collection.find({}).toArray(function(err,docs){

		assert.equal(err,null);

		for(var i = 0; i < docs.length; i++){
			if(docs[i].ID === loginId && docs[i].Pass === passId){
				res.write("hello world");
				res.end();
			}
		}

		res.write("Sorry world");
		res.end();
	});
	
	/*if(loginId === "Akki" && passId === "David"){
		
	}
	else{
		
	}
	*/
});

app.get('/',function(req,res){

	res.sendFile(__dirname+'/'+'Login.html');
});


app.listen(8081,function(){
	console.log("server Started")
});