<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Database connection details
$host = "localhost";
$username = "root";
$password = "";
$dbname = "promotions";

// Create connection
$conn = new mysqli($host, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(["status" => "error", "message" => "Database connection failed."]);
    exit;
}

// Handle POST request
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $email = $_POST["email"] ?? '';

    // Validate email
    if (filter_var($email, FILTER_VALIDATE_EMAIL)) {
        // Check if email already exists
        $checkQuery = $conn->prepare("SELECT id FROM user_emails WHERE email = ?");
        $checkQuery->bind_param("s", $email);
        $checkQuery->execute();
        $checkQuery->store_result();

        if ($checkQuery->num_rows > 0) {
            echo json_encode(["status" => "error", "message" => "Email is already subscribed."]);
        } else {         
            // Insert email into database
            $stmt = $conn->prepare("INSERT INTO user_emails (email) VALUES (?)");
            $stmt->bind_param("s", $email);

            if ($stmt->execute()) {
                echo json_encode(["status" => "success", "message" => "Email saved successfully!"]);
            } else {
                http_response_code(500);
                echo json_encode(["status" => "error", "message" => "Error saving email."]);
            }
            $stmt->close();
        }
        $checkQuery->close();
    } else {
        echo json_encode(["status" => "error", "message" => "Invalid email format."]);
    }
} else {
    http_response_code(405);
    echo json_encode(["status" => "error", "message" => "Invalid request method."]);
}

$conn->close();
?>
