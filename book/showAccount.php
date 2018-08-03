<?php
    include("Config.php");
    $sql = "SELECT url, description FROM link";
    
    echo "<ul>";
    foreach($db->query($sql) as $row) {
        echo "<li><div class='strong'>".$row['url']."\n".$row['description']."</div></li>"."<br>";
    }
    echo "</ul>";
?>