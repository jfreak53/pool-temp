var express = require('express');
var app = express();
const path=require('path');
var http = require('http');
var config = require('./config');
var temp;

var port = config.port;

app.set('view engine', 'pug');

app.use(express.static('assets'));

/*http.get({
  host: 'api.thingspeak.com',
  port: 443,
  path: '/update?api_key=' + config.thingspeak + '&field1=' + temp
}, function ( res ) {
  // console.log("Got response: " + res.statusCode);
});*/

app.get('/', function ( req, res ) {
	res.render('index', { temp: 28 + ' &deg;F' });
});

app.listen(port, () => {
  console.log('Pool Temp listening at http://localhost:'+port);
});