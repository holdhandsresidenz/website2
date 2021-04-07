<?php
include('config.php');

$result = $mysqli->query("
    SELECT *
    FROM posts
    WHERE 1 ORDER BY timestamp DESC"
);
$rows = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($rows, JSON_UNESCAPED_SLASHES);
?>
