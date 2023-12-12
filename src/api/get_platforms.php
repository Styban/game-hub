<?php
try {
    require_once 'db_connection.php';

    $query = "SELECT * FROM platforms";

    $statement = $pdo->prepare($query);
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