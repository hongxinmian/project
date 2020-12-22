var search1=location.search//获取地址栏中参数信息
console.log(search1.split('=')[1])

var btn=document.querySelector('#btn')//获取登录按钮

btn.onclick=function(){
    var user=document.querySelector('#user').value
    var pass=document.querySelector('#pass').value
    console.log(user,pass);

    if(user||pass){
        (async function(){
            
            var p1=await promiseAjax({
                url:'../php/login.php',
                data:`username=${user}&password=${pass}`
            })
            if(p1==1){
                if(search1){
                    //获取传入的参数
                    var newUrl=search1.split('=')[1]
                    //设置cookie
                    setCookie('name',user);
                    location.href=newUrl
                }else{
                    //设置cookie
                    setCookie('name',user);
                    location.href='./shouye.html'
                }
            }else{
                alert('账号或密码有误')
            }   
        })()
        return false; //阻止表单的默认提交行为
    }else{
        alert('请输入账号或密码')
    }
};

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