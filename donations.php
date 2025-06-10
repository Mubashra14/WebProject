<?php
require_once 'config.php';


$method = $_SERVER['REQUEST_METHOD'];

switch($method) {
    case 'GET':
        $sql = "SELECT * FROM donations";
        $stmt = $pdo->prepare($sql);
        $stmt->execute();
        echo json_encode($stmt->fetchAll());
        break;

    case 'POST':
        $data = json_decode(file_get_contents('php://input'), true);
        $sql = "INSERT INTO donations (user_id, amount, donation_type, cause, payment_method, account_number, message, is_anonymous) 
                VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
        $stmt = $pdo->prepare($sql);
        try {
            $stmt->execute([
                $data['user_id'],
                $data['amount'],
                $data['donation_type'],
                $data['cause'],
                $data['payment_method'],
                $data['account_number'],
                $data['message'],
                $data['is_anonymous']
            ]);
            echo json_encode(['message' => 'Donation recorded successfully', 'id' => $pdo->lastInsertId()]);
        } catch(PDOException $e) {
            http_response_code(400);
            echo json_encode(['error' => $e->getMessage()]);
        }
        break;
}