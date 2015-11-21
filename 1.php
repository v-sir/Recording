<?php
/**
 * Created by HuangWei.
 * User: Administrator
 * Date: 2015/10/23
 * Time: 20:57
 */
class game_info{
    public $nickname;
    public $scores;
    public $physical;
    public $killed;
    public function __construct($nickname,$scores,$physical,$killed){
        $this->nickname=$nickname;
        $this->scores=$scores;
        $this->physical=$physical;
        $this->killed=$killed;
    }
    public function random_mf($nickname){
        $str=md5($nickname.time());
        $str=substr($str,0,4);
        if(preg_match('/\d+/',$str)){
            $num=mt_rand(1,18);
        }
        else{
            $num=mt_rand(6,26);
        }
        $sql="select*from game where id=$num";
        $row=new dbconnect();
        $row=$row->connect($sql);
        $data=array(
            'magic'=>"$row[magic]",
            'img_url'=>"$row[img_url]"
        );

    }
    public function fight($nickname,$scores,$physical,$killed){
        $physical=$physical+$killed;

    }
    public function is_over(){

    }

}
?>