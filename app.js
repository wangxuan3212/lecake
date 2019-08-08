//1:引入第三方模块
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const session = require("express-session");
const bodyParser=require('body-parser');
//设置post请求的数据格式化为对象

//2:配置第三方模块
 //2.1:配置连接池
 var pool = mysql.createPool({
   host:"127.0.0.1",
   user:"root",
   password:"",
   port:3306,
   database:"lecake",
   connectionLimit:15
 })
//跨域
var server = express();
server.use(cors({
  origin:["http://127.0.0.1:5500",
  "http://localhost:5500"],
  credentials:true
}))
//session
server.use(session({
    secret:"128位字符串",
    resave:true,
    saveUninitialized:true
}))
server.listen(3000);
server.use( bodyParser.urlencoded({
    extended:false
  }) );
server.use(express.static("public"));
//index product
server.get("/product",(req,res)=>{
    var sql="SELECT * FROM cake_product";
    pool.query(sql,[],(err,result)=>{
        if(err)throw err;
       res.send(result)
    })

})
//category-0-1.html product
server.get("/category",(req,res)=>{
    var sql="SELECT * FROM birthday_cake";
    pool.query(sql,[],(err,result)=>{
        if(err)throw err;
       res.send(result)
    })

})

//category-1000-1.html
server.get("/snacks",(req,res)=>{
    var sql="SELECT * FROM snacks"
    pool.query(sql,[],(err,result)=>{
        if (err) throw err;
        res.send(result);
        console.log(result)
    })
})
//login.html
server.post("/login",(req,res)=>{
    var $uname=req.body.uname;
    var $upwd=req.body.upwd;
    if(!$uname){
        res.send("请输入用户名")
		return;
    }
    if(!$upwd){
        res.send("请输入密码")
		return;
    }
    var sql="SELECT * FROM user WHERE uname=?&&upwd=?"
    pool.query(sql,[$uname,$upwd],(err,result)=>{
        if(err)throw err;
       if(result.length>0){
        res.send("用户名格式不正确")
          
       }else{
        res.send("登录成功")
       }
    })   
})
//register.html
server.post("/register",(req,res)=>{
    var $myName=req.body.uname;
	var $myPwd=req.body.upwd;
	var obj=req.body;
	console.log(111,$myName,$myPwd,333,obj)
	if(!$myName){
        res.send("请输入用户名")
		return;
    }
    if(!$myPwd){
        res.send("请输入密码")
		return;
    }
	var sql="SELECT * FROM user where uname=?"
	pool.query(sql,[$myName],(err,result)=>{
		if (err) throw err;
		console.log(result)
		console.log(result.length>0)
		if(result.length>0){
			res.send("用户名已经注册")
			return;
		}else{
		
	pool.query('INSERT INTO user SET?',[obj],(err,result)=>{
		console.log(333,obj)
		if (err)throw err;
		console.log(result);
        if(result.affectedRows>0){
			res.send("注册成功")
	    }else{
			res.send("注册失败")
	 }	
	});
		}
	})
})