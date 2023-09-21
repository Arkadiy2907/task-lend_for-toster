'use strict'

const initMyColor = () => {
  const colorSelect = document.getElementById("color");

  colorSelect.addEventListener("change", function () {
    const selectedColor = colorSelect.value;
    const production = document.querySelector(".production");
    production.style.backgroundColor = selectedColor;
  });
}

window.addEventListener('load', initMyColor);