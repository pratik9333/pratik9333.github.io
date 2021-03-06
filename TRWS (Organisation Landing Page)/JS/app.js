//Filter/
function togglebtn() {
  let hideText = document.querySelector("#hide-text");
  if (hideText.innerText === "Hide") {
    $(".filters").fadeOut("slow");
    hideText.innerText = "Filter";
  } else {
    $(".filters").fadeIn("slow");
    hideText.innerText = "Hide";
  }
}

//Navbar
document.querySelector(".menu-btn").addEventListener("click", () => {
  document.querySelector(".main-menu").classList.toggle("show");
});

// Dropdown Menu
var dropdown = document.querySelectorAll(".dropdown");
var dropdownArray = Array.prototype.slice.call(dropdown, 0);
dropdownArray.forEach(function (el) {
  var button = el.querySelector('a[data-toggle="dropdown"]'),
    menu = el.querySelector(".dropdown-menu"),
    arrow = button.querySelector(".icon-arrow");

  button.onclick = function (event) {
    if (!menu.hasClass("show")) {
      menu.classList.add("show");
      menu.classList.remove("hide");
      arrow.classList.add("open");
      arrow.classList.remove("close");
      event.preventDefault();
      // lineone.style.display = "block";
    } else {
      event.preventDefault();
      menu.classList.remove("show");
      menu.classList.add("hide");
      arrow.classList.remove("open");
      arrow.classList.add("close");
      event.preventDefault();
      // lineone.style.display = "none";
    }
  };
});
Element.prototype.hasClass = function (className) {
  return (
    this.className &&
    new RegExp("(^|\\s)" + className + "(\\s|$)").test(this.className)
  );
};

//Dates
let dates = document.querySelectorAll(".date");
dates.forEach((date) =>
  date.addEventListener("click", () => {
    for (i = 0; i < dates.length; i++) {
      dates[i].style.backgroundColor = "white";
      dates[i].style.color = "black";
    }
    date.style.backgroundColor = "rgba(66, 105, 242, 0.15)";
    date.style.color = "#4269F2";
  })
);
