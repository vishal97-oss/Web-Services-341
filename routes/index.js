const Router = require('express').Router();
const nameController = require('../controlers/names');

Router.get('/' , (req, res) => {
    res.send(nameController.getBob());
});

Router.get('/Sue' , (req, res) => {
    res.send("SUE");
});

module.exports = Router;

ConstantSourceNode