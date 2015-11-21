<?php
/**
 * Created by HuangWei.
 * User: Administrator
 * Date: 2015/11/9
 * Time: 15:22
 */

class Token{
    public function cache(){
        session_start();
        define("STR_MD","23nbhjfdb#%#^A!~");
        $sql="select*from card";
        $sqli=new mysqli("localhost","root","faery.666.233","weixin");;
        $result=$sqli->query($sql);
        while($row=$result->fetch_array()){
            $token=md5($row['media_id'].$row['title'].$row['from_openid'].$row['to_openid'].STR_MD.time());
            $data=array(
                'media_id'=>"$row[media_id]",
                'token'=>"$token"
            );
            $dir=dirname(dirname(__FILE__))."/cache/";
            $filename=$row['media_id'].".php";
            $data="<?php\n  ".'$Token='.var_export($data,true)."\n?>";
            if(!is_dir($dir)) {
                mkdir($dir, 0777);
            }
            file_put_contents($dir.$filename,$data);

        }



    }


}


$show=new Token();
$show->cache();











?>