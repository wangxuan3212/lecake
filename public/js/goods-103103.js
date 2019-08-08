var promotion2=document.querySelector(".promotion2")
var promotion=document.querySelector(".promotion")
var show=document.querySelector(".show")
show.onmouseenter=function(){
    promotion.style.display="none"
    promotion2.style.display="block"
}
show.onmouseleave=function(){
    promotion.style.display="block"
    promotion2.style.display="none"
}

var obj=[["含5套餐具","约 13 x 13 x 4 cm"," 约390g","甜度："],["含10套餐具","约 17 x 17 x 4 cm","约1000g","甜度："],["含15套餐具","约 22 x 22 x 4 cm"," 约1500g ","甜度："],["含20套餐具"," 约 31 x 31 x 4 cm","约2450g ","甜度："]]                             
var list=document.querySelectorAll('.eat_num a');
var eat=document.querySelector('.eat_num');
var list2=document.querySelectorAll('.spec span');
for(var i=0;i<list.length;i++){
    this.list[i].onclick=(function(i){
      return function(){
         for(var j=0;j<list.length;j++){
             list[j].style.border="none"   
         }
         eat.style.borderBottom="1px solid #ff4001";
         list[i].style.border="1px solid #ff4001";
         list[i].style.borderBottom="none";
         for(var j=0;j<list2.length;j++){
             list2[j].innerHTML=obj[i][j]
         }
      }
    })(i)
}
var items=document.querySelectorAll(".toshow");
for(var i=0;i<items.length;i++){ 
    items[i].setAttribute("checked",0)
        var ren=items[i].getAttribute("checked");
    (function(i){ 
        items[i].onclick=function(){
            var str=items[i].className.trim();
            var str1="toshow";
            str1=str1.trim();
            if(str==str1){
                items[i].className = 'hide';
            }else{
                items[i].className = 'toshow';  
            } 
        }
    })(i)       
}

(function(){
    ajax({
        url:"http://127.0.0.1:3000/category",
        type:"get",
        dataType:"json"
    }).then(function(result){
        var html="";
        for(var i=10;i<14;i++){
            html+=`  <div class="item_new">
            <div class="div_img">
            <a href="goods-103103.html">
                <img src="${result[i].img_url}" alt=""/>
                </a>
            </div>
            <div class="item_new_div">
            <p class="item_new_p1"><a href="javascript:;">${result[i].pname}</a></p>
                    <span class="item_new_span">${result[i].title}</span>
                <p class="item_new_p2"> ${result[i].subtitle}</p>
            </div>
            <p class="item-price">￥${result[i].price.toFixed(2)}</p>
            <p class="buy_btn"><a href="javascript:;">加入购物车</a></p>
        </div>
            </div>`
            
          }
          document.getElementById("recommend_new").innerHTML=html;
    })
})()



    
       
 

