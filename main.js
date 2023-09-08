sans = "";

function local(){
    sans = document.getElementById("UNT").value;
    localStorage.setItem("UNT", sans);
    window.location = "Wip.html"
}