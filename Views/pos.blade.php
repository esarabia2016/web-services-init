@extends('masterapp')
@section('content')
<div style="float:left; width: 100%; text-align: center;">
<br>
<p><input type="button" onclick="javascript:showlocation()" value="Localizaci&oacute;n"></p>
<p><span style="font-size: 12px">Latitud (grados): </span><span style="font-size: 12px" id="latitude">---</span><br>
<span style="font-size: 12px">Longitud (grados): </span><span style="font-size: 12px" id="longitude">---</span><br>
<span style="font-size: 12px">Precisi&oacute;n (metros): <span style="font-size: 12px" id="accuracy">---</span><br>
</span><span style="font-size: 12px">Altitud (metros): </span><span style="font-size: 12px" id="altitude">---</span><br>
<span style="font-size: 12px">Precisi&oacute;n (metros): </span><span style="font-size: 12px" id="altitudeaccuracy">---</span><br>
<span style="font-size: 12px">Velocidad (m/S): </span><span style="font-size: 12px" id="speed">---</span><br>
<span style="font-size: 12px">Tiempo: </span><span style="font-size: 12px" id="timestamp">---</span></p>
<p><span style="font-size: 12px">Soporte: </span></p>
<p>&nbsp;</p>
<div id="mapholder">&nbsp;</div>
</div>
<script>
function showlocation()
{
   if(navigator.geolocation)
   {
   navigator.geolocation.getCurrentPosition(callback,callerror);
   }
else
   {
   document.getElementById('soporte').innerHTML="Localizaci&oacute;n no soportada";
   }
}
 
function callback(position)
{
   document.getElementById('latitude').innerHTML = position.coords.latitude;
   document.getElementById('longitude').innerHTML = position.coords.longitude;
   document.getElementById('accuracy').innerHTML = position.coords.accuracy;
   document.getElementById('altitude').innerHTML = position.coords.altitude;
   document.getElementById('altitudeaccuracy').innerHTML = position.coords.altitudeAccuracy;
   document.getElementById('speed').innerHTML = position.coords.speed;

   var date = new Date(position.timestamp);
   var year    = date.getFullYear();
   var month   = date.getMonth()+1;
   var day     = date.getDate();
   var hour    = date.getHours();
   var minute  = date.getMinutes();
   var seconds = date.getSeconds();  
   document.getElementById('timestamp').innerHTML = day+"/"+month+"/"+year+"  "+hour+":"+minute+":"+seconds;
}
function callerror(error)
  {
  document.getElementById('soporte').innerHTML=error.message;
  }
</script>
</div>
@endSection