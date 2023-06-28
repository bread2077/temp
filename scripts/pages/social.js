import ChoiceServiceText from "../components/ChoiceServiceText.js";
import Faq from "../components/Faq.js";
import HorizontalSwiper from "../components/HorizontalSwiper.js";
import CustomerCounter from "../components/CustomerCounter.js";
import FullService from "../components/FullService.js";
import {
  cyrcleItems,
  faqList,
  listContainer,
  root,
} from "../utils/constants.js";
import { socials } from "../utils/socials.js";

const thirdCulc = new ChoiceServiceText("third-culc");
thirdCulc.renderSocials();
thirdCulc.setEventListeners();

faqList.forEach((faq) => {
  const faqItem = new Faq(faq);
  faqItem.setEventListeners();
});

const phoneSwiper = new HorizontalSwiper(".advantages__phones");

if (document.documentElement.clientWidth < 700) {
  phoneSwiper.initializeSwiper();
}

cyrcleItems.forEach((item, index) => {
  item.style.transform = `rotate(calc(${
    (360 * (index + 1)) / cyrcleItems.length
  }deg))`;
  item.querySelector(".cyrcle__image").style.transform = `rotate(calc(-${
    (360 * (index + 1)) / cyrcleItems.length
  }deg))`;
});

const countersList = document.querySelectorAll(".custom-counter");
countersList.forEach((counter) => {
  const customCounter = new CustomerCounter(counter);
  customCounter.startTimer();
});

const servicePopup = document.querySelector(".popup_type_service");

function setServicePopupInfo(service) {
  servicePopup.querySelector(".popup__title").textContent = service.name;
  servicePopup.querySelector(".popup__id").textContent = service.id;
  servicePopup.querySelector(".popup__text_type_information").textContent =
    service.information;
  servicePopup.querySelector(".popup__text_type_example").textContent =
    service.example;
  const descriptionContainer = servicePopup.querySelector(
    ".popup__description-list"
  );
  descriptionContainer.textContent = "";
  service.description.forEach((text) => {
    descriptionContainer.insertAdjacentHTML(
      "beforeend",
      `<li class="popup__description-item popup__text">${text}</li>`
    );
  });
}

function openServicePopup(service) {
  servicePopup.classList.add("popup_is-opened");
  root.classList.add("root_hidden");
  setServicePopupInfo(service);
}

socials.telegram.services.views.full.forEach((social) => {
  const serviceItem = new FullService(
    "service-list__body",
    "service-element",
    {
      servicesItem: social,
    },
    openServicePopup
  );

  serviceItem.setEvetListeners();
  listContainer.append(serviceItem.createServiceItem());
});

const popupCloseButton = document.querySelector(".popup__close");
popupCloseButton.addEventListener("click", () => {
  servicePopup.classList.remove("popup_is-opened");
  root.classList.remove("root_hidden");
});
