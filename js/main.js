function myFunction() {
    var x = document.getElementById("myDIV");
    if (x.innerHTML === "Download Now") {
        x.innerHTML = "Download!";
    } else {
        x.innerHTML = "Thank You!";
    }
}