const {
    profile,
} = require('../../media');

function controller(req, res) {
    //Codigo
    res.json(profile)
}

module.exports = controller;