var maxMsgID=0;
function test(){
var logic=1;
var msg=0;
	var msgtext='请将报名表填写完整!';
	var x1=$('#name').val();
	var x2=$('#yuanxi').val();
	var x3=$('#zhuanye').val();
	var x4=$('#connect').val();
	var x5=$('#qq').val();
	var x6=$('#jianli').val();
	var x7=$('#sex').val();
	var x8=[$('#b1').val(),$('#b2').val(),$('#b3').val()];
	if (x1==''){
		$('#name').attr("placeholder","连名字都不告诉我么，嗯？");
		logic=0;
		msgtext='请填写名字!';
	}
	else if (x2==''){
		$('#yuanxi').attr("placeholder","还不填，嗯？/总裁脸");
		logic=0;
		msgtext='请填写院系!';
	}
	else if (x3==''){
		$('#zhuanye').attr("placeholder","这个还不填，嗯？/总裁脸");
		logic=0;
		msgtext='请填写你的专业!';
	}
	else if (x4==''){
		$('#connect').attr("placeholder"," (￣ε(#￣)☆╰╮o(￣▽￣///)");
		logic=0;
		msgtext='请输入11位纯数字手机号!';
	}
	else if (x4!=''){
		if(isNaN(x4)) {
			$('#connect').val('');
			$('#connect').attr("placeholder","请输入纯数字");
			logic=0;msgtext='请输入纯数字的手机号!';
		}
		else if(x4.length!=11){
			$('#connect').val('');
			$('#connect').attr("placeholder","请输入11位手机号");
			logic=0;
			msgtext='请输入11位手机号!';
		}
	}
	else if (x5==''){
		$('#qq').attr("placeholder"," (￣ε(#￣)☆╰╮o(￣▽￣///)");
		logic=0;
		msgtext='请输入qq号!';
	}
	else if (x6==''){
		$('#jianli').attr("placeholder"," \(▔□▔)/快\(▔□▔)/写\(▔□▔)/");
		msgtext='请填写简历!';
		logic=0;
	}
	else if (x7=='请选择你的性别'){logic=0;msgtext='请选择你的性别= ='}
	else{
		var j=0;
		for(var i=0;i<3;i++) {if (x8[i]=='请选择') j++;}
		if (j==3 ) {logic=0;msgtext='选择至少一个部门!'}
	}
/////////////////////////////////////////////////////
	if(logic==1){
		if($('#yz').val().length==0){alert('请填写验证码');return false;}
		else{return true;}
	}else{
		alert(msgtext);
		return false;
	}
		
}
function actmsg(id){
		//if(id>maxMsgID)maxMsgID=id;
}
function actmsgAll(id){
	id=Number(id);
	$("[msg]").removeClass('msgError');
	$(".actmsg").html('');
	console.log(maxMsgID,id)
	if(id>=maxMsgID)maxMsgID=id;
	console.log(maxMsgID)
	for(var a=1;a<=maxMsgID;a++){
		if(a!=id){
			if(a==1){
				var x=$("[msg='"+a+"']").val();
				if (x==''){
					$('#msg'+a).html("连名字都不告诉我么，嗯？");
					$("[msg='"+a+"']").addClass('msgError');
				}
			}
			else if(a==2){
				var x=$("[msg='"+a+"']").val();
				if (x=='请选择你的性别'){
					$('#msg'+a).html('请选择你的性别= =');
					$("[msg='"+a+"']").addClass('msgError');
				}
			}
			else if(a==4){
				var x=$("[msg='"+a+"']").val();
				if (x==''){
					$('#msg'+a).html('请填写院系!');
					$("[msg='"+a+"']").addClass('msgError');
				}
			}
			else if(a==5){
				var x=$("[msg='"+a+"']").val();
				if (x==''){
					$('#msg'+a).html('请填写专业!');
					$("[msg='"+a+"']").addClass('msgError');
				}
			}
			else if(a==6){
				var x=$("[msg='"+a+"']").val();

				if (x==''){
					$('#msg'+a).html('请输入11位纯数字手机号');
					$("[msg='"+a+"']").addClass('msgError');
				}
				else if(isNaN(x)) {
					$('#msg'+a).html('请输入纯数字的手机号!');
					$("[msg='"+a+"']").addClass('msgError');
				}
				else if(x.length!=11){
					$('#msg'+a).html('请输入11位手机号!');
					$("[msg='"+a+"']").addClass('msgError');
				}
			}
			else if(a==7){
				var x=$("[msg='"+a+"']").val();
				if (x==''){
					$('#msg'+a).html('请填写QQ号!');
					$("[msg='"+a+"']").addClass('msgError');
				}
			}
			else if(a==8){
				var x=[$('#b1').val(),$('#b2').val(),$('#b3').val()];
				var j=0;
				for(var i=0;i<3;i++) {if (x[i]=='请选择') j++;}
				if (j==3 ) {
					$('#msg'+a).html('选择至少一个部门!');
					$("[msg='"+a+"']").addClass('msgError');
				}
			}
			else if(a==9){
				var x=$("[msg='"+a+"']").val();
				if (x==''){
					$('#msg'+a).html('请填写简历!');
					$("[msg='"+a+"']").addClass('msgError');
				}
			}
			else if(a==10){
				var x=$("[msg='"+a+"']").val();
				if (x==''){
					$('#msg'+a).html('请填写验证码!');
					$("[msg='"+a+"']").addClass('msgError');
				}
			}
		}

	}
}