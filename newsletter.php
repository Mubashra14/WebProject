<?php
require_once 'config.php';
header('Content-Type: application/json');

$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        try {
            $sql = "SELECT * FROM newsletter_subscribers";
            $stmt = $pdo->prepare($sql);
            $stmt->execute();
            echo json_encode($stmt->fetchAll());
        } catch (PDOException $e) {
            http_response_code(500);
            echo json_encode(['message' => 'Failed to fetch subscribers']);
        }
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);

        if (!isset($data['name']) || !isset($data['email'])) {
            http_response_code(400);
            echo json_encode(['message' => 'Name and email are required']);
            exit;
        }

        $sql = "INSERT INTO newsletter_subscribers (name, email) VALUES (?, ?)";
        $stmt = $pdo->prepare($sql);

        try {
            $stmt->execute([
                $data['name'],
                $data['email']
            ]);
            echo json_encode([
                'message' => 'Subscription successful',
                'id' => $pdo->lastInsertId()
            ]);
        } catch (PDOException $e) {
            $error = $e->getCode() === '23000' ? 'Email already subscribed' : 'Failed to subscribe';
            http_response_code(400);
            echo json_encode(['message' => $error]);
        }
        break;

    default:
        http_response_code(405);
        echo json_encode(['message' => 'Method not allowed']);
}
