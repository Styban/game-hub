<?php
try {
    require_once 'db_connection.php';

    $user = $_GET['gameId'] ?? null;

    error_log('Received gameId: ' . $user);
    $query = "DELETE FROM games WHERE id = :gameId";

    $statement = $pdo->prepare($query);

    // Bind parameters if they are provided
    if ($user !== null) {
        $statement->bindParam(':gameId', $user);
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