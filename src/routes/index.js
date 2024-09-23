const express = require('express');
const router = express.Router();
const userRouter = require('./user.router');

// placing all routes here
router.use('/users',userRouter);

module.exports = router;