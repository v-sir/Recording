var objDepartmentEye=document.getElementById('box1_1'),
	objDepartment2_1=document.getElementById('box2_1'),
	objDepartment2_2=document.getElementById('box2_2'),
	objDepartment3_1=document.getElementById('box3_1'),
	objDepartment3_2=document.getElementById('box3_2')
	;
departmentEyeAct1();
department2Act1();
department3Act1();
function departmentEyeAct1(){
	TweenMax.to(objDepartmentEye,0.2,{height:0,y:4,onComplete:departmentEyeAct2});
}
function departmentEyeAct2(){
	TweenMax.to(objDepartmentEye,0.2,{height:8,y:0});
	TweenMax.to(objDepartmentEye,0,{delay:3,onComplete:departmentEyeAct1});
}
function department2Act1(){
	TweenMax.to(objDepartment2_1,1,{x:5,onComplete:department2Act2,delay:1});
	TweenMax.to(objDepartment2_2,1,{x:0,delay:2});
}
function department2Act2(){
	TweenMax.to(objDepartment2_1,1,{x:-5,onComplete:department2Act1,delay:1});
	TweenMax.to(objDepartment2_2,1,{x:10,delay:2});
	//TweenMax.to(objDepartmentEye,0.2,{height:8,y:0});
	//TweenMax.to(objDepartmentEye,0,{delay:3,onComplete:departmentEyeAct1});
}
function department3Act1(){
	TweenMax.to(objDepartment3_1,1,{opacity:1,onComplete:department3Act2,delay:1});
	TweenMax.to(objDepartment3_2,1,{opacity:1,delay:2});
}
function department3Act2(){
	TweenMax.to(objDepartment3_1,1,{opacity:0,onComplete:department3Act1,delay:1});
	TweenMax.to(objDepartment3_2,1,{opacity:0,delay:2});
	//TweenMax.to(objDepartmentEye,0.2,{height:8,y:0});
	//TweenMax.to(objDepartmentEye,0,{delay:3,onComplete:departmentEyeAct1});
}
///////////////////////////////////////////////////////////////////////////////////////
var chick_y0=200,chick_x0=0;
var obj1,obj2;
obj1=document.getElementById('chick_c');
obj2=document.getElementById('joinus');
chickUp();
chickOut();
joinUsLeft();
function chickOut(){
	TweenMax.to(obj1,0.8,{left:40,ease:Power3.easeNone,onComplete:chickBack});
}
function chickBack(){
	TweenMax.to(obj1,0.8,{left:-40,ease:Power3.easeNone,onComplete:chickOut});
}
function chickUp(){
	TweenMax.to(obj1,0.2,{top:chick_y0+20,ease:Power3.easeNone,onComplete:chickDown});
	
}
function chickDown(){
	TweenMax.to(obj1,0.2,{top:chick_y0-40,ease:Power3.easeNone,onComplete:chickUp});
}
function joinUsRight(){
	TweenMax.to(obj2,0.8,{rotation:-40,transformOrigin:"70px 4px",ease:Power3.easeNone,onComplete:joinUsLeft});
}
function joinUsLeft(){
	TweenMax.to(obj2,0.8,{rotation:40,transformOrigin:"70px 4px",ease:Power3.easeNone,onComplete:joinUsRight});
}
///////////////////////////////////////////////////////////////////////////////////////
var litleCrazy=[
	'./images/xiaoren/bj.png',
	'./images/xiaoren/dmt.png',
	'./images/xiaoren/hd.png',
	'./images/xiaoren/js.png',
	'./images/xiaoren/qh.png',
	'./images/xiaoren/rl.png',
	'./images/xiaoren/sj.png',
	'./images/xiaoren/txs.png',
	'./images/xiaoren/xmt.png',
	'./images/xiaoren/xz.png',
	'./images/xiaoren/qm.png',
	'./images/xiaoren/cp.png'
	];

