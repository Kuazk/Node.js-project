const express = require('express');

const friendsController = require('../controller/friends.controller');

const friendsRouter = express.Router();

friendsRouter.use((req,res, next) => {
    console.log('ip address', req.socket.remoteAddress);
    next()
}
)

friendsRouter.post('/', friendsController.addFriend);
friendsRouter.get('/', friendsController.getFriends);
friendsRouter.get('/:friendid', friendsController.getFriend);

module.exports = friendsRouter;
