var code=["技术研发部","设计部","人力资源部","行政事务部","企划公关部","产品运营部","互动管理部","多媒体事业部","青梅团队","编辑部","三翼通讯社","新媒体中心"];
function bumen_selector(){
	var choose=[$('#b1'),$('#b2'),$('#b3')];
	var data='';
	for(var i=0;i<code.length;i++){
		var m=0;
		for(var k=0;k<3;k++){
			if(choose[k].val()==code[i]) {
				m=1;
				break;
			}
		}
		if(m==0)data+="<option>"+code[i]+"</option>";
	}
	//console.log(data)
	for(var i=0;i<3;i++){
			var chooseValue=choose[i].val();
			var data_='';
			data_="<option>"+chooseValue+"</option>"+data;
			choose[i].html(data_);
			choose[i].val(chooseValue);
			
			
		}
}
