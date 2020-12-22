var content=document.querySelector('.content').querySelector('.img_info')
console.log(content)

/* var boxImg=box.querySelector('img')
var content=document.querySelector('.content')
console.log(content)
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
   rightImg.style.left=-2*tempX+'px'
   rightImg.style.top=-2*tempY+'px'

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
} */