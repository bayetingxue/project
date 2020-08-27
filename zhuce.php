<?php
header("Content-type:text/html;charset=utf-8");
$name=$_POST["username"];
//创建链接对象
$conn=mysql_connect("localhost","root","root");
if($conn){
    mysql_select_db("2005");    
    //查
    $resault=mysql_query("select * from userrform where stuname='$name'",$conn);
    if(mysql_num_rows($resault)==1){
		echo "1";
	}else if(mysql_num_rows($resault)==0){
		mysql_query("insert into userrform values('$name')",$conn);
		echo "0";
        }

  }
mysql_close($conn);



?>