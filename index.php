<?php
    require "vendor/autoload.php";
    
    use eftec\bladeone\Bladeone;
    
    $views = __DIR__ . '/Views';
    $cache = __DIR__ . '/Cache';
    
    $blade = new BladeOne($views, $cache, BladeOne::MODE_DEBUG);
    
    session_start();
    
    $header = "INFORMACION CATASTRAL";
    $email = "";
    
    if(empty($_POST))
        {
        // authenticate code from Google OAuth Flow
        if (isset($_GET['code'])) {
            $client = new Google_Client();
            $clientID = '988004551385-80j22p399l096bhhiacdvi09ppdo3frh.apps.googleusercontent.com';
            $clientSecret = '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';
            $redirectUri = 'http://localhost:8000';
            
            $client->setClientId($clientID);
            $client->setClientSecret($clientSecret);
            $client->setRedirectUri($redirectUri);
            
            $code = filter_input(INPUT_GET,'code');
            $scope = filter_input(INPUT_GET,'scope');
            $authuser = filter_input(INPUT_GET,'authuser');
            $token = $client->fetchAccessTokenWithAuthCode($code);
 
            // get profile info
            $google_oauth = new Google_Service_Oauth2($client);
            $google_account_info = $google_oauth->userinfo->get();
            $email =  $google_account_info->email;
            $_SESSION['email'] = $email;
            
            header("Location: /catform.php");

            // Usuario identificado
        } else {
            // init configuration
            $clientID = '988004551385-80j22p399l096bhhiacdvi09ppdo3frh.apps.googleusercontent.com';
            $clientSecret = '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';
            $redirectUri = 'http://localhost:8000';
 
            // create Client Request to access Google API
            $client = new Google_Client();
            $client->setClientId($clientID);
            $client->setClientSecret($clientSecret);
            $client->setRedirectUri($redirectUri);
            $client->addScope("email");

            $url = $client->createAuthUrl();
            
            echo $blade-> run ('start',['header'=>$header,'url'=>$url]);
            }
        }
    else 
        {
        header("Location: /catform.php");
        }
?>
