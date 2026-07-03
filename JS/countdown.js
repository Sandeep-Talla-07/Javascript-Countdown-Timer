class CountDown {
  constructor(expiredDate, onRender, onComplete) {
    this.onRender = onRender;
    this.onComplete = onComplete;
    this.setExpiredDate(expiredDate);
  }

  setExpiredDate(expiredDate) {
    const currTime = new Date().getTime();
    this.remTime = expiredDate.getTime() - currTime;

    if (this.remTime <= 0) {
      this.complete();
    } else {
      this.start();
    }
  }

  complete() {
    if (typeof this.onComplete === "function") {
      this.onComplete();
    }
  }

  getTime() {
    return {
      days: Math.floor(this.remTime / (1000 * 60 * 60 * 24)),
      hours: Math.floor(this.remTime / (1000 * 60 * 60)) % 24,
      minutes: Math.floor(this.remTime / (1000 * 60)) % 60,
      seconds: Math.floor(this.remTime / 1000) % 60,
    };
  }

  update() {
    if (typeof this.onRender === "function") {
      this.onRender(this.getTime());
    }
  }

  start() {
    this.update();

    this.intervalId = setInterval(() => {
      this.remTime -= 1000;

      if (this.remTime <= 0) {
        clearInterval(this.intervalId);
        this.complete();
      } else {
        this.update();
      }
    }, 1000);
  }
}
