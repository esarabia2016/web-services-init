@extends('master')
@section('content')
<div style="padding: 10px;width: 40%;">
    <form action="/index.php" method="post" style="border: 2px solid black;padding: 10px;">
        <label for="email">E-mail: </label><br>
        <input type="text" id="email" name="email" value="{{$email}}"><br>
        <label for="password">Password: </label><br>
        <input type="text" id="password" name="password">
        <br><br>
        <input type="submit" name="Envio" id="Envio" value="Envio"><br>
        <br>
        <input type="submit" name="Github" id="Github" value="Github"><br>
        <br>
        <input type="submit" name="Google" id="Google" value="Google"><br>
    </form>
</div>
@endSection