const express = require('express');

const messageController = require('../controller/messages.controller')

const messageRouter = express.Router();

messageRouter.get('/', messageController.getMessages );
messageRouter.post('/', messageController.updateMessage );

module.exports = messageRouter;