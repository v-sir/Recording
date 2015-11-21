<?php
/**
 * Created by HuangWei.
 * User: Administrator
 * Date: 2015/10/19
 * Time: 15:35
 */
require_once("../config/dbconfig.php");
class dbconnect {

   // private static $instance;
   // private static $connectSource;
    private $dbConfig=array(
            'host'=>HOST,
            'username'=>UserName,
            'password'=>PassWord,
            'database'=>DataBase
    );

    /**
     * @return dbconnect
     */
 //   public static function getInstance(){
   //     if(!(self::$instance instanceof self)){
    //        self::$instance=new self ();
    //    }

       //     return self::$instance;
   // }

    /**
     * @param $sql
     * @return mixed
     */
    public function connect($sql){
      //  if(!self::$connectSource) {
            $conn = new mysqli($this->dbConfig['host'], $this->dbConfig['username'], $this->dbConfig['password'],
                $this->dbConfig['database']);
          //  self::$connectSource = $conn;

            $conn->query("set names UTF8");
            $result=$conn->query($sql);
            if(substr_count($sql, 'select')){
                $row=$result->fetch_array();
                return $row;
            }

            else{
                return $result;
            }

       // }
       // return self::$connectSource;




    }

}















?>