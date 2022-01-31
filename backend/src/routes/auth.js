const { Router } = require('express');
const { signUp, signIn, signOut } = require('../controllers/auth');

const router = Router();

router.post('/signup', signUp);
router.post('/signin', signIn);
router.post('/signout', signOut);

module.exports = router;
