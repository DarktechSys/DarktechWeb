var cual = 1;
function ocultaDivs(){
	$("#quienes_somos_anim1").addClass("invisible");
	$("#quienes_somos_anim2").addClass("invisible");
	$("#quienes_somos_anim3").addClass("invisible");
	
};

function hazAnimacion(){
	hazInvisibles(cual);
	$("#quienes_somos_anim"+cual).toggle("slide",3000);
	$("#quienes_somos_anim"+cual).toggle("slide",3000);
	//setTimeout(function(){$("#quienes_somos_anim"+cual).toggle("slide",3000);},2000);
		if(cual == 3){
		cual = 1;
		return;
	}
	cual++;
	
};
function hazInvisibles(cualno){

	for(i = 1; i < 4; i++){
		if(i!=cualno){
			$("#quienes_somos_anim"+i).addClass("invisible");
		}
	}
}
$(document).ready(ocultaDivs());
hazAnimacion();
/*
setTimeout(function(){
	setInterval(function () {
		hazAnimacion()
	})
},9000);
*/



