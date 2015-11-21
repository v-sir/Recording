var objPlanetText=document.getElementById('planetText'),
	objMeteorB=document.getElementById('meteorB'),
	objMeteorF=document.getElementById('meteorF'),
	objSword1=document.getElementById('sword1'),
	objSword2=document.getElementById('sword2'),
	objSword3=document.getElementById('sword3'),
	objDiamond1shadow=document.getElementById('diamond1_shadow'),
	objDiamond2shadow=document.getElementById('diamond2_shadow'),
	objDiamond1=document.getElementById('diamond1_rock'),
	objDiamond2=document.getElementById('diamond2_rock'),
	objShield=document.getElementById('shield'),
	objJishu=document.getElementById('jishu'),
	objSheji=document.getElementById('sheji'),
	meteorsX=[0,500],
	meteorsTime=[3,5]
	;

planetTextAct();
meteorBhitAct();
meteorFhitAct();
swordAct1();
diamondAct1();
jishuAct1();
function planetTextAct(){
	TweenMax.to(objPlanetText,40,{rotation:'+=360',onComplete:planetTextAct,ease:Power0.easeNone});
}
function meteorBhitAct(){
	meteorsX[0]=Math.random()*800-500;
	meteorsTime[0]=Math.random()*8+2;

	//var a=1100+meteorsX[0];
	//if()
	TweenMax.to(objMeteorB,0,{left:-meteorsX[0],y:0,opacity:1});
	TweenMax.to(objMeteorB,1,{left:-$(window).width()-meteorsX[0],y:$(window).width(),delay:meteorsTime[0],opacity:0.8,ease:Power0.easeNone,onComplete:meteorBhitAct});
}
function meteorFhitAct(){
	meteorsX[1]=Math.random()*800-500;
	meteorsTime[1]=Math.random()*8+6;
	TweenMax.to(objMeteorF,0,{left:-meteorsX[1],y:0,opacity:1});
	TweenMax.to(objMeteorF,1,{left:-$(window).width()-meteorsX[1],y:$(window).width(),delay:meteorsTime[1],opacity:0.8,ease:Power0.easeNone,onComplete:meteorFhitAct});
}
function swordAct1(){
	TweenMax.to(objSword1,2,{x:-10,y:-40,onComplete:swordAct2,ease:Power0.easeNone});
	
	TweenMax.to(objSword2,2,{y:-10,ease:Power0.easeNone,delay:1});
	TweenMax.to(objSword3,2,{ease:Power0.easeNone,rotation:5,delay:1,transformOrigin:"90px 160px"});
	//TweenMax.to(objMeteorF,1,{left:-1500-meteorsX[1],y:1500,delay:meteorsTime[1],opacity:0.8,ease:Power0.easeNone,onComplete:meteorFhitAct});
}
function swordAct2(){
	TweenMax.to(objSword1,2,{x:0,y:0,onComplete:swordAct1,ease:Power0.easeNone});
	TweenMax.to(objSword2,2,{y:0,ease:Power0.easeNone,delay:1});
	TweenMax.to(objSword3,2,{ease:Power0.easeNone,rotation:-5,delay:1,transformOrigin:"90px 160px"});
	//TweenMax.to(objMeteorF,1,{left:-1500-meteorsX[1],y:1500,delay:meteorsTime[1],opacity:0.8,ease:Power0.easeNone,onComplete:meteorFhitAct});
}
function diamondAct1(){
	TweenMax.to(objDiamond1shadow,3,{opacity:1,onComplete:diamondAct2});
	TweenMax.to(objDiamond1,3,{opacity:0.8,delay:3});
	TweenMax.to(objDiamond2shadow,3,{opacity:1,delay:3});
	TweenMax.to(objDiamond2,3,{opacity:0.8,delay:6});
}
function diamondAct2(){
	TweenMax.to(objDiamond1shadow,3,{opacity:0,onComplete:diamondAct1});
	TweenMax.to(objDiamond1,3,{opacity:1,delay:3});
	TweenMax.to(objDiamond2shadow,3,{opacity:0,delay:3});
	TweenMax.to(objDiamond2,3,{opacity:1,delay:6});
}
function jishuAct1(){
	TweenMax.to(objJishu,3,{y:0,ease:Power0.easeNone,onComplete:jishuAct2});
	TweenMax.to(objShield,3,{rotation:-10,scale:0.95,ease:Power0.easeNone});
	TweenMax.to(objSheji,3,{y:5,ease:Power0.easeNone});
}
function jishuAct2(){
	TweenMax.to(objJishu,3,{y:15,ease:Power0.easeNone,onComplete:jishuAct1});
	TweenMax.to(objSheji,3,{y:-5,ease:Power0.easeNone});
	TweenMax.to(objShield,3,{rotation:10,scale:1,ease:Power0.easeNone});
}
///////////////////////////////////
var codeText=['for(Bill * p=Head->Next;p!=End;p=p->Next)',
	'lpAPI ＝ GetProcAddress (GetModuleHandleA (“kernel32.dll”), “CreateFileW”)',
	'sprintf(date,"%d.%02d.%02d",date_[0],date_[1],date_[2]);',
	'#diamond1{float: right;margin-right: 300px;}',
	'OldlpFuc ＝ 指针到字节集 (lpAPI, 5)',
	'$("body").css({"width":$(window).width()});',
	'var objPlanetText=document.getElementById("planetText");',
	'Random random= new Random();',
	'$sql = "SELECT * FROM ".$table." ORDER BY date desc";',
	'$rs = mysql_query($sql,$conn);',
	'JmpOffSet ＝ 到字节集 (MakeJmp (lpAPI, 取子程序地址 (&NewCreateFileW)))',
	'String string = Integer.toBinaryString(x);',
	'int x = random.nextInt(maxnum);',
	'rc = subprocess.call(["ls","-l"])',
	'echo "hello world"'
	];
