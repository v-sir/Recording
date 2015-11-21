<?php
/**
 * Created by HuangWei.
 * User: Administrator
 * Date: 2015/10/21
 * Time: 19:48
 */
$post=json_encode(
 array(
    'UserName' => 'roo',
    'PassWord'=>'13087211367'

     )
);

header("Content-type: text/html; charset=utf-8");
$url ="http://api.faeries-land.com/login.php?ask_method=json";
$ch = curl_init();//新建curl
curl_setopt($ch, CURLOPT_URL, $url);//url
curl_setopt($ch, CURLOPT_POST, 1);  //post
curl_setopt($ch, CURLOPT_POSTFIELDS, $post);//post内容
curl_setopt($ch, CURLOPT_RETURNTRANSFER,0);
curl_exec($ch); //输出
curl_close($ch);



?>

