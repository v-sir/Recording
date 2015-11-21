<?php
/**
 * Created by HuangWei.
 * User: Administrator
 * Date: 2015/10/24
 * Time: 22:39
 */
require_once("./dbconnect.php");
ignore_user_abort();//关掉浏览器，PHP脚本也可以继续执行.
set_time_limit(0);//通过set_time_limit(0)可以让程序无限制的执行下去

$interval=60*5;//每隔5分钟运行
do{
    $res=new dbconnect();
    $sql="select*from users";
    $row=$res->connect($sql);
    while($row){
        $res=new dbconnect();
        $sql="update users set status=''";
        $res->connect($sql);
    }

    sleep($interval);//等待5分钟
}while(true);

?>