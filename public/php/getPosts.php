<?php
include('config.php');

$result = $mysqli->query("
    SELECT *
    FROM posts"
);
$rows = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($rows, JSON_UNESCAPED_SLASHES);
?>
