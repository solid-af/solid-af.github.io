let countdown;
const timerDisplay = document.querySelector('.display__time-left');

function timer(seconds) {
  clearInterval(countdown);

  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);

    if(secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }

    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : '' }${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function startTimer() {
  const seconds = parseInt(this.dataset.time);
  timer(seconds);
}

function randomStartTime() {
  return (random(22, 59) * 60) + random(1, 60);
}

function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

timer(randomStartTime());
