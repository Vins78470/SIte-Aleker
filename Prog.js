const btn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");

btn.addEventListener('click',()=>{
navLinks.classList.toggle('mobile-menu')
})



const fleche = document.querySelector('.fleche');

fleche.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })

})