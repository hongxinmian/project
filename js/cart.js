/* 判断是否登入 start */
var name1=getCookie('name')
var url2=location.href

if(name1){
    console.log(111)
}else{
    alert('请先登入~');
    location.href='./login.html?url='+url2
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
}
/*  end */


/* 购物车是否有内容  start */
var container=document.querySelector('.container')
var jiesuan=document.querySelector('.jiesuan')
var guess=document.querySelector('.guess')
var cartlist=localStorage.getItem("cartList") || "[]";
cartlist=JSON.parse(cartlist)

show1()
function show1(){
    if(cartlist.length>0){
        var quan1=cartlist.every(item=>{
            return item.is_select==1
        })
        var aa=total1()
        var str2=`
            <div class="cart_table">
            <div class="cart">
                <div class="cart_top">
                    <div class="title">
                        <span>全部商品</span>
                        <span class="total_num">${cartlist.length}</span>
                    </div>
                    <div class="address">
                        <span>配送至</span>
                        <a href="javascrip:;">北京北京市朝阳区</a>
                        <div class="address_layer">
                            <div class="new_addr">
                                <div class="addr_dt">
                                    <span>选择新地址</span>
                                    <em class="glyphicon glyphicon-chevron-down"></em>
                                </div>
                                <div class="addr_dd">
                                    <div class="tabs">

                                    </div>
                                    <div class="content"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="center">
                    <div class="panel panel-default">
                        <div class="panel-heading">
                            <ul>
                                <li>
                                    <input type="checkbox" name="quan" ${quan1?'checked':''}>全选
                                </li>
                                <li>商品</li>
                                <li>单价(元)</li>
                                <li>数量</li>
                                <li>小计(元)</li>
                                <li>操作</li>
                            </ul>
                        </div>
                    </div>
            `
        cartlist.forEach(item=>{
            str2+=`
                <div class="media">
                    <div class="media-left media-middle">
                        <input type="checkbox" ${item.is_select==1?'checked':''} name="xuan" data-id="${item.goods_id}">
                        <div class="pro_info">
                            <a href="javascrip:;">
                                <img class="media-object" src="${item.goods_big_logo}" alt="...">
                            </a>
                            <h4 class="media-heading">
                                <a href="javascrip:;">${item.goods_name}</a>
                            </h4>
                        </div>  
                        <div class="pro_price">
                            <span>￥${item.goods_price}</span>
                        </div>
                        <div class="pro_num">
                            <div class="btn-group" role="group" aria-label="...">
                                <button data-id=${item.goods_id} ${item.cart_number<=1? 'disabled':''} type="button" class="btn btn-default">-</button>
                                <button type="button" class="btn btn-default">${item.cart_number}</button>
                                <button data-id=${item.goods_id} type="button" class="btn btn-default">+</button>
                            </div>
                            <div class="pro_type">
                                <span>有货</span>
                            </div>
                        </div>
                        <div class="pro_cost">
                            <span>￥${item.goods_price}</span>
                        </div>
                        <div class="pro_ope">
                            <button data-id=${item.goods_id}>删除</button>
                        </div>
                    </div>
                </div>
            `
        })
        str2+=`
                </div>
            </div>
            </div>
        `
        container.innerHTML=str2

        
        str3=`
        <div class="content">
                    <div class="content_left">
                        <input type="checkbox" name="quan" ${quan1?'checked':''}>
                        <span>全选</span>
                        <a href="#">删除选中商品</a>
                        <a href="./list.html">继续购物</a>
                    </div>
                    <div class="content_right">
                        <span class="text">
                            已选择<span class="choose_num">${aa[0]}</span>件商品  总计（不含运费）： 
                        </span>
                        <span class="cart_price">￥<span class="price_num">${aa[1]}</span></span>
                        <button>去结算</button>
                    </div>
                </div>
        
        `
        jiesuan.innerHTML=str3;
    }else{
        var str=`
            <div class="cart_none">
                <div class="img">
                    <img src="../images/cart_none.jpg" alt="">
                </div>
                <dl class="text">
                    <dt>你的购物车还是空的！
                        <br>
                        赶紧行动吧！
                    </dt>
                    <dd><a href="./shouye.html">马上去购物</a></dd>
                    </dl>
            </div>
        `
        container.innerHTML=str

        jiesuan.style.display='none'
    }
};
/*  end */

  /* 猜你喜欢 渲染  start */
        var dt;
        (async function(){
            var p1=await promiseAjax({
                url:'../php/cart.php',
            })
            dt=eval('('+p1+')')
        
            var str4=`
                <div class="title">
                    <span>猜你喜欢</span>
                </div>
                <div class="content">
                    <div class="row">
                        <div class="col-sm-6 col-md-4">
                          <div class="thumbnail">
                            <img src="${dt[46].goods_big_logo}" alt="...">
                            <div class="caption">
                              <h3>${dt[46].goods_name}</h3>
                              <p class="price">￥<span>${dt[46].goods_price}</span></p>
                              <p><a href="javascript:;" class="btn btn-default" role="button">加入购物车</a></p>
                            </div>
                          </div>
                        </div>
                      </div>
                </div>
            `
            guess.innerHTML=str4
        })()
    /* end */


