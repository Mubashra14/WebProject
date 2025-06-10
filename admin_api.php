<?php

session_start();

if (isset($_SERVER['HTTP_ORIGIN']) && strpos($_SERVER['HTTP_ORIGIN'], 'localhost') !== false) {
    header("Access-Control-Allow-Origin: " . $_SERVER['HTTP_ORIGIN']);
    header("Access-Control-Allow-Credentials: true");
    header("Access-Control-Allow-Headers: Content-Type");
    header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
}

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

header("Content-Type: application/json");


$host = "localhost";
$user = "root";
$pass = "";
$dbname = "umeed_network";

$conn = new mysqli($host, $user, $pass, $dbname);
if ($conn->connect_error) {
  http_response_code(500);
  echo json_encode(["error" => "DB connection failed"]);
  exit;
}

$action = $_GET['action'] ?? 'fetch';

// Login using admin_users table with plain password check
if ($action === 'login') {
  $body = json_decode(file_get_contents("php://input"), true);
  $email = $body['email'] ?? '';
  $password = $body['password'] ?? '';

  $stmt = $conn->prepare("SELECT password FROM admin_users WHERE email = ?");
  $stmt->bind_param("s", $email);
  $stmt->execute();
  $res = $stmt->get_result();
  $user = $res->fetch_assoc();

  if ($user && $user['password'] === $password) {
    $_SESSION['admin'] = true;
    echo json_encode(["success" => true]);
  } else {
    http_response_code(401);
    echo json_encode(["error" => "Invalid credentials"]);
  }
  exit;
}
// Logout


if (isset($_GET['action']) && $_GET['action'] === 'logout') {
    // Clear session data
    $_SESSION = [];
    if (ini_get("session.use_cookies")) {
        $params = session_get_cookie_params();
        setcookie(session_name(), '', time() - 42000,
            $params["path"], $params["domain"],
            $params["secure"], $params["httponly"]
        );
    }
    session_destroy();
    echo json_encode(['success' => true]);
    exit;
}


// Protect everything else
if (!isset($_SESSION['admin'])) {
  http_response_code(403);
  echo json_encode(["error" => "Unauthorized"]);
  exit;
}

// Fetch all data + donation total
if ($action === 'fetch') {
  function fetchTable($conn, $table) {
    $rows = [];
    try {
      $res = $conn->query("SELECT * FROM $table");
      while ($row = $res->fetch_assoc()) {
        $rows[] = $row;
      }
    } catch (Exception $e) {
      $rows[] = ["error" => $e->getMessage()];
    }
    return $rows;
  }

  $donations = fetchTable($conn, "donations");
  $total = 0;
  foreach ($donations as $d) {
    $total += isset($d['amount']) ? (float)$d['amount'] : 0;
  }

  echo json_encode([
    "volunteer" => fetchTable($conn, "volunteers"),
    "donations" => $donations,
    "donationTotal" => $total,
    "partners" => fetchTable($conn, "partners"),
    "newsletter" => fetchTable($conn, "newsletter_subscribers")
  ]);
  exit;
}

// Update row (editable)
if ($action === 'update') {
  $data = json_decode(file_get_contents("php://input"), true);
  $table = $data['table'];
  $id = $data['id'];
  $fields = $data['fields'];
  $setClause = implode(", ", array_map(fn($k) => "$k = ?", array_keys($fields)));
  $stmt = $conn->prepare("UPDATE $table SET $setClause WHERE id = ?");
  $values = array_values($fields);
  $values[] = $id;
  $stmt->bind_param(str_repeat("s", count($fields)) . "i", ...$values);
  $stmt->execute();
  echo json_encode(["success" => true]);
  exit;
}
?>