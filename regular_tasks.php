<?php
/**
 * Created by HuangWei.
 * User: Administrator
 * Date: 2015/10/24
 * Time: 22:39
 */
require_once("./dbconnect.php");
ignore_user_abort();//�ص��������PHP�ű�Ҳ���Լ���ִ��.
set_time_limit(0);//ͨ��set_time_limit(0)�����ó��������Ƶ�ִ����ȥ

$interval=60*5;//ÿ��5��������
do{
    $res=new dbconnect();
    $sql="select*from users";
    $row=$res->connect($sql);
    while($row){
        $res=new dbconnect();
        $sql="update users set status=''";
        $res->connect($sql);
    }

    sleep($interval);//�ȴ�5����
}while(true);

?>