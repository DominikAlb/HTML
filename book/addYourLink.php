<?php
    include("Config.php");
    try {
    if($_SERVER["REQUEST_METHOD"] == "POST" && isset($_POST["commit"])) {
        $url = $_POST["url"];
        $sql = $db->prepare('INSERT INTO link(url, description) VALUES (:url , "No description")');
        $sql->bindParam(':url', $url);
        $sql->execute();
        header("location: index.php");
    }
    } catch(PDOExepction $e) {
        $e->getMessage();
    }
?>
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>dodaj znalezisko</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="index.css" />
    <link rel="stylesheet" type="text/css" media="screen" href="dodajZnalezisko.css" />
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
    <form action="" method="POST" name="form">
        <div class="holder">
            <div>
            <div>
                <h3>Edytuj swój link.</h3>
                <fieldset class="nospace">			
                    <input name="header" id="header" type="text" name="header" placeholder="Dodaj tytuł" value="" required>
                </fieldset>
                <fieldset class="nospace">			
                    <input name="description" id="description" type="text" name="description" placeholder="Dodaj krótki wstęp" value="" required>
                </fieldset>
                <fieldset>
                    <input type="file" name="pic" accept="image/*">
                </fieldset>
                <fieldset class="row buttons nospace">		
                    <p>
                        <input type="submit" name="commit" value="dodaj">
                    </p>						
                </fieldset>      
            </div>
        </div>
    </form>
</body>
</html>