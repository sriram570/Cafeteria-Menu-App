<?php
ini_set('display_errors', '1');
ini_set('error_reporting', E_ALL);
require_once 'db_conn.php';
$rate = $_POST['usefull'];
$rate = $rate + 1 ;
$item = $_POST['item_name'];
$cant = $_POST['canteen'];
$st = "SELECT rating , counter FROM CanteenMenu WHERE item_name='$item' and canteen='$cant'";
$result = mysqli_query( $link, $st );
if($result){
 	if(mysqli_num_rows($result)>0)
   	{
		$row = mysqli_fetch_assoc($result);
		$rating = ($row["rating"] * $row["counter"] + $rate) / ($row["counter"] + 1);
		$count = $row["counter"] + 1;
		$rating = round($rating, 2);
		$sql = "UPDATE CanteenMenu SET rating='$rating' ,counter='$count' WHERE item_name='$item' and canteen='$cant'";
		$result2 = mysqli_query( $link, $sql );
		if(!$result2)
		{
			$return = json_encode('Failed');
			echo $return;
		}
   	}	
	$return = json_encode('Success');
	echo $return;
}
else
{
		$return = json_encode('Failure' . mysql_error());
		echo $return;
}
?>
