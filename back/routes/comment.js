const express = require('express');
const commentCtrl = require('../controllers/comment');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, commentCtrl.get);
router.post('/', auth, commentCtrl.create);
router.post('/delete', auth, commentCtrl.delete);

module.exports = router;
