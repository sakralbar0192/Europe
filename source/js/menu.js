const toggle = document.querySelector(".burger-menu__toggle");
const togleCaptionOpen = document.querySelector(".burger-menu__toggle-caption--open");
const toggleCaptionClose = document.querySelector(".burger-menu__toggle-caption--close");
const nav = document.querySelector(".burger-menu__nav");


toggle.addEventListener("click", function(evt){
  evt.preventDefault();
  if (nav.classList.contains("burger-menu__nav--show")){
    nav.classList.remove("burger-menu__nav--show")
    toggleCaptionClose.classList.remove("burger-menu__toggle-caption--current");
    togleCaptionOpen.classList.add("burger-menu__toggle-caption--current");
  }
  else {
    toggleCaptionClose.classList.add("burger-menu__toggle-caption--current");
    togleCaptionOpen.classList.remove("burger-menu__toggle-caption--current");
    nav.classList.add("burger-menu__nav--show");
  }
})
