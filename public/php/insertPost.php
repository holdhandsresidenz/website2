<?php
include('config.php');

$contentHTML = $mysqli->real_escape_string($_POST['contentHTML']);
$author =  $mysqli->real_escape_string($_POST['author']);
$category = $mysqli->real_escape_string($_POST['category']);

$result = $mysqli->query("
    INSERT INTO posts (contentHTML,author,category)
    VALUES ('$contentHTML', $author, '$category')
");
echo mysqli_insert_id($mysqli);
?>
