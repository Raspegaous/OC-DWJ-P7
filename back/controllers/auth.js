const bcrypt = require('bcrypt');
const passwordValidator = require('../middleware/password-validator');
const User = require('../models/User');
const jwt = require('jsonwebtoken');

exports.signup = (req, res) => {
    if (req.body.email.split('@')[1] !== 'groupomania.fr') return res.status(401).json({ message: "Vous devez possedez une adresse email de Groupomania", error: {email: false, password: null} })
    if (passwordValidator.validate(req.body.password)) {
        bcrypt.hash(req.body.password, 10)
            .then((hash) => {
                User.create(req.body.email, hash)
                    .then(() => res.status(201).json({ message: 'Utilisateur créé avec succès' }))
                    .catch((e) => res.status(400).json({ e, message: 'Utilisateur déjà existant', error: {email: false, password: null} }))
            })
            .catch((error) => res.status(500).json({ error }));
    } else {
        res.status(400).json({ message: 'Le mot de passe doit contenir entre 8 et 30 caractères, comporte une minuscule, une majuscule et un caractère spécial', error: {password: false, email: null}});
    }
}

exports.login = (req, res) => {
    User.getOne(req.body.email)
        .then((result) => {
            if (!result) return res.status(401).json({ message: 'Utilisateur non trouvé', error: {email: false, password: null} });
            bcrypt.compare(req.body.password, result.password)
                .then((valid) => {
                    if (!valid) return res.status(401).json({ message: "Mot de passe incorrect ", error: {email: true, password: false}})
                    res.status(200).json({
                        user: result,
                        token: jwt.sign({ userId: result.id }, process.env.JWT_SECRET_KEY, { expiresIn: '1h'})
                    });
                })
                .catch((error) => res.status(400).json({ error }));
        })
        .catch((error) => res.status(400).json({ error }));
}

exports.logout = (req, res) => {
    User.update({
        userId: req.body.userId,
        updatedAt: Date.now()
    })
        .then(() => res.status(200).json({ message: "Utilisateur deconnecté"}))
        .catch(error => { throw error })
}

exports.token = (req, res) => {
    const token = req.body.token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
        if (err) throw err
        return res.status(200).json(decoded)
    })
}

exports.password = (req, res) => {
    if (passwordValidator.validate(req.body.password)) {
        bcrypt.hash(req.body.password)
            .then(hash => {
                User.password(req.body.userId, hash)
                    .then(() => res.status(200).json({message: 'Mot de passe modifié'}))
                    .catch(error => res.status(400).json({error}))
            })
            .catch(error => res.status(500).json({error}))
    }
    res.status(400).json({message: "Le mot de passe doit contenir entre 8 et 30 caractères, comporte une minuscule, une majuscule et un caractère spécial"})
}
