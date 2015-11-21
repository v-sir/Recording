<?php
/**
 * Created by HuangWei.
 * User: Administrator
 * Date: 2015/11/5
 * Time: 22:59
 */
header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json; charset=utf-8");
require_once("../lib/dbconnect.php");
require_once("../lib/response.php");
require_once("../lib/code.php");
class check{
    public function permission(){
        session_start();
        $infoarr=@$_SESSION['user'];
        $media_id=@$_GET['media_id'];
        $type=@$_GET['ask_method'];
        $sql="select*from card where media_id='$media_id'";
        $result=new dbconnect();
        $row=$result->connect($sql);
        if($infoarr['openid']!=""){
            if($row['from_openid']==$infoarr['openid'] || $row['to_openid']==$infoarr['openid']){
                if($media_id==""){
                    $url="http://weixin.faeries-land.com/test/player.html?ask_method=json&media_id=$media_id&Token=";

                }
                else{
                    include "../cache/".$media_id.".php";
                    $Token=$Token['token'];
                    $url="http://weixin.faeries-land.com/test/player.html?ask_method=json&media_id=$media_id&Token=$Token&ask_method=json";
                }


            }
            else{
                $url="http://weixin.faeries-land.com/test/player.html?ask_method=json&media_id=$media_id&Token=";

            }

            $code=new code();
            $code->code_make($url,$media_id);
            $this->show($row,$type);
        }
        else{
            $code=-1;
            $msg="error:You have to use wechat app to open! ";
            $data="null";
            api_response::api_method($type,$code,$msg,$data);
        }


    }
    public function show($row,$type){
        $data = array(
            'media_id' => "$row[media_id]",
            'title' => "$row[title]",
            'content' => "$row[content]",
            'create_at' => "$row[create_at]",
            'From_nickname' => "$row[From_nickname]",
            'To_nickname' => "$row[To_nickname]",
            'code_url' => "http://weixin.faeries-land.com/code_img/".$row['media_id'].".png"

        );
        if(empty($row)){
            $code=-1;
            $msg="error:The info not exist! ";
            $data="null";
            $result=api_response::api_method($type,$code,$msg,$data);
        }
        else{
            $code=0;
            $msg="success!";
            $result=api_response::api_method($type,$code,$msg,$data);
        }
        return $result;
    }

}
$show=new check();
$show->permission();


?>