'use strict'

const initMyColor = () => {
  const colorSelect = document.getElementById("color");

  colorSelect.addEventListener("change", function () {
    const selectedColor = colorSelect.value;
    const productionAbout = document.querySelector(".production_about");
    productionAbout.style.backgroundColor = selectedColor;
  });
}

window.addEventListener('load', initMyColor);