export default class HorizontalSwiper {
  constructor(swiperSelector) {
    this._swiperBlock = document.querySelector(swiperSelector);
    this._swiperElements = this._swiperBlock.querySelectorAll('.advantages__item_type_phone');
    this._incrementWidth = this._swiperElements[0].offsetWidth * ((this._swiperElements.length/2) - 1);
    this._blockHalfWidth = this._swiperElements[0].offsetWidth / 2 + this._incrementWidth;
    this._elementWidth = this._swiperElements[0].offsetWidth;
    this._initialWidth = this._blockHalfWidth;
    this._n = 0;
    this._touchCoord = { x: 0 };
    this._DETECT_TRESHHOLD = 150;
    this._swiperActiveClass = 'advantages__item_active';
  }

  _swipeRight() {
    this._initialWidth = this._initialWidth - this._elementWidth;
    this._swiperBlock.style.transform = `translate(${this._initialWidth}px)`;
    this._swiperElements[this._n + 1].classList.add(this._swiperActiveClass);
    this._swiperElements[this._n].classList.remove(this._swiperActiveClass);
    this._n++;
    this._touchCoord.x = this._xUp;
  }

  _swipeLeft() {
    this._initialWidth = this._initialWidth + this._elementWidth;
    this._swiperBlock.style.transform = `translate(${this._initialWidth}px)`;
    this._swiperElements[this._n].classList.remove(this._swiperActiveClass);
    this._swiperElements[this._n - 1].classList.add(this._swiperActiveClass);
    this._n--;
    this._touchCoord.x = this._xUp;
  }

  _handleTouchStart(e) {
    this._touchCoord.x = e.touches[0].clientX;
  }

  _handleTouchMove(e) {
    this._xUp = e.touches[0].clientX;
    const difTouches = Math.abs(this._xUp - this._touchCoord.x);

    if((difTouches > this._DETECT_TRESHHOLD) && (this._n >= 0 && this._n < this._swiperElements.length)) {

      if(this._xUp > this._touchCoord.x && this._n > 0) {
        this._swipeLeft()
      } else if(this._xUp < this._touchCoord.x && this._n < this._swiperElements.length - 1) {
       this._swipeRight()
      }

    }
  }

  _setEventListeners() {
    this._swiperBlock.addEventListener('touchstart', (e) => this._handleTouchStart(e));
    this._swiperBlock.addEventListener('touchmove', (e) => this._handleTouchMove(e));
  }

  initializeSwiper() {
    this._swiperBlock.style.transform = `translate(${this._blockHalfWidth}px)`;
    this._setEventListeners();

  }

}
