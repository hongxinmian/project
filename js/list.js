
 /* 分页器 start */
var pagination=document.querySelector('.Pagination')
var divRow=document.querySelector('#row');

(async function(){
    var p1=await promiseAjax({
        url:'../php/list.php'
    })
    var dt=eval('('+p1+')')
    
    var obj={
            pageInfo:{
            pagenum:1,
            pagesize:30,
            totalsize:(dt.length),
            totalpage:Math.ceil((dt.length)/30)
        },
            textInfo:{
            first:'首页',
            prev:"<",
            list:'',
            next:">",
            last:"尾页"
        },
        change(m){
            let ar2=dt.slice((m-1)*30,m*30)
            var str=``
            for(var attr in ar2){
                str+=`
                    <div class="col-sm-4 col-md-3">
                        <div class="thumbnail">
                        <img src="${ar2[attr].goods_big_logo}" alt="...">
                        <div class="caption">
                            <h3>${ar2[attr].goods_name}</h3>
                            <p>￥${ar2[attr].goods_price}</p>
                            <p>
                            <a href="./detail?id=${ar2[attr].goods_id}" class="btn btn-default" role="button">立即购买</a>
                            </p>
                        </div>
                        </div>
                    </div>
                `
            }
            divRow.innerHTML=str
        }
    }
    new Pagination(pagination,obj)
})()
/*  end */


/* 登录后的用户名 start */
var cookie1=document.cookie
var p0=document.querySelector('.topbar-logout')

if(cookie1){ 
    var ar1=cookie1.split('=')
    var b=ar1[1]
    p0.innerHTML=b+'，您好！'
    p0.style.color='white'
}
/* end */


/* 购物车按钮 start*/
var btn5=document.querySelectorAll('[type="button"]')[1]
btn5.onclick=function(){
    location.href='./cart.html'
}
/* end */
 

/*  判断从列表页的登录注册 start */
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
 /*   end */