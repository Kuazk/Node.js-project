const express = require('express')

const {getAlllaunches} = require('./launches.controller');

const launchesRouter = express.Router();

//launchesRouter.get('/launches', getLaunch);
launchesRouter.get('/launches', getAlllaunches);
//launchesRouter.post('/launches', postLaunch);

module.exports = launchesRouter;
