<?php
include('config.php');

$questionIDs = $_POST['questionIDs'];
$postID = $mysqli->real_escape_string($_POST['postID']);
$mysqli->query("DELETE FROM questions_posts WHERE post = $postID");
foreach ($questionIDs as $value){
    $questionID = $mysqli->real_escape_string($value);
    $result = $mysqli->query("INSERT INTO questions_posts (question, post) VALUES ( $questionID, $postID )");
    $resultID = mysqli_insert_id($mysqli);
    if ($resultID === "0") {
        $mysqli->query("DELETE FROM questions_posts WHERE post = $postID");
        echo "failed";
    }
}
//$result = $mysqli->query("");
//echo mysqli_insert_id($mysqli);
?>
