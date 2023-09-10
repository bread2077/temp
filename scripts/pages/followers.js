import FullService from '../components/FullService.js';
import { listContainer } from '../utils/constants.v5.js';
import PopupWithDescription from '../components/PopupWithDescription.js';
import { followersServices as socialTitle } from '../utils/social-services/followers-services.js';
import { ServiceFilter } from '../components/ServiceFilter.js';

const popupService = new PopupWithDescription('popup_type_service');
popupService.setEventListeners();

const setServicesItem = item => {
  const serviceItem = new FullService(
    'service-list__body',
    'service-element',
    {
      servicesItem: item,
    },
    popupService.openServicePopup.bind(popupService),
    listContainer
  );

  serviceItem.setEvetListeners();
  serviceItem.initialize();
};

if (socialTitle) {
  const servicesFilter = new ServiceFilter(
    'service-list__form_role_filter',
    socialTitle,
    setServicesItem,
    listContainer
  );
  servicesFilter.initializeFilter();
}
