<?php

//this PHP used for collect data from user 


// Get client IP address
$ipAddress = $_SERVER['REMOTE_ADDR'];

// Get screen width and height
$screenWidth = $_POST['width'] ?? null;
$screenHeight = $_POST['height'] ?? null;

// Validate screen width and height
if (!is_numeric($screenWidth) || !is_numeric($screenHeight)) {
    die("Invalid screen dimensions.");
}

// Get visited page URL
$visitedPage = $_SERVER['HTTP_REFERER'] ?? null;

// MySQL database connection code
$servername = "sql101.infinityfree.com";
$username = "epiz_34110819";
$password = "lqIkfHEhCjgWO";
$dbname = "epiz_34110819_email_data";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Prepare and bind SQL statement
$stmt = $conn->prepare("INSERT INTO screen_info (ip_address, screen_width, screen_height, visited_page) VALUES (?, ?, ?, ?)");
$stmt->bind_param("siis", $ipAddress, $screenWidth, $screenHeight, $visitedPage);

// Execute the SQL statement
if ($stmt->execute() === TRUE) {
    echo "Data inserted successfully";
} else {
    echo "Error: " . $stmt->error;
}

// Close statement and database connection
$stmt->close();
$conn->close();
?>