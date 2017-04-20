<?php

  include 'connection.php';



if(isset($_POST['user_email']))
{
 $emailId=$_POST['user_email'];

 $checkdata=" SELECT emailid FROM participant_details WHERE emailid='$emailId' ";

 $query=mysql_query($checkdata);

 if(mysql_num_rows($query)>0)
 {
  echo "Email Already Exist";
 }
 else
 {
 // echo "OK";
 }
 exit();
}
?>

