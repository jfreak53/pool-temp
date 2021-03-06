var express = require('express');
var app = express();
const path = require('path');
var https = require('https');
const sensor = require('ds18b20-raspi');
var config = require('./config');
var temp;

var port = config.port;

app.set('view engine', 'pug');

app.use(express.static('assets'));

if(config.thingspeak > '') {
	setInterval(function () {
		temp = sensor.readSimpleF(0);

		if(temp > '') {
			https.get({
				host: 'api.thingspeak.com',
				port: 443,
				path: '/update?api_key=' + config.thingspeak + '&field1=' + temp
			}, function ( res ) {
				console.log("Got response: " + res.statusCode);
			});
			console.log('Sent temp to thinkspeak: '+temp);
		}
	}, 1000 * 60 * config.thingspeakcheck);
}

app.get('/', function ( req, res ) {
	temp = sensor.readSimpleF(0);
	res.render('index', { temp: temp + ' &deg;F' });
});

app.listen(port, () => {
  console.log('Pool Temp listening at port '+port);
});
