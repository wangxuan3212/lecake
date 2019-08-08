
//category-0-1.html
(function(){
    ajax({
      url:"http://127.0.0.1:3000/category",
      type:"get",
      dataType:"json"
    })
    .then(function(result){
      var html='';
    for(var i=0;i<result.length;i++){
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

  document.getElementById("list_wrap").innerHTML=html;
    })
  })();