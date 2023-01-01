const nav_bar_div_header = document.getElementById("nav-bar-header");

let touchstartX = 0;
let touchendX = 0;

function checkDirection() {
  if (touchendX < touchstartX && elementInViewport(banner_div)) {
    nav_bar_div_header.style.opacity = "0";
  }
  if (touchendX > touchstartX) {
    nav_bar_div_header.style.opacity = "0";
  }
}

document.addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  checkDirection();
});

let touchstartY = 0;
let touchendY = 0;

function checkDirection() {
  if (touchendY < touchstartY && elementInViewport(banner_div)) {
    nav_bar_div.style.opacity = "0";
    console.log("swipe up");
    // swipe up
  } else {
    nav_bar_div.style.opacity = "1";
  }
}

document.addEventListener("touchstart", (e) => {
  touchstartY = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
  touchendY = e.changedTouches[0].screenX;
  checkDirection();
});

function elementInViewport(el) {
  var top = el.offsetTop;
  var left = el.offsetLeft;
  var width = el.offsetWidth;
  var height = el.offsetHeight;

  while (el.offsetParent) {
    el = el.offsetParent;
    top += el.offsetTop;
    left += el.offsetLeft;
  }

  return (
    top < window.pageYOffset + window.innerHeight &&
    left < window.pageXOffset + window.innerWidth &&
    top + height > window.pageYOffset &&
    left + width > window.pageXOffset
  );
}
