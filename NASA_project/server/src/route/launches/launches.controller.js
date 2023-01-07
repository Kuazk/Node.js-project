const {launches} = require('../../model/launches.model');

exports.getAlllaunches = (req, res) => {
    return res.status(200).json(Array.from(launches.values()));
}

exports.postLaunch = (req, res) => {
    const data = req.body;

    if (!data){
        return res.status(400).send({error: "no data provided"}) 
    }
    launches.set(random_id, data)
}

// exports.getLaunch = (req, res) => {

// }