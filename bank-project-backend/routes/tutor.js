const router = require('express').Router();
const userControllers = require('../controllers/tutor')
//const auth = require("")

router.post('/login', userControllers.login);
router.post('/register', userControllers.register);


module.exports = router