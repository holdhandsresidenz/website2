<?php
include('config.php');

$question = $mysqli->real_escape_string($_GET['question']);
$id =  $mysqli->real_escape_string($_GET['id']);
$author =  $mysqli->real_escape_string($_GET['author']);
$acceptedBy =  $mysqli->real_escape_string($_GET['acceptedBy']);

$result = $mysqli->query("
    UPDATE questions
    SET author = '$author', acceptedBy = $acceptedBy, question = '$question'
    WHERE idquestions=$id
");
echo $question;
echo $id;
echo $author;
echo $acceptedBy;
echo $result;
?>
