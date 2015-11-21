<?php
/**
 * Created by HuangWei.
 * User: Administrator
 * Date: 2015/10/27
 * Time: 22:04
 */
require_once("./Snoopy.class.php");
class reptile{
    public function get_info(){
        $query_url="http://www.xtu.edu.cn/intro/brief/";
        $snoopy=new snoopy();
        $snoopy->fetch($query_url);
        //$data=iconv('gbk','utf-8',$snoopy->results);
        $data=$snoopy->results;

        return $data;

    }
    public function data_processing(){


        $preg='/<p align="left">[\n].+?<P>.+/';
        preg_match($preg,$this->get_info(),$data);
        print_r($data);


    }

}

$show=new reptile();
$show->data_processing();

?>