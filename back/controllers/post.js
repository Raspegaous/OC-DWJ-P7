const Post = require('../models/Post');

exports.index = (req, res) => {
    let params = req.params.category || ''
    Post.getAll(params)
        .then(response => res.status(200).json(response))
        .catch(error => res.status(400).json(error));
}

exports.show = (req, res) => {
    Post.get(req.params.id)
        .then(response => res.status(200).json(response))
        .catch(error => res.status(400).json(error));
}

exports.create = (req, res) => {
    Post.create(req.body)
        .then(response => res.status(201).json({ response, message: "Post créé avec succès"}))
        .catch(error => res.status(400).json(error.message))
}

exports.liking = (req, res) => {
    Post.liking(req.body.postId, req.body.liked)
        .then(response => res.status(200).json(response))
        .catch(error => res.status(400).json(error))
}


exports.update = (req, res) => {
    Post.update(req.params.id, req.body)
        .then(response => res.status(200).json({response, message: "Post modifié"}))
        .catch(error => res.status(400).json(error));
}

exports.delete = (req, res) => {
    Post.delete(req.params.id)
        .then(response => res.status(200).json({response, message: "Post suprimé"}))
        .catch(error => res.status(400).json(error));
}
