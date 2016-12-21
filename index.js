var express = require('express');
var http = require('http');

var app = express();
var pkgjson = require('./package.json');

app.set('name', pkgjson.name);
app.set('version', pkgjson.version);
app.set('host', process.env.HOST || process.env.IP || 'localhost');
app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
  res.send('Future home of the "Ohio Fantasy Football League"!')
});

// Start this party:
http.createServer(app).listen(app.get('port'), app.get('host'), function() {
  console.log('Starting: %s v%s', app.get('name'), app.get('version'));
  console.log('Running @ //%s:%s', app.get('host'), app.get('port'));
  console.log('Environment:', process.env.NODE_ENV);
  console.log('Software:', process.versions);
});