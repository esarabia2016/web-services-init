<!DOCTYPE html>
<html>
    <head>
        <meta charset="UTF-8">
        <link href="style.css" rel="stylesheet" type="text/css">
        <title>Web Services</title>
        <script type="text/javascript" language="javascript" src="OVCBusqueda_data/OVCNavegador.js"></script>
	<script type="text/javascript" language="javascript" src="OVCBusqueda_data/OVCFunciones.js"></script>
	<script type="text/javascript" language="javascript" src="OVCBusqueda_data/OVCDPVC2.js"></script>
	<script type="text/javascript" language="javascript" src="OVCBusqueda_data/OVCDPVC2Bis.js"></script>
    </head>
    <body>
        <header style=" padding: 40px;text-align: center;background: #1abc9c;font-size: 30px;">
            <h1>{{$header}}
        </header>
        <div class="cabecera">
            <ul class="menu">
		<li><a href="#">Inicio</a>
		<li><a href="#">Localización</a>
			<ul>
				<li><a href="pos.php">Posición</a></li>
				<li><a href="maps.php">Mapas</a></li>
			</ul>
		</li>
		<li><a href="weather.php">El tiempo</a></li>
		<li><a href="catform.php">Catastro</a></li>
		<li><a href="#">Finanzas</a></li>
            <ul>
        </div>
        @yield('content')
    </body>
</html>