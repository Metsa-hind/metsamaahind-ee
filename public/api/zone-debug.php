<?php
// Comprehensive Zone.ee environment debugging script
header('Content-Type: text/html; charset=UTF-8');

// Enable all error reporting
error_reporting(E_ALL);
ini_set('display_errors', 1);
ini_set('log_errors', 1);

echo "<h1>Zone.ee PHP Environment Debug Report</h1>";
echo "<style>body{font-family:Arial;margin:20px;} .section{margin:20px 0;padding:10px;background:#f5f5f5;} .error{color:red;} .success{color:green;}</style>";

// PHP Version and Configuration
echo "<div class='section'>";
echo "<h2>PHP Environment</h2>";
echo "<strong>PHP Version:</strong> " . phpversion() . "<br>";
echo "<strong>Server Software:</strong> " . $_SERVER['SERVER_SOFTWARE'] . "<br>";
echo "<strong>Document Root:</strong> " . $_SERVER['DOCUMENT_ROOT'] . "<br>";
echo "<strong>Script Path:</strong> " . $_SERVER['SCRIPT_FILENAME'] . "<br>";
echo "</div>";

// Mail Function Check
echo "<div class='section'>";
echo "<h2>Mail Function</h2>";
if (function_exists('mail')) {
    echo "<span class='success'>✓ mail() function is available</span><br>";
    
    // Try to get mail configuration
    $sendmail_path = ini_get('sendmail_path');
    echo "<strong>Sendmail Path:</strong> " . ($sendmail_path ? $sendmail_path : 'Not set') . "<br>";
    
    // Test basic mail functionality
    echo "<strong>Testing mail function...</strong><br>";
    $test_result = mail('test@example.com', 'Test Subject', 'Test message', 'From: test@example.com');
    echo "Mail test result: " . ($test_result ? "<span class='success'>SUCCESS</span>" : "<span class='error'>FAILED</span>") . "<br>";
} else {
    echo "<span class='error'>✗ mail() function is NOT available</span><br>";
}
echo "</div>";

// File Permissions
echo "<div class='section'>";
echo "<h2>File Permissions</h2>";
$current_dir = dirname(__FILE__);
echo "<strong>Current directory:</strong> $current_dir<br>";
echo "<strong>Directory writable:</strong> " . (is_writable($current_dir) ? "<span class='success'>YES</span>" : "<span class='error'>NO</span>") . "<br>";

$uploads_dir = $current_dir . '/../uploads';
if (is_dir($uploads_dir)) {
    echo "<strong>Uploads directory exists:</strong> <span class='success'>YES</span><br>";
    echo "<strong>Uploads directory writable:</strong> " . (is_writable($uploads_dir) ? "<span class='success'>YES</span>" : "<span class='error'>NO</span>") . "<br>";
} else {
    echo "<strong>Uploads directory:</strong> <span class='error'>DOES NOT EXIST</span><br>";
}
echo "</div>";

// POST Data Test
echo "<div class='section'>";
echo "<h2>POST Data Test</h2>";
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    echo "<strong>POST Request received!</strong><br>";
    echo "<strong>POST Data:</strong><br>";
    echo "<pre>" . print_r($_POST, true) . "</pre>";
    
    if (!empty($_FILES)) {
        echo "<strong>FILES Data:</strong><br>";
        echo "<pre>" . print_r($_FILES, true) . "</pre>";
    }
} else {
    echo "Send a POST request to test data handling<br>";
    echo '<form method="POST" enctype="multipart/form-data">';
    echo '<input type="text" name="test_field" value="Test Value" placeholder="Test Field"><br><br>';
    echo '<input type="file" name="test_file"><br><br>';
    echo '<button type="submit">Test POST</button>';
    echo '</form>';
}
echo "</div>";

// cURL Test
echo "<div class='section'>";
echo "<h2>External Connections</h2>";
if (function_exists('curl_init')) {
    echo "<span class='success'>✓ cURL is available</span><br>";
    
    // Test reCAPTCHA connectivity
    echo "<strong>Testing Google reCAPTCHA connectivity...</strong><br>";
    $ch = curl_init();
    curl_setopt($ch, CURLOPT_URL, "https://www.google.com/recaptcha/api/siteverify");
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_TIMEOUT, 10);
    curl_setopt($ch, CURLOPT_POST, true);
    curl_setopt($ch, CURLOPT_POSTFIELDS, http_build_query([
        'secret' => 'test',
        'response' => 'test'
    ]));
    
    $response = curl_exec($ch);
    $http_code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    
    echo "HTTP Status: $http_code<br>";
    if ($http_code == 200) {
        echo "<span class='success'>✓ Can connect to Google reCAPTCHA</span><br>";
    } else {
        echo "<span class='error'>✗ Cannot connect to Google reCAPTCHA</span><br>";
    }
} else {
    echo "<span class='error'>✗ cURL is NOT available</span><br>";
}
echo "</div>";

// Error Log
echo "<div class='section'>";
echo "<h2>Recent Error Logs</h2>";
$error_log = ini_get('error_log');
if ($error_log && file_exists($error_log)) {
    echo "<strong>Error log location:</strong> $error_log<br>";
    $recent_errors = tail($error_log, 10);
    echo "<strong>Recent errors:</strong><br>";
    echo "<pre style='background:white;padding:10px;border:1px solid #ccc;'>" . htmlspecialchars($recent_errors) . "</pre>";
} else {
    echo "No error log found or accessible<br>";
}
echo "</div>";

// Helper function to read last N lines of a file
function tail($filename, $lines = 10) {
    if (!file_exists($filename)) return "File not found";
    
    $file = new SplFileObject($filename, 'r');
    $file->seek(PHP_INT_MAX);
    $last_line = $file->key();
    $lines = min($lines, $last_line);
    $file->seek($last_line - $lines);
    
    $content = '';
    while ($file->valid()) {
        $content .= $file->current();
        $file->next();
    }
    
    return $content;
}
?>