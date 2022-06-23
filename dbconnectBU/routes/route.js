const { json } = require('express');
const express = require('express');
const router = express.Router();

const {check, validationResult} = require('express-validator');
const db = require("./../db.js");


router.get('/', (req,res) => {
  db.getAllMemos((rows) => {
    res.render('memo', { rows : rows });
  }
  );
  //res.send('test');
});

router.get('/newMemo',(req,res) => {
  res.render('newMemo');  
});

router.post('/store', [check('content').isByteLength({min:1 , max:300})],
  function(req,res, next){
    let errs = validationResult(req);
    console.log(errs);
    if(errs['errors'].length > 0){
      res.render('newMemo',{errs : errs['errors']});
    }else{
      let param = JSON.parse(JSON.stringify(req.body));
      db.insertMemo(param['content'],function(){
        res.redirect('/');
      });
    }
  });

router.get('/updateMemo',(req, res) => {
  let id = req.query.id;
  db.getMemoById(id, (row) => {
    if(typeof id === 'undefined' || row.length <= 0){
      res.status(404).json({error : 'undefined memo'});
    }else{
      res.render('updateMemo',{row : row[0]});
    }
  });

});


router.post('/updateMemo', [check('content').isByteLength({min:1 , max:300})],(req, res) =>{
    let errs = validationResult(req);
    let param = JSON.parse(JSON.stringify(req.body));
    let id = param['id'];
    let content = param['content'];
    if(errs['errors'].length > 0){
      db.getMemoById(id, (row) => {
        res.render('updateMemo', {row : row[0], errs : errs['errors']} );
      });
    }else{
      db.updateMemoById(id, content, () => {
        res.redirect('/');
      });
    }
  });

  router.get('/deleteMemo', (req, res) => {
    let id = req.query.id;
    db.deleteMemoById(id, () => {
      res.redirect('/');
    });


  });

module.exports = router;




