function toggleMenu(){
    //cogemos el menu
const menu= document.querySelector(".menu-links");
 //cogemos el icono
const icon= document.querySelector(".hamburger-icon");

menu.classList.toggle("open")
icon.classList.toggle("open")
}


const logos=document.querySelectorAll(".logo")


logos.forEach(logo=>{
    logo.addEventListener('click',scroll)
})

function scroll(){
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}