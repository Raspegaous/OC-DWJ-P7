const User = require('../models/User');

exports.getLast = (req, res) => {
    User.getAll()
        .then(response => res.status(200).json(response))
        .catch(error => { throw error})
}

exports.delete = (req, res) => {
    User.delete(req.params.id)
        .then(() => res.status(201).json({ message: "Utilisateur supprimé"}))
        .catch(error => { throw error })
}
