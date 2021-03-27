<?php
include('config.php');

$id = $mysqli->real_escape_string($_GET['id']);

$result = $mysqli->query("
    SELECT *
    FROM users
    WHERE idusers='$id' "
);
$rows = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($rows, JSON_UNESCAPED_SLASHES);
?>
