<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header("Content-Type: application/json");

require __DIR__ . '/vendor/autoload.php';

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    exit;
}

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$subject = trim($_POST['Subject'] ?? 'Contato do Portfólio');
$message = trim($_POST['message'] ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode([
        "success" => false,
        "message" => "Campos obrigatórios não preenchidos"
    ]);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'joaoroblez76@gmail.com';
    $mail->Password = 'tnpc bdcd ihrr sxcv';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = 587;

    $mail->setFrom('joaoroblez76@gmail.com', 'Portfólio - Contato');
    $mail->addReplyTo($email, $name);
    $mail->addAddress('joaoroblez@sparklab.dev.br');

    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = $subject;
    $mail->Body = "
        <strong>Nome:</strong> {$name}<br>
        <strong>Email:</strong> {$email}<br><br>
        <strong>Assunto:</strong> {$subject}<br><br>
        <strong>Mensagem:</strong><br>
        {$message}
    ";

    $mail->AltBody = "Nome: $name\nEmail: $email\nAssunto: $subject \nMensagem: $message";

    $mail->send();

    echo json_encode(["success" => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode([
        "success" => false,
        "message" => "Erro ao enviar email"
    ]);
}
