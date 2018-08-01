<?php
session_start();
    if (isset($_SESSION['loggedin']) && $_SESSION['loggedin'] == true) {
        header("location: dodajZnalezisko.html");
    } else {
        header("location: zaloguj.html");
    }
?>