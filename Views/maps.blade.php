@extends('master')
@section('content')
<div style="float:left; width: 100%; text-align: center;">
<br>
<p><input type="button" onclick="javascript:showlocation()" value="Localizaci&oacute;n"></p>
<p><span style="font-size: 12px">Latitud (grados): </span><span style="font-size: 12px" id="latitude">---</span><br>
<span style="font-size: 12px">Longitud (grados): </span><span style="font-size: 12px" id="longitude">---</span><br>
<span style="font-size: 12px">Tiempo: </span><span style="font-size: 12px" id="timestamp">---</span></p>
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

   var date = new Date(position.timestamp);
   var year    = date.getFullYear();
   var month   = date.getMonth()+1;
   var day     = date.getDate();
   var hour    = date.getHours();
   var minute  = date.getMinutes();
   var seconds = date.getSeconds();  
   document.getElementById('timestamp').innerHTML = day+"/"+month+"/"+year+"  "+hour+":"+minute+":"+seconds;

   var latlon=position.coords.latitude+","+position.coords.longitude;
   var img_url="https://www.google.com/maps?width=500&amp;height=500&amp;hl=es&amp;q="+position.coords.latitude+","+position.coords.longitude+"&amp;t=k&amp;z=20&amp;ie=UTF8&amp;iwloc=B&amp;output=embed";
  document.getElementById("mapholder").innerHTML="<iframe width='500' height='500' src='"+img_url+"'></iframe>";
}
function callerror(error)
  {
  document.getElementById('soporte').innerHTML=error.message;
  }
</script>
</div>
@endSection