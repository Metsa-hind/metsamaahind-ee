<?php
// Simple test version for Zone.ee debugging
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Log errors to a file we can check
function logError($message) {
    $log = date('Y-m-d H:i:s') . " - " . $message . "\n";
    file_put_contents('contact_errors.log', $log, FILE_APPEND | LOCK_EX);
}

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    logError('Wrong method: ' . $_SERVER['REQUEST_METHOD']);
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed']);
    exit();
}

try {
    logError('Form submission started');
    
    // Get form data
    $recaptchaToken = $_POST['recaptcha_token'] ?? '';
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $kataster = $_POST['kataster'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $message = $_POST['message'] ?? '';

    logError("Received data - Name: $name, Email: $email, Has token: " . (!empty($recaptchaToken) ? 'yes' : 'no'));

    // Validate required fields
    if (empty($name) || empty($email)) {
        logError('Missing required fields');
        http_response_code(400);
        echo json_encode(['error' => 'Nimi ja e-mail on kohustuslikud väljad']);
        exit();
    }

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        logError('Invalid email format: ' . $email);
        http_response_code(400);
        echo json_encode(['error' => 'Palun sisestage kehtiv e-mail']);
        exit();
    }

    // Skip reCAPTCHA for now to test email functionality
    logError('Skipping reCAPTCHA verification for testing');

    // Prepare email content
    $emailContent = "TEST - Kontakt metsamaahind.ee-st:\n\n";
    $emailContent .= "Nimi: " . $name . "\n";
    $emailContent .= "E-mail: " . $email . "\n";
    $emailContent .= "Kataster: " . ($kataster ?: 'Ei täidetud') . "\n";
    $emailContent .= "Telefon: " . ($phone ?: 'Ei täidetud') . "\n";
    $emailContent .= "Lisainfo: " . ($message ?: 'Ei täidetud') . "\n\n";
    $emailContent .= "Saadetud: " . date('d.m.Y H:i:s') . "\n";

    // Try simple email first
    $to = 'karlsimmer@gmail.com';
    $subject = 'TEST - Kontakt metsamaahind.ee';
    
    // Simple headers for Zone.ee
    $headers = "From: noreply@metsamaahind.ee\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    logError("Attempting to send email to: $to");

    // Check if mail function exists
    if (!function_exists('mail')) {
        logError('Mail function not available');
        http_response_code(500);
        echo json_encode(['error' => 'Mail teenus pole saadaval']);
        exit();
    }

    $mailResult = mail($to, $subject, $emailContent, $headers);
    
    if ($mailResult) {
        logError('Email sent successfully');
        http_response_code(200);
        echo json_encode(['message' => 'TEST: Vorm on edukalt saadetud! (reCAPTCHA ajutiselt välja lülitatud)']);
    } else {
        logError('Mail function returned false');
        
        // Try alternative method for Zone.ee
        $altHeaders = "From: noreply@" . $_SERVER['HTTP_HOST'] . "\r\n";
        $altHeaders .= "Reply-To: " . $email . "\r\n";
        
        $altResult = mail($to, $subject, $emailContent, $altHeaders);
        
        if ($altResult) {
            logError('Alternative email method worked');
            http_response_code(200);
            echo json_encode(['message' => 'TEST: Vorm on edukalt saadetud! (alternatiivne meetod)']);
        } else {
            logError('Both email methods failed');
            http_response_code(500);
            echo json_encode(['error' => 'E-maili saatmine ebaõnnestus Zone.ee serveris']);
        }
    }

} catch (Exception $e) {
    logError('Exception: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Serveri viga: ' . $e->getMessage()]);
}
?>