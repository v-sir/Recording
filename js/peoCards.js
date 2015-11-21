var peoCardF=[
	'./images/card/bj.png',
	'./images/card/txs.png',
	'./images/card/hd.png',
	'./images/card/xz.png',
	'./images/card/cp.png',
	'./images/card/dmt.png',
	'./images/card/xmt.png',
	'./images/card/js.png',
	'./images/card/sj.png',
	'./images/card/rl.png',
	'./images/card/qh.png',
	'./images/card/qm.png'
	]
function cardShow (pid) {
	TweenMax.to(document.getElementById('card'),0,{y:0});
	$('#card').css({'background-image':'url('+peoCardF[pid]+')'});
	TweenMax.to(document.getElementById('card'),1,{y:660,ease:Elastic.easeOut.config(0.5, 0.4)});
	$('#cardClose').click(function(){
		cardClose(pid)
	})
}
function cardClose (pid) {	
	TweenMax.to(document.getElementById('card'),0.2,{y:0,});
}