<?php
header("content-type:text/html;charset=utf-8");

$u=$_GET['username'];
$p=$_GET['password'];


$link=mysqli_connect('localhost','root','','abc');//连接数据库

mysqli_set_charset($link,"utf8");//设置编码

$sql="insert into bb(name,pass) values('$u','$p')";//执行SQL语句

if(mysqli_query($link,$sql)){
    echo 1;
}else{
    echo 0;
}



?>