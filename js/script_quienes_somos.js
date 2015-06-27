/* var cualno = 1;
function ocultaDivs(){
	$("#quienes_somos_anim1").addClass("invisible");
	$("#quienes_somos_anim2").addClass("invisible");
	$("#quienes_somos_anim3").addClass("invisible");
	//hazAnimacion();	
};

function hazAnimacion(){
	hazInvisibles(cualno);
	$("#quienes_somos_anim"+cualno).toggle("slide",3000);
	window.setTimeout(function(){$("#quienes_somos_anim"+cualno).toggle("slide",3000)},1000);
	
		if(cualno == 3){
		cualno = 1;
		return;
	}
	cualno++;
	
};
function hazInvisibles(cualno){
	for(i = 1; i < 4; i++){
		if(i!=cualno){
			$("#quienes_somos_anim"+i).addClass("invisible");
		}
	}
}

$(document).ready(ocultaDivs());
window.setInterval(function(){hazAnimacion()},8000);
*/

var div1 = '<div class="contenedor" id="quienes_somos_anim1">
				<div class="cuadro_texto">

					<h3>Salimos del esquema</h3>
					<p>Nuestro objetivo siempre es buscar soluciones
					innovadoras no importando el problema, adaptando las actuales y nuevas tecnologías para lograrlo.</p>
				</div><!--
				-->
				<div class="cuadro_anim">
					<i class="fa fa-connectdevelop fa-5x"></i>
				</div>
			</div>';

var div2 = '<div class="contenedor" id="quienes_somos_anim2">
				<div class="cuadro_texto">

					<h3>El diseño sí importa</h3>
					<p>El buen diseño de una interfaz no debe dejarse de lado, de él depende el buen entendimiento y fácil uso de una aplicación, nosotros te ofrecemos eso, diseño pensado en el usuario, pensado para que navegues, trabajes o lo que hagas con la aplicación de forma sencilla y eficaz.</p>
				</div><!--
				-->
				<div class="cuadro_anim">
					<i class="fa fa-star fa-5x"></i>
				</div>

			</div>';
			
var div3 = '<div class="contenedor" id="quienes_somos_anim3">
				<div class="cuadro_texto">

					<h3>Te llevamos al futuro</h3>
					<p>Las tecnologías informáticas son herramientas, nosotros
					te ayudaremos a que las incorpores a tu negocio, automatizando tareas
					o simplemente dando a conocer tus ideas con una página web.</p>
				</div>
				<div class="cuadro_anim">
					<i class="fa fa-rocket fa-5x"></i>
				</div>
			</div>
		</div>';





