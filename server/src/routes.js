let router = require('express').Router();
let userController = require('./controllers/userController');
let catalogController = require('./controllers/catalogController');




router.use('/users', userController);
router.use('/data', catalogController);

module.exports = router