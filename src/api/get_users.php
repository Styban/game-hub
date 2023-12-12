<?php
require_once "db_connection.php";
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $email = $_POST["email"];
    $password = $_POST["password"];

    try {


        $query = "CALL find_user(:user, :password)";
        $statement = $pdo->prepare($query);

        $statement->bindParam(":user", $user);
        $statement->bindParam(":password", $password);

        $statement->execute();

        $pdo = null;
        $statement = null;

        die();
    } catch (PDOException $e) {
        die("Query failed: " . $e->getMessage());
    }
} else {
    return;
}