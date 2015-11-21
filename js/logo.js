var logo_y0=[-70,0,180],logo_x0=[0,0,-250,30];
var objCloud1,objCloud2,objCloud3;
var meteorTimeOut=3;
objCloud1=document.getElementById('cloud1');
objCloud2=document.getElementById('cloud2');
objCloud3=document.getElementById('cloud3');
objStar1=document.getElementById('star1');
objStar2=document.getElementById('star2');
objMeteor=document.getElementById('meteor');

cloudAct1();
starAct1();
meteorAct1(meteorTimeOut);

function cloudAct1(){
	TweenMax.to(objCloud1,2,{left:logo_x0[0]+10,ease:Power0.easeNone,onComplete:cloudAct2});
	TweenMax.to(objCloud2,1.5,{left:logo_x0[1]-5,ease:Power0.easeNone});
	TweenMax.to(objCloud3,2,{left:logo_x0[2]+5,ease:Power0.easeNone});
}
function cloudAct2(){
	TweenMax.to(objCloud1,2,{left:logo_x0[0]-20,ease:Power0.easeNone,onComplete:cloudAct1});
	TweenMax.to(objCloud2,1.5,{left:logo_x0[1]+30,ease:Power0.easeNone});
	TweenMax.to(objCloud3,2,{left:logo_x0[2]-5,ease:Power0.easeNone});
}
function starAct1(){
	TweenMax.to(objStar2,1,{opacity:0.6,onComplete:starAct2});
	TweenMax.to(objStar1,1,{rotation:10});
}
function starAct2(){
	TweenMax.to(objStar2,1,{opacity:1,onComplete:starAct1});
	TweenMax.to(objStar1,1,{rotation:0});
}
function meteorAct1(delaytime){
	TweenMax.fromTo(objMeteor,0.2,{opacity:0,top:0,left:0},{opacity:1,top:200,left:-250+logo_x0[3],rotation:0,delay:delaytime,onComplete:meteorAct2});
}
function meteorAct2(){
	TweenMax.to(objMeteor,0.2,{top:400,left:-500+logo_x0[3],opacity:0,onComplete:meteorRe});
}
function meteorRe(){
	TweenMax.to(objMeteor,0,{top:0,left:0,opacity:0});
	meteorTimeOut=Math.random()*5+3;
	logo_x0[3]=Math.random()*100+50;
	meteorAct1(meteorTimeOut);
}
