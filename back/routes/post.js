const express = require('express');
const postCtrl = require('../controllers/post');
const auth = require('../middleware/auth');

const router = express.Router();

router.get('/', auth, postCtrl.index);
router.get('/:category', auth, postCtrl.index);
router.get('/:id', auth, postCtrl.show);
router.post('/', auth, postCtrl.create);
router.put('/:id', auth, postCtrl.update);
router.delete('/:id', auth, postCtrl.delete);
router.put('/liking', auth, postCtrl.liking);

module.exports = router;
