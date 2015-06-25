var express = require('express'); //npm install express --save
var app = express();
var mongojs = require('mongojs');
var db = mongojs('main', ['main']);

app.get('/testRequest', function (req, res) {
	// res.send({"member": "member"});

	db.main.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});

app.listen(3000, function(){
	console.log('listen on 3000');
});