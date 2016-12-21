var express = require('express');
var app = express();

app.get('/', function (req, res) {
  res.send('Future home of the "Ohio Fantasy Football League"!')
});

app.listen(process.env.PORT, function () {
  console.log('Example app listening on port ' + process.env.PORT)
});