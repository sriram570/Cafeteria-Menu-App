<?php
ini_set('display_errors', '1');
ini_set('error_reporting', E_ALL);
require_once 'db_conn.php';
$item = $_POST['item_name'];
$item = strtolower($item);
$item = ucfirst($item);
$_POST['item_name'] = strtolower($_POST['item_name']);
$_POST['item_name'] = ucfirst($_POST['item_name']);
$cant = $_POST['canteen'];
$price = $_POST['price'];
$st = "SELECT * FROM CanteenMenu WHERE item_name='$item' and canteen='$cant'";
$sql2 = mysqli_query( $link, $st );
if($sql2){
 if(mysqli_num_rows($sql2)>=1)
   {
	$st22 = "SELECT mini FROM CanteenMenu WHERE item_name='$item' and canteen='$cant'";
	$result22 = mysqli_query( $link, $st22 );
	$row22 = mysqli_fetch_assoc($result22);
	$mini = $row22["mini"] + 1;
	if ($mini<=3)
		$sql22 = "UPDATE CanteenMenu SET mini='$mini',price='$price',date_time=
TIME_FORMAT(timediff(curtime(),'02:30'), '%H:%i') WHERE item_name='$item' and canteen='$cant'";
	else
		$sql22 = "UPDATE CanteenMenu SET mini='$mini' WHERE item_name='$item' and canteen='$cant'";
	$result22 = mysqli_query( $link, $sql22 );
	echo json_encode("Item already exists.");
   }
 else
    {
	$sql  = "INSERT INTO CanteenMenu ( item_name, price , canteen , rating , counter, mini , date_time) VALUES ('".$_POST['item_name']."','".$_POST['price']."','".$_POST['canteen']."','2.5','1','1',
TIME_FORMAT(timediff(curtime(),'02:30'), '%H:%i'))";
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
    }
}
else
{
echo"Error : ".mysql_error();
}
?>



