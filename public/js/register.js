
//register.html
var myUpwd=document.querySelector(".myUpwd");
var  myUname=document.querySelector(".myUname");
var result=document.getElementById("result")
var resultPwd=document.getElementById("result_pwd");
var checkbox=document.getElementById("checkbox");
var loginBtn=document.querySelector(".login_btn2")

console.log(checkbox)
myUname.onblur=function(){
    var str=myUname.value;
    if(str.length<6){
        result.innerHTML="用户名不能小于6位"
    }else if(str.length>12){
        result.innerHTML="用户名不能大于12位"
    }else{
        result.innerHTML="用户名符合"
    }
}
myUpwd.onblur=function(){
    var strUpwd=myUpwd.value;
    if(strUpwd.length<6){
        resultPwd.innerHTML="密码不能小于6位"
    }else if(strUpwd.length>12){
        resultPwd.innerHTML="密码不能大于12位"
    }else{
        resultPwd.innerHTML="密码符合要求"
    }
}
loginBtn.onclick=function(){
    if(result.innerHTML=="用户名符合"&&resultPwd.innerHTML=="密码符合要求"&&checkbox.checked==true){
       console.log(0345435)
       var xhr=new XMLHttpRequest();
	//接受响应
	var u_name=myUname.value;
    var u_upwd=myUpwd.value;
    console.log(u_name,u_upwd)
	xhr.onreadystatechange=function (){
		if(xhr.status==200&&xhr.readyState==4){
			var result=xhr.responseText;
            console.log(result);
           if(result=="注册成功"){
            setTimeout(function(){
                window.location.href='login.html';
            },1000);
            
           }else{
             alert("注册失败 请重新注册")
           }
		}
	}
	//创建请求
	xhr.open('post',"http://127.0.0.1:3000/register",true);
	xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
	//发送请求
	var formdata='uname='+u_name+"&upwd="+u_upwd
    xhr.send(formdata);
    }
}

     