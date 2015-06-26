var express = require('express'); //npm install express --save
var app = express();
var mongojs = require('mongojs');
var db = mongojs('main', ['members']);
var fs = require('fs');
var bodyParser = require('body-parser');


app.use(bodyParser.json());

app.get('/getMembers', function (req, res) {

	db.members.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});

app.get('/getMember/:id', function (req, res) {
	var myId = req.params.id;
	db.members.findOne({id:parseInt(myId, 10)},function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});

app.get('/getTalents', function (req, res) {

	db.members.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});

app.get('/getProfile', function (req, res) {

	db.members.findOne({id: 2},function(err,profile){
		console.log(profile);
		res.json(profile);
	});
});

app.post('/member/like', function(req,res){
	console.log(req.body);
	// var myId = req.params.id;
	// db.members.update({id:parseInt(myId, 10)}, {$inc: {likes:1}} );
});

app.listen(3000, function(){
	console.log('listen on 3000');
});