/* 点击事件1 */
container.onclick=function(e){
    var e = e || window.event
    var target = e.target || e.srcElement

    //+
    if(target.innerHTML=='+'){
       var id2=target.getAttribute('data-id')
        cartlist.forEach(item=>{
            if(item.goods_id==id2){
                item.cart_number+=1
            }
        })
        localStorage.setItem('cartList',JSON.stringify(cartlist))
        show1()
    }

    //-
    if(target.innerHTML=='-'){
        var id3=target.getAttribute('data-id')
        cartlist.forEach(item=>{
            if(item.goods_id==id3){
                item.cart_number-=1
            }
        })
        localStorage.setItem('cartList',JSON.stringify(cartlist))
        show1()
    }

    //删除
    if(target.innerHTML=='删除'){
        
        var id4=target.getAttribute('data-id')
        cartlist2=cartlist.filter(item=>{
            return item.goods_id!=id4
        })
        //重置
        localStorage.setItem('cartList',JSON.stringify(cartlist2))
        location.reload()
    }

    //全选框
    if(target.getAttribute('name')=='quan'){
        cartlist.forEach(item=>{
            if(target.checked){
                item.is_select=1
            }else{
                item.is_select=0
            }
        })
        localStorage.setItem('cartList',JSON.stringify(cartlist))
        show1()
    }

    //选中框
    if(target.getAttribute('name')=='xuan'){
        var id1=target.getAttribute('data-id')
        cartlist.forEach(item=>{
            //是否为当前操作商品
            if(item.goods_id==id1){
                item.is_select=item.is_select?0:1
            }
        })
        localStorage.setItem('cartList',JSON.stringify(cartlist))
        show1()
    }

    if(target.innerHTML=='北京北京市朝阳区'){
        var div1=container.querySelector('.address_layer')
        div1.style.zIndex='99'
        if(div1.style.display='none'){
            div1.style.display='block'
        }else{
            div1.style.display='none'
        }
    }
}
/* end */


/* 点击事件2  start */
jiesuan.onclick=function(e){
    var e = e || window.event
    var target = e.target || e.srcElement

    //全选框
    if(target.getAttribute('name')=='quan'){
        cartlist.forEach(item=>{
            if(target.checked){
                item.is_select=1
            }else{
                item.is_select=0
            }
        })
        localStorage.setItem('cartList',JSON.stringify(cartlist))
        show1()
    }

     //结算
    var xuan=container.querySelector('[name="xuan"]')
    if(target.innerHTML=='去结算'){
        if(xuan.checked){
            if(confirm('确认支付')){
                alert('需要支付'+total1()[1])
                var cartlist3=cartlist.filter(item=>{
                    return item.is_select!=1
                })
                localStorage.setItem('cartList',JSON.stringify(cartlist3))
                location.reload()
            }
        }else{
            alert('未选中商品')
        }
    }
    
    //清空购物车
    if(target.innerHTML=='删除选中商品'){
        localStorage.removeItem('cartList')
        location.reload()
    }
}
/* end */


/* 总价格  start */
function total1(){
    var num=0//总数量
    var price=0//总价格
    cartlist.forEach(item=>{
        if(item.is_select==1){
            num+=item.cart_number
            //小计
            price+=parseInt(item.cart_number)*parseFloat(item.goods_price)
        }
    })
    return [num,price.toFixed(2)]
}
/* end */

/* 小计 */
// function sum(){
//     if(item.is_select==1){
//         price1=parseInt(item.cart_number)*parseFloat(item.goods_price)
//     }
//     return [price1.toFixed(2)]
// }
/* end */

/* end */


/* 猜你喜欢 点击事件3  start*/
guess.onclick=function(e){
    var e = e || window.event
    var target = e.target || e.srcElement

    if(target.innerHTML=='加入购物车'){
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
            /* if(a==0){
                dt.cart_number=1//修改添加的商品数量
                cartList.push(dt)
                localStorage.setItem('cartList',JSON.stringify(cartList))
            } */
        }else{
            alert('加入购物车成功！')
            dt.cart_number=1
            //在localStorage中设置一个cartList属性
            localStorage.setItem('cartList',JSON.stringify([dt]))
        }
    }
}
/* end */