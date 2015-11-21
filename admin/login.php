<?php
/**
 * Created by HuangWei.
 * User: Administrator
 * Date: 2015/10/22
 * Time: 16:17
 */

header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json; charset=utf-8");
require_once("../lib/response.php");
require_once("../lib/dbconnect.php");
require_once("../lib/set_status.php");
class login{

    public function get_LoginStatus(){
      //  $status=$_COOKIE['status'];
       // $sql="select*from users where status='$status'";
       // $row=new dbconnect();
      //  $row=$row->connect($sql);

       // echo $status;
       // print_r($row);
       // if($status!=$row['status']||$status==""){
         //   $code="406";
         //   $msg="error:Failure login status!";
          //  $data="null";
          //  $result=api_response::api_method($type,$code,$msg,$data);

       // }
       // else{
            $result=login::get_info();

       // }
        return $result;
    }

    public static function get_info(){
        $UserName=$_POST['UserName'];
        $PassWord=$_POST['PassWord'];
        $appID=$_GET['appID'];
        $type=$_GET['ask_method'];
        if($UserName==""|| $PassWord==""){
            $code="409";
            $msg="error:UserName or password can not be empty!";
            $data="null";
            $result=api_response::api_method($type,$code,$msg,$data);
            return $result;
        }
        else{

            $sql="select*from users where UserName='$UserName'";
            $row=new dbconnect();
            $row=$row->connect($sql);
            if(empty($row)){
                $code="404";
                $msg="error:The user does not exist!";
                $data="null";
                $result=api_response::api_method($type,$code,$msg,$data);
            }
            else{

                $sql="select*from users where UserName='$UserName'&& PassWord='$PassWord' ";
                //$row=dbconnect::getInstance()->connect($sql);
                $row=new dbconnect();
                $row=$row->connect($sql);
                $data=array(
                    'id'=>"$row[id]",
                    'UserID'=>"$row[UserName]",
                    'openid'=>"$row[openid]",
                    'nickname'=>"$row[nickname]",
                    'headimgurl'=>"$row[headimgurl]",
                    'sex'=>"$row[sex]",
                    'mobile'=>"$row[mobile]"
                );
                if(empty($row)){
                    $code="403";
                    $msg="error:Incorrect password!";
                    $data="null";
                    $result=api_response::api_method($type,$code,$msg,$data);
                }
                else{
                    $code="200";
                    $msg="success!";
                    define("STR_MD","23nbhjfdb#%#^A!~");
                    $status=md5($row['UserName'].$row['PassWord'].STR_MD.time());
                    $UserName=$row['UserName'];
                    $result=new status();
                    $result->login_info($UserName,$status,$appID);
                    $result=api_response::api_method($type,$code,$msg,$data);

                }

            }
            return $result;
        }





    }

}



$show=new login();
$show->get_LoginStatus();
//$show=login::get_info();









?>