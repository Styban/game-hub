<?php
try {
    // Include your database connection file
    include_once 'db_connection.php';

    // Assuming you have established a connection to your MariaDB database

    // Retrieve data from the POST request
    $data = json_decode(file_get_contents("php://input"), true);

    if (isset($data['data'])) {
        // Destructure the values from the "data" array
        $gameId = $data['data']['game_id'];
        $gameName = $data['data']['gameName'];
        $description = $data['data']['description'];
        $metacritic = $data['data']['metacritic'];
        $coverImage = $data['data']['coverImage'];
        $screenshots = $data['data']['screenshots'];
        $gameTrailer = $data['data']['gameTrailer'];
        $price = $data['data']['price'];

        $slug = strtolower(str_replace(' ', '-', $gameName));
    } else {
        // Handle the case where the "data" key is not present in the array
        $response = array("status" => "error", "message" => "Invalid request format");
        header('Content-Type: application/json');
        echo json_encode($response);
        exit; // Stop further execution
    }

    // Insert data into your database
    $query = "CALL game_edit(:gameId, :gameName, :slug, :description, :coverImage, :gameTrailer, :price, :metacritic)";

    $stmt = $pdo->prepare($query);
    $stmt->bindParam(':gameId', $gameId);
    $stmt->bindParam(':gameName', $gameName);
    $stmt->bindParam(':slug', $slug);
    $stmt->bindParam(':description', $description);
    $stmt->bindParam(':coverImage', $coverImage);
    $stmt->bindParam(':metacritic', $metacritic);
    $stmt->bindParam(':gameTrailer', $gameTrailer);
    $stmt->bindParam(':price', $price);
    $result = $stmt->execute();

    if ($result) {
        // Successful insertion
        $response = array("status" => "success", "message" => "Data successfully inserted");
    } else {
        // Error during insertion
        $response = array("status" => "error", "message" => "Error inserting data: ");
    }

    // Send JSON response back to the client
    header('Content-Type: application/json');
    echo json_encode($response);

    // Close database connection
    $stmt = null;
    $pdo = null;
    die();
} catch (PDOException $e) {
    die("Query failed: get_game" . $e->getMessage());
}
?>