//验证码部分
var test=document.getElementById("test");
var another=document.getElementById("another");

var arr=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var number=arr[parseInt(Math.random()*26)];
var str=''
for(var i=0;i<4;i++){
    str+=arr[parseInt(Math.random()*26)]
   } 
   test.innerHTML=str;
 another.onclick=function(){
     str="";
    for(var i=0;i<4;i++){
        str+=arr[parseInt(Math.random()*26)]
       } 
       console.log("wwwww",str)
       test.innerHTML=str;
}

//登录页面和注册页面切换
var phone=document.getElementById("banner_link_phone");
var user=document.getElementById("banner_link_user");
var login=document.getElementById("my_login");
var registe=document.getElementById("my_registe")
console.log(login,registe)
phone.onclick=function(){
    registe.style.display="none";
    user.style.color="#666";
    this.style.color="#fe4320";
    login.style.display="block";
}
user.onclick=function(){
    this.style.color="#fe4320";
    phone.style.color="#666";
    login.style.display="none";
    registe.style.display="block";
}
//登录设置,传送前台获取到的账号和密码到后台核对
var btnLogin=document.querySelector(".login_btn2");
var myUname=document.querySelector(".myUname");
var myUpwd=document.querySelector(".myUpwd");
var loginResult=document.getElementById("result")
console.log(loginResult)
btnLogin.onclick=function(){
    var xhr=new XMLHttpRequest();
	//接受响应
	var u_name=myUname.value;
	var u_upwd=myUpwd.value;
	xhr.onreadystatechange=function (){
		if(xhr.status==200&&xhr.readyState==4){
			var result=xhr.responseText;
            console.log(result);
           if(result=="登录成功"){

           }else{
            loginResult.innerHTML=result;
           }
		
		}
	}
	//创建请求
	xhr.open('post',"http://127.0.0.1:3000/login",true);
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	//发送请求
	var formdata='uname='+u_name+"&upwd="+u_upwd
    xhr.send(formdata);
}




