const {getAllplanets} = require('../../model/planets.model')

exports.httpGetAllplanets = (req, res) => {

    return res.status(200).json(getAllplanets())
};