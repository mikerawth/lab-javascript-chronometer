class Chronometer {
  constructor() {
    this.currentTime = 0;
    this.intervalId;
    this.splitCounter = 0;
  }
  startClick() {
    this.intervalId = setInterval(() => {
      this.currentTime += 1;
      console.log(this);
    }, 1000);
  }
  getMinutes() {
    return Math.floor(this.currentTime / 60)
  }
  getSeconds() {
    return this.currentTime % 60
  }
  twoDigitsNumber() {
    let displayMinutes, displaySeconds;

    if (this.getSeconds() < 10) {
      displaySeconds = `0${this.getSeconds()}`
    } else {
      displaySeconds = `${this.getSeconds()}`
    }

    if (this.getMinutes() < 10) {
      displayMinutes = `0${this.getMinutes()}`
    } else {
      displayMinutes = `${this.getMinutes()}`
    }

    return `${displayMinutes}:${displaySeconds}`
  }
  stopClick() {
    clearInterval(this.intervalId);
  }
  resetClick() {
    this.currentTime = 0;
  }
  splitClick() {
    this.splitCounter += 1;
    return `${this.splitCounter}. ${this.twoDigitsNumber()}`
  }
}