//Toggle Menu**
const nav = document.querySelector(".nav");
const hamburger= document.querySelector(".hamburger");
const closeButton= document.querySelector(".close-menu");
const menuButton = document.querySelector(".menu");
const filter = document.querySelector(".filter");

function toggleMenu() {
  if (nav.classList.contains("showNav")) {
    nav.classList.remove("showNav");
    closeButton.style.display = "none";
    menuButton.style.display = "block";
    filter.style.display = "none";
  } else {
    nav.classList.add("showNav");
    closeButton.style.display = "block";
    menuButton.style.display = "none";
    filter.style.display = "block";
  }
}
//**

const mainImage = document.getElementById('main-image');

//Good Image at the load of the page
window.addEventListener("load", function() {
    if (window.matchMedia("(max-width: 1120px)").matches) {
        mainImage.setAttribute("src", "images/image-hero-mobile.png");
        hamburger.addEventListener("click", toggleMenu);
    } else {
        mainImage.setAttribute("src", "images/image-hero-desktop.png");
        hamburger.addEventListener("click", toggleMenu);
    }
    //Good Image at the resize of the page
    window.addEventListener("resize", function() {
        if (window.matchMedia("(max-width: 1120px)").matches) {
            mainImage.setAttribute("src", "images/image-hero-mobile.png");
            hamburger.addEventListener("click", toggleMenu);
            filter.style.display="none";
        } else {
            mainImage.setAttribute("src", "images/image-hero-desktop.png");
            hamburger.addEventListener("click", toggleMenu);
        }
    })
})
