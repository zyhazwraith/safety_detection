<?php
//���ݿ������ļ�
$host='localhost';//���ݿ������
$user='root';//���ݿ��û���
$password='zjlcs';//���ݿ�����
$database='data1';//���ݿ���
$conn=@mysql_connect($host,$user,$password) or die('���ݿ�����ʧ�ܣ�');
@mysql_select_db($database) or die('û���ҵ����ݿ⣡');
mysql_query("set names 'gb2312'");
//$query="select * from photo where id='$id'";
//	$result = mysql_query($query,$conn);
//	@$row = mysql_fetch_array($result);
// echo $row['name','password'];
?>
