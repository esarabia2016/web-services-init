@extends('master')
@section('content')
<form method="post" action="catform.php" id="form1" style="MARGIN-TOP: 0px">
    <input name="txtUrbRus" id="txtUrbRus"> 
    <input name="idMunicipio" id="idMunicipio">
    <input name="hdProvincia" id="hdProvincia"> 
    <input name="hdMunicipio" id="hdMunicipio">
    <input name="hdCodVia" id="hdCodVia"> 
    <input name="tipoBusqueda" id="tipoBusqueda">
    <input name="hdRefCat" id="hdRefCat">
</form>
@endSection