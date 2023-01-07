const express = require('express');
const {getAllplanets} = require('../planets/planets.controller');

const planetsRouter = express.Router();

planetsRouter.get('/planets', getAllplanets);

module.exports = planetsRouter;