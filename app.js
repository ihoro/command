var app = require('express')();
var child_process = require('child_process');

app.get('/', function(req, res){
  var command = req.query.command;
  console.log('Request with command=' + command);

  if (command) {
    var child = child_process.spawn(command);
    var p = function(data) {
      res.write(data.toString());
    };
    child.stdout.on('data', p);
    child.stderr.on('data', p);
    child.on('exit', function(code){
      res.write('Exit code: ' + code + '\n');
//      res.write('');
      res.end();
    });
  } else {
    res.send('command param undefined.');
  }
});

var server = app.listen(8888, function(){
  console.log('OK, I\'m listening on http://localhost:8888/');
});
