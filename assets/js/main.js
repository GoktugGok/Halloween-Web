const navMenu = document.getElementById('nav-menu'),
     navToggle = document.getElementById('nav-toggle'),
     navClose = document.getElementById('nav-close') 

if(navToggle){
    navToggle.addEventListener('click',()=>{
        navMenu.classList.add('show-menu')
    })
}
if(navClose){
    navClose.addEventListener('click',()=>{
        navMenu.classList.remove('show-menu')
    })
}
// Remove Menu Mobile

const navLink = document.querySelectorAll('.nav_link')

const linkAction = () =>{
    const navMenu = document.getElementById('nav-menu')

    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

// Change Background Header

const header = document.getElementById('header')

const activeScroll = ()=>{
    this.scrollY >= 50 ? header.classList.add('bg-header'): header.classList.remove('bg-header')
}
window.addEventListener('scroll',activeScroll)

// Scroll Sections Active Link

const sections = document.querySelectorAll('section[id]')

const scrollActive = ()=>{
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id'),
              sectionClass = document.querySelector('.nav_menu a[href*=' + sectionId + ']')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            sectionClass.classList.add('active-link')
        }else{
            sectionClass.classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/* Show Scroll Up */

const scrollUp = ()=>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)