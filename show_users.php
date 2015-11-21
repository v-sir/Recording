<?php
/**
 * Created by HuangWei.
 * User: Administrator
 * Date: 2015/10/21
 * Time: 20:14
 */
//header("Access-Control-Allow-Methods:*");
header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json; charset=utf-8");
require_once("./response.php");
require_once("./dbconnect.php");
class show_users{
    public $data;

    /**
     * @param $mobile
     * @return array
     */
    public function get_users($mobile){
        $sql="select*from users where mobile='$mobile'";
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
        return $data;
    }

    /**
     * @return string
     */

    public function show(){
        $type=$_GET['ask_method'];
        $mobile=$_GET['mobile'];
        $data = $this->get_users($mobile);
        if($mobile!=""){
            if($data['id']!=""){
                $code = "200";
                $msg = "success";
                $show = api_response::api_method($type, $code, $msg, $data);
            }
            else{
                $code="402";
                $msg="error:Can not find the record!";
                $data="null";
                $show=api_response::api_method($type,$code,$msg,$data);
            }

        }
        else{
            $code="401";
            $msg="error:Invalid moblie value!";
            $data="null";
            $show=api_response::api_method($type,$code,$msg,$data);

        }


        return $show;
    }
}

$show=new show_users();
$show->show();


?>






