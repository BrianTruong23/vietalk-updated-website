const nav_bar = document.getElementById("header-nav");
var switchStatus = false;

function toggleMobileMenu(menu) {
  if (switchStatus == false) {
    nav_bar.style.height = "220px";
    switchStatus = true;
  } else {
    nav_bar.style.height = "100px";
    switchStatus = false;
  }

  menu.classList.toggle("open");
}
