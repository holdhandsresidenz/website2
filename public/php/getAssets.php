<?php
header('Content-Type: text/html; charset=utf-8');
include('config.php');

$result = $mysqli->query("SELECT DISTINCT * FROM post_assets");
$json = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($json, JSON_UNESCAPED_UNICODE);
?>
