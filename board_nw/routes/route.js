const express = require('express');
const router = express.Router();
const { json } = require('express');
const {check, validationResult} = require('express-validator');
const db = require("../db");


//페이지메인
router.get('/nowon_introConduct', (req,res) => {
  db.getAllMemos((rows) => {
    res.render('nowon_introConduct', { rows : rows });
  });
  //res.send('test');
});

//글검색
router.post('/search',/* [check('title').isByteLength({min:1 , max:300})],*/(req, res) =>{
  let errs = validationResult(req);
  let param = JSON.parse(JSON.stringify(req.body));
  var seachbox = param['seachbox'];
  let searchText = param['searchText'];
    if(errs['errors'].length > 0){
    db.update_process(no, (row) => {
      res.render('/', {row : row[0], errs : errs['errors']} );
    });
  }else{
    db.search_process(seachbox, searchText, (rows) => {
      res.render('nowon_introConduct', { rows : rows });
    });
  }
});


//새글-------------------------
//파일관련 모듈
const multer = require('multer');
//파일 저장위치, 파일이름 생성
const storage = multer.diskStorage({
  destination : function (req, file, cb) {
    cb(null, './upload')
  },
  //파일이름설정
  filename: function (req, file, cb) {
    cb(null , Date.now() + '-' + file.originalname)
  }
});
 //파일 업로드 모듈
  const upload = multer({ storage: storage })

  //수정------------그냥 글 안올라감 ;;------------------------
router.get('/create',(req,res) => {
  res.render('create');  
});
router.post('/store', upload.single('upload'), [check('title').isByteLength({min:1 , max:100})],
  function(req,res, next){
    let errs = validationResult(req);
        console.log(errs);
    if(errs['errors'].length > 0){
      res.render('create',{errs : errs['errors']});
    }else{
      let param = JSON.parse(JSON.stringify(req.body));
      let title = param['title'];
      let description = param['description'];
      let upload = req.file.filename;
      db.insertMemo(title,description,upload, function(){
        console.log(upload);
        res.redirect('/');
      });
    }
  });


//글보기
  router.get('/page/:no', (req, res) => {
    //var no = req.url;
    var no = req.params.no;
    db.page(no, (result) => {
      res.render('page',{result});
    });
  });

//파일다운로드
router.get('/download/:upload', (req, res) => {
  const filename = req.params.upload;
  const file = __dirname + '/../upload/' + filename;
  res.download(file);
});


//글수정
router.get('/update/:no',(req, res) => {
  var no = req.params.no;
  db.update(no, (row) => {
    if(typeof no === 'undefined' || row.length <= 0){
      res.status(404).json({error : 'undefined memo'});
    }else{
      res.render('update',{row});
    }
  });
});

//글수정중
router.post('/update/:no', [check('title').isByteLength({min:1 , max:300})],(req, res) =>{
    let errs = validationResult(req);
    let param = JSON.parse(JSON.stringify(req.body));
    var no = req.params.no;
    let title = param['title'];
    let description = param['description'];
    if(errs['errors'].length > 0){
      db.update_process(no, (row) => {
        res.render('update', {row : row[0], errs : errs['errors']} );
      });
    }else{
      db.update_process(no, title, description, () => {
        res.redirect('/');
      });
    }
  });

//글삭제
  router.get('/delete/:no', (req, res) => {
    var no = req.params.no;
    db.delete(no, () => {
      res.redirect('/');
    });


  });


module.exports = router;




