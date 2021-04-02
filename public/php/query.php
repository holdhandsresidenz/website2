<?php
header('Content-Type: text/html; charset=utf-8');
include('config.php');

$query = $mysqli->real_escape_string($_GET['query']);

$result = $mysqli->query($query);

$json = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($json, JSON_UNESCAPED_UNICODE);
?>
