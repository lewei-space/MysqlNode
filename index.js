const mysql=require('mysql')

//创建链接对象

const LocalCon=mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'Llw07205...',
  port:'3306',
  database:'myblog'
})

const ServiceCon=mysql.createConnection({
  host:'root@129.28.194.13',
  user:'root',
  password:'Llw07205...',
  port:'3306',
  database:'AweiDB'
})


// 开始链接
LocalCon.connect()

// 执行链接
const sql='select realname from users;'


LocalCon.query(sql,(err,result)=>{
  console.log(result)
  if (err){
    console.log(err)
    return
  }
  console.log(result)
})
