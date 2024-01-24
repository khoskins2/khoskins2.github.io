function menu() {
    var x = document.getElementById("myLinks");
    if(x.style.display === "block") {
        x.style.display = "none";
    }
    else {
        x.style.display = "block"
    }
}

function navTo(page) {
    console.log("CLICKED")
    window.location.href = page;
}

function openEmail() {
    window.open("mailto: hoskkins20@gmail.com", "_blank");
}

function openGithub() {
    window.open("https://github.com/khoskins2", '_blank');
}

function openLinked() {
    window.open("https://www.linkedin.com/in/katie-hoskins-39b614204/", "_blank");
}

function openECM() {
    window.open("https://manager.toysland.pw", "_blank");
}