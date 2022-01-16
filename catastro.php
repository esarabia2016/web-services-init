<?php
    require "vendor/autoload.php";
    
    use eftec\bladeone\Bladeone;
    
    $views = __DIR__ . '/Views';
    $cache = __DIR__ . '/Cache';
    
    $blade = new BladeOne($views, $cache, BladeOne::MODE_DEBUG);
    
    session_start();
    
    $header = "INICIO DE SESSION";
    $email = "";
    
    $nombreProvincia = "madrid";
    if (isset($_REQUEST['Provincia'])){
	$nombreProvincia= $_REQUEST['Provincia'];
	}
    $nombreMunicipio = "madrid";
    if (isset($_REQUEST['Municipio'])){
	$nombreMunicipio= $_REQUEST['Municipio'];
	}
    $ReferenciaCatastral = "";
    if (isset($_REQUEST['RC'])){
	$ReferenciaCatastral= $_REQUEST['RC'];
	}
    
    //Prepara la petición GET
    $request = 'http://ovc.catastro.meh.es/ovcservweb/OVCSWLocalizacionRC/OVCCallejero.asmx/Consulta_DNPRC?Provincia=';
    $request = $request . $nombreProvincia;
    $request = $request . '&Municipio=';
    $request = $request . $nombreMunicipio;
    $request = $request . '&RC=';
    $request = $request . $ReferenciaCatastral;
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
    // Converto to an array variable
    $InformacionCatastral = new SimpleXMLElement($output);
    
    echo $blade-> run ('cat',['header'=>$header,'email'=>$email,'InformacionCatastral'=>$InformacionCatastral]);
?>