var objXzEye=document.getElementById('xzEye'),
	objPaize=document.getElementById('paizi'),
	objQhHand=document.getElementById('qhHand'),
	objQhHandShadow=document.getElementById('qhHandShadow'),
	objFlower=document.getElementById('fua'),
	objFlowerB1=document.getElementById('fuab1'),
	objFlowerB2=document.getElementById('fuab2')
	;

xzEyeAct1 ();
paiziAct1();
qhHandAct1 ();
flowerAct ();
flowerB1Act1 ();
function xzEyeAct1 () {
	TweenMax.to(objXzEye,0.2,{left:-3,y:0,ease:Power0.easeNone,onComplete:xzEyeAct3});
}
function xzEyeAct2 () {
	TweenMax.to(objXzEye,0.2,{left:0,y:-1,ease:Power0.easeNone,onComplete:xzEyeAct4});
}
function xzEyeAct3 () {
	TweenMax.to(objXzEye,2,{onComplete:xzEyeAct2});
}
function xzEyeAct4 () {
	TweenMax.to(objXzEye,2,{onComplete:xzEyeAct1});
}
function paiziAct1 () {
	TweenMax.to(objPaize,1,{rotation:5,transformOrigin:"138px 4px",ease:Power0.easeNone,onComplete:paiziAct2});
}
function paiziAct2 () {
	TweenMax.to(objPaize,1,{rotation:-5,transformOrigin:"138px 4px",ease:Power0.easeNone,onComplete:paiziAct1});
}
function qhHandAct1 () {
	TweenMax.to(objQhHand,1,{rotation:5,transformOrigin:"155px 20px",ease:Power0.easeNone,onComplete:qhHandAct2});
	TweenMax.to(objQhHandShadow,1,{rotation:5,transformOrigin:"150px 20px",ease:Power0.easeNone});
}
function qhHandAct2 () {
	TweenMax.to(objQhHand,1,{rotation:-5,transformOrigin:"155px 20px",ease:Power0.easeNone,onComplete:qhHandAct1});
	TweenMax.to(objQhHandShadow,1,{rotation:-5,transformOrigin:"150px 20px",ease:Power0.easeNone});
}
function flowerAct () {
	TweenMax.to(objFlower,15,{rotation:"+=180",transformOrigin:"81px 81px",ease:Power0.easeNone,onComplete:flowerAct});
}
function flowerB1Act1 () {
	TweenMax.to(objFlowerB1,2,{rotation:-10,transformOrigin:"64px 77px",ease:Power0.easeNone,onComplete:flowerB1Act2});
	TweenMax.to(objFlowerB2,2,{rotation:10,transformOrigin:"6px 53px",ease:Power0.easeNone});
}
function flowerB1Act2 () {
	TweenMax.to(objFlowerB1,2,{rotation:0,transformOrigin:"64px 77px",ease:Power0.easeNone,onComplete:flowerB1Act1});
	TweenMax.to(objFlowerB2,2,{rotation:0,transformOrigin:"6px 53px",ease:Power0.easeNone});
}
////////////////////////////////////
