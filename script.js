const btn=document.querySelector(".burger")
const header=document.querySelector(".header")

btn.onclick=function(){
    header.classList.toggle("simple_menu")
}