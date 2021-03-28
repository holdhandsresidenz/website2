<?php
header('Content-Type: text/html; charset=utf-8');
include('config.php');

$question_ids_exp = $mysqli->real_escape_string($_GET['question_ids_exp']);
$author_ids_exp = $mysqli->real_escape_string($_GET['author_ids_exp']);

$result = $mysqli->query("
    SELECT DISTINCT idposts,contentHTML,author,timestamp, category
    FROM posts JOIN questions_posts ON post=idposts
    WHERE ( $question_ids_exp ) AND ( $author_ids_exp )"
);
$json = mysqli_fetch_all($result, MYSQLI_ASSOC);
echo json_encode($json, JSON_UNESCAPED_UNICODE);
?>
