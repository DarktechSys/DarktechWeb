var cual = 1;
function ocultaDivs(){
	$("#quienes_somos_anim2").addClass("invisible");
	$("#quienes_somos_anim3").addClass("invisible");
	
};

function hazAnimacion(){
	//$("#quienes_somos_anim1").addClass("invisible");
	$("#quienes_somos_anim"+cual).toggle("slide",500);
	//$("#quienes_somos_anim1").removeClass("invisible");
	if(cual == 3){
		cual = 1;
		return;
	}
	cual++;
	
};

$(document).ready(setInterval(function () {hazAnimacion()},1000));




