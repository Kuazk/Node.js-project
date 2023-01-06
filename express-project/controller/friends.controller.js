const friends = require('../models/friends.model')

exports.getFriends = (req,res) => {
    res.json(friends);
};

exports.getFriend = (req,res) => {
    const friendid = Number(req.params.friendid);
    const friend = friends[friendid-1]
    if (friend) {
        res.json(friend)
    } else {
        res.status(404).json({
            error: "Friend does not exist"
        });
    }
};

exports.addFriend = (req,res) => {
    
    if (!req.body.name){
        return res.status(400).json({
            error: 'Missing name'
        });

    }
    const newFriend = {
        name: req.body.name,
        id: String(friends.length +1)
    }
    friends.push(newFriend);

    res.json(newFriend);
};