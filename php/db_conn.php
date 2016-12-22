<?php
if (!$link = mysqli_connect('XXX', 'XXX', 'XXX'))
 { 
	echo 'Could not connect to mysql';
	exit; 
 }
else 
 {
	/*echo 'Connection succeded'; */
 }

if (!mysqli_select_db($link,'XXX'))
 {
 	echo 'Could not select database';
 	exit; 
 } 
?>
