<?php
    header('Access-Control-Allow-Origin: *');  
    $filename = $_POST['path'].$_POST['name'].$_FILES["file"]["name"];
    if (!file_exists($_POST['path'])) {
       mkdir($_POST['path'], 0777, true);
    };
    if (move_uploaded_file($_FILES["file"]["tmp_name"], $filename)) {
        echo $filename;
        exit;
    }
    echo "failed";
?>
