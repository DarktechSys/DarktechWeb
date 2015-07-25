var div1 = "\<div class='contenedor' id='quienes_somos_anim1'>\
				<div id='iconos_izquierda'>\
					<i class='fa fa-unlock fa-5x'></i>\
					<i class='fa fa-sellsy fa-5x'></i>\
					<i class='fa fa-rocket fa-5x'></i>\
				</div>\
				<div class='cuadro_texto'>\
					<br>\
					<h3>Salimos del esquema</h3>\
					<p>Nuestro objetivo siempre es buscar soluciones\
					innovadoras no importando el problema, adaptando las actuales y nuevas tecnologías para lograrlo.</p>\
				</div>\
				<div id='iconos_derecha'>\
					<i class='fa fa-thumbs-o-up fa-5x'></i>\
					<i class='fa fa-code-fork fa-5x'></i>\
					<i class='fa fa-puzzle-piece fa-5x'></i>\
				</div>\
			</div>";
//Juv93D6vp0
var div2 = "\<div class='contenedor' id='quienes_somos_anim2'>\
				<div id='iconos_izquierda'>\
					<i class='fa fa-star fa-5x'></i>\
					<i class='fa fa-diamond fa-5x'></i>\
					<i class='fa fa-magic fa-5x'></i>\
				</div>\
				<div class='cuadro_texto'>\
					<br>\
					<h3>El diseño sí importa</h3>\
					<p>El buen diseño de una interfaz no debe dejarse de lado, de él depende el buen entendimiento y fácil uso de una aplicación, nosotros te ofrecemos eso, diseño pensado en el usuario, pensado para que navegues, trabajes o lo que hagas con la aplicación de forma sencilla y eficaz.</p>\
				</div>\
				<div id='iconos_derecha'>\
					<i class='fa fa-css3 fa-5x'></i>\
					<i class='fa fa-html5 fa-5x'></i>\
					<i class='fa fa-heart fa-5x'></i>\
				</div>\
			</div>";

var div3 = "\<div class='contenedor' id='quienes_somos_anim3'>\
				<div id='iconos_izquierda'>\
					<i class='fa fa-cubes fa-5x'></i>\
					<i class='fa fa-globe fa-5x'></i>\
					<i class='fa fa-briefcase fa-5x'></i>\
				</div>\
				<div class='cuadro_texto'>\
					<br>\
					<h3>Te llevamos al futuro</h3>\
					<p>Las tecnologías informáticas son herramientas, nosotros\
					te ayudaremos a que las incorpores a tu negocio, automatizando tareas\
					o simplemente dando a conocer tus ideas con una página web.</p>\
				</div>\
				<div id='iconos_derecha'>\
					<i class='fa fa-line-chart fa-5x'></i>\
					<i class='fa fa-lightbulb-o fa-5x'></i>\
					<i class='fa fa-user-plus fa-5x'></i>\
				</div>\
			</div>";

var divs = [div1,div2,div3];
var n = 0;

function ejecutaCarrusel(){
	$("#principal > div").remove();
	if (n == 3) {
		n = 0;
	}

	$("#principal").append(divs[n]);
	//$(".contenedor").hide();
	$("#principal > div").show().fadeOut(2000);
	n++;
}

var idCarrusel;

var anim1;
var anim2;
var anim3;
var ancho = 0;
var icono = 1;
var efectos = ["bounce","tada","flash","rotateIn","lightSpeedIn","wobble"];

$(document).ready(idCarrusel = setInterval(ejecutaCarrusel,2000));
$("#principal").on("mouseenter mouseleave", function(e){

	if(e.type === "mouseenter"){
		clearInterval(idCarrusel);
		clearInterval(animacion2);
		$(".contenedor").hide();
		$("#principal").append(divs[n-1]).show();
		$("#principal").addClass("seleccion");
		anim1 = setInterval(animacion,30);
		anim3 = setInterval(animacion3,200);

	}
	if(e.type === "mouseleave"){
		/*clearInterval(anim1);
		clearInterval(anim3);
		anim2 = setInterval(animacion2,30);
		idCarrusel = window.setInterval(ejecutaCarrusel,2000);*/
	}
});

