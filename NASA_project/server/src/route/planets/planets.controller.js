const {planets} = require('../../model/planets.model')

exports.getAllplanets = (req, res) => {

    return res.status(200).json(planets)
};