<?php





$para      = 'darktech.systems@gmail.com';
$titulo    = '[Mensaje de pagina web]';
$mensaje   = $_POST['mensaje'];
$texto = str_replace("\n.", "\n..", $mensaje);
$mensaje_completo = "Nombre de la persona que se contacto es : " . $_POST['nombre'] . " ,  correo : ".$_POST['correo']. " y teléfono: ".$_POST['telefono'] ;
$cabeceras  = 'MIME-Version: 1.0' . "\r\n";
$cabeceras .= 'Content-type: text/html; charset=iso-8859-1' . "\r\n";


mail($para, $titulo,  $mensaje_completo , $cabeceras);

echo "El mensaje fue enviado correctamente";
?>
