@extends('master')
@section('content')
<div class="cabecera">
	<ul class="menu">
		<li><a href="#">Inicio</a>
		<li><a href="#">¿Quienes somos?</a>
			<ul>
				<li><a href="#">Submenu 11</a></li>
				<li><a href="#">Submenu 12</a></li>
				<li><a href="#">Submenu 13</a></li>
				<li><a href="#">Submenu 14</a>
					<ul>
						<li><a href="#">Submenu 141</a></li>
						<li><a href="#">Submenu 142</a></li>
						<li><a href="#">Submenu 143</a></li>
						<li><a href="#">Submenu 144</a></li>
					</ul>
				</li>
			</ul>
		</li>
		<li><a href="#">Contacto</a>
			<ul>
				<li><a href="#">Submenu 31</a></li>
				<li><a href="#">Submenu 32</a></li>
				<li><a href="#">Submenu 33</a></li>
				<li><a href="#">Submenu 34</a></li>
			</ul>
		</li>
		<li><a href="#">Acerca de</a></li>
		<li><a href="#">Servicios</a></li>
	<ul>
</div>
@endSection