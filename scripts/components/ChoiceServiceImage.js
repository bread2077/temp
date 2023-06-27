import ChoiceService from "../components/ChoiceService.js";
import { socials } from "../utils/socials.js";

class ChoiceServiceImage extends ChoiceService {
  constructor(choiceSelector) {
    super(choiceSelector);
  }

  renderSocials() {
    for (let social in socials) {
      this._choiceList.append(
        this._createChoiceItemWithImage(
          social,
          socials[social].img,
          social,
          "culc-template-image"
        )
      );
    }
  }
}

export default ChoiceServiceImage;
