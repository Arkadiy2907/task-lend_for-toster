'use strict'

const initMySize = () => {
  const maxDays = document.getElementById("size");
  const daysDelivery = document.querySelector(".daysDelivery");

  maxDays.addEventListener("change", function () {
    daysDelivery.textContent = maxDays.value;
  });
}

window.addEventListener('load', initMySize);