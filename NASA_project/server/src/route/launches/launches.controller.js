const {getAllLaunches, addLaunch, deleteLaunch} = require('../../model/launches.model');

exports.httpGetAlllaunches = (req, res) => {
    return res.status(200).json(getAllLaunches());
}

exports.httpSubmitLaunch = (req, res) => {
    const data = req.body;
    
    return addLaunch(data)
        ? res.status(201).send({succeed: 'set launch succed',
                                current_launch: getAllLaunches()
    })
        : res.status(400).send({error: 'fail to add launch'})
}

exports.httpDeleteLaunch = (req, res) => {
    const target = req.params.id
    
    return deleteLaunch(target)
        ? res.status(200).send({succeed: `delete object with it ${target}`,
                                current_launch: getAllLaunches()})
        : res.status(400).send({error: 'id not found'})

}