<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Log all received data for debugging
error_log('POST data: ' . print_r($_POST, true));
error_log('FILES data: ' . print_r($_FILES, true));

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['error' => 'Method not allowed', 'debug' => 'Wrong HTTP method: ' . $_SERVER['REQUEST_METHOD']]);
    exit();
}

function verifyRecaptcha($token) {
    $secret = '6Le21i8jAAAAAH0ntAd0h1ZPWeiCTYhAJBD-ClIi';
    
    error_log('Verifying reCAPTCHA token: ' . $token);
    
    $response = file_get_contents('https://www.google.com/recaptcha/api/siteverify?secret=' . $secret . '&response=' . $token);
    $result = json_decode($response, true);
    
    error_log('reCAPTCHA response: ' . print_r($result, true));
    
    return $result['success'] ?? false;
}

try {
    error_log('Starting form processing...');
    
    // Get form data
    $recaptchaToken = $_POST['recaptcha_token'] ?? '';
    $name = $_POST['name'] ?? '';
    $email = $_POST['email'] ?? '';
    $kataster = $_POST['kataster'] ?? '';
    $phone = $_POST['phone'] ?? '';
    $message = $_POST['message'] ?? '';

    error_log("Form data - Name: $name, Email: $email, Token: $recaptchaToken");

    // Validate required fields
    if (empty($name) || empty($email)) {
        http_response_code(400);
        echo json_encode(['error' => 'Nimi ja e-mail on kohustuslikud väljad', 'debug' => 'Missing required fields']);
        exit();
    }

    // Validate email
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        http_response_code(400);
        echo json_encode(['error' => 'Palun sisestage kehtiv e-mail', 'debug' => 'Invalid email format']);
        exit();
    }

    // Verify reCAPTCHA
    if (empty($recaptchaToken)) {
        http_response_code(400);
        echo json_encode(['error' => 'reCAPTCHA token puudub', 'debug' => 'No reCAPTCHA token']);
        exit();
    }

    if (!verifyRecaptcha($recaptchaToken)) {
        http_response_code(400);
        echo json_encode(['error' => 'reCAPTCHA kontroll ebaõnnestus. Palun proovige uuesti.', 'debug' => 'reCAPTCHA verification failed']);
        exit();
    }

    // Prepare email content
    $emailContent = "Uus kontakti päring metsamaahind.ee-st:\n\n";
    $emailContent .= "Nimi: " . $name . "\n";
    $emailContent .= "E-mail: " . $email . "\n";
    $emailContent .= "Kataster: " . ($kataster ?: 'Ei täidetud') . "\n";
    $emailContent .= "Telefon: " . ($phone ?: 'Ei täidetud') . "\n";
    $emailContent .= "Lisainfo: " . ($message ?: 'Ei täidetud') . "\n\n";
    $emailContent .= "Saadetud: " . date('d.m.Y H:i:s') . "\n";

    // Send email
    $to = 'info@erametsaselts.ee';
    $subject = 'Kontakt metsamaahind.ee';
    $headers = "From: " . $email . "\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    error_log("Attempting to send email to: $to");
    error_log("Email content: $emailContent");

    // Check if mail function exists
    if (!function_exists('mail')) {
        http_response_code(500);
        echo json_encode(['error' => 'Mail function not available', 'debug' => 'PHP mail() function is not available']);
        exit();
    }

    if (mail($to, $subject, $emailContent, $headers)) {
        error_log('Email sent successfully');
        http_response_code(200);
        echo json_encode(['message' => 'Vorm on edukalt saadetud! Vastame teile võimalikult kiiresti.', 'debug' => 'Email sent successfully']);
    } else {
        error_log('Email sending failed');
        http_response_code(500);
        echo json_encode(['error' => 'E-maili saatmisel tekkis viga. Palun proovige uuesti.', 'debug' => 'mail() function returned false']);
    }

} catch (Exception $e) {
    error_log('Contact form error: ' . $e->getMessage());
    error_log('Stack trace: ' . $e->getTraceAsString());
    http_response_code(500);
    echo json_encode(['error' => 'Vormi saatmisel tekkis viga. Palun proovige uuesti.', 'debug' => $e->getMessage()]);
}
?>