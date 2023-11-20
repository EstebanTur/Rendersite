<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["name"];
    $email = $_POST["email"];
    $message = $_POST["message"];
    $to = "javierabalos.ar@gmail.com"; // Cambia esta dirección por tu dirección de correo
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    mail($to, $subject, $message, $headers);
    echo "Message sent successfully!";
} else {
    echo "Error: Form submission method not allowed.";
}
?>
