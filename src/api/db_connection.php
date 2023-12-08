<?php
header("Access-Control-Allow-Origin: *");

$servername = "localhost";
$database = "game_db";
$username = "root";
$password = "May252004";
$port = 3310;
// Create connection
$db = mysqli_connect($servername, $username, $password, $database, $port);
// Check connection hbAZk18VnMPiB6rpABHV
if (!$db) {
    die("Connection failed: " . mysqli_connect_error());
}
?>