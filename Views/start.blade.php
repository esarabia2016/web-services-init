@extends('masterapp')
@section('content')
<div style="padding: 10px;width: 40%;">
    <form action="/index.php" method="post" style="border: 2px solid black;padding: 10px;">
        <label for="email">E-mail: </label><br>
        <input type="text" id="email" name="email" value=""><br>
        <br>
        <a href="{{$url}}">Validar con Google</a><br>
        <br>
        <input type="submit" name="Google" id="Google" value="Validar con Google"><br>
    </form>
</div>
@endSection