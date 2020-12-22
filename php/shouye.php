<?php
header('content-type:text/html;charset:utf-8');

$link=mysqli_connect('localhost','root','','abc');
mysqli_set_charset($link,'utf8');

$sql="select * from goods";

$result=mysqli_query($link,$sql);

$ar1=[];//创建数组存储所有数据

//遍历结结果集中所有数据
while($row=mysqli_fetch_assoc($result)){
    array_push($ar1,$row);
}
echo json_encode($ar1);


?>