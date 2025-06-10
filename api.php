<?php
header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');

$host = "localhost";
$user = "root";
$password = "";
$dbname = "umeed_network";

$conn = new mysqli($host, $user, $password, $dbname);

if ($conn->connect_error) {
    die(json_encode(['error' => 'Database connection failed']));
}

$type = $_GET['type'] ?? '';

switch($type) {
    case 'donations':
        $sql = "SELECT * FROM donations";
        break;
    case 'volunteers':
        $sql = "SELECT * FROM volunteers";
        break;
    case 'partners':
        $sql = "SELECT * FROM partners";
        break;
    default:
        echo json_encode(['error' => 'Invalid type']);
        exit;
}

$result = $conn->query($sql);
$data = [];

if ($result) {
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo json_encode(['error' => 'Query failed']);
}

$conn->close();
?>
