<?php
include('config.php');

$id =  $mysqli->real_escape_string($_POST['id']);

$result = $mysqli->query("
    DELETE FROM posts WHERE idposts = $id
");

echo $result;
?>
