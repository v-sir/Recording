<?php
/**
 * Created by HuangWei.
 * User: Administrator
 * Date: 2015/11/5
 * Time: 23:02
 */
header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json; charset=utf-8");
session_start();
require_once("../lib/dbconnect.php");
require_once("../lib/response.php");
class card_info{
    public function show_send(){
        $infoarr=@$_SESSION['user'];
        $type=@$_GET['ask_method'];
        $sql="select*from card  where from_openid='$infoarr[openid]'";
        $result=new dbconnect();
        $row=$result->connect($sql);
        if(empty($row)){
            $code=-1;
            $msg="error:The info not exist! ";
            $data="null";
            $result=api_response::api_method($type,$code,$msg,$data);

        }
        else{
                 while($row=$result->connect($sql)) {
                     $data = array(
                        'media_id' => "$row[media_id]",
                        'title' => "$row[title]",
                        'content' => "$row[content]",
                        'create_at' => "$row[create_at]",
                        'From_nickname' => "$row[From_nickname]",
                        'To_nickname' => "$row[To_nickname]",
                         'code_url'=>"http://weixin.faeries-land.com/test/card.html?ask_method=json&media_id=$row[media_id]"

                    );
                     $code=0;
                     $msg="success!";
                     $result=api_response::api_method($type,$code,$msg,$data);
                 }


        }
        return $result;

    }
    public function show_receive(){
        $infoarr=@$_SESSION['user'];
        $type=@$_GET['ask_method'];
        $sql="select*from card  where to_openid='$infoarr[openid]'";
        $result=new dbconnect();
        $row=$result->connect($sql);
        if(empty($row)){
            $code=-1;
            $msg="error:The info not exist! ";
            $data="null";
            $result=api_response::api_method($type,$code,$msg,$data);
        }
        else{
            while($row=$result->connect($sql)) {
                $data=array(
                    'media_id'=>"$row[media_id]",
                    'title'=>"$row[title]",
                    'content'=>"$row[content]",
                    'create_at'=>"$row[create_at]",
                    'From_nickname'=>"$row[From_nickname]",
                    'To_nickname'=>"$row[To_nickname]",
                    'code_url'=>"http://weixin.faeries-land.com/card/ask_cardinfo.php?media_id=$row[media_id]"

                );
                $code=0;
                $msg="success!";
                $result=api_response::api_method($type,$code,$msg,$data);
            }
        }

        return $result;
    }
}
$show=new card_info();
$show->show_send();
$show->show_receive();

?>
