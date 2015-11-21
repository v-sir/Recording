<?php
/**
 * Created by HuangWei.
 * User: Administrator
 * Date: 2015/10/24
 * Time: 17:12
 */
header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json; charset=utf-8");
require_once('./dbconnect.php');
require_once('./response.php');
class status{
    public function get_status(){
        $UserID=$_POST['UserID'];
        $status=$_POST['status'];
        $type=$_GET['ask_method'];
        $res=new dbconnect();
        $sql="select* from users where UserName='$UserID'";
        $row=$res->connect($sql);
        if($UserID=="" || $status==""){
            $code="409";
            $msg="error:UserID or status can not be empty!";
            $data="null";
            $result=api_response::api_method($type,$code,$msg,$data);
            return $result;

        }
        else{

            if($row['status']==$status && $status!=""){
                $code="200";
                $msg="success!";
                $data=array(
                    'id'=>"$row[id]",
                    'UserID'=>"$row[UserName]",
                    'openid'=>"$row[openid]",
                    'nickname'=>"$row[nickname]",
                    'headimgurl'=>"$row[headimgurl]",
                    'sex'=>"$row[sex]",
                    'mobile'=>"$row[mobile]"
                );
                $result=api_response::api_method($type,$code,$msg,$data);
            }
            else{
                $code="406";
                $msg="error:Failure login status!";
                $data="null";
                $result=api_response::api_method($type,$code,$msg,$data);
            }

            return $result;
        }
        }

}

$show=new status();
$show->get_status();

?>