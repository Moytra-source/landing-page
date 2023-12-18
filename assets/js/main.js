/*=============== SEARCH ===============*/
const searchButton = document.getElementById('search-button'),
      searchClose = document.getElementById('search-close'),
      searchContent = document.getElementById('search-content')

/*====== MENU SHOW =======*/
/* Validate if constant exists */
if(searchButton){
    searchButton.addEventListener('click', () =>{
        searchContent.classList.add('show-search')
    })
}

/*====== MENU HIDDEN ======*/
/* Validate of constant exists */
if(searchClose){
    searchClose.addEventListener('click', () =>{
        searchContent.classList.remove('show-search')
    })
}

/*=============== LOGIN ===============*/


/*=============== ADD SHADOW HEADER ===============*/
const shadowHeader = () =>{
    const header = document.getElementById('header')
    //when the scroll is greater than 50 viewport height, add the scroll-header to the header tag
    this.scrollY >= 50 ? header.classList.add('shadow-header')
                       :header.classList.remove('shadow-header')
}
window.addEventListener('scroll', shadowHeader)

/*=============== HOME SWIPER ===============*/
let swiperHome = new Swiper('.home__swiper', {
    loop: true,
    spaceBetween: -24,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },

    breakpoints: {
        1220: {
            spaceBetween: -32,
        }
    }
  })

/*=============== FEATURED SWIPER ===============*/
let swiperFeatured = new Swiper('.featured__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },

    breakpoints: {
        1150: {
            slidersPerView: 4,
            centeredSlides: false,
        }
    }
  })

/*=============== NEW SWIPER ===============*/
let swiperNew = new Swiper('.new__swiper', {
    loop: true,
    spaceBetween: 16,
    slidesPerView: 'auto',

    breakpoints: {
        1150: {
            slidersPerView: 3,
        }
    }
  })

/*=============== TESTIMONIAL SWIPER ===============*/
let swiperTestimonial = new Swiper('.testimonial__swiper', {
    loop: true,
    spaceBetween: 16,
    grabCursor: true,
    slidesPerView: 'auto',
    centeredSlides: 'auto',

    breakpoints: {
        1150: {
            slidersPerView: 3,
            centeredSlides: false,
        }
    }
  })


/*=============== SHOW SCROLL UP ===============*/ 
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up')
    this.scrollY >= 350 ? scrollUp.classList.add('show-scroll')
               : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

const scrollActive = () =>{
    const scrollDown = window.scrollY

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
         sectionTop = current.offsetTop - 58,
         sectionId = current.getAttribute('id'),
         sectionClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']')
         if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionClass.classList.add('active-link')
         }else{
            sectionClass.classList.remove('active-link')
         }
  })  
}
window.addEventListener('scroll', scrollActive)

/*=============== DARK LIGHT THEME ===============*/ 
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'ri-sun-line'

// if user selected 
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

//obtain current theme that the interface has by validating the dark theme class
const getCurrentTheme = () => document.body.classList.contains(darktheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'ri-moon-line' : 'ri-sun-line'

//validate if user previously chose a topic yasta
if (selectedTheme){
//if validation is fulfilled yasta we ask what he issue was to know if we activated or deactivated the dark
document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
themeButton.classList[selectedIcon === 'ri-moon-line' ? 'add' : 'remove'](iconTheme)
}

//Activate / deactivate the theme manually
themeButton.addEventListener('click', () => {
    //add or remove dark icon theme yastaaa
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //We save the theme and current icon that the user chosee ya m3lm
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
    //reset: true, //Animation repeat
})

sr.reveal(`.home__data, .featured__container, .new__container, .join__data, .testimonial__container, .footer`)
sr.reveal(`.home__images`, {delay: 600})
sr.reveal(`.services__card`, {interval: 100})
sr.reveal(`.discount__data`, {origin: 'left'})
sr.reveal(`.discount__images`, {origin: 'right'})