const express = require('express');
const userCtrl = require('../controllers/user');
const auth = require('../middleware/auth');

const router = express.Router();


router.post('/', auth, userCtrl.getLast);
router.post('/delete/:id', auth, userCtrl.delete);


module.exports = router;
