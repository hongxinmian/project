var search1=location.search//获取地址栏中参数信息
var btn1=document.querySelector('#btn_agree')//获取同意选项框
var btn2=document.querySelector('#btn_zhuce')//获取注册按钮

//同意条款注册-禁用
btn1.onclick=function(){
    if(this.checked){
        btn2.disabled=false
    }else{
        btn2.disabled=true
    }
};

//注册
btn2.onclick=function(){
    var user=document.querySelector('#user').value//获取用户名信息
    var pass=document.querySelector('#psd').value//获取密码信息
    console.log(user,pass);

    if(user&&pass){
        (async function(){
            
            var p1=await promiseAjax({
                url:'../php/zhuce.php',
                data:`username=${user}&password=${pass}`
            })
            if(p1==1){
                if(search1){
                    //获取传入的参数
                    var newUrl=search1.split('=')[1]
                    //设置cookie
                    alert('注册成功！1秒后跳转页面')
                    var dsq=setInterval(() => {
                        location.href=newUrl
                    }, 1000);
                }else{
                    //设置cookie
                    alert('注册成功！1秒后跳转页面')
                    var dsq=setInterval(() => {
                        location.href='./login.html'
                    }, 1000);
                    
                }
            }else{
                alert('注册失败！')
            }   
        })()
        return false; //阻止表单的默认提交行为
    }else{
        alert('账号或密码为空，请输入~')
    }

}

//表单验证
var userInp=document.querySelector('[name="user"]')
var passInp=document.querySelector('[name="psd"]')
var yzInp1=document.querySelector('[name="word_yz"]')//字母验证码
var yzInp2=document.querySelector('[name="num_yz"]')//数字验证码
var span=document.querySelector('.login_error').querySelector('span')

var yzInp1=false
yzInp1.onblur=function(){
    var val=this.value
    var reg=/^[a-z]{4}$/
    if(reg.test(val)){
        span.innerHTML='√'
        yzInp1=true
        span.style.color='black'
    }else{
        span.innerHTML='手机号码输入有误'
        yzInp1.focus()
        yzInp1=false
        span.style.color='red'
    }
}

var yzInp2=false
yzInp2.onblur=function(){
    var val=this.value
    var reg=/^\d{6}$/
    if(reg.test(val)){
        span.innerHTML='√'
        yzInp2=true
        span.style.color='black'
    }else{
        span.innerHTML='手机号码输入有误'
        yzInp2.focus()
        yzInp2=false
        span.style.color='red'
    }
}

var leader=document.querySelector('.leader')
leader.onclick=function(e){
    var e = e || window.event
    var target = e.target || e.srcElement
  
    if(target.innerHTML=='简体中文'){
        
        var language1=document.querySelector('.language1')  
        if(language1.style.display=='none'){
            language1.style.display='block'
        }else{
            language1.style.display='none'
        }
    }

    if(target.innerHTML=='中国'){
        
        var nation=document.querySelector('.nation')
        if(nation.style.display=='none'){
            nation.style.display='block'
        }else{
            nation.style.display='none'
        }
    }
}