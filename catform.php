<?php
    require "vendor/autoload.php";
    
    use eftec\bladeone\Bladeone;
    
    $views = __DIR__ . '/Views';
    $cache = __DIR__ . '/Cache';
    
    $blade = new BladeOne($views, $cache, BladeOne::MODE_DEBUG);
    
    session_start();
    
    $header = "INICIO DE SESSION";
    $email = "";
    
    echo $blade-> run ('catform',['header'=>$header,'email'=>$email]);
?>