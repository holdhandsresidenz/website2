<?php
include('config.php');

$question = $mysqli->real_escape_string($_GET['question']);
$author =  $mysqli->real_escape_string($_GET['author']);
$acceptedBy =  $mysqli->real_escape_string($_GET['acceptedBy']);

$result = $mysqli->query("
    INSERT INTO questions (author, acceptedBy, question)
    VALUES ('$author', $acceptedBy, '$question')

");
echo $result;
?>
