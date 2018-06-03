const express = require('express'),
	app = express(),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	routes = require('./routes');

app.use(cors());
app.use('/api', routes);
const config = require('../configs/app.js');

console.log(config);

app.listen(config.apiPort, () => {
	console.log('App is running on port: ', config.apiPort);
});
