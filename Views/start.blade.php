@extends('masterapp')
@section('content')
    <div style="margin: 5px; padding: 5px;">
        <h1>Para utilizar los servicios de este sitio web es necesario validarse con Google</h1>
    </div>
    <button onclick="location.href='{{$url}}'" type="button" style="padding: 15px 32px;margin: 5px; font-size: 32px;">
         Validar con Google</button>
@endSection