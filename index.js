var express = require('express');
var http = require('http');
var Logger = require('le_node');
var path = require('path');
var serveFavicon = require('serve-favicon');
var serveStatic = require('serve-static');

var app = express();
var pkgjson = require('./package.json');
var env = process.env.NODE_ENV || 'dev';

var log = new Logger({
  token: process.env.LOG_ENTRIES_TOKEN,
  console: (env === 'dev'),
  timestamp: true
});

var publicPath = path.join(__dirname, './public');

app.set('name', pkgjson.name);
app.set('version', pkgjson.version);
app.set('host', process.env.HOST || process.env.IP || 'localhost');
app.set('port', process.env.PORT || 3000);
app.set('env', env);
app.use(serveFavicon(path.join(__dirname, './public/images/favicon.ico')));
app.use(serveStatic(publicPath));

// views is directory for all template files
app.set('views', `${__dirname}/app/server/views`);
app.set('view engine', 'pug');

require('./app/server/routes')(app);

// Start this party:
app.listen(app.get('port'), function() {
  log.info(`Starting: ${app.get('name')} v${app.get('version')}`);
  log.info(`Running @ //${app.get('host')}:${app.get('port')}`);
  log.info(`Environment: ${app.get('env')}`);
  log.debug(`Software: ${JSON.stringify(process.versions)}`);
});
