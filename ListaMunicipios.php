<?php 
header("Content-type:text/xml");

if (isset($_REQUEST['Provincia'])){
	$nombreProvincia= $_REQUEST['Provincia'];
	}
if (isset($_REQUEST['Municipio'])){
	$nombreMunicipio= $_REQUEST['Municipio'];
	}

$nombreProvincia = str_replace(" ","%20",$nombreProvincia);

//Prepara la petición GET
$request = 'http://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCallejero.asmx/ConsultaMunicipio?Provincia=';
$request = $request . $nombreProvincia;
$request = $request . '&Municipio=';
$request = $request . $nombreMunicipio;
// create a curl resource
$ch = curl_init();

// set request
curl_setopt($ch, CURLOPT_URL, $request);
//Content type debe ser text/xml
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Accept: "text/xml"'));
// return the transfer as a string
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
// $output contains the output string
$output = curl_exec($ch);

// close curl resource to free up system resources
curl_close($ch);
// Envía el resultado en formato XML
echo $output;
?>
