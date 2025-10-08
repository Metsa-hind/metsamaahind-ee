<?php
// Simple form test without reCAPTCHA to isolate the issue
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Enable error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Log all activity
$log_file = __DIR__ . '/form_debug.log';
$log_message = date('Y-m-d H:i:s') . " - " . $_SERVER['REQUEST_METHOD'] . " request received\n";
file_put_contents($log_file, $log_message, FILE_APPEND);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    $response = ['success' => false, 'message' => 'Method not allowed', 'method' => $_SERVER['REQUEST_METHOD']];
    echo json_encode($response);
    file_put_contents($log_file, date('Y-m-d H:i:s') . " - Method not allowed: " . $_SERVER['REQUEST_METHOD'] . "\n", FILE_APPEND);
    exit;
}

// Check if we have POST data
if (empty($_POST)) {
    $response = [
        'success' => false, 
        'message' => 'No POST data received',
        'raw_input' => file_get_contents('php://input'),
        'content_type' => $_SERVER['CONTENT_TYPE'] ?? 'not set'
    ];
    echo json_encode($response);
    file_put_contents($log_file, date('Y-m-d H:i:s') . " - No POST data\n", FILE_APPEND);
    exit;
}

// Log received data
file_put_contents($log_file, date('Y-m-d H:i:s') . " - POST data: " . print_r($_POST, true) . "\n", FILE_APPEND);

// Validate required fields
$required_fields = ['name', 'phone', 'email', 'message'];
$missing_fields = [];

foreach ($required_fields as $field) {
    if (empty($_POST[$field])) {
        $missing_fields[] = $field;
    }
}

if (!empty($missing_fields)) {
    $response = [
        'success' => false,
        'message' => 'Missing required fields: ' . implode(', ', $missing_fields),
        'received_fields' => array_keys($_POST)
    ];
    echo json_encode($response);
    file_put_contents($log_file, date('Y-m-d H:i:s') . " - Missing fields: " . implode(', ', $missing_fields) . "\n", FILE_APPEND);
    exit;
}

// Try to send email (without reCAPTCHA for now)
$to = 'info@erametsaselts.ee';
$subject = 'Kontaktivormi sõnum - ' . $_POST['name'];
$message = "Nimi: " . $_POST['name'] . "\n";
$message .= "Telefon: " . $_POST['phone'] . "\n";
$message .= "E-mail: " . $_POST['email'] . "\n";
$message .= "Sõnum: " . $_POST['message'] . "\n";

$headers = "From: info@metsamaahind.ee\r\n";
$headers .= "Reply-To: " . $_POST['email'] . "\r\n";
$headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

file_put_contents($log_file, date('Y-m-d H:i:s') . " - Attempting to send email\n", FILE_APPEND);

$mail_sent = mail($to, $subject, $message, $headers);

if ($mail_sent) {
    $response = [
        'success' => true,
        'message' => 'E-kiri edukalt saadetud!',
        'debug_info' => [
            'mail_function_exists' => function_exists('mail'),
            'to' => $to,
            'subject' => $subject
        ]
    ];
    file_put_contents($log_file, date('Y-m-d H:i:s') . " - Email sent successfully\n", FILE_APPEND);
} else {
    $response = [
        'success' => false,
        'message' => 'E-kirja saatmine ebaõnnestus',
        'debug_info' => [
            'mail_function_exists' => function_exists('mail'),
            'last_error' => error_get_last(),
            'to' => $to
        ]
    ];
    file_put_contents($log_file, date('Y-m-d H:i:s') . " - Email sending failed\n", FILE_APPEND);
}

echo json_encode($response);
?>