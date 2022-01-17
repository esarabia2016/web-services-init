@extends('master')
@section('content')
<div style="float:left; width: 100%; text-align: center;">
<H1>Consulta Datos Catastrales</H1>
<?php 
// Display variable content
echo("Año Construcción: " . $InformacionCatastral->bico->bi->dt->locs->lous->lourb->dir->cv);
echo("<br>");
echo("Uso: " . $InformacionCatastral->bico->bi->debi->luso);
echo("<br>");
echo($InformacionCatastral->bico->lcons->cons[0]->lcd);
echo(" : ");
echo($InformacionCatastral->bico->lcons->cons[0]->dfcons->stl);
echo(" m2 ");
echo("<br>");
echo($InformacionCatastral->bico->lcons->cons[1]->lcd);
echo(" : ");
echo($InformacionCatastral->bico->lcons->cons[1]->dfcons->stl);
echo(" m2 ");
echo("<br>");
if ( $InformacionCatastral->bico->lcons->cons[2]->lcd != "") {
	echo($InformacionCatastral->bico->lcons->cons[2]->lcd);
	echo(" : ");
	echo($InformacionCatastral->bico->lcons->cons[2]->dfcons->stl);
	echo(" m2 ");
	echo("<br>");};
if ( $InformacionCatastral->bico->lcons->cons[3]->lcd != "") {
	echo($InformacionCatastral->bico->lcons->cons[3]->lcd);
	echo(" : ");
	echo($InformacionCatastral->bico->lcons->cons[3]->dfcons->stl);
	echo(" m2 ");
	echo("<br>");};
if ( $InformacionCatastral->bico->lcons->cons[4]->lcd != "") {
	echo($InformacionCatastral->bico->lcons->cons[4]->lcd);
	echo(" : ");
	echo($InformacionCatastral->bico->lcons->cons[4]->dfcons->stl);
	echo(" m2 ");
	echo("<br>");};
// Muestra la respuesta completa
//echo("<h3>Respuesta completa en formato plano</h3>");
//var_dump($output);
?>
</div>
@endSection