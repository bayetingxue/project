<?php
header("Content-type:text/html;charset=utf-8");
$name=$_POST["username"];
$conn=mysql_connect("localhost","root","root");
if($conn){
	mysql_select_db("2004");
	$result=mysql_query("select * from student where goldName='$name'",$conn);
	if(mysql_num_rows($result)==1){
		echo "1";
	}else if(mysql_num_rows($result)==0){
		mysql_query("insert into student values('$name')",$conn);
		echo "0";
	}
}
mysql_close($conn);
?>