const btnabout = document.getElementById("btnAbout");
const btncourse = document.getElementById("btnCourse");
const btncontact = document.getElementById("btnContact");

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