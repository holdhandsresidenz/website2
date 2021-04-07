<?php
header('Content-Type: text/html; charset=utf-8');
include('config.php');

$result = $mysqli->query( "SELECT question, timestamp AS created, author, acceptedBy, idquestions AS id FROM questions WHERE 1 ORDER BY timestamp DESC");
$json = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($json, JSON_UNESCAPED_UNICODE);
?>
