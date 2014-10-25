<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta http-equiv="Content-Type" content="text/html; charset=gb2312" />
<title>无标题文档</title>
</head>

<body>
<?php
	include't3.php';
	$query="INSERT INTO `user`(`name`, `password`)values('".$_POST['name']."','".$_POST['password']."')";
	$result = mysql_query($query,$conn);
	if ($result!='') echo("ok");
	else echo("error");
?>
</body>
</html>

