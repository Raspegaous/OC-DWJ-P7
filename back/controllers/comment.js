const Comment = require('../models/Comment');

exports.get = (req, res) => {
    Comment.get()
        .then(response => res.status(200).json(response))
        .catch(error => res.status(400).json(error));
}

exports.create = (req, res) => {
    Comment.create(req.body)
        .then(response => res.status(201).json({ response, message: "Commentaire créé"}))
        .catch(error => res.status(400).json(error));
}

exports.delete = (req, res) => {
    Comment.delete(req.body.id)
        .then(response => res.status(200).json({ response, message: "Commentaire supprimé" }))
        .catch(error => res.status(400).json(error));
}
