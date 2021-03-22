<?php
header('Content-Type: text/html; charset=utf-8');
include('config.php');
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$myArray = array();
if ($result = $mysqli->query( "SELECT * FROM questions ")) {

    while($row = $result->fetch_array(MYSQLI_ASSOC)) {
            $myArray[] = $row;
    }
    echo json_encode($myArray, JSON_UNESCAPED_UNICODE);
}

$result->close();
$mysqli->close();
?>
