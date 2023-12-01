import FullService from '../components/FullService.js';
import { listContainer } from '../utils/constants.v5.js';
import PopupWithDescription from '../components/PopupWithDescription.js';
import { commentsServices as socialTitle } from '../utils/social-services/comments-services.js';
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

const prizeCounter = s => {
  const config = {
    maxBallCount: 3,
    blockedHoop: '',
    currentHoop: '',
    score: 0,
    hoops: {
      R: {
        score: 100,
        bonus: 500,
        count: 0,
      },
      G: {
        score: 100,
        bonus: 200,
        count: 0,
      },
      B: {
        score: 100,
        bonus: 300,
        count: 0,
      },
    },
  };

  for (let i = 0; i < s.length; i++) {
    const hoop = config.hoops[s[i]];

    if (config.currentHoop && config.currentHoop !== s[i]) {
      config.hoops[config.currentHoop].count = 0;
    }
    if (!config.hoops[s[i]] || config.blockedHoop === s[i]) continue;

    hoop.count++;

    if (hoop.count === config.maxBallCount) {
      config.score += hoop.bonus;
      config.blockedHoop = s[i];
    }

    config.score += hoop.score;
    config.currentHoop = s[i];
  }

  return config.score;
};
