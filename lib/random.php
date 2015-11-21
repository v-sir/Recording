<?php
/**
 * Created by HuangWei.
 * User: Administrator
 * Date: 2015/10/26
 * Time: 15:39
 */
require_once("./dbconnect.php");
require_once("./response.php");

class random{
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
        $this->fight($row);
    }
    public function fight($row){
        $stamina1=100;
        $stamina2=100;
        $killed1=0;
        //$killed2=;
        if($killed1==0){
            if(substr_count($row['magic'],"变成")){
                $killed2=-2;
                $stamina2=$stamina2+$killed2;
            }
            else{
                $killed2=-1;
                $stamina2=$stamina2+$killed2;
            }
             if(substr_count($row['magic'],"拉粑粑能量")||
                 substr_count($row['magic'],"怀孕术")||
             substr_count($row['magic'],"治疗魔法")){
                 $killed2=1;
                 $stamina2=$stamina2+$killed2;
            }
             else{
                 $killed2=0;
                 $stamina2=$stamina2+$killed2;
             }

            return $stamina2;
        }
      //  else if($killed2==0){
         //   if(substr_count($row['magic'],"变成")){
          //      $killed1=-2;
           //     $stamina1=$stamina1+$killed1;
         //   }
         //   else{
          //      $killed1=-1;
          //      $stamina1=$stamina1+$killed1;
           // }
         ///  if(substr_count($row['magic'],"拉粑粑能量")||
            //    substr_count($row['magic'],"怀孕术")||
           //     substr_count($row['magic'],"治疗魔法")){
           //     $killed1=1;
           //     $stamina1=$stamina1+$killed1;
         //   }
          //  else{
          //      $killed1=0;
           //     $stamina1=$stamina1+$killed1;
          //  }

         //   return $stamina1;

       // }


    }
}


?>