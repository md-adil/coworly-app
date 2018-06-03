const app = require('express').Router();
const indexController = require('./controllers/indexController');

app.get('/users', indexController.index);

module.exports = app;