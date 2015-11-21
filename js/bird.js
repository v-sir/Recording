

huishang() ;
			
	
function huishang(){
	TweenMax.to(document.getElementById('right_top_chicken'),1,{rotation:20,onComplete:huixia});
	TweenMax.to(document.getElementById('right_top_word'),1,{y:-30,onComplete:huixia});
	
}


function huixia(){
	TweenMax.to(document.getElementById('right_top_chicken'),1,{rotation:-30,onComplete:huishang});
	TweenMax.to(document.getElementById('right_top_word'),1,{y:8,onComplete:huishang});
	
}
	


	
	
