<?php
try {
    require_once 'db_connection.php';

    $gameId = $_GET['gameId'] ?? null;
    $userId = $_GET['userId'] ?? null;

    echo "game: " . $gameId;

    $query = "CALL game_purchase(:gameId, :userId)";

    $statement = $pdo->prepare($query);

    // Bind parameters if they are provided
    if ($gameId !== null && $userId !== null) {
        $statement->bindParam(':gameId', $gameId);
        $statement->bindParam(':userId', $userId);
    }

    $statement->execute();

    $result = $statement->fetchAll(PDO::FETCH_ASSOC);

    $pdo = null;
    $statement = null;

    echo json_encode($result);
    die();
} catch (PDOException $e) {
    die("Query failed: user_log" . $e->getMessage());
}
?>