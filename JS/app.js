const getNewYear = () => {
  const currYear = new Date().getFullYear();
  return new Date(`January 01 ${currYear + 1} 00:00:00`);
};

const year = document.querySelector(".year");
const app = document.querySelector(".countdowntimer");
const message = document.querySelector(".message");
const heading = document.querySelector("h2");

year.innerHTML = getNewYear().getFullYear();

const format = (t) => {
  return t < 10 ? "0" + t : t;
};

const render = (time) => {
  app.innerHTML = `
    <div class="count-down">

      <div class="timer">
        <h2>${format(time.days)}</h2>
        <small>Days</small>
      </div>

      <div class="timer">
        <h2>${format(time.hours)}</h2>
        <small>Hours</small>
      </div>

      <div class="timer">
        <h2>${format(time.minutes)}</h2>
        <small>Minutes</small>
      </div>

      <div class="timer">
        <h2>${format(time.seconds)}</h2>
        <small>Seconds</small>
      </div>

    </div>
  `;
};

const showMessage = () => {
  message.innerHTML = `🎉 Happy New Year ${getNewYear().getFullYear()}!`;
  app.innerHTML = "";
  heading.style.display = "none";
};

const hideMessage = () => {
  message.innerHTML = "";
  heading.style.display = "block";
};

const complete = () => {
  showMessage();

  setTimeout(
    () => {
      hideMessage();
      countdownTimer.setExpiredDate(getNewYear());
    },
    1000 * 60 * 60 * 24,
  );
};

const countdownTimer = new CountDown(getNewYear(), render, complete);
