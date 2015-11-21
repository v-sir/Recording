var p=['','',''];
var kid="";
function chaxun(){
var x=[$('#chaxun1'+kid).val(),$('#chaxun2'+kid).val(),$('#chaxun3'+kid).val()];
var  j=0
for (var i=0;i<3;i++){
	if (x[i]=='') j++
} 
if (j>1)
{alert('请至少填写两项');}
else {name();}
console.log(p[0],p[1],p[2]);

}

function name(){
	var x=[$('#chaxun1'+kid).val(),$('#chaxun2'+kid).val(),$('#chaxun3'+kid).val()];
	if (x[0]=='') {p[0]=0;QQ();return false;}
	else {p[0]=1;QQ()}
}
function QQ(){
	var x=[$('#chaxun1'+kid).val(),$('#chaxun2'+kid).val(),$('#chaxun3'+kid).val()];
	if(x[1]==''){p[1]=0;shouji();return false;}
	else{if (isNaN(x[1])){$('#chaxun2'+kid).val('');$('#chaxun2'+kid).attr('placeholder','请填写数字QQ');p[1]=0;return false;} else {p[1]=1;shouji();}}
}

function shouji(){
	var x=[$('#chaxun1'+kid).val(),$('#chaxun2'+kid).val(),$('#chaxun3'+kid).val()];
	 if(x[2]!=''){if (isNaN(x[2])){$('#chaxun3'+kid).val('');$('#chaxun3'+kid).attr('placeholder','请填写数字');p[2]=0;return false;}
else if (x[2].length!=11){$('#chaxun3'+kid).val('');$('#chaxun3'+kid).attr('placeholder','请填写11位手机号');p[2]=0;return false;}else {p[2]=1}}
	
}

function success(id){
	if(id)kid=id;
	console.log(kid);
	chaxun();
	var j=0;
	for (var i=0;i<3;i++){
		if(p[i]==1) j++;
	}if(j>=2) {return true;}else return false;console.error(j)
}