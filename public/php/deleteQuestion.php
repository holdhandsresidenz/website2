<?php
include('config.php');

$id =  $mysqli->real_escape_string($_GET['id']);

$result = $mysqli->query("
    DELETE FROM questions WHERE idquestions = $id
");

echo $result;
?>
