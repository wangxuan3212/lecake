//milk-carousel 轮播图部分
var i=0;
    var LIWIDTH=540;
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

    //milk_list_bottom   milk_list 部分  
var checkMilk=document.getElementsByClassName("checked_milk");
for(var item of checkMilk ){ 
  item.onclick=function(){
    for(var list of checkMilk ){
      list.style.background="#fff";
    }
      this.style.background="#c8a063";
      var milk=this.parentNode;
      var price=milk.querySelector("strong").innerHTML;//获取strong中的价格
      var week=milk.querySelector(".milk_week").innerHTML;
      var thePrice=document.querySelector(".thePrice");
      var selected=document.querySelector(".selected");
      thePrice.innerHTML=price;
      selected.innerHTML= "已选："+ week +", 每周1瓶";  
  }
   
}
 



