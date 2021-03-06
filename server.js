var express = require('express');
var path = require('path');

var app = express();

app.use(express.static(path.resolve("./")));

app.get('/', function(req, res) {
  res.sendFile('index.html');
});

var port = process.env.PORT || 3000;

var server = app.listen(port, function() {
  console.log('Listening on port:', port);
}).listen(port);