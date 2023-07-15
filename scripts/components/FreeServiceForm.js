export default class FreeServiceForm {
  constructor(formSelector, min, max) {
    this._formSelector = formSelector;
    this._form = document.querySelector(`.${formSelector}`);
    this._link = this._form.querySelector('.freeservices__input_type_link');
    this._select = this._form.querySelector('.freeservices__input_type_select');
    this._submit = this._form.querySelector('.freeservices__submit');
    this._waiting = this._form.querySelector('.freeservices__waiting');
    this._response = this._form.querySelector('.freeservices__response');
    this._timer = this._form.querySelector('.freeservices__time');
    this._MIN_TIMER = min;
    this._MAX_TIMER = max;
  }

  _getRandomInt() {
    this._MIN_TIMER = Math.ceil(this._MIN_TIMER);
    this._MAX_TIMER = Math.floor(this._MAX_TIMER);
    return (
      Math.floor(Math.random() * (this._MAX_TIMER - this._MIN_TIMER)) +
      this._MIN_TIMER
    );
  }

  _fetchFreeService(amount) {
    fetch(
      `https://smmprime.com/api/v2?key=dc51ab87891560150bbaad9acb6cbb6f&action=add&service=${this._select.value}&link=${this._link.value}&quantity=${amount}`
    )
      .then(res => console.log(res))
      .catch(err => console.error(err));
  }

  _choiceAmountFreeService() {
    switch (Number(this._select.value)) {
      case 708:
      case 764:
      case 753:
        this._fetchFreeService(100);
        break;
      case 869:
      case 499:
        this._fetchFreeService(10);
        break;
      default:
        console.log('что-то пошло не так');
    }
  }

  _startFreeService() {
    let num = this._getRandomInt(5, 6);

    const timer = window.setInterval(() => {
      num--;
      if (num <= 0) {
        window.clearInterval(timer);
        this._waiting.classList.add('freeservices__waiting_hidden');
        this._submit.classList.remove('btn_disabled');
      } else {
        this._timer.textContent = num;
      }
    }, 1000);
  }

  _sendFreeService(e) {
    e.preventDefault();
    this._response.classList.remove('freeservices__responce_hidden');
    this._submit.classList.add('btn_disabled');
    this._choiceAmountFreeService();
  }

  setEventListeners() {
    this._form.addEventListener('submit', e => this._sendFreeService(e));
    window.addEventListener('load', () => this._startFreeService());
  }
}
