var loadWidth=900;
	var loadHeight=600;
	var x0=loadWidth/2;
	var y0=loadHeight/2-50;
	var load_R=100;
	var Aload_R=20;
	var load_r=20;
	var Aload_r=8;
	var objLoad=[];
	var objNum=20;
	var rotationAll=0;
	var canvasE=document.getElementById('loadEffect');
	var canvas = canvasE.getContext('2d');
	var bufferE = document.createElement('canvas');
	var buffer = bufferE.getContext('2d');
	var fontSize=(load_R-Aload_r)/2+8;
	var colorRang=[180,250];
	var colorLimit=[20,20,40];
	var loadRGo=100;
	var loadCompleteStop=0;
	var seconds=0;
	var currentText='';
	var colorAll=[
		[205,75,196],
		[236,40,0],
		[247,149,33],
		[235,124,0],
		[57,188,237],
		[0,103,215],
		[51,141,233],
		[243,215,11],
		[63,177,6],
		[63,211,160],
		[0,156,149],
		[195,16,79],
		[246,71,104]
	];
function loadingStart (onCompFunc) {
	
	canvasE.width=loadWidth;
	canvasE.height=loadHeight;
	bufferE.width=loadWidth;
	bufferE.height=loadHeight;
	var rotation_temp=0;
	for(var a=0;a<objNum;a++){
		var obj;
		rotation_temp+=Math.random()*load_r/(3.14*load_R)*360+10;
		var kk=Math.random();
		var color=colorAll[parseInt(Math.random()*colorAll.length)];
		//for(var b=0;b<3;b++){
			//color[b]=parseInt(colorRang[0]+(Math.random()*2-1)*(colorRang[1]-colorRang[0]))+colorLimit[b];
			//if(color[b]>255)color[b]=255;
		//}
		obj={'R':load_R+kk*Aload_R*2-Aload_R,'position':rotation_temp,'r':load_r+(Math.random()+kk/4)*Aload_r*2-Aload_r,'point':[180,Math.random()*60+30,360-Math.random()*40],'color':'rgba('+color[0]+','+color[1]+','+color[2]+','}
		objLoad[objLoad.length]=obj;
	}
	timer();
	function timer () {
		if(loadCompleteStop==0){
			for(var a=0;a<objNum;a++){
				var temp=(load_R-objLoad[a]['R'])/load_R;
				if(temp<0)temp=(Math.random()+0.5)*Aload_R/load_R;
				temp+=Aload_R/load_R;
				objLoad[a]['position']+=temp*3;
			}
			drawn();
			if(loadProcess>=90){drawnText('不要着急，马上就好 o(*￣▽￣*)ブ');}
			setTimeout(function(){
				timer ()
			},10);
			if(loadProcess==100){
				timerProccessGo ();
			}
		}
		
	}
	drawnText('正在加载中，请稍候...  (●′ω`●)');
	timerSecond();
	function timerSecond(){
		if(loadCompleteStop==0){
			seconds++;
			if(seconds==60){
				drawnText('(╬▔皿▔) 还没好？刷新一下吧...');
			}
			if(seconds==30){
				drawnText('网络开小差了，喝杯茶休息休息  (￣.￣)+');
			}
			//console.log(seconds)
			setTimeout(function(){
			timerSecond ();
			},1000);
		}
	}
	function timerProccessGo () {
		if(loadCompleteStop==0){
			if(loadRGo>0){
				for(var a=0;a<objNum;a++){
					objLoad[a]['R']*=loadRGo/100;
				}
				fontSize*=loadRGo/100;
				//console.log(loadRGo)
				setTimeout(function(){
				timerProccessGo ();
				},20);
				loadRGo-=2;
			}
			else{
				//loadCompleteStop=1;
				loadRGo=1;
				for(var a=0;a<objNum;a++){
					objLoad[a]['R']=1+Math.random()*2;
				}
				drawnText('(☆▽☆) 加载完毕！');
				loadCompleteStop=1;
				timerProccessGoOut()
			}
		}
	}
	function timerProccessGoOut(){
			if(loadRGo<100){
				for(var a=0;a<objNum;a++){
					objLoad[a]['R']*=(1+loadRGo/100);
				}
				loadRGo+=2;
				//console.log(loadRGo)
				drawn();
				canvasE.style.opacity=(100-loadRGo)/80;
				setTimeout(function(){
				timerProccessGoOut();
				},20);

			}
			if(loadRGo>50){
				onCompFunc();
				canvasE.style.display="none";
			}
	}
	//console.log(objLoad);
	function drawn(){
		buffer.clearRect(0,0,loadWidth,loadHeight);
		for(var a=0;a<objNum;a++){
			var obj=objLoad[a];
			var rotation_=(obj['position']);
			var oX=obj['R']*Math.cos(rotation_/180*Math.PI);
			var oY=obj['R']*Math.sin(rotation_/180*Math.PI);
			var objPoint=obj['point'];
			var objPo=[];
			for(var i=0;i<3;i++){
				mm={'x':obj['r']*Math.cos((objPoint[i]+rotation_-90)/180*Math.PI),'y':obj['r']*Math.sin((objPoint[i]+rotation_-90)/180*Math.PI)};
				objPo[i]=mm;
			}
			buffer.beginPath();
			buffer.moveTo(x0+oX+objPo[0]['x'],y0-oY-objPo[0]['y']);
			buffer.lineTo(x0+oX+objPo[1]['x'],y0-oY-objPo[1]['y']);
			buffer.lineTo(x0+oX+objPo[2]['x'],y0-oY-objPo[2]['y']);
			var opacity=1*0.7;
			if(rotation_<80){
				opacity=rotation_/80*0.7;

			}
			if(loadRGo<100){
				opacity=loadRGo/100*0.7;

			}
			//console.log(opacity)
			if(rotation_>360-80){
				opacity=(360-rotation_)/80*0.7;
			}
			if(rotation_>370 && loadRGo>0){
				var kk=Math.random();
				var color=colorAll[parseInt(Math.random()*colorAll.length)];
				//for(var b=0;b<3;b++){
					//color[b]=parseInt(colorRang[0]+(Math.random()*2-1)*(colorRang[1]-colorRang[0]))+colorLimit[b];
					//if(color[b]>255)color[b]=255;
				//}
				objLoad[a]={'R':load_R+kk*Aload_R*2-Aload_R,'position':0,'r':load_r+(Math.random()+kk/4)*Aload_r*2-Aload_r,'point':[180,Math.random()*60+30,360-Math.random()*40],'color':'rgba('+color[0]+','+color[1]+','+color[2]+','};
			}
			buffer.fillStyle=obj['color']+opacity+')';
			//console.log(obj['color']);
			buffer.fill();
			buffer.closePath();
			//console.log(objPo)
			//canvasE.
		}
		if(fontSize>20){
		buffer.font="normal normal 700 "+fontSize+"px Microsoft Yahei";
		buffer.fillStyle='#333333';
		buffer.fillText(loadProcess,x0-buffer.measureText(loadProcess).width/2,y0+fontSize/2-5);
		
		}
		canvas.clearRect(0,0,loadWidth,loadHeight/2+load_R+Aload_R);
		canvas.drawImage(bufferE, 0, 0);
	}
	function drawnText(text){
		if(currentText!=text){
			canvas.clearRect(0,loadHeight/2+load_R+Aload_R,loadWidth,100);
			canvas.font="normal normal 100 20px Microsoft Yahei";
			canvas.fillText(text,x0-canvas.measureText(text).width/2,y0+load_R+Aload_R*2+60);
			currentText=text;
		}
		
	}
}
function drawnText_(text){
			canvas.clearRect(0,loadHeight/2+load_R+Aload_R,loadWidth,100);
			canvas.font="normal normal 100 20px Microsoft Yahei";
			canvas.fillText(text,x0-canvas.measureText(text).width/2,y0+load_R+Aload_R*2+60);
		
	}