const simpleController = require('./simpleController');
const Router = require('express');

const route = Router();

route.post('/posts', simpleController.create);
route.get('/posts', simpleController.index);

module.exports = route;