var currentCode=-1;
var objCode1=document.getElementById("code1"),
	objCode2=document.getElementById("code2"),
	objCode3=document.getElementById("code3"),
	objCode4=document.getElementById("code4"),
	objCode5=document.getElementById("code5")
	;

codeText1Act1();
codeText2Act1();
codeText3Act1();
codeText4Act1();
codeText5Act1();
function codeText1Act1 () {
	TweenMax.to(objCode1,2,{opacity:0,onComplete:codeText1Act2});
}
function codeText1Act2 () {
	currentCode++;
	if(currentCode>codeText.length){
		currentCode=0;
	}
	$('#code1').html(codeText[currentCode]);
	TweenMax.to(objCode1,2,{opacity:0.5,onComplete:codeText1Act1});
}
function codeText2Act1 () {
	TweenMax.to(objCode2,2,{opacity:0,onComplete:codeText2Act2,delay:2});
}
function codeText2Act2 () {
	currentCode++;
	if(currentCode>codeText.length){
		currentCode=0;
	}
	$('#code2').html(codeText[currentCode]);
	TweenMax.to(objCode2,2,{opacity:0.5,onComplete:codeText2Act1});
}
function codeText3Act1 () {
	TweenMax.to(objCode3,2,{opacity:0,onComplete:codeText3Act2,delay:1.5});
}
function codeText3Act2 () {
	currentCode++;
	if(currentCode>codeText.length){
		currentCode=0;
	}
	$('#code3').html(codeText[currentCode]);
	TweenMax.to(objCode3,2,{opacity:0.5,onComplete:codeText3Act1});
}
function codeText4Act1 () {
	TweenMax.to(objCode4,2,{opacity:0,onComplete:codeText4Act2,delay:3});
}
function codeText4Act2 () {
	currentCode++;
	if(currentCode>codeText.length){
		currentCode=0;
	}
	$('#code4').html(codeText[currentCode]);
	TweenMax.to(objCode4,2,{opacity:0.5,onComplete:codeText4Act1});
}
function codeText5Act1 () {
	TweenMax.to(objCode5,2,{opacity:0,onComplete:codeText5Act2,delay:2.5});
}
function codeText5Act2 () {
	currentCode++;
	if(currentCode>codeText.length){
		currentCode=0;
	}
	$('#code5').html(codeText[currentCode]);
	TweenMax.to(objCode5,2,{opacity:0.5,onComplete:codeText5Act1});
}

