<?php
try {
    require_once 'db_connection.php';

    // $data = json_decode(file_get_contents("php://input"), true);

    $gameId = $_GET['gameId'] ?? null;

    error_log('Received gameId: ' . $gameId);
    $query = "DELETE FROM games WHERE id = :gameId";

    $statement = $pdo->prepare($query);

    // Bind parameters if they are provided
    if ($gameId !== null) {
        $statement->bindParam(':gameId', $gameId);
    }

    $statement->execute();

    $result = $statement->execute();

    if ($result) {
        echo "Game deleted successfully";
    } else {
        echo "Error deleteng game";
    }

    $pdo = null;
    $statement = null;

    die();
} catch (PDOException $e) {
    die("Query failed: " . $e->getMessage());
}
?>