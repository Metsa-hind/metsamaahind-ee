<?php
// Simple upload handler with honeypot anti-spam protection (no CAPTCHA)
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

    // Handle file upload if present
    $fileInfo = '';
    $uploadDir = 'uploads/';
    
    if (isset($_FILES['metsakava_file']) && $_FILES['metsakava_file']['error'] === UPLOAD_ERR_OK) {
        // Create uploads directory if it doesn't exist
        if (!is_dir($uploadDir)) {
            mkdir($uploadDir, 0755, true);
        }

        $uploadedFile = $_FILES['metsakava_file'];
        $fileName = $uploadedFile['name'];
        $fileSize = $uploadedFile['size'];
        $fileTmp = $uploadedFile['tmp_name'];
        
        // Generate unique filename
        $fileExtension = pathinfo($fileName, PATHINFO_EXTENSION);
        $uniqueFileName = date('Y-m-d_H-i-s') . '_' . uniqid() . '.' . $fileExtension;
        $uploadPath = $uploadDir . $uniqueFileName;

        // Validate file type
        $allowedTypes = ['pdf', 'doc', 'docx', 'jpg', 'jpeg', 'png'];
        if (!in_array(strtolower($fileExtension), $allowedTypes)) {
            http_response_code(400);
            echo json_encode(['error' => 'Lubatud failiformaadid: PDF, DOC, DOCX, JPG, PNG']);
            exit();
        }

        // Validate file size (max 10MB)
        if ($fileSize > 10 * 1024 * 1024) {
            http_response_code(400);
            echo json_encode(['error' => 'Faili suurus ei tohi ületada 10MB']);
            exit();
        }

        // Move uploaded file
        if (move_uploaded_file($fileTmp, $uploadPath)) {
            $fileInfo = "Metsakava fail: " . $fileName . " (salvestatud kui: " . $uniqueFileName . ")\n";
            $fileInfo .= "Faili suurus: " . round($fileSize / 1024, 2) . " KB\n";
        } else {
            $fileInfo = "Faili üleslaadimine ebaõnnestus\n";
        }
    } else {
        $fileInfo = "Metsakava faili ei esitatud\n";
    }

    // Prepare email content
    $emailContent = "Uus metsakava hindamise päring metsamaahind.ee-st:\n\n";
    $emailContent .= "Nimi: " . $name . "\n";
    $emailContent .= "E-mail: " . $email . "\n";
    $emailContent .= $fileInfo;
    $emailContent .= "Lisainfo: " . ($message ?: 'Ei täidetud') . "\n\n";
    $emailContent .= "Saadetud: " . date('d.m.Y H:i:s') . "\n";

    // Send email with better headers for Zone.ee
    $to = 'info@metsamaahind.ee';
    $subject = 'Metsakava hindamine - metsamaahind.ee';
    $headers = "From: noreply@zoneas.eu\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "Return-Path: noreply@zoneas.eu\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    if (mail($to, $subject, $emailContent, $headers)) {
        http_response_code(200);
        echo json_encode(['message' => 'Metsakava ja vormandmed on edukalt saadetud! Saadame teile hinnangu 24h jooksul.']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'E-maili saatmisel tekkis viga. Palun proovige uuesti.']);
    }

} catch (Exception $e) {
    error_log('Upload form error: ' . $e->getMessage());
    http_response_code(500);
    echo json_encode(['error' => 'Vormi saatmisel tekkis viga. Palun proovige uuesti.']);
}
?>