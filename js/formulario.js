
function valida_datos(){
  var nombre = document.getElementById("nombre").value;
  var telefono = document.getElementById("telefono").value;
  var correo = document.getElementById("correo").value;
  var mensaje = document.getElementById("mensaje").value;

/**
  if(nombre == "") {
    mandaError("error_form", "Debes proporcionar un nombre");
    return;
  }
  if(!isNaN(nombre)){
    mandaError("error_form", "Proporcione un nombre valido");
    return;
  }
  if(!validaTelefono(telefono)){
    mandaError("error_form","Debes proporcionar un teléfono válido");
    return;
  }

  if(!validaCorreo(correo)){
    mandaError("error_form","Proporciona un correo valido");
    return;
  }
**/

  var parametros = "nombre="+nombre+"&telefono="+telefono+"&correo="+correo+"&mensaje="+mensaje;
  manda(parametros);

}




function manda(parametros){
         var ajax = new XMLHttpRequest();
         ajax.open("POST", "php/miFormulario.php", true);
         ajax.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
          ajax.onreadystatechange = function(){
             if(ajax.status == 200 && ajax.readyState == 4){
                alert(ajax.responseText);

              }
         }
         ajax.send(parametros);
       }
