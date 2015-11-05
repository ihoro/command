var app = require('express')();
var exec = require('child_process').exec;

app.get('/', function(req, res){
  var command = req.query.command;
  if (command) {
    exec(command);
    res.send(command + ' was invoked, I hope...');
  } else {
    res.send('command param undefined.');
  }
});

var server = app.listen(8888, function(){
  console.log('OK, I\'m listening on http://localhost:8888/');
});
