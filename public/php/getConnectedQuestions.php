<?php
include('config.php');

$id = $mysqli->real_escape_string($_POST['id']);

$result = $mysqli->query("
    SELECT *
    FROM questions_posts
WHERE post = $id
"
);
$rows = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($rows, JSON_UNESCAPED_SLASHES);
?>
