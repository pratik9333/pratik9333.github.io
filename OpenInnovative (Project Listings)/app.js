//Navbar
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".main-menu");
const navLink = document.querySelectorAll(".nav-link");
hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}
let filter = document.querySelector(".Filter-btn");
let textChange = document.getElementById("change-text");
filter.addEventListener("click", () => {
  if (textChange.innerText === "Hide") {
    textChange.innerText = "Filters";
    $(".dropdown").fadeIn("slow");
    $(".jobs-sec-3").fadeIn("slow");
    $(".job-sec-4").fadeIn("slow");
    $(".display-none").fadeOut("slow");
    document.querySelector(".fa-filter").style.transform = "rotateY(360deg)";
  } else {
    textChange.innerText = "Hide";
    $(".dropdown").fadeOut("slow");
    $(".jobs-sec-3").fadeOut("slow");
    $(".job-sec-4").fadeOut("slow");
    $(".display-none").fadeIn("slow");
    document.querySelector(".fa-filter").style.transform = "rotateY(-360deg)";
  }
  console.log(textChange.innerText);
});
