<?php
// apply_volunteer.php

// Enable CORS (adjust as needed)
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405); // Method Not Allowed
    echo json_encode(["message" => "Only POST method is allowed"]);
    exit;
}

// Get the POSTed JSON data
$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["message" => "Invalid JSON"]);
    exit;
}

// Validate required fields
$required = ['full_name', 'email', 'phone', 'interests', 'message'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(["message" => "Missing field: $field"]);
        exit;
    }
}

// Database connection parameters
$host = 'localhost'; // your db host
$dbname = 'umeed_network';
$username = 'root';
$password = '';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    // Prepare insert statement
    $stmt = $pdo->prepare("INSERT INTO volunteers (full_name, email, phone, interests, message) VALUES (?, ?, ?, ?, ?)");

    // Execute with data
    $stmt->execute([
        $data['full_name'],
        $data['email'],
        $data['phone'],
        $data['interests'],
        $data['message']
    ]);

    // Success response
    http_response_code(201);
    echo json_encode(["message" => "Application submitted successfully"]);
} catch (PDOException $e) {
    http_response_code(500);
    echo json_encode(["message" => "Database error: " . $e->getMessage()]);
}
