<?php
    require 'db_connection.php';

    $query = "SELECT * FROM users";

    $result = mysqli_query($db, $query);

    if (!$result) die("Query failed:" . mysqli_error($db));

    $data = array();
    
    while($row = mysqli_fetch_array($result)){
        $data[] = $row;
    }
    echo json_encode($data);
    return;
?>