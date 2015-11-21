var objXmtThink=document.getElementById('think1Obj'),
	objQmThink=document.getElementById('think2Obj'),
	objSjdtShadow=document.getElementById('sjdtShadow'),
	objSjdt=document.getElementById('sjdtObj'),
	objYan1=document.getElementById('yan1'),
	objYan2=document.getElementById('yan2'),
	objBcc1=document.getElementById('dmtHand'),
	objBcc2=document.getElementById('hdHand'),
	think1Cont=['qzone.png','weixin.png','xinlang.png'],
	think2Cont=['nn.png','qmapp.png'],
	think1Current=0,
	think2Current=0,
	bccCurr=0
	;
think1Act1();
sjdtAppAct1();
yanAct1();
bccAct1();
TweenMax.to(objQmThink,0,{delay:3,onComplete:think2Act1});
function think1Act1(){
	TweenMax.to(objXmtThink,2,{opacity:0,onComplete:think1Act2});
}
function think1Act2(){
	think1Current++;
	if(think1Current==think1Cont.length){think1Current=0}
	objXmtThink.style.backgroundImage="url('./images/"+think1Cont[think1Current]+"')";
	TweenMax.to(objXmtThink,2,{opacity:1,onComplete:think1Act1});
}
function think2Act1(){
	TweenMax.to(objQmThink,2,{opacity:0,onComplete:think2Act2});
}
function think2Act2(){
	think2Current++;
	if(think2Current==think2Cont.length){think2Current=0}
	objQmThink.style.backgroundImage="url('./images/"+think2Cont[think2Current]+"')";
	TweenMax.to(objQmThink,2,{opacity:1,onComplete:think2Act1});
}
function sjdtAppAct1(){
	TweenMax.to(objSjdt,2,{top:-10,onComplete:sjdtAppAct2});
	TweenMax.to(objSjdtShadow,2,{scale:0.8});
}
function sjdtAppAct2(){
	TweenMax.to(objSjdt,2,{top:0,onComplete:sjdtAppAct1});
	TweenMax.to(objSjdtShadow,2,{scale:1});
}
function yanAct1(){
	TweenMax.to(objYan2,0,{top:0,scale:0.5});
	TweenMax.to(objYan1,0,{opacity:1});
	TweenMax.to(objYan1,2,{top:-30,opacity:0,scale:1,onComplete:yanAct2});
}
function yanAct2(){
	TweenMax.to(objYan1,0,{top:0,scale:0.5});
	TweenMax.to(objYan2,0,{opacity:1});
	TweenMax.to(objYan2,2,{top:-30,opacity:0,scale:1,onComplete:yanAct1});
}
function bccAct1(){
	bccCurr++;
	if(bccCurr<3){
		TweenMax.to(objBcc1,0.3,{rotation:-30,transformOrigin:"16px 16px",ease:Power0.easeNone,onComplete:bccAct2});
		TweenMax.to(objBcc2,0.3,{rotation:30,transformOrigin:"50px 15px",ease:Power0.easeNone});
	}
	else{
		TweenMax.to(objBcc1,0.1,{rotation:0,transformOrigin:"16px 16px",ease:Power0.easeNone});
		TweenMax.to(objBcc2,0.1,{rotation:0,transformOrigin:"50px 15px",ease:Power0.easeNone});
		TweenMax.to(objBcc1,0,{delay:1,onComplete:bccAct3});
	}
}
function bccAct2(){
	TweenMax.to(objBcc1,0.3,{rotation:0,transformOrigin:"16px 16px",ease:Power0.easeNone,onComplete:bccAct1});
	TweenMax.to(objBcc2,0.3,{rotation:0,transformOrigin:"50px 15px",ease:Power0.easeNone});
	
}
function bccAct3(){
	bccCurr=0;
	bccAct1();
	
}
/////////////////////////////////////
var objPlane=document.getElementById("cpPlane"),
	objCpHand=document.getElementById("cpHand"),
	objCpHandShadow=document.getElementById("cpHandShadow")
	;
var currentActionFlyPlane=0;
var rotation=[-8,-5,0,6,13,15,18,20,25,90,110,100,70],
	x=[100,200,300,400,500,600,700,800,830,830,810,800,780],
	y=[-30,-40,-45,-40,-35,-30,-20,-10,0,10,80,180,260],
	time=[0.25,0.28,0.25,0.25,0.25,0.23,0.20,0.15,0.08,0.05,0.11,0.2,0.3];
reFly();
function reFly(){
	TweenMax.fromTo(objCpHand,0.5,{rotation:-50,transformOrigin:"25px 75px"},{rotation:10,transformOrigin:"25px 75px",ease:Power0.easeNone});
	TweenMax.fromTo(objCpHandShadow,0.5,{rotation:-50,transformOrigin:"20px 80px"},{rotation:10,transformOrigin:"20px 80px",ease:Power0.easeNone});
	TweenMax.fromTo(objPlane,0.5,{left:-30,top:-10},{left:20,top:0,ease:Power0.easeNone,onComplete:startFly});
}
function startFly(){

	currentActionFlyPlane=0;
	TweenMax.to(objPlane,time[currentActionFlyPlane],{left:x[currentActionFlyPlane],top:y[currentActionFlyPlane],ease:Power0.easeNone,rotation:rotation[currentActionFlyPlane],onComplete:nextFly});
	currentActionFlyPlane++;
}
function nextFly(){
	if(currentActionFlyPlane<x.length){
		TweenMax.to(objPlane,time[currentActionFlyPlane],{left:x[currentActionFlyPlane],top:y[currentActionFlyPlane],ease:Power0.easeNone,rotation:rotation[currentActionFlyPlane],onComplete:nextFly});
	}
	else{
		TweenMax.to(objPlane,time[currentActionFlyPlane],{left:x[currentActionFlyPlane],top:y[currentActionFlyPlane],ease:Bounce.easeOut,rotation:rotation[currentActionFlyPlane]});
		TweenMax.to(objPlane,0,{opacity:0});
		currentActionFlyPlane=0;
		TweenMax.to(objPlane,0,{left:0,top:0,ease:Power0.easeNone,rotation:0,opacity:1});
		reFly();
		TweenMax.to(objPlane,0,{delay:1.0,onComplete:reFace});
	}
	if(currentActionFlyPlane==9){
		$("#txsFace").css({'backgroundImage':'url(./images/faceFuck.png)'});
	}
	currentActionFlyPlane++;
}
function reFace(){
	$("#txsFace").css({'backgroundImage':'url(./images/face.png)'});
}

//alert(11)
//////////////////////////////////////
//var obj=document.getElementById('hand');
handOut();
function handOut(){
	TweenMax.to(document.getElementById('shadow'),1,{rotation:10,transformOrigin:"8px 20px"});
	TweenMax.to(document.getElementById('hand'),1,{rotation:10,transformOrigin:"2px 10px",onComplete:handBack});
	TweenMax.to(document.getElementById('pen'),1,{rotation:-20,transformOrigin:"10px 35px"});
}
function handBack(){
	TweenMax.to(document.getElementById('shadow'),1,{rotation:-10,transformOrigin:"8px 20px"});
	TweenMax.to(document.getElementById('hand'),1,{rotation:-10,transformOrigin:"2px 10px",onComplete:handOut});
	TweenMax.to(document.getElementById('pen'),1,{rotation:5,transformOrigin:"10px 35px"});
}