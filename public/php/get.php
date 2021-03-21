<?php
include('config.php');
$result = $mysqli->query('
SELECT 
	idposts as id,
    category as content_type,
    contentHTML as content,
    realname as author,
    timestamp as creation__date
FROM 
	posts JOIN users ON author=idusers;
');

$rows = $result->fetch_all(MYSQLI_ASSOC);
echo json_encode($rows, JSON_UNESCAPED_SLASHES);

?>
