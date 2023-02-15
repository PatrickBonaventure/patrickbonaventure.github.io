/*=============== SHOW MENU ===============*/
const navMenu=document.getElementById('nav-menu'),
  navToggle=document.getElementById('nav-toggle'),
  navClose=document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
  navToggle.addEventListener("click",()=>{
    navMenu.classList.add('show-menu')
  })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
  navClose.addEventListener("click",()=>{
    navMenu.classList.remove('show-menu')
  })
}


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header=document.getElementById("header")
    //when the scroll is greater than 50 viewpoer heigth, add the scroll-header classs to the header tag
    if(this.scrollY>=50) header.classList.add('scroll-header');else header.classList.remove('scroll-header')
  }
  window.addEventListener('scroll',scrollHeader)


// Change theme
  const themeToggler = document.querySelector (".theme-toggler");


themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');

    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

/*=============== CHANGE ACTIVE LINK ===============*/

// Get the container element
var btnContainer = document.querySelector(".nav__menu");

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName("nav__link");

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-link");
    current[0].className = current[0].className.replace(" active-link", "");
    this.className += " active-link";
  });
}



//Scroll Down Effects




function scrollTrigger(selector, options = {}){
  let els = document.querySelectorAll(selector)
  els = Array.from(els)
  els.forEach(el => {
      addObserver(el, options)
  })
}

function addObserver(el, options){
  if(!('IntersectionObserver' in window)){
      if(options.cb){
          options.cb(el)
      }else{
          entry.target.classList.add('active')
      }
      return
  }
  let observer = new IntersectionObserver((entries, observer) => { //this takes a callback function which receives two arguments: the elemts list and the observer instance
      entries.forEach(entry => {
          if(entry.isIntersecting){
              if(options.cb){
                  options.cb(el)
              }else{
                  entry.target.classList.add('active')
              }
              observer.unobserve(entry.target)
          }
      })
  }, options)
  observer.observe(el)
}
// Example usages:
scrollTrigger('.intro-text')

scrollTrigger('.scroll-reveal', {
  rootMargin: '-200px',
})

scrollTrigger('.loader', {
  rootMargin: '-200px',
  cb: function(el){
      el.innerText = 'Loading...'
      setTimeout(() => {
          el.innerText = 'Task Complete!'
      }, 1000)
  }
})