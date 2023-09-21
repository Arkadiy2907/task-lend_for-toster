'use strict'
const oldPriceNow = '263.00';
const newPriceNow = '163.00';
const startTimeForCountDown = 5; // 5 hours


const initCountDownAndPrice = () => {
  const oldPrice = document.querySelector('.oldPrice');
  const newPrice = document.querySelector('.newPrice');
  oldPrice.textContent = `R ${oldPriceNow}`;
  newPrice.textContent = `R ${newPriceNow}`;

  const timer = document.querySelector('.time_countDown');
  let seconds = 3600 * startTimeForCountDown;

  function countDown() {
    if (seconds > 0) {
      seconds--;
      const hours = Math.floor(seconds / 3600);
      const minutes = Math.floor((seconds % 3600) / 60);
      const remainingSeconds = seconds % 60;

      const timeString = hours.toString().padStart(2, '0') + ':' +
        minutes.toString().padStart(2, '0') + ':' +
        remainingSeconds.toString().padStart(2, '0');
      timer.textContent = timeString;

      setTimeout(countDown, 1000);
    }
  }

  countDown();
}

window.addEventListener('load', initCountDownAndPrice);