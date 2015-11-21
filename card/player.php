<?php
/**
 * Created by HuangWei.
 * User: Administrator
 * Date: 2015/11/5
 * Time: 23:00
 */
header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json; charset=utf-8");
require_once("../lib/response.php");
class player{
    public function permission(){
        session_start();
        $infoarr=@$_SESSION['user'];
        $media_id=@$_GET['media_id'];
        $Token1=@$_GET['Token'];
        $type=@$_GET['ask_method'];
        if($infoarr['openid']!=""){
            if($media_id==""){
                $Token2="";


            }
            else{

                include "../cache/".$media_id.".php";


                   $Token2=$Token['token'];

            }
            if($Token1==$Token2 && $Token1!="" && $Token2!=""){
                $media_url="http://weixin.faeries-land.com/uploadfile/".$media_id.".mp3";
                $data=array(
                    'media_id'=>"$media_id",
                    'media_url'=>$media_url
                );
                $code=0;
                $msg="success!";
                api_response::api_method($type,$code,$msg,$data);
            }
            else{
                $code=-1;
                $msg="error:permission denied!";
                $data="null";
                api_response::api_method($type,$code,$msg,$data);

            }



        }
        else{
            $code=-1;
            $msg="error:You have to use wechat app to open! ";
            $data="null";
            api_response::api_method($type,$code,$msg,$data);
        }

    }




}
$show=new player();
$show->permission();
?>
