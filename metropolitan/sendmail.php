<?php
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;

    require 'phpmailer/src/Exception.php';
    require 'phpmailer/src/PHPMailer.php';

    $mail = new PHPMailer( true);
    $mail-> CharSet = 'utf8';
    $mail-> setLanguage("en", 'phpmailer/language');
    $mail->isHTML(true);

    //from mail
    $mail->setFrom('andriisohomonian2002windows@gmail.com','gest e-mail');
    //for mail
    $mail->addAddress('andriisohomonian2002@gmail.com');
    //about
    $mail->Subject = 'information';

    //body massage
    $body = '<h1>A letter from a guest</h1>';

    if(trim(!empty($_POST['name']))){
        $body.='<p><strong>First name:</strong></p>'.$_POST['name'].'</p>';
    }
    if(trim(!empty($_POST['first-name']))){
        $body.='<p><strong>First name:</strong></p>'.$_POST['first-name'].'</p>';
    }
    if(trim(!empty($_POST['email']))){
        $body.= '<p><strong>E-mail gest:</strong></p>'.$_POST['email'].'</p>';
    }

    $mail->Body = $body;

    //send
    if(!$mail->send()){
        $massage = 'error';
    }else{
        $massage = 'completed';
    }

    $response = ['massage' => $massage];
    header('Content-type: application/json');
    echo json_encode($response);

?>
