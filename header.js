let menuBars = document.getElementById("categorias");
function menuToggle() {
  if (menuBars.style.display == "flex") {
    menuBars.style.display = "none";
  } else {
    menuBars.style.display = "flex";
  }
}
const MediaQueryNew = matchMedia("(min-width: 573px)");
const ifMatchesChange = (e) => {
  if (e.matches) {
    menuBars.style.display = "none";
  }
};
MediaQueryNew.addListener(ifMatchesChange);


