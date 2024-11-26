const btn = document.getElementById("btnlogin");
const username = document.getElementById("username");
const password = document.getElementById("password");

btn.addEventListener("click", (e) => {
    e.preventDefault();
    if(username.value == "pass" && password.value == "word"){
        alert ("Successful Login");
        window.location.href = "main.html";
    }else{
        alert("Error");
    }
})