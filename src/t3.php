<?php
//数据库链接文件
$host='localhost';//数据库服务器
$user='root';//数据库用户名
$password='zjlcs';//数据库密码
$database='data1';//数据库名
$conn=@mysql_connect($host,$user,$password) or die('数据库连接失败！');
@mysql_select_db($database) or die('没有找到数据库！');
mysql_query("set names 'gb2312'");
//$query="select * from photo where id='$id'";
//	$result = mysql_query($query,$conn);
//	@$row = mysql_fetch_array($result);
// echo $row['name','password'];
?>
