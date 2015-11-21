<?php
/**
 * Created by HuangWei.
 * User: Administrator
 * Date: 2015/11/13
 * Time: 18:55
 */
        $APPID='wxbbdc520f5dd733ac';
        $REDIRECT_URI='http://weixin.faeries-land.com/card/back.php';
        //$scope='snsapi_base';
        $scope='snsapi_userinfo';
        $url='https://open.weixin.qq.com/connect/oauth2/authorize?appid='.$APPID.'&redirect_uri='.urlencode($REDIRECT_URI).'&response_type=code&scope='.$scope.'&state='.$state.'#wechat_redirect';
        header("Location:".$url);


?>