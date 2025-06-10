<?php
require_once 'config.php';

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        $sql = "SELECT * FROM partners";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        echo json_encode($stmt->fetchAll());
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $sql = "INSERT INTO partners (organization_name, contact_name, email, phone, focus_area) 
                VALUES (?, ?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        try {
            $stmt->execute([
                $data['organization_name'],
                $data['contact_name'],
                $data['email'],
                $data['phone'],
                $data['focus_area']
            ]);
            echo json_encode(['message' => 'Partner application submitted successfully', 'id' => $pdo->lastInsertId()]);
        } catch(PDOException $e) {
            http_response_code(400);
            echo json_encode(['error' => $e->getMessage()]);
        }
        break;
  default:
        http_response_code(405);
        echo json_encode(['error' => 'Method not allowed']);
        break;
}
