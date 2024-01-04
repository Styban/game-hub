<?php
try {
    require_once 'db_connection.php';

    $user = $_GET['user'] ?? null;
    $key = $_GET['key'] ?? null;

    $query = "CALL user_log(:user, :key)";

    $statement = $pdo->prepare($query);

    // Bind parameters if they are provided
    if ($user !== null && $key !== null) {
        $statement->bindParam(':user', $user);
        $statement->bindParam(':key', $key);
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