window.onload = function(){
document.getElementById('next-btn').onclick = function() {
	document.getElementById('sample2').style.cssText="z-index: 3; transform: translate(135px, 90px); transition: all 2s;";
	document.getElementById('sample1').style.cssText="z-index: 1; transform: translate(108px, -140px); transition: all 2s;";
	document.getElementById('sample3').style.cssText="z-index: 2; transform: translate(-200px, 40px); transition: all 2s;";
}
document.getElementById('prev-btn').onclick = function() {
	document.getElementById('sample2').style.cssText="z-index: 3; transform: translate(135px, 90px); transition: all 2s;";
}
}
