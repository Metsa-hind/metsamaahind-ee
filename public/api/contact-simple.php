<?php
// Simple contact handler with honeypot anti-spam protection (no CAPTCHA)
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

try {
    // Get form data
    $name = $_POST['name'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $email = $_POST['email'] ?? '';
    $message = $_POST['message'] ?? '';
    $honeypot = $_POST['website'] ?? ''; // Honeypot field - should be empty

    // Anti-spam: Check honeypot field
    if (!empty($honeypot)) {
        // Bot detected - honeypot field was filled
        http_response_code(400);
        echo json_encode(['error' => 'Spam detected. Please try again.']);
        exit();
    }

    // Validate required fields
    if (empty($name) || empty($email)) {
        http_response_code(400);
        echo json_encode(['error' => 'Nimi ja e-mail on kohustuslikud väljad']);
        exit();
    }

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Palun sisestage kehtiv e-mail']);
        exit();
    }

    // Prepare email content
    $emailContent = "Uus kontaktivormi sõnum metsamaahind.ee-st:\n\n";
    $emailContent .= "Nimi: " . $name . "\n";
    $emailContent .= "E-mail: " . $email . "\n";
    $emailContent .= "Telefon: " . ($phone ?: 'Ei täidetud') . "\n";
    $emailContent .= "Lisainfo: " . ($message ?: 'Ei täidetud') . "\n\n";
    $emailContent .= "Saadetud: " . date('d.m.Y H:i:s') . "\n";

    // Send email with better headers for Zone.ee
    $to = 'info@metsamaahind.ee';
    $subject = 'Kontakt metsamaahind.ee';
    $headers = "From: noreply@zoneas.eu\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Return-Path: noreply@zoneas.eu\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $emailContent, $headers)) {
        http_response_code(200);
        echo json_encode(['message' => 'Sõnum edukalt saadetud! Võtame Teiega peagi ühendust.']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'E-maili saatmisel tekkis viga. Palun proovige uuesti.']);
    }

} catch (Exception $e) {
    error_log('Contact form error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Vormi saatmisel tekkis viga. Palun proovige uuesti.']);
}
?>