const { json } = require('express');
const express = require('express');
var expressLayouts = require('express-ejs-layouts');
const router = express.Router();


const {check, validationResult} = require('express-validator');




router.use(expressLayouts);

//메인페이지 연결
router.get('/', (req,res) => {
    res.render('main.ejs');
});


router.get('/intro', (req,res) => {
  res.render('Seomun_intro.ejs');
});





module.exports = router;