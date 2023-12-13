<?php
try {
    require_once 'db_connection.php';

    $genres = $_GET['genres'] ?? null;
    $parentPlatforms = $_GET['parent_platforms'] ?? null;

    $query = "SELECT * FROM games WHERE 1"; // Start with a basic query

    // Add conditions based on parameters
    if ($genres !== null) {
        $query = "SELECT g.*
        FROM game_genres gg
        LEFT JOIN games g ON gg.game_id = g.id
        WHERE gg.genre_id = :genres";
    }

    // if ($parentPlatforms !== null) {
    //     $query .= " AND parent_platform_id = :parent_platforms";
    // }

    $statement = $pdo->prepare($query);

    // Bind parameters if they are provided
    if ($genres !== null) {
        $statement->bindParam(':genres', $genres);
    }

    if ($parentPlatforms !== null) {
        $statement->bindParam(':parent_platforms', $parentPlatforms);
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