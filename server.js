var express = require('express'); //npm install express --save
var app = express();

app.get('/testRequest', function (req, res) {
	res.send({"member": "member"});
});

app.listen(3000, function(){
	console.log('listen on 3000');
});