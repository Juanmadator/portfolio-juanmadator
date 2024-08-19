function toggleMenu(){
    //cogemos el menu
const menu= document.querySelector(".menu-links");
 //cogemos el icono
const icon= document.querySelector(".hamburger-icon");

menu.classList.toggle("open")
icon.classList.toggle("open")
}