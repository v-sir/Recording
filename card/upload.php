<?php
header("Access-Control-Allow-Origin:*");
header("Content-Type:application/json; charset=utf-8");
require_once("../lib/response.php");
require_once("../lib/dbconnect.php");
class upload{
    public function action(){
        $action=$_GET['action'];
        if($action=="upload"){
            $this->upload();

        }
        else if($action=="add_data"){
            $this->add_data();

        }

        else if($action=="upload_file"){
            $this->upload_file();

        }

    }
    public function upload(){
        $dir=dirname(dirname(__FILE__))."/recordings/";
        if(!is_dir($dir)){
             mkdir($dir,0777);
        }
        // pull the raw binary data from the POST array
        $data = substr(@$_POST['data'], strpos(@$_POST['data'], ",") + 1);
        // decode it
        $decodedData = base64_decode($data);
        // print out the raw data,
        //echo ($decodedData);
        $filename = time().'.mp3';
        // write the data out to the file
        $fp = fopen($dir.$filename, 'wb');
        fwrite($fp, $decodedData);
        fclose($fp);


    }
    public function add_data(){
        session_start();
        $infoarr=@$_SESSION['user'];
        if($infoarr['openid']==""){
            $type=@$_GET['ask_method'];
            $code=-1;
            $msg="error:You have to use wechat app to open! ";
            $data="null";
            api_response::api_method($type,$code,$msg,$data);
        }
        else{
            $create_at=date('Y-m-d H:i:s');
            $time=time();
            $result=new dbconnect();
            $sql="insert into card(title,content,create_at,from_openid,From_nickname,To_nickname,last_login)
            values('$_POST[title]','$_POST[content]','$create_at','$infoarr[openid]','$infoarr[nickname]','$_POST[to]','$time')";
            $result->connect($sql);
            $this->show_info();

        }



    }
    public function upload_file(){
        if(isset($_FILES['upfile']))
        {
            $upfile=$_FILES["upfile"];
            $name=$upfile["name"];
            $media_type=$upfile["type"];
            $tmp_name=$upfile["tmp_name"];
            switch ($media_type){
                case 'audio/wav':$okType=true;
                    break;
                case 'audio/mpeg':$okType=true;
                    break;

            }
            $type=@$_GET['ask_method'];
            if($okType){

                $error=$upfile["error"];
                $dir=dirname(dirname(__FILE__))."/recordings/";
                if(!is_dir($dir)){
                    mkdir($dir,0777);
                }
                move_uploaded_file($tmp_name,$dir.$name);
                if($error==0){
                    $code=0;
                    $msg="success!";
                    $data=array(
                        'media_id'=>''
                    );
                    api_response::api_method($type,$code,$msg,$data);


                }elseif ($error==1){
                    $code=-1;
                    $msg="error:Exceeded the file size, set in the php.ini file!";
                    $data="null";
                    api_response::api_method($type,$code,$msg,$data);

                }elseif ($error==2){
                    $code=-1;
                    $msg="error:Exceeds the specified value of the options file size MAX_FILE_SIZE!";
                    $data="null";
                    api_response::api_method($type,$code,$msg,$data);
                }elseif ($error==3){
                    $code=-1;
                    $msg="fail:File was only partially uploaded!";
                    $data="null";
                    api_response::api_method($type,$code,$msg,$data);
                }elseif ($error==4){
                    $code=-1;
                    $msg="error:Empty file upload!";
                    $data="null";
                    api_response::api_method($type,$code,$msg,$data);
                }
            }
            else{
                $code=-1;
                $msg="error:Invalid file type!";
                $data="null";
                api_response::api_method($type,$code,$msg,$data);
            }



        }


    }
    public function show_info(){
        $type=@$_GET['ask_method'];
        $sql="select*from card where openid='$infoarr[openid]'";
        $result=new dbconnect();
        $row=$result->connect($sql);
        if($row){
            $code=0;
            $msg="success!";
            $data=array(
                'media_id'=>"$row[media_id]"

            );
            api_response::api_method($type,$code,$msg,$data);

        }
        else{
            $code=-1;
            $msg="error:The info not exist!";
            $data="null";
            api_response::api_method($type,$code,$msg,$data);
        }

    }
}
$show=new upload();
$show->action();
?>