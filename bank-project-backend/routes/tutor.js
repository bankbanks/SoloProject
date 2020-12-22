const router = require('express').Router();
const tutorControllers = require('../controllers/tutor')
//const auth = require("")

router.get('/', tutorControllers.tutor);
router.post('/',tutorControllers.addTutor) 

module.exports = router