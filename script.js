const btnabout = document.getElementById("btnabout");
const btncourse = document.getElementById("btncourse");
const btncontact = document.getElementById("btncontact");

btnabout.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="aboutus.html";
})
btncontact.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="contactus.html";
})
btncourse.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="course.html";
})
btnEnroll.addEventListener("click",(e)=>{
    e.preventDefault();
    window.location.href="index.html";
})