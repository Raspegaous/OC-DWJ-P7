require('dotenv').config();
const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET_KEY);
        const { userId } = decodedToken;
        if (req.body.userId && req.body.userId !== userId) {
            throw "ID de l'utilisateur non valide";
        } else {
            next();
        }
    } catch (error) {
        res.status(401).json({ error: error || 'Requête non authentifiée' });
    }
}
