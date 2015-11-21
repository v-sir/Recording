<?php
/**
 * Created by HuangWei.
 * User: Administrator
 * Date: 2015/10/25
 * Time: 13:30
 */
class status{
    public function login_info($UserName,$status,$appID){
        $ip=$_SERVER["REMOTE_ADDR"];
        $login_time=date("H:i:s");   ;
        $info=array(
            'UserName'=>"$UserName",
            'login_ip'=>"$ip",
            'login_time'=>"$login_time",
            'appID'=> "$appID",
            'status'=>"$status"
        );
        $info=json_encode($info);
        $this->cache($UserName,$info,$appID);
    }
    public function logout_info($UserName,$status,$appID){
        $ip=$_SERVER["REMOTE_ADDR"];
        $logout_time=date("H:i:s");   ;
        $info=array(
            'UserName'=>"$UserName",
            'login_ip'=>"$ip",
            'logout_time'=>"$logout_time",
            'appID'=> "$appID",
            'status'=>"$status"
        );
        $info=json_encode($info);
        $this->cache($UserName,$info,$appID);
    }
    public function cache($UserName,$info,$appID){
        $date=date("Ymd");
        $filename=$date.".ini";
        $filename2="temp.ini";
        $dir1=dirname(dirname(__FILE__))."/login_status/".$UserName."/";
       if(!is_dir($dir1)){
           mkdir($dir1,0777);
       }
       else{
           $dir=dirname(dirname(__FILE__))."/login_status/".$UserName."/".$appID."/";
           $dir2=dirname(dirname(__FILE__))."/login_status/".$UserName."/".$appID."/".$date."/";
           if(!is_dir($dir)){
               mkdir($dir,0777);

           }
           else{
               file_put_contents($dir.$filename2,$info);
               if(!is_dir($dir2)){
                   mkdir($dir2,0777);

               }
               else{
                   $data=file_get_contents($dir2.$filename);
                   $info=$data.$info;
                   file_put_contents($dir2.$filename,$info);
               }
           }
       }



    }
   // public function clear_cache(){

   ///     unlink()

  //  }



}

?>