const express = require('express')

const {httpGetAlllaunches, httpSubmitLaunch, httpDeleteLaunch} = require('./launches.controller');

const launchesRouter = express.Router();

//launchesRouter.get('/launches', getLaunch);
launchesRouter.get('/', httpGetAlllaunches);
launchesRouter.post('/', httpSubmitLaunch);
launchesRouter.delete('/:id', httpDeleteLaunch);

module.exports = launchesRouter;
