<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header("Content-Type: application/json");

require __DIR__ . '/autoload.php';

if ($_SERVER["REQUEST_METHOD"] !== "POST") {
    http_response_code(405);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

$name = trim($data['name'] ?? '');
$email = trim($data['email'] ?? '');
$Subject = trim($data['Subject'] ?? '');
$message = trim($data['message'] ?? '');

if (!$name || !$email || !$message) {
    http_response_code(400);
    echo json_encode(["success" => false, "message" => "Campos inválidos"]);
    exit;
}

$mail = new PHPMailer(true);

try {
    $mail->isSMTP();
    $mail->Host = $config['smtp_host'];
    $mail->SMTPAuth = true;
    $mail->Username = $config['smtp_user'];
    $mail->Password = $config['smtp_pass'];
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
    $mail->Port = $config['smtp_port'];
    

    $mail->setFrom('joaoroblez76@gmail.com', 'Portfólio - Contato');
    $mail->addReplyTo($email, $name);
    $mail->addAddress('joaoroblez@sparklab.dev.br');

    $mail->isHTML(true);
    $mail->CharSet = 'UTF-8';
    $mail->Subject = $Subject;
    $mail->Body = "
    <strong>Nome:</strong> {$name}<br>
    <strong>Email:</strong> {$email}<br><br>
    <strong>Assunto:</strong> {$Subject}<br><br>
    <strong>Mensagem:</strong><br>
    {$message}
  ";

    $mail->AltBody = "Nome: $name\nEmail: $email\nAssunto: $Subject\nMensagem: $message";

    $mail->send();

    echo json_encode(["success" => true]);
} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(["success" => false, "message" => "Erro ao enviar email"]);
}
