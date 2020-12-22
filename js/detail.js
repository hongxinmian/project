/* tab选项卡 start */
var lis=document.querySelector('.product_tabs').querySelectorAll('li')

var divs=document.querySelector('.product_tabs').querySelectorAll('div')

for(var i=0;i<lis.length;i++){
    lis[i].setAttribute('a',i)
    lis[i].onclick=function(){
        var newIndex=this.getAttribute('a')
        for(var j=0;j<divs.length;j++){
            lis[j].className=''
            divs[j].className=''
        }
        divs[newIndex].className='p1'
        lis[newIndex].className='cur'
    }
}
/*  end */


/* 登录后的用户名 start */
var cookie1=document.cookie
var p0=document.querySelector('.topbar-logout')

if(cookie1){ 
    var ar1=cookie1.split('=')
    var b=ar1[1]
    p0.innerHTML=b+'，您好！'
    p0.style.color='white'

}else{
    var url2=location.href
    /* alert('请先登录~')
    location.href='./login.html?url='+url2 */
}
/*  end */



/* 数据渲染  start */
var content=document.querySelector('.content')
var path1=location.search
var dt /* 当前详情信息显示数据 */

if(path1){
    var id1=path1.split('?')[1].split('=')[1];
    /* 使用异步函数发送请求，并获取响应结果 */
    (async function(){
        var p1=await promiseAjax({
            url:'../php/detail.php',
            data:'id='+id1
        })
        dt=eval('('+p1+')')
        var str=`
        <div class="content_nav">
            <a href="../html/list.html">返回列表</a>
            <span>></span>
            ${dt.goods_name}
        </div>
        <div class="product_info">
            <div class="img_info">
                <div class="bigbox" id='bigbox'>
                    <img src="${dt.goods_big_logo}" alt="">
                    <div class='mark'></div>
                </div>
                <div class='rightBox'>
                    <img src="${dt.goods_big_logo}" alt="">
                </div>
                <div class="smallbox">
                    <span class="prev"><</span>
                    <div class="s_box">
                        <ul>
                            <li><img src="${dt.goods_small_logo}" class='border1'></li>
                        </ul>
                    </div>
                    <span class="next">></span>
                </div>
            </div>
        <div class="pro_info">
            <div class="base_info">
                 <div class="title">
                     ${dt.goods_name}
                 </div>
                 <div class="slogan">
                     ${dt.goods_name}
                 </div>
                 <div class="price_info">
                     <dl>
                         <dt>价&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;格</dt>
                         <dd>
                             <div class="price_num">￥<span>${dt.goods_price}</span></div>
                             <div class="pingjia">
                                 <div class="star">
                                     <i class="glyphicon glyphicon-star"></i>
                                     <i class="glyphicon glyphicon-star"></i>
                                     <i class="glyphicon glyphicon-star"></i>
                                     <i class="glyphicon glyphicon-star"></i>
                                     <i class="glyphicon glyphicon-star"></i>
                                 </div>
                                 <span><a href="#">已有${parseInt(Math.random()*100)}人评价 ></a></span>
                                
                             </div>
                         </dd>
                     </dl>
                 </div>
                 <div class="distribution_info">
                     <dl class="region">
                         <dt>配送地区</dt>
                         <dd><div class="express_info">
                               <div class="express_title">
                                   <div>北京&nbsp;&nbsp;北京市&nbsp;&nbsp;朝阳区</div>
                               </div>
                               <div class="express_detail">
                                   <div class="add_title">
                                     <a href="#">北京</a>
                                     <a href="#">北京市</a>
                                     <a href="#">朝阳区</a>
                                     <span>×</span>
                                   </div>
                                   <div class="add_detail"></div>
                               </div>
                         </div></dd>
                     </dl>
                     <dl class="text">
                         <span>现货</span>由
                         <b><a href="https://www.lemall.com/product/proprietary/search.html?shopno=2020&shopName=%E6%98%9F%E9%93%BE%E4%BE%9B%E5%BA%94%E9%93%BE%E4%BA%91&contactNumber=0755-88392947">星链供应链云</a></b>
                         负责发货并提供售后服务，咨询电话：0755-88392947
                     </dl>
                 </div>
                 <div class="info_choose">
                    <dl>
                      <dt>规格</dt>
                      <dd>
                         <ul>
                           <li class="on"><a href="#">蒂芙尼蓝</a></li>
                           <li><a href="#">象牙白</a></li>
                           <li><a href="#">浅灰</a></li>
                         </ul>
                      </dd>
                    </dl>
                 </div>
            </div>

            <dl class="count_num">
               <dt>数量</dt>
               <dd>
                 <div>
                     <button>-</button>
                     <input type="text" value="1" min="1" id='text'>
                     <button data-id=${dt.goods_id} type="button">+</button>
                 </div>
                 <span>件</span>
               </dd>
            </dl>
            <div class="pay_info">
              <div class="all_price">
                 <p>总价：</p>
                 <span>￥<i class="total_price">${dt.goods_price}</i></span>
              </div>
              <div class="pay_button">
                <a href="javascript:;">加入购物车</a>
              </div>
            </div>
        </div>
    </div>
 </div>
        `
        content.innerHTML=str


        var p1=document.querySelector('.p1')
        str2=`
        <img src="${dt.goods_big_logo}" alt="">
        `
        p1.innerHTML=str2
        
    })()
}else{
    alert('请从列表页进入~')
    location.href='./list.html'
}
/* end */


/* 购物车 按钮 start*/
var btn5=document.querySelectorAll('[type="button"]')[1]
btn5.onclick=function(){
    location.href='./cart.html'
}
/* end */


/* 点击事件 start */
 content.onclick=function(e){
    var e = e || window.event
    var target=e.target || e.srcElement

    //加入购物车
    if(target.innerHTML=='加入购物车'){
        //获取localStorage中的cartList
        var cartList=localStorage.getItem("cartList")
        if(cartList){
            alert('加入购物车成功！')
            var a=0//判断要添加的数据是否存在
            cartList=JSON.parse(cartList)
            //遍历cartList中所有数据
            cartList.forEach((item)=>{
                //当前满足条件时，代表当前添加的数据在localStorage中存在
                if(item.goods_id==dt.goods_id){
                    item.cart_number=++item.cart_number
                    a++
                    localStorage.setItem('cartList',JSON.stringify(cartList))
                }
            })
            if(a==0){
                dt.cart_number=1//修改添加的商品数量
                cartList.push(dt)
                localStorage.setItem('cartList',JSON.stringify(cartList))
            }
        }else{
            alert('加入购物车成功！')
            dt.cart_number=1
            //在localStorage中设置一个cartList属性
            localStorage.setItem('cartList',JSON.stringify([dt]))
        }
    }

    //＋
    if(target.innerHTML=='+'){
        var cartList=localStorage.getItem("cartList")
        var val=target.previousElementSibling.value
            val++
        target.previousElementSibling.value=val
        //在localStorage中设置一个cartList属性
    }
    
    //-
    if(target.innerHTML=='-'){
        var cartList=localStorage.getItem("cartList")
        var val=target.nextElementSibling.value
            if(val<=1){
                val=1
            }else{
                val--
            }
        target.nextElementSibling.value=val
        //在localStorage中设置一个cartList属性
              
    }
} 
/* end */


/* 放大镜  start*/
var dsq=setTimeout(function(){
    var box=document.querySelector('.bigbox')
    var boxImg=box.querySelector('img')
    var content=document.querySelector('.content')
    var mark=document.querySelector('.mark')
    var rightBox=document.querySelector('.rightBox')
    var rightImg=rightBox.querySelector('img')
    
    var footDiv=document.querySelector('.smallbox')
    //获取小图片组
    var imgs=footDiv.querySelectorAll('img')
    //移动函数
    function move(e){
        //获取光标的移动距离
        var x1=e.pageX-box.offsetLeft-parseInt(mark.offsetWidth/2)
        var y1=e.pageY-box.offsetTop-parseInt(mark.offsetHeight/2)
       //设置边界条件
       var maxX=box.offsetWidth-mark.offsetWidth
       var maxY=box.offsetHeight-mark.offsetHeight
       var minX=minY=0
        //设置右边图片的移动距离
       var tempX,tempY
       //判断水平边界
       if(x1<minX){
           mark.style.left=minX+'px'
           tempX=0
       }else if(x1>maxX){
           mark.style.left=maxX+'px'
           tempX=maxX
       }else{
           mark.style.left=x1+'px'
           tempX=x1
       }
    
       //垂直方向
       if(y1<minY){
           mark.style.top=minY+'px'
           tempY=0
       }else if(y1>maxY){
           mark.style.top=maxY+'px'
           tempY=maxY
       }else{
           mark.style.top=y1+'px'
           tempY=y1
       }
    
       //设置右边图片的移动
       rightImg.style.left=-1.8*tempX+'px'
       rightImg.style.top=-1.8*tempY+'px'
    
    }
    box.onmouseover=function(e){
        var e = e || window.event
        mark.style.display='block'
        rightBox.style.display='block'
    } 
    
    box.onmouseout=function(){
        mark.style.display='none'
        rightBox.style.display='none'
    }
    
    box.onmousemove=function(e){
        var e = e|| window.event
        move(e)
    }
    
    //遍历所有小图片组中的图片对象
    for(var i=0;i<imgs.length;i++){
        //给每个小图片绑定点击事件
        imgs[i].onmouseover=function(){
            //清空所有小图片对象中的class属性值
            for(var a=0;a<imgs.length;a++){
                imgs[a].className=''
            }
            //在给当前被选中的图片添加class属性值
            this.className='border1'
            //获取当前图片对象的src属性值
            var src1=this.getAttribute('src')
            //给上面左右盒子中的图片设置src属性值
            boxImg.setAttribute('src',src1)
            rightImg.setAttribute('src',src1)
        }
    } 
    
},500)
/* end */





/*  判断从详情页的登录注册 start */
var lg=document.querySelector('.topbar-logout')
var login=lg.querySelector('.login')
var register=lg.querySelector('.register')
var url2=location.href

login.onclick=function(){
   if(!cookie1){
       location.href='./login.html?url='+url2
    }
}
register.onclick=function(){
   location.href='./zhuce.html?url='+url2
}
/*  判断从详情页的登录注册 end */

