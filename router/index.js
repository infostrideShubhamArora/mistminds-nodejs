const express = require('express');
const router = express.Router();

const proble_1 = require('../controllers/problem-1.js');
const proble_2 = require('../controllers/problem-2.js');
const proble_3 = require('../controllers/problem-3.js');

router.use('/', proble_1);
router.use('/problem_1', proble_1);
router.use('/problem_2', proble_2);
router.use('/problem_3', proble_3);
  

module.exports  = router;