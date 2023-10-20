import Popup from './Popup.js';

export default class PopupWithImage extends Popup {
  constructor(pupupSelector) {
    super(pupupSelector);
    this.image = this._popup.querySelector('.popup__image');
  }

  open(imageLink) {
    this.image.src = imageLink;
    super.open();
  }
}
