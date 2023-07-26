export default class CustomerCounter {
  constructor(counter) {
    this._counterElement = counter;
    this._start = Number(this._counterElement.dataset.start);
    this._stop = Number(this._counterElement.dataset.stop);
    this._step = (this._stop - this._start) / 120;
    this._timerStep = 10;
  }

  startTimer() {
    let n = this._start;
    let timer = setInterval(() => {
      n += this._step;
      if (n >= this._stop) {
        clearInterval(timer);
        this._counterElement.textContent = this._stop;
        return;
      }
      this._counterElement.textContent = Math.floor(n);
    }, this._timerStep);
  }
}
