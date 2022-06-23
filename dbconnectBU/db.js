const mysql = require('mysql');

const connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "1234",
    port : "3306",
    database : "memo",
    dateStrings : 'date'
})

function getAllMemos(callback){
    connection.query('SELECT * FROM memos ORDER BY id DESC;',(err, rows, fields) => {
        if(err) throw err;
        callback(rows);
    });
}
 function insertMemo(content, callback){
    connection.query(`INSERT INTO memos(content,created,updated) VALUES('${content}',now(),now())`, (err, result) => {
        if(err) throw err;
        callback();
    });
 }
 
 function getMemoById(id, callback){
    connection.query(`SELECT * FROM memos WHERE ID = ${id}`,(err, row, fields) => {
        if(err) throw err;
        callback(row);
    });
 }
 //리스트수정
 function updateMemoById(id, content, callback){
    connection.query(`UPDATE memos set content = "${content}", updated = now() WHERE id = ${id}`, (err, result) => {
        if(err) throw err;
        callback();
    });
 }
 //리스트삭제
 function deleteMemoById(id, callback){
    connection.query(`DELETE FROM memos WHERE ID = ${id}`,(err, result) => {
        if(err) throw err;
        callback();
    });
 }



module.exports = {
    getAllMemos,
    insertMemo,
    getMemoById,
    updateMemoById,
    deleteMemoById
}