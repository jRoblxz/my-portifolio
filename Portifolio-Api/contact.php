<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(["success" => false, "message" => "Método não permitido"]);
  exit;
}

require __DIR__ . '/PHPMailer/PHPMailer.php';
require __DIR__ . '/PHPMailer/SMTP.php';
require __DIR__ . '/PHPMailer/Exception.php';

$config = require __DIR__ . '/config.php';

$name = trim($_POST['name'] ?? '');
$email = trim($_POST['email'] ?? '');
$subject = trim($_POST['Subject'] ?? 'Contato do Portfólio');
$message = trim($_POST['message'] ?? '');

if (!$name || !$email || !$message) {
  http_response_code(400);
  echo json_encode(["success" => false, "message" => "Campos inválidos"]);
  exit;
}

$mail = new PHPMailer(true);

try {
  $mail->isSMTP();
  $mail->Host = $config['SMTP_HOST'];
  $mail->SMTPAuth = true;
  $mail->Username = $config['SMTP_USER'];
  $mail->Password = $config['SMTP_PASS'];
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
  $mail->Port = $config['SMTP_PORT'];

  $mail->setFrom($config['SMTP_USER'], 'Portfólio - Contato');
  $mail->addReplyTo($email, $name);
  $mail->addAddress('joaoroblez@sparklab.dev.br');

  $mail->isHTML(true);
  $mail->CharSet = 'UTF-8';
  $mail->Subject = $subject;
  $mail->Body = "
    <strong>Nome:</strong> {$name}<br>
    <strong>Email:</strong> {$email}<br><br>
    <strong>Mensagem:</strong><br>{$message}
  ";

  $mail->send();

  echo json_encode(["success" => true]);
} catch (Exception $e) {
  http_response_code(500);
  echo json_encode(["success" => false, "message" => "Erro ao enviar email"]);
}
