const mysql =require('mysql2')

//connection with mysql
var connection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'12345',
    database:'demo'
})

connection.connect((err)=>{
   if(err) throw err
   console.log('connection is done')
})

module.exports.conn = connection