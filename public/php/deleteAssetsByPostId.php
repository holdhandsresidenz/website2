<?php
include('config.php');

$id =  $mysqli->real_escape_string($_POST['id']);

$result = $mysqli->query("
    DELETE FROM post_assets WHERE post = $id
");

echo $result;
?>
