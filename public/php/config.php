<?php
$host="w019a9b2.kasserver.com";
$port=3306;
$socket="";
$user="d035913f";
$password="quondam.source.sup";
$dbname="d035913f";

$mysqli = new mysqli($host, $user, $password, $dbname, $port, $socket)
	or die ('Could not connect to the database server' . mysqli_connect_error());

//$mysqli->close();
?>
