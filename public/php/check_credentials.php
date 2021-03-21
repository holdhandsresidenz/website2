<?php 
include('config.php');

$username = $mysqli->real_escape_string($_GET['username']);
$password =  $mysqli->real_escape_string($_GET['password']);

$result = $mysqli->query("
    SELECT *
    FROM users
    WHERE loginname='$username' AND passwd=SHA2('$password', 0)"
);
$rows = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($rows, JSON_UNESCAPED_SLASHES);
?>
