var sidenav = document.getElementById("sidenav")
var closenav = document.getElementById("closenav")
var opennavbar = document.getElementById("opennavbar")

 opennavbar.addEventListener("click", function(){
    sidenav.style.right ="0"
 })

 closenav.addEventListener("click",function(){
    sidenav.style.right="-50%"
 })

