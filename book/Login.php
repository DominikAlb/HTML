<?php
   include("Config.php");
   
   if($_SERVER["REQUEST_METHOD"] == "POST") {
      
      $myusername = $_POST['username'];
      $mypassword = $_POST['psw']; 
      $sql = "SELECT id FROM account WHERE name = '$myusername' and password = '$mypassword'";
      $result = $db->prepare($sql);
      $result->execute();
      $count = $result->rowCount();
      
		
      if($count == 1) {
         $_SESSION['username'] = $myusername;
         $_SESSION['loggedin'] = true;
         header("location: index.html");
      }else {
         $error = "Your Login Name or Password is invalid";
      }
   }
?>