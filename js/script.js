const nav_bar_div = document.getElementById("nav-bar-header");

const banner_div = document.getElementById("banner-div");

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

window.addEventListener("wheel", (event) => {
  const delta = Math.sign(event.deltaY);
  if (delta == -1 && elementInViewport(banner_div)) {
    // scroll up
    nav_bar_div.style.opacity = "0";
  }

  if (delta == 1) {
    nav_bar_div.style.opacity = "1";
    //  scroll down
  }
});

const label_banner = document.getElementById("banner-text");
var speed = 4700;

function first_sentence() {
  label_banner.innerHTML = ` More than just  
  <span class="type" style="--n:150"> 
  teach <strong>a language</strong>,
  <br> At VieTalk, we teach <strong>a culture</strong>.         
 </span>`;
}

function second_sentence() {
  label_banner.innerHTML = ` 
  <span class="type" style="--n:150"> 
  And more than that, at VieTalk, 
  <br>we work hard to keep it <strong>affordable</strong> for everyone. 
 </span>`;
}

function last_sentence() {
  label_banner.innerHTML = ` 
  <span class="type" style="--n:100"> 
  <strong>Welcome Home!</strong>
 </span>`;
}

function navigate_speech() {
  setTimeout(first_sentence, speed);
  // setTimeout(second_sentence, speed + 5000);
  setTimeout(last_sentence, speed + 5000);
}

const arrow_down_div = document.getElementById("scroll-down-div");
function animate_my_move() {
  arrow_down_div.style.display = "block";
}

setTimeout(animate_my_move, 10000);

navigate_speech();

const reload_button = document.getElementById("reload-page-button");
reload_button.addEventListener("click", function () {
  document.location.reload();
});
