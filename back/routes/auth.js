const express = require('express');
const authCtrl = require('../controllers/auth');
const auth = require('../middleware/auth');

const router = express.Router();


router.post('/signup', authCtrl.signup);
router.post('/login', authCtrl.login);
router.get('/logout', auth, authCtrl.logout);
router.post('/token', authCtrl.token);
router.post('/password', auth, authCtrl.password);


module.exports = router;
