<?php
// Upload test version for Zone.ee debugging
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST');
header('Access-Control-Allow-Headers: Content-Type');

// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed']);
    exit;
}

// Test basic PHP functionality
echo json_encode([
    'success' => true, 
    'message' => 'Upload test script working on Zone.ee',
    'php_version' => phpversion(),
    'post_data' => !empty($_POST),
    'files_data' => !empty($_FILES),
    'mail_function' => function_exists('mail') ? 'available' : 'not available'
]);
?>