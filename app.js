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


document.querySelectorAll('.flip-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('clicked');
    });
});


  // Función para manejar el scroll
  function handleScroll() {
    const profile = document.querySelector('#profile');
    const about = document.querySelector('#about');
    const profileRect = profile.getBoundingClientRect();
    const aboutRect = about.getBoundingClientRect();

    // Verifica si el usuario ha hecho scroll hacia la sección de "about"
    if (aboutRect.top <= window.innerHeight && aboutRect.bottom >= 0) {
        profile.classList.add('hidden');
        about.classList.add('profile-3d');
    } else {
        profile.classList.remove('hidden');
        about.classList.remove('profile-3d');
    }
}

// Añadir un evento para escuchar el scroll
window.addEventListener('scroll', handleScroll);

// Llamar a la función al cargar la página por si se encuentra en la sección al inicio
handleScroll();