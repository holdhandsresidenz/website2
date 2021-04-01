<?php
include('config.php');

$id =  $mysqli->real_escape_string($_POST['id']);
$result1 = $mysqli->query("DELETE FROM questions_posts WHERE post = $id");
$result = $mysqli->query("
    DELETE FROM posts WHERE idposts = $id
");

echo $result;
?>