// Anima iconos
function animacion3(){
	var efecto1 = efectos[Math.floor((Math.random() * 5))];
	var efecto2 = efectos[Math.floor((Math.random() * 5))];
	var efecto3 = efectos[Math.floor((Math.random() * 5))];

	if(icono === 4){
		icono = 1;
		clearInterval(anim3);
		return;
	}
	if(icono === 1){

		$(".contenedor i:nth-of-type(1)").css("-webkit-animation-duration","1s");
		$(".contenedor i:nth-of-type(1)").css("animation-duration","1s");
		$(".contenedor i:nth-of-type(1)").css("-webkit-animation-fill-mode","both");
		$(".contenedor i:nth-of-type(1)").css("animation-fill-mode","both");
		$(".contenedor i:nth-of-type(1)").css("-webkit-animation-name",efecto1);
		$(".contenedor i:nth-of-type(1)").css("animation-name",efecto1);
		$(".contenedor i:nth-of-type(1)").css("-webkit-transform-origin","center bottom");
		$(".contenedor i:nth-of-type(1)").css("transform-origin","center bottom");

		$(".contenedor i:nth-of-type(6)").css("-webkit-animation-duration","1s");
		$(".contenedor i:nth-of-type(6)").css("animation-duration","1s");
		$(".contenedor i:nth-of-type(6)").css("-webkit-animation-fill-mode","both");
		$(".contenedor i:nth-of-type(6)").css("animation-fill-mode","both");
		$(".contenedor i:nth-of-type(6)").css("-webkit-animation-name",efecto1);
		$(".contenedor i:nth-of-type(6)").css("animation-name",efecto1);
		$(".contenedor i:nth-of-type(6)").css("-webkit-transform-origin","center bottom");
		$(".contenedor i:nth-of-type(6)").css("transform-origin","center bottom");

		icono = icono + 1;
		return;
	}

	if(icono === 2){
		$(".contenedor i:nth-of-type(2)").css("-webkit-animation-duration","1s");
		$(".contenedor i:nth-of-type(2)").css("animation-duration","1s");
		$(".contenedor i:nth-of-type(2)").css("-webkit-animation-fill-mode","both");
		$(".contenedor i:nth-of-type(2)").css("animation-fill-mode","both");
		$(".contenedor i:nth-of-type(2)").css("-webkit-animation-name",efecto2);
		$(".contenedor i:nth-of-type(2)").css("animation-name",efecto2);
		$(".contenedor i:nth-of-type(2)").css("-webkit-transform-origin","center bottom");
		$(".contenedor i:nth-of-type(2)").css("transform-origin","center bottom");

		$(".contenedor i:nth-of-type(5)").css("-webkit-animation-duration","1s");
		$(".contenedor i:nth-of-type(5)").css("animation-duration","1s");
		$(".contenedor i:nth-of-type(5)").css("-webkit-animation-fill-mode","both");
		$(".contenedor i:nth-of-type(5)").css("animation-fill-mode","both");
		$(".contenedor i:nth-of-type(5)").css("-webkit-animation-name",efecto2);
		$(".contenedor i:nth-of-type(5)").css("animation-name",efecto2);
		$(".contenedor i:nth-of-type(5)").css("-webkit-transform-origin","center bottom");
		$(".contenedor i:nth-of-type(5)").css("transform-origin","center bottom");

		icono = icono + 1;
		return;
	}
	if(icono === 3){
		$(".contenedor i:nth-of-type(4)").css("-webkit-animation-duration","1s");
		$(".contenedor i:nth-of-type(4)").css("animation-duration","1s");
		$(".contenedor i:nth-of-type(4)").css("-webkit-animation-fill-mode","both");
		$(".contenedor i:nth-of-type(4)").css("animation-fill-mode","both");
		$(".contenedor i:nth-of-type(4)").css("-webkit-animation-name",efecto3);
		$(".contenedor i:nth-of-type(4)").css("animation-name",efecto3);
		$(".contenedor i:nth-of-type(4)").css("-webkit-transform-origin","center bottom");
		$(".contenedor i:nth-of-type(4)").css("transform-origin","center bottom");

		$(".contenedor i:nth-of-type(3)").css("-webkit-animation-duration","1s");
		$(".contenedor i:nth-of-type(3)").css("animation-duration","1s");
		$(".contenedor i:nth-of-type(3)").css("-webkit-animation-fill-mode","both");
		$(".contenedor i:nth-of-type(3)").css("animation-fill-mode","both");
		$(".contenedor i:nth-of-type(3)").css("-webkit-animation-name",efecto3);
		$(".contenedor i:nth-of-type(3)").css("animation-name",efecto3);
		$(".contenedor i:nth-of-type(3)").css("-webkit-transform-origin","center bottom");
		$(".contenedor i:nth-of-type(3)").css("transform-origin","center bottom");

		icono = icono + 1;
		return;
	}
}

// Quita bordes
function animacion2(){
	if(ancho === -1){
		$("#principal").removeClass("seleccion");
		clearInterval(anim2);
		return;
	} else {
		$(".seleccion").css("border-width",ancho+"px");
		ancho = ancho - 1;
	}
}

//Pone bordes
function animacion(){
	if(ancho === 12){
		clearInterval(anim1);
		return;
	}
	$(".seleccion").css("border-width",ancho+"px");
	ancho = ancho + 1;
}
