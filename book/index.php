<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Biuro karier</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="index.css" />
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <script src="contrast.js"></script>
    <script src="addRect.js"></script>
    
    <script> 
        $(function(){
          $("#mainMenu").load("nav.html"); 
        });
    </script>
</head>
<body>
    <div id="mainMenu"></div>
    <div class="wypok">
        <?php include("showAccount.php"); ?>
    </div>
</body>
</html>