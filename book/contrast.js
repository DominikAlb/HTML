function changeColorSite() {
    if (document.body.id == "") {
        document.body.id = "night";
        document.getElementsByClassName("headerTopBar")[0].id = "dark";
        document.getElementsByClassName("menu")[0].id = "dark";
        document.body.style.background = "black";
        document.getElementsByClassName("menu")[0].style.background = "gray";
        var biuro = document.getElementsByClassName("BiuroKarier")[0];
        biuro.style.background = "gray";
        document.getElementsByClassName("homepage-community-bar")[0].style.color = "rgb(34, 34, 34)";
        var header = document.getElementsByClassName("headerTopBar");
        for(var i = 0; i < header.length; i++) {
            header[i].style.borderLeft = "2px solid rgb(58, 58, 58)";
            header[i].style.borderRight = "2px solid rgb(58, 58, 58)";
        } 
        
    } else {
        document.body.id = "";
        document.getElementsByClassName("headerTopBar")[0].id = "";
        document.getElementsByClassName("menu")[0].id = "";
        document.body.style.background = "linear-gradient(#f4f4f4, #f6f6f6)";
        document.getElementsByClassName("menu")[0].style.background = "whitesmoke";
        var biuro = document.getElementsByClassName("BiuroKarier")[0];
        biuro.style.background = "#294d8f";
        document.getElementsByClassName("homepage-community-bar")[0].style.color = "silver";
        var header = document.getElementsByClassName("headerTopBar");
        for(var i = 0; i < header.length; i++) {
            header[i].style.borderLeft = "2px solid darkblue";
            header[i].style.borderRight = "2px solid darkblue";
        } 
    }
}
