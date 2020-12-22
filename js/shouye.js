/* 轮播 start */
var imgs=document.getElementById('images')
var box=document.getElementById('lunbo')
var btn=document.getElementById('btn')
var prev=document.getElementById('prev')
var next=document.getElementById('next')
var spans=btn.getElementsByTagName('span')
var index=1 //按钮的初始下标
var dsq;//定时器

var aa=false

function animation1(offset){
    if(offset==0){
        return
    }
    var speed=offset/30
    var left=parseInt(imgs.style.left)+offset
    aa=true
    var go=function(){
        if((speed>0 && parseInt(imgs.style.left)<left)||(speed<0 && parseInt(imgs.style.left)>left)){
            //把计算结果赋值给imgs对象
            imgs.style.left=parseInt(imgs.style.left)+speed+'px'
            setTimeout(go,10)
        }else{
            //next时，最后一张图片的判断
            if(left<-1196*2){
                imgs.style.left='-1196px'
            }
            //prev时，第一张图片的判断
            if(left>-1196){
                imgs.style.left=-1196*2+"px"
            }
            aa=false
        }
    }
    go()
}
function play(){
    dsq=setInterval(function () {
        next.onclick()
    },4000)
}
//按钮函数
function btnShow(){
    //使用循环遍历span对象，去除所有span对象的class属性值
    for(var i=0;i<spans.length;i++){
        spans[i].className=''
    }
    //给当前图片对象对应的按钮添加class属性值
    spans[index-1].className='first'
}
next.onclick=function(){
    //判断是否有定时器在执行
    if(aa){
        return
    }
    //判断是否为最后
    if(index>=2){
        index=1
    }else{
        index++
    }
    btnShow()
    animation1(-1196)
}
//上一张图片
prev.onclick=function(){
    if(aa){
        return
    }
    //判断是否在最前
    if(index<=1){
        index=2
    }else{
        index--
    }
    btnShow()
    animation1(1196)
}
//遍历所有按钮对象，分别给每个按钮绑定点击事件
for(var i=0;i<spans.length;i++){
    spans[i].onclick= function () {
        //获取当前按钮对象的index属性值
        var myIndex=this.getAttribute('index')
        //显示按钮对应的图片
        animation1(-1196*(parseInt(myIndex)-index))
        index=myIndex
        btnShow()
    }
}
//鼠标移入删除定时器
box.onmouseover=function(){
    clearInterval(dsq)
}
box.onmouseout=play
play()
/* end */


 /*  菜单跳转 start */
var caidan=document.querySelector('.caidan');
var str=``
    str+=`
    <ul class="menu">
                    <li class='one'><b>数码家电</b><span>></span>
                      <div class="er-menu">
                        <ul>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class='one'>酒水饮料<span>></span>
                      <div class="er-menu">
                        <ul>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class='one'>食品生鲜<span>></span>
                      <div class="er-menu">
                        <ul>
                          <li>
                            <img src="../images/drink.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class='one'>美妆个护<span>></span>
                      <div class="er-menu">
                        <ul>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class='one'>服饰箱包<span>></span>
                      <div class="er-menu">
                        <ul>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class='one'>母婴玩具<span>></span>
                      <div class="er-menu">
                        <ul>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li class='one'>家居生活<span>></span>
                      <div class="er-menu">
                        <ul>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                          <li>
                            <img src="../images/shenghuo.jpg" alt="">
                            <p>生活电器</p>
                          </li>
                        </ul>
                      </div>
                    </li>
                </ul>
    `
    caidan.innerHTML=str;
/* en */

var li=caidan.querySelector('.one').querySelector('b')

li.onclick=function(e){
    
    location.href='./list.html'
  }
/* } */





/* 首页渲染 start */
var pagination=document.querySelector('.Pagination')
var nav4=document.querySelector('.nav4')
var divRow=nav4.querySelector('ul');

(async function(){
    var p1=await promiseAjax({
        url:'../php/shouye.php'
    })
    var dt=eval('('+p1+')')
    
    var obj={
            pageInfo:{
            pagenum:5,
            pagesize:8,
            totalsize:(dt.length),
            totalpage:Math.ceil((dt.length)/8)
        },
            textInfo:{
            first:'首页',
            prev:"<",
            list:'',
            next:">",
            last:"尾页"
        },
        change(m){
            let ar2=dt.slice((m-1)*8,m*8)
            var str5=``
            for(var attr in ar2){
                str5+=`
                <li>
                <div class="row">
                          <div class="col-sm-6 col-md-4">
                              <div class="thumbnail">
                                  <div class="imgbox">
                                  <img src="${ar2[attr].goods_big_logo}" alt="..."></div>
                                  <div class="caption">
                                      <h3>${ar2[attr].goods_name}</h3>
                                      <p>静音细腻 大容量</p>
                                      <p class="price">￥<span>${ar2[attr].goods_price}</span></p>
                                      <p><a href="./detail?id=${ar2[attr].goods_id}" class="btn btn-default" role="button">立即购买</a></p>
                                  </div>
                              </div>
                          </div>
                    </div>
                </li>
                `
            }
            divRow.innerHTML=str5
        }
    }
    new Pagination(pagination,obj)
})()
/* end */



/* 购物车按钮 start*/
var btn5=document.querySelectorAll('[type="button"]')[1]
btn5.onclick=function(){
    location.href='./cart.html'
};
/* end */


/* 登录后的用户名 start */
var cookie1=document.cookie
var p0=document.querySelector('.topbar-logout')
var p1=document.querySelector('.user_btn').querySelector('p')

if(cookie1){ 
    var ar1=cookie1.split('=')
    var b=ar1[1]
    p0.innerHTML=b+'，您好！'
    p0.style.color='white'
    p1.style.display='none'

}else{
    console.log(111)
}
/*  end */