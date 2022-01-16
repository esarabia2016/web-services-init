@extends('master')
@section('content')
<div class="cabecera">
	<ul class="menu">
		<li><a href="#">Inicio</a>
		<li><a href="#">Localización</a>
			<ul>
				<li><a href="pos.php">Posición</a></li>
				<li><a href="maps.php">Mapas</a></li>
			</ul>
		</li>
		<li><a href="#">El tiempo</a>
		</li>
		<li><a href="#">Catastro</a></li>
		<li><a href="#">Finanzas</a></li>
	<ul>
</div>
@endSection