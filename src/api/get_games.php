<?php
try {
    require_once 'db_connection.php';

    $genres = $_GET['genres'] ?? null;
    $platforms = $_GET['platforms'] ?? null;
    $search = $_GET['search'] ?? null;

    $query = "CALL all_games()"; // Start with a basic query

    // Add conditions based on parameters
    if ($search !== null) {
        $query = "CALL search_filter(:search)";
    } elseif ($genres !== null) {
        $query = ($platforms !== null) ? "CALL genre_platform_filter(:platforms, :genres)" : "CALL genre_filter(:genres)";
    } elseif ($platforms !== null) {
        $query = "CALL platform_filter(:platforms)";
    }

    $statement = $pdo->prepare($query);

    // Bind parameters if they are provided
    if ($search !== null) {
        $statement->bindParam(':search', $search);
    }

    if ($genres !== null) {
        $statement->bindParam(':genres', $genres);
    }

    if ($platforms !== null) {
        $statement->bindParam(':platforms', $platforms);
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