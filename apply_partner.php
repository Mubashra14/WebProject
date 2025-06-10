<?php
// apply_partner.php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Content-Type: application/json; charset=UTF-8");

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(["message" => "Only POST method is allowed"]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);

if (!$data) {
    http_response_code(400);
    echo json_encode(["message" => "Invalid JSON"]);
    exit;
}

// Required fields
$required = ['organization_name', 'contact_name', 'email', 'focus_area'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        http_response_code(400);
        echo json_encode(["message" => "Missing field: $field"]);
        exit;
    }
}

$conn = new mysqli("localhost", "root", "", "umeed_network");

if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["message" => "Database connection failed"]);
    exit;
}

$stmt = $conn->prepare("INSERT INTO partners (organization_name, contact_name, email, phone, focus_area) VALUES (?, ?, ?, ?, ?)");


if (!$stmt) {
    http_response_code(500);
    echo json_encode(["message" => "Prepare failed: " . $conn->error]);
    exit;
}

$organization_name = $data['organization_name'];
$contact_name = $data['contact_name'];
$email = $data['email'];
$phone = $data['phone'] ?? null;
$focus_area = $data['focus_area'];

$stmt->bind_param("sssss", $organization_name, $contact_name, $email, $phone, $focus_area);


if ($stmt->execute()) {
    http_response_code(201);
    echo json_encode(["message" => "Partner application submitted successfully"]);
} else {
    http_response_code(500);
    echo json_encode([
        "message" => "Failed to submit partner application",
        "error" => $stmt->error  // Shows actual error from MySQL
    ]);
}


$stmt->close();
$conn->close();
