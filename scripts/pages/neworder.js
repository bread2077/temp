import '../../styles/neworder.css';

import FilterCategories from '../components/FilterCategories.js';

const select = document.querySelector('select.select_card_type_category');

const categories = [
  {
    id: -1,
    name: 'Избранные услуги',
    icon: {
      icon_type: 'icon',
      icon: 'fas fa-star',
    },
  },
  {
    id: 8104,
    name: 'Получи Деньги на баланс SMMPRIME за Отзыв',
    icon: {
      icon_type: 'icon',
      icon: 'fas fa-search-dollar',
    },
  },
  {
    id: 3387,
    name: 'Telegram Просмотры с настраиваемой скоростью',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/nk5zswqhq3w97m1k.png',
      id: '2214',
    },
  },
  {
    id: 2680,
    name: 'Вконтакте Лучшие Услуги',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/ubkhl1t8cerh4sxz.png',
      id: '2238',
    },
  },
  {
    id: 2681,
    name: 'Telegram Лучшие Услуги',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/6fr7fbrez4t2c16q.png',
      id: '2203',
    },
  },
  {
    id: 2682,
    name: 'TikTok Лучшие Услуги',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/hscf8azm5j8ocqj3.png',
      id: '2225',
    },
  },
  {
    id: 2683,
    name: 'Instagram* Лучшие Услуги',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/1nu75ao4p01d7pdb.png',
      id: '2237',
    },
  },
  {
    id: 8958,
    name: 'Wibes',
    icon: {
      icon_type: 'emoji',
      icon: '🛒',
    },
  },
  {
    id: 4754,
    name: 'Telegram Бусты - ПУБЛИЧНЫЙ канал',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/3ikw7n4bd6ufariq.png',
      id: '2281',
    },
  },
  {
    id: 8738,
    name: 'Telegram Бусты - ПРИВАТНЫЙ канал',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/krxh3f3x86shlifc.png',
      id: '355',
    },
  },
  {
    id: 6291,
    name: 'Красивые графики для Tgstat и Telemetr',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/krxh3f3x86shlifc.png',
      id: '355',
    },
  },
  {
    id: 8629,
    name: 'Telegram Просмотры для ТОПа',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/krxh3f3x86shlifc.png',
      id: '355',
    },
  },
  {
    id: 4666,
    name: 'Telegram PREMIUM Подписчики',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/3ikw7n4bd6ufariq.png',
      id: '2281',
    },
  },
  {
    id: 6290,
    name: 'Telegram PREMIUM Подписчики РФ',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/3ikw7n4bd6ufariq.png',
      id: '2281',
    },
  },
  {
    id: 8418,
    name: 'Telegram PREMIUM Подписчики в БОТ',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/2x9c3q0e7cqnru5n.png',
      id: '359',
    },
  },
  {
    id: 47,
    name: 'Twitch',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/0org4elfchtb9l41.png',
      id: '364',
    },
  },
  {
    id: 7078,
    name: 'Рефералы в игры в Telegram',
    icon: {
      icon_type: 'emoji',
      icon: '😺',
    },
  },
  {
    id: 3064,
    name: 'Отзывы и Активность в интернете',
    icon: {
      icon_type: 'emoji',
      icon: '?',
    },
  },
  {
    id: 6580,
    name: 'Вконтакте Подписка на услуги (Автоматические услуги)',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/5rdxwtzpks2chyfu.png',
      id: '2574',
    },
  },
  {
    id: 6101,
    name: 'Вконтакте Просмотры',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/5rdxwtzpks2chyfu.png',
      id: '2574',
    },
  },
  {
    id: 2050,
    name: 'Вконтакте Лайки',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/k4k4sujajfl6uz3z.png',
      id: '2241',
    },
  },
  {
    id: 19,
    name: 'Вконтакте Подписчики и Друзья',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/1n6x1nhlc5g6ifxr.png',
      id: '2242',
    },
  },
  {
    id: 2118,
    name: 'Вконтакте (Комментарии, репосты и др.)',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/i9jpi2uwxy67pxce.png',
      id: '2243',
    },
  },
  {
    id: 6678,
    name: 'Telegram Подписка на просмотры от Подписчиков + Статистика (Автопросмотры)',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/0re7x2arxp75zewd.png',
      id: '351',
    },
  },
  {
    id: 2255,
    name: 'Telegram Подписка на просмотры (Автопросмотры)',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/79dxflh4lbb65taj.png',
      id: '2215',
    },
  },
  {
    id: 3388,
    name: 'Telegram Подписка на просмотры (Автопросмотры) с плавной скоростью🌱',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/79dxflh4lbb65taj.png',
      id: '2215',
    },
  },
  {
    id: 5733,
    name: 'Telegram Подписчики РФ',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/9yadtq2w8a8lxnql.png',
      id: '2535',
    },
  },
  {
    id: 3145,
    name: 'Telegram Подписчики РФ - VIP качество',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/8o1c4y81od4fwslb.png',
      id: '2217',
    },
  },
  {
    id: 15,
    name: 'Telegram Подписчики',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/8o1c4y81od4fwslb.png',
      id: '2217',
    },
  },
  {
    id: 3305,
    name: 'Telegram Подписчики - Любая Тематика🔞',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/8o1c4y81od4fwslb.png',
      id: '2217',
    },
  },
  {
    id: 218,
    name: 'Telegram Просмотры и Комментарии',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/nk5zswqhq3w97m1k.png',
      id: '2214',
    },
  },
  {
    id: 2607,
    name: 'Telegram Просмотры Живые со Статистикой Таргетированные',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/nk5zswqhq3w97m1k.png',
      id: '2214',
    },
  },
  {
    id: 219,
    name: 'Telegram Реакции',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/k8p6r1spsua75k20.png',
      id: '2205',
    },
  },
  {
    id: 2535,
    name: 'Telegram Подписка на реакции (Автореакции)',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/ce5au6b86maar3ni.png',
      id: '2216',
    },
  },
  {
    id: 3066,
    name: 'Telegram Репосты и Авторепосты',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/tpwkftjsd3ll4n68.png',
      id: '2219',
    },
  },
  {
    id: 220,
    name: 'Telegram Голосование в опросах',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/tpwkftjsd3ll4n68.png',
      id: '2219',
    },
  },
  {
    id: 6777,
    name: 'Likee',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/3h2gm0air0o9al77.png',
      id: '2816',
    },
  },
  {
    id: 5916,
    name: 'TikTok Просмотры',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/x4ih49t7x7qrr8ft.png',
      id: '2536',
    },
  },
  {
    id: 1003,
    name: 'TikTok Лайки',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/2f6di4nk1p037hg7.png',
      id: '2220',
    },
  },
  {
    id: 1004,
    name: 'TikTok Подписчики',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/uduinpb2jaqaa0ct.png',
      id: '2222',
    },
  },
  {
    id: 1131,
    name: 'TikTok Другие услуги',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/un02c8q86co0b1yt.png',
      id: '2221',
    },
  },
  {
    id: 5,
    name: 'Youtube',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/co4qw0m1of98o7is.png',
      id: '374',
    },
  },
  {
    id: 50,
    name: 'Instagram* Просмотры Reels/IGTV/Видео',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/3fi6h3rp9qeikqjx.png',
      id: '2233',
    },
  },
  {
    id: 5283,
    name: 'Instagram* Stories',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/6i30qdmo565gqs0s.png',
      id: '2533',
    },
  },
  {
    id: 37,
    name: 'Instagram* Подписка на просмотры (Автопросмотры)',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/45ywkp44al9fpogh.png',
      id: '2234',
    },
  },
  {
    id: 6,
    name: 'Instagram* Увеличение Охвата/Статистики/Сохранений/Репостов',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/kjf33os3qj922buu.png',
      id: '2235',
    },
  },
  {
    id: 40,
    name: 'Instagram* Подписка на Охваты/Сохранения (Автостатистика)',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/qn50j9fad8lql7h2.png',
      id: '2236',
    },
  },
  {
    id: 7,
    name: 'Instagram* Комментарии',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/wb6a1ys3n0be3w3x.png',
      id: '2230',
    },
  },
  {
    id: 52,
    name: 'Instagram* Подписка на Умные Комментарии (Автокомментарии)',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/n1jqmqt8icl7ye3r.png',
      id: '2231',
    },
  },
  {
    id: 5462,
    name: 'Instagram* Лайки',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/9mzo7r6s7jq4zyhb.png',
      id: '2534',
    },
  },
  {
    id: 35,
    name: 'Instagram* Подписка на Лайки (Автолайки)',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/rzasm6dmn773ylur.png',
      id: '2229',
    },
  },
  {
    id: 16,
    name: 'Instagram* Подписчики с Восстановлением',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/bea9w9jiofplnwga.png',
      id: '2232',
    },
  },
  {
    id: 14,
    name: 'Instagram* Прямой эфир',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/3fi6h3rp9qeikqjx.png',
      id: '2233',
    },
  },
  {
    id: 11,
    name: 'Twitter/X',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/gizq1landwxtkhwj.png',
      id: '414',
    },
  },
  {
    id: 8,
    name: 'Facebook*',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/uj2o04hf4y4euo3i.png',
      id: '415',
    },
  },
  {
    id: 27,
    name: 'Soundcloud',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/c5iat9zr9jlc9z8u.png',
      id: '419',
    },
  },
  {
    id: 22,
    name: 'Трафик на Сайт',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/pdsu1uqxo0kxfigi.png',
      id: '423',
    },
  },
  {
    id: 53,
    name: 'Одноклассники',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/prtrs6l482n07hzz.png',
      id: '420',
    },
  },
  {
    id: 45,
    name: 'Рутуб',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/k2lm0y8tz1j0fhm5.png',
      id: '2059',
    },
  },
  {
    id: 3304,
    name: 'Дзен',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/90rw72tu8xsk15lg.jpg',
      id: '1976',
    },
  },
  {
    id: 8847,
    name: 'Телеграм Просмотры - РЕЗЕРВ',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/kjkgwzegidfa0m6n.png',
      id: '357',
    },
  },
  {
    id: 8957,
    name: 'Kick',
    icon: {
      icon_type: 'icon',
      icon: 'fab fa-kickstarter-k',
    },
  },
  {
    id: 11079,
    name: 'MAX',
    icon: {
      icon_type: 'icon',
      icon: 'far fa-comment',
    },
  },
  {
    id: 0,
    name: 'Другое',
    icon: null,
  },
];

const btns = document.querySelector('.platform-btn-container');
if (btns && select) {
  const categoriesFilter = new FilterCategories(btns, select, categories, {
    btnSelector: '.platform-btn',
  });
  categoriesFilter.setEventListeners();
}
