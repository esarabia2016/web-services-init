<?php
    require "vendor/autoload.php";
    
    use eftec\bladeone\Bladeone;
    
    $views = __DIR__ . '/Views';
    $cache = __DIR__ . '/Cache';
    
    $blade = new BladeOne($views, $cache, BladeOne::MODE_DEBUG);
    
    session_start();
    
    $header = "INICIO DE SESSION";
    $email = "";
    
    if(empty($_POST))
        {
        // authenticate code from Google OAuth Flow
        if (isset($_GET['code'])) {
            $token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
            $client->setAccessToken($token['access_token']);
 
            // get profile info
            $google_oauth = new Google_Service_Oauth2($client);
            $google_account_info = $google_oauth->userinfo->get();
            $email =  $google_account_info->email;
            $name =  $google_account_info->name;

            // now you can use this profile info to create account in your website and make user logged in.
        } else {
            // authenticate code from Google OAuth Flow
            //$token = $client->fetchAccessTokenWithAuthCode($_GET['code']);
            //$client->setAccessToken($token['access_token']);
 
            // get profile info
            //$google_oauth = new Google_Service_Oauth2($client);
            //$google_account_info = $google_oauth->userinfo->get();
            //$email =  $google_account_info->email;
            //$name =  $google_account_info->name;

            //echo "<a href='".$client->createAuthUrl()."'>Google Login</a>";
            echo $blade-> run ('start',['header'=>$header,'email'=>$email]);
            }
        }
    else 
        {
        $email = filter_input(INPUT_POST,'email');
        
        $Envio = filter_input(INPUT_POST,'Envio');
        if ($Envio == "Envio"){
                $header = "Inicio de sesion email " . $email;
                echo $blade-> run ('start',['header'=>$header,'email'=>$email]);
        }else{
            $Github = filter_input(INPUT_POST,'Github');
        
            if ($Github == "Github"){
                $header = "Inicio de sesion Github " . $email;
                echo $blade-> run ('start',['header'=>$header,'email'=>$email]);
                }
            else{
                $Google = filter_input(INPUT_POST,'Google');
                
                if ($Google == "Gooogle"){
                    $header = "Inicio de sesion Google " . $email;
                    echo $blade-> run ('start',['header'=>$header,'email'=>$email]);
                    }
                else {
                    $header = "Inicio de sesion " . $email;
                    echo $blade-> run ('main',['header'=>$header,'email'=>$email]);
                    }
                }
            }
        }
?>
