<?php
require_once 'db_conn.php';
$arr = array();
$sql = "SELECT * from CanteenMenu where canteen='Main' and mini >=3";
$result = array(); 
$result = mysqli_query($link,$sql);
$json_data = "";
if (!$result) 
 {
        echo "DB Error, could not query the database\n";
	echo 'MySQL Error: ' . mysqli_error();
	exit;
 }
while ($row = mysqli_fetch_assoc($result))
 { 
	$arr[] = $row;
 }
$callback = $_REQUEST['callback'];
if ($callback) {
    header('Content-Type: text/javascript');
    echo $callback . '(' . json_encode($arr) . ');';
} else {
    header('Content-Type: application/x-json');
    echo json_encode($arr);
}
mysqli_free_result($result);
?>
