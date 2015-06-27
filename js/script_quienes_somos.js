var div1 = "\<div class='contenedor' id='quienes_somos_anim1'>\
				<div class='cuadro_texto'>\
					<br>\
					<h3>Salimos del esquema</h3>\
					<p>Nuestro objetivo siempre es buscar soluciones\
					innovadoras no importando el problema, adaptando las actuales y nuevas tecnologías para lograrlo.</p>\
				</div>\
				<i class='fa fa-unlock fa-5x'></i>\
				<i class='fa fa-sellsy fa-5x'></i>\
				<i class='fa fa-rocket fa-5x'></i>\
				<i class='fa fa-thumbs-o-up fa-5x'></i>\
				<i class='fa fa-code-fork fa-5x'></i>\
				<i class='fa fa-puzzle-piece fa-5x'></i>\
			</div>";

var div2 = "\<div class='contenedor' id='quienes_somos_anim2'>\
				<div class='cuadro_texto'>\
					<br>\
					<h3>El diseño sí importa</h3>\
					<p>El buen diseño de una interfaz no debe dejarse de lado, de él depende el buen entendimiento y fácil uso de una aplicación, nosotros te ofrecemos eso, diseño pensado en el usuario, pensado para que navegues, trabajes o lo que hagas con la aplicación de forma sencilla y eficaz.</p>\
				</div>\
				<i class='fa fa-star fa-5x'></i>\
				<i class='fa fa-diamond fa-5x'></i>\
				<i class='fa fa-magic fa-5x'></i>\
				<i class='fa fa-css3 fa-5x'></i>\
				<i class='fa fa-html5 fa-5x'></i>\
				<i class='fa fa-heart fa-5x'></i>\
			</div>";

var div3 = "\<div class='contenedor' id='quienes_somos_anim3'>\
				<div class='cuadro_texto'>\
					<br>\
					<h3>Te llevamos al futuro</h3>\
					<p>Las tecnologías informáticas son herramientas, nosotros\
					te ayudaremos a que las incorpores a tu negocio, automatizando tareas\
					o simplemente dando a conocer tus ideas con una página web.</p>\
				</div>\
				<i class='fa fa-cubes fa-5x'></i>\
				<i class='fa fa-line-chart fa-5x'></i>\
				<i class='fa fa-briefcase fa-5x'></i>\
				<i class='fa fa-globe fa-5x'></i>\
				<i class='fa fa-lightbulb-o fa-5x'></i>\
				<i class='fa fa-user-plus fa-5x'></i>\
			</div>";

var divs = [div1,div2,div3];
var n = 0;

function ejecutaCarrusel(){
	$("#principal > div").remove();
	if (n == 3) {
		n = 0;
	}
	
	$("#principal").append(divs[n]);
	$("#principal > div").show().fadeOut(2000);	
	n++;
}

function hazInvisible(cualno){
	
}
var idCarrusel;
$(document).ready(idCarrusel = window.setInterval(ejecutaCarrusel,2000));
//$(document).ready($("#principal").append(div1));

$("#principal").on("mouseenter mouseleave", function(e){
	console.log(e.type);
	if(e.type === "mouseenter"){
		clearInterval(idCarrusel);
		$("#principal").append(divs[n-1]).show();
		
	} else {
		idCarrusel = window.setInterval(ejecutaCarrusel,2000);
	}
});
/*
$("#principal").mouseenter(function(){
	$("#principal > div").remove();
	if(n != 0){
		$("#principal").append(divs[n-1]).show();	
	}
	clearInterval(idCarrusel);
	console.log("g");
	
});

$("#principal").mouseleave(function(){
	console.log("gg");
	idCarrusel = window.setInterval(ejecutaCarrusel,2000);
});
*/