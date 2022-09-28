/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*==============- CURSOR ===============*/      
const cursor = document.querySelector('.cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.setAttribute("style","top: "+(e.pageY - scrollY)+"px; left: "+(e.pageX)+"px")
    })

const cursor2 = document.querySelector('.cursor2');
    document.addEventListener('mousemove', (e) => {
        cursor2.setAttribute("style","top: "+(e.pageY - scrollY)+"px; left: "+(e.pageX)+"px")
    })

/*===== CLOCK =====*/
setInterval(()=>{
    const time = document.querySelector(".display #time");
    let date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let seconds = date.getSeconds();
    let day_night = "AM";
    if(hours > 12){
      day_night = "PM";
      hours = hours - 12;
    }
    if(seconds < 10){
      seconds = "0" + seconds;
    }
    if(minutes < 10){
      minutes = "0" + minutes;
    }
    if(hours < 10){
      hours = "0" + hours;
    }
    time.textContent = hours + ":" + minutes + ":" + seconds + " "+ day_night;
  });

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)


/*=============== TESTIMONIAL SWIPER ===============*/
let testimonialSwiper = new Swiper(".testimonial-swiper", {
    spaceBetween: 30,
    loop: 'true',

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/*=============== NEW SWIPER ===============*/
let newSwiper = new Swiper(".new-swiper", {
    spaceBetween: 24,
    loop: 'true',

    breakpoints: {
        576: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 3,
        },
        1024: {
          slidesPerView: 4,
        },
    },
});

/*=============== BAR ==============*/
let circularProgressHtml = document.querySelector(".circular-progress-html"),
progressValueHtml = document.querySelector(".progress-value-html");

let progressStartValueHtml = 0,    
progressEndValueHtml = 28,    
speedHtml = 35;

let progressHtml = setInterval(() => {
progressStartValueHtml++;

progressValueHtml.textContent = `${progressStartValueHtml}%`
circularProgressHtml.style.background = `conic-gradient(orangered ${progressStartValueHtml * 3.6}deg, var(--progress-circular) 0deg)`

if(progressStartValueHtml == progressEndValueHtml){
    clearInterval(progressHtml);
}    
}, speedHtml);

let circularProgressCss = document.querySelector(".circular-progress-css"),
progressValueCss = document.querySelector(".progress-value-css");

let progressStartValueCss = 0,    
progressEndValueCss = 56,    
speedCss = 35;

let progressCss = setInterval(() => {
progressStartValueCss++;

progressValueCss.textContent = `${progressStartValueCss}%`
circularProgressCss.style.background = `conic-gradient(cyan ${progressStartValueCss * 3.6}deg, var(--progress-circular) 0deg)`

if(progressStartValueCss == progressEndValueCss){
    clearInterval(progressCss);
}    
}, speedCss);

let circularProgressJs = document.querySelector(".circular-progress-js"),
progressValueJs = document.querySelector(".progress-value-js");

let progressStartValueJs = 0,    
progressEndValueJs = 16,    
speedJs = 35;

let progressJs = setInterval(() => {
progressStartValueJs++;

progressValueJs.textContent = `${progressStartValueJs}%`
circularProgressJs.style.background = `conic-gradient(yellow ${progressStartValueJs * 3.6}deg, var(--progress-circular) 0deg)`

if(progressStartValueJs == progressEndValueJs){
    clearInterval(progressJs);
}    
}, speedJs);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
              sectionTop = current.offsetTop - 58,
              sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 350 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 350) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SHOW CART ===============*/
const cart = document.getElementById('cart'),
      cartShop = document.getElementById('cart-shop'),
      cartClose = document.getElementById('cart-close')

/*===== CART SHOW =====*/
/* Validate if constant exists */
if(cartShop){
    cartShop.addEventListener('click', () =>{
        cart.classList.add('show-cart')
    })
}

/*===== CART HIDDEN =====*/
/* Validate if constant exists */
if(cartClose){
    cartClose.addEventListener('click', () =>{
        cart.classList.remove('show-cart')
    })
}

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'bx-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'bx bx-moon' : 'bx bx-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'bx bx-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