var litleCrazyPeoCurr=[0,1];
var objLitleCrazyPeo1=document.getElementById('litlePeo1');
var objLitleCrazyPeo2=document.getElementById('litlePeo2');
var objLitleCrazyPeo3=document.getElementById('litlePeo3');
var litleCrazyX=[-580,-180,180,580];
var litleCrazyXCurr=[1,2];
litleCrazy1Act1();
TweenMax.to(objLitleCrazyPeo2,0,{delay:1.5,onComplete:litleCrazy2Act1});
//TweenMax.to(objLitleCrazyPeo2,0,{delay:2,onComplete:litleCrazy3Act});
function litleCrazy1Act1 () {
	litleCrazyXCurr[0]=litleCrazyXCurr[0]+parseInt(Math.random()*litleCrazyX.length/2);
	litleCrazyXCurr[0]=(litleCrazyXCurr[0]+litleCrazyX.length)%litleCrazyX.length;
	if(litleCrazyXCurr[0]==litleCrazyXCurr[1]){
		litleCrazyXCurr[0]+=1;
	}
	litleCrazyXCurr[0]=(litleCrazyXCurr[0]+litleCrazyX.length)%litleCrazyX.length;
	$('#litlePeo1').css({'backgroundImage':'url('+litleCrazy[litleCrazyPeoCurr[0]]+')','left':litleCrazyX[litleCrazyXCurr[0]]+'px'});
	var rrrr=Math.random()*40-20;
	TweenMax.to(objLitleCrazyPeo1,0.5,{rotation:7+rrrr,top:-200-Math.random()*50,ease: Elastic.easeOut.config(0.8, 0.2)});
	TweenMax.to(objLitleCrazyPeo1,0.1,{rotation:3+rrrr,ease: Elastic.easeNone,delay:0.2});
	TweenMax.to(objLitleCrazyPeo1,0.1,{rotation:-3+rrrr,ease: Elastic.easeNone,delay:0.3});
	TweenMax.to(objLitleCrazyPeo1,0.1,{rotation:3+rrrr,ease: Elastic.easeNone,delay:0.4});
	TweenMax.to(objLitleCrazyPeo1,0.05,{top:0,ease: Power0.easeNone,delay:2});
	TweenMax.to(objLitleCrazyPeo1,0,{onComplete:litleCrazy1Act2,delay:3})
}
function litleCrazy1Act2 () {
	litleCrazyPeoCurr[0]=litleCrazyPeoCurr[0]+parseInt(Math.random()*litleCrazy.length/2);
	litleCrazyPeoCurr[0]=(litleCrazyPeoCurr[0]+litleCrazy.length)%litleCrazy.length;
	if(litleCrazyPeoCurr[0]==litleCrazyPeoCurr[1]){
		litleCrazyPeoCurr[0]+=1;
	}
	litleCrazyPeoCurr[0]=(litleCrazyPeoCurr[0]+litleCrazy.length)%litleCrazy.length;
	//console.log(litleCrazyPeoCurr);
	litleCrazy1Act1();
}

function litleCrazy2Act1 () {
	litleCrazyXCurr[1]=litleCrazyXCurr[1]+parseInt(Math.random()*litleCrazyX.length/2);
	litleCrazyXCurr[1]=(litleCrazyXCurr[1]+litleCrazyX.length)%litleCrazyX.length;
	if(litleCrazyXCurr[1]==litleCrazyXCurr[0]){
		litleCrazyXCurr[1]+=1;
	}
	litleCrazyXCurr[1]=(litleCrazyXCurr[1]+litleCrazyX.length)%litleCrazyX.length;
	$('#litlePeo2').css({'backgroundImage':'url('+litleCrazy[litleCrazyPeoCurr[1]]+')','left':litleCrazyX[litleCrazyXCurr[1]]+'px'});
	var rrrr=Math.random()*40-20;
	TweenMax.to(objLitleCrazyPeo2,0.5,{rotation:7+rrrr,top:-200-Math.random()*50,ease: Elastic.easeOut.config(0.8, 0.2)});
	TweenMax.to(objLitleCrazyPeo2,0.1,{rotation:3+rrrr,ease: Elastic.easeNone,delay:0.2});
	TweenMax.to(objLitleCrazyPeo2,0.1,{rotation:-3+rrrr,ease: Elastic.easeNone,delay:0.3});
	TweenMax.to(objLitleCrazyPeo2,0.1,{rotation:3+rrrr,ease: Elastic.easeNone,delay:0.4});
	TweenMax.to(objLitleCrazyPeo2,0.05,{top:0,ease: Power0.easeNone,delay:2});
	TweenMax.to(objLitleCrazyPeo2,0,{onComplete:litleCrazy2Act2,delay:3})
}
function litleCrazy2Act2 () {
	litleCrazyPeoCurr[1]=litleCrazyPeoCurr[1]+parseInt(Math.random()*litleCrazy.length/2);
	litleCrazyPeoCurr[1]=(litleCrazyPeoCurr[1]+litleCrazy.length)%litleCrazy.length;
	if(litleCrazyPeoCurr[1]==litleCrazyPeoCurr[0]){
		litleCrazyPeoCurr[1]+=1;
	}
	litleCrazyPeoCurr[1]=(litleCrazyPeoCurr[1]+litleCrazy.length)%litleCrazy.length;
	litleCrazy2Act1();
}
///////////////////////////////////////////////////////////////////////////////////////
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
