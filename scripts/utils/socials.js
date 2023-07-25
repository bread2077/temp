import { SOCIAL_IMAGES_URL } from './constants.v5.js';

export const socials = {
  telegram: {
    name: 'Телеграм',
    img: `${SOCIAL_IMAGES_URL}/telegram-icon.svg`,
    services: {
      autoviews: {
        cost: 1,
        amount: 1000,
      },
      reactions: {
        cost: 4,
        amount: 1000,
      },
      reposts: {
        cost: 34,
        amount: 1000,
      },
      comments: {
        cost: 3,
        amount: 1,
      },
      views: {
        cost: 1,
        amount: 1000,
      },
      followers: {
        cost: 40,
        amount: 1000,
      },
      autolikes: {
        cost: 4,
        amount: 1000,
      },
      polls: {
        cost: 32,
        amount: 1000,
      },
    },
  },
  vk: {
    name: 'Вконтакте',
    img: `${SOCIAL_IMAGES_URL}/vk-icon.svg`,
    services: {
      likes: {
        cost: 45,
        amount: 1000,
      },
      friends: {
        cost: 90,
        amount: 1000,
      },
      listenings: {
        cost: 13,
        amount: 10,
      },
      reposts: {
        cost: 165,
        amount: 1000,
      },
      views: {
        cost: 3.2,
        amount: 1000,
      },
      followers: {
        cost: 90,
        amount: 1000,
      },
      autoviews: {
        cost: 2.5,
        amount: 1000,
      },
      comments: {
        cost: 3,
        amount: 1,
      },
      polls: {
        cost: 650,
        amount: 1000,
      },
    },
  },
  instagram: {
    name: 'Инстаграмм',
    img: `${SOCIAL_IMAGES_URL}/instagram-icon.svg`,
    services: {
      followers: {
        cost: 12,
        amount: 1000,
      },
      views: {
        cost: 1.5,
        amount: 1000,
      },
      comments: {
        cost: 3.5,
        amount: 10,
      },
      stories: {
        cost: 15,
        amount: 1000,
      },
      reposts: {
        cost: 13,
        amount: 1000,
      },
      likes: {
        cost: 3,
        amount: 1000,
      },
      autolikes: {
        cost: 3,
        amount: 1000,
      },
      autoreels: {
        cost: 1.5,
        amount: 1000,
      },
      coverages: {
        cost: 5,
        amount: 1000,
      },
      conservations: {
        cost: 6,
        amount: 1000,
      },
      polls: {
        cost: 155,
        amount: 1000,
      },
    },
  },
  tiktok: {
    name: 'ТикТок',
    img: `${SOCIAL_IMAGES_URL}/tiktok-icon.svg`,
    services: {
      followers: {
        cost: 260,
        amount: 1000,
      },
      reposts: {
        cost: 21,
        amount: 1000,
      },
      views: {
        cost: 1,
        amount: 1000,
      },
      likes: {
        cost: 59,
        amount: 1000,
      },
      conservations: {
        cost: 31,
        amount: 1000,
      },
      comments: {
        cost: 3500,
        amount: 1000,
      },
    },
  },
  youtube: {
    name: 'Ютуб',
    img: `${SOCIAL_IMAGES_URL}/youtube-icon.svg`,
    services: {
      views: {
        cost: 90,
        amount: 1000,
      },
      followers: {
        cost: 890,
        amount: 1000,
      },
      comments: {
        cost: 780,
        amount: 1000,
      },
      likes: {
        cost: 240,
        amount: 1000,
      },
    },
  },
  twitter: {
    name: 'Твиттер',
    img: `${SOCIAL_IMAGES_URL}/twitter-icon.svg`,
    services: {
      likes: {
        cost: 280,
        amount: 1000,
      },
      retweets: {
        cost: 250,
        amount: 1000,
      },
      followers: {
        cost: 430,
        amount: 1000,
      },
    },
  },
  spotify: {
    name: 'Спотифай',
    img: `${SOCIAL_IMAGES_URL}/spotify-icon.svg`,
    services: {
      listenings: {
        cost: 40,
        amount: 1000,
      },
    },
  },
  ok: {
    // пустой
    name: 'Одноклассники',
    img: `${SOCIAL_IMAGES_URL}/ok-icon.svg`,
    services: {},
  },
  facebook: {
    name: 'Фейсбук',
    img: `${SOCIAL_IMAGES_URL}/facebook-icon.svg`,
    services: {
      followers: {
        cost: 58,
        amount: 1000,
      },
      comments: {
        cost: 3.5,
        amount: 1,
      },
      likes: {
        cost: 55,
        amount: 1000,
      },
    },
  },
  internet: {
    name: 'Интернет',
    img: `${SOCIAL_IMAGES_URL}/internet-icon.svg`,
    services: {
      visitors: {
        cost: 12,
        amount: 1000,
      },
    },
  },
  soundcloud: {
    name: 'Саундклауд',
    img: `${SOCIAL_IMAGES_URL}/soundcloud-icon.svg`,
    services: {
      plays: {
        cost: 6,
        amount: 1000,
      },
      followers: {
        cost: 200,
        amount: 1000,
      },
      comments: {
        cost: 1.2,
        amount: 1,
      },
      likes: {
        cost: 155,
        amount: 1000,
      },
    },
  },
};
