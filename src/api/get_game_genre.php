<?php
try {
    require_once 'db_connection.php';

    $user = $_GET['gameId'] ?? null;

    $query = "CALL get_game_genres(:gameId)";

    $statement = $pdo->prepare($query);

    // Bind parameters if they are provided
    if ($user !== null) {
        $statement->bindParam(':gameId', $user);
    }

    $statement->execute();

    $result = $statement->fetchAll(PDO::FETCH_ASSOC);

    $pdo = null;
    $statement = null;

    echo json_encode($result);
    die();
} catch (PDOException $e) {
    die("Query failed: " . $e->getMessage());
}
?>