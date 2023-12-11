<?php
header("Access-Control-Allow-Origin: *");


$dsn = "mysql:host=localhost;port=3310;dbname=game_db";
$dbusername = "root";
$dbpassword = "May252004";

try {
    $pdo = new PDO($dsn, $dbusername, $dbpassword);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch (PDOException $e) {
    echo "Connection failed: " . $e->getMessage();
}
