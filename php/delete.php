<?php
    ini_set('display_errors', '1');
    ini_set('error_reporting', E_ALL);
require_once 'db_conn.php';
$item = $_POST['item_name'];
$item = strtolower($item);
$item = ucfirst($item);
$cant = $_POST['canteen'];
$sql  = "delete from CanteenMenu where item_name='$item' and canteen='$cant'";
$result = mysqli_query($link , $sql);
if($result)
{
	$return = json_encode('success');
	echo $return;
}
else 
{
	$return = json_encode('failure' . mysql_error());
	echo $return;
}

?>



