//header bussiness
var company=document.getElementById("nav_business")
var business=document.getElementById("business")
company.onmouseenter=function(){
   business.style.display="block";
}
company.onmouseleave=function(){
  business.style.display="none";
}
var myself=document.getElementById("myself")
var myCake=document.getElementById("myCake")

myself.onmouseenter=function(){
  myCake.style.display="block";
}
myCake.onmouseleave=function(){
  myCake.style.display="none";
}

//轮播图
var i=0;
    var LIWIDTH=1903;
    var DURATION=500;
    var LICOUNT=4;
    var ulImgs=document.getElementById("ul-imgs");
    var ulIdxs=document.getElementById("ul-idxs");
    var lis=ulIdxs.children;
    function moveTo(to){
      if(to==undefined){
        to=i+1;
      }
      if(i==0){
        if(to>i){
          ulImgs.className="transition";
        }else{
          ulImgs.className="";
          ulImgs.style.marginLeft=-LIWIDTH*LICOUNT+"px";
          setTimeout(function(){
            moveTo(LICOUNT-1);
          },100);
          return;
        }
      }
      i=to;
      ulImgs.style.marginLeft=-i*LIWIDTH+"px";
      for(var li of lis){
        li.className=""
      }

      if(i==LICOUNT){
        i=0;
        setTimeout(function(){
          ulImgs.className="";
          ulImgs.style.marginLeft=0;
        },DURATION)
      }
      lis[i].className="active";
    }
 
 
    var btnLeft=document.getElementById("btn-left");
    var btnRight=document.getElementById("btn-right");
    var canClick=true;
    btnRight.onclick=function(){
      move(1)
    }
    function move(n){
      if(canClick){
        moveTo(i+n);
        canClick=false;
        setTimeout(function(){
          canClick=true;
        },DURATION+100);
      }
    }
    btnLeft.onclick=function(){
      move(-1);
    }
 
 
    var interval=1500;
    var timer=setInterval(function(){
      moveTo()
    },3000);
    var banner=document.getElementById("banner");
    banner.onmouseover=function(){
      clearInterval(timer);
    }
    banner.onmouseout=function(){
      timer=setInterval(function(){
        moveTo()
      },3000);
    }
 
 
    var ulIdxs=document.getElementById("ul-idxs");
    var canClick=true;
    ulIdxs.onclick=function(e){
      if(canClick){
        var li=e.target;
        if(li.nodeName=="LI"){
          if(li.className!=="active"){
            for(var i=0;i<lis.length;i++){
              if(lis[i]==li){
                break;
              }
            }
            moveTo(i);
            setTimeout(function(){
              canClick=true;
            },DURATION);
          }
        }
      }
    };
   function fun(){
    console.log(222)
   }
  //index  cake_section 商品页面
  (function(){
    ajax({
      url:"http://127.0.0.1:3000/product",
      type:"get",
      dataType:"json"
    })
    .then(function(result){
   
      var html='';
      var html1='';
    for(var i=0;i<8;i++){
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
    for(var j=8;j<12;j++){
      html1+=`  <div class="item_new">
      <div class="div_img">
      <a href="goods-103103.html"><img src="${result[j].img_url}" alt=""/></a>
          
      </div>
      <div class="item_new_div">
           <p class="item_new_p1"><a href="javascript:;">${result[j].pname}</a></p>
              <span class="item_new_span">${result[j].title}</span>
          <p class="item_new_p2"> ${result[j].subtitle}</p>
      </div>
      <p class="item-price">￥${result[j].price.toFixed(2)}</p>
      <p class="buy_btn"><a href="javascript:;">加入购物车</a></p>
  </div>
      </div>`
      
    }
   

  document.getElementById("product_content").innerHTML=html;
  var inff=document.getElementById("p_list_new");

  document.getElementById("p_list_new").innerHTML=html1;
    })
  })();
  
 

