const route = require('express').Router();
const controller = require('./controller');

route.post('/postReport', controller.postReport);

module.exports = route;
