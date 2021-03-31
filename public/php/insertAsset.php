<?php
include('config.php');

$filepath =  $mysqli->real_escape_string($_POST['filepath']);
$post = $mysqli->real_escape_string($_POST['post']);

$result = $mysqli->query("
    INSERT INTO post_assets (filepath, post)
    VALUES ('$filepath', $post)
");
echo mysqli_insert_id($mysqli);
?>
