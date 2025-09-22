import FilterCategories from '../components/FilterCategories.js';

const select = document.querySelector('select.select_card_type_category');

const categories = [
  {
    id: -1,
    name: '\u0418\u0437\u0431\u0440\u0430\u043d\u043d\u044b\u0435 \u0443\u0441\u043b\u0443\u0433\u0438',
    icon: { icon_type: 'icon', icon: 'fas fa-star' },
  },
  {
    id: 8104,
    name: '\u041f\u043e\u043b\u0443\u0447\u0438 \u0414\u0435\u043d\u044c\u0433\u0438 \u043d\u0430 \u0431\u0430\u043b\u0430\u043d\u0441 SMMPRIME \u0437\u0430 \u041e\u0442\u0437\u044b\u0432',
    icon: { icon_type: 'icon', icon: 'fas fa-search-dollar' },
  },
  {
    id: 3387,
    name: 'Telegram \u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b \u0441 \u043d\u0430\u0441\u0442\u0440\u0430\u0438\u0432\u0430\u0435\u043c\u043e\u0439 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c\u044e',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/nk5zswqhq3w97m1k.png',
      id: '2214',
    },
  },
  {
    id: 2680,
    name: '\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435 \u041b\u0443\u0447\u0448\u0438\u0435 \u0423\u0441\u043b\u0443\u0433\u0438',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/ubkhl1t8cerh4sxz.png',
      id: '2238',
    },
  },
  {
    id: 2681,
    name: 'Telegram \u041b\u0443\u0447\u0448\u0438\u0435 \u0423\u0441\u043b\u0443\u0433\u0438',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/6fr7fbrez4t2c16q.png',
      id: '2203',
    },
  },
  {
    id: 2682,
    name: 'TikTok \u041b\u0443\u0447\u0448\u0438\u0435 \u0423\u0441\u043b\u0443\u0433\u0438',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/hscf8azm5j8ocqj3.png',
      id: '2225',
    },
  },
  {
    id: 2683,
    name: 'Instagram* \u041b\u0443\u0447\u0448\u0438\u0435 \u0423\u0441\u043b\u0443\u0433\u0438',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/1nu75ao4p01d7pdb.png',
      id: '2237',
    },
  },
  {
    id: 8958,
    name: 'Wibes',
    icon: { icon_type: 'emoji', icon: '\ud83d\uded2' },
  },
  {
    id: 4754,
    name: 'Telegram \u0411\u0443\u0441\u0442\u044b - \u041f\u0423\u0411\u041b\u0418\u0427\u041d\u042b\u0419 \u043a\u0430\u043d\u0430\u043b',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/3ikw7n4bd6ufariq.png',
      id: '2281',
    },
  },
  {
    id: 8738,
    name: 'Telegram \u0411\u0443\u0441\u0442\u044b - \u041f\u0420\u0418\u0412\u0410\u0422\u041d\u042b\u0419 \u043a\u0430\u043d\u0430\u043b',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/krxh3f3x86shlifc.png',
      id: '355',
    },
  },
  {
    id: 6291,
    name: '\u041a\u0440\u0430\u0441\u0438\u0432\u044b\u0435 \u0433\u0440\u0430\u0444\u0438\u043a\u0438 \u0434\u043b\u044f Tgstat \u0438 Telemetr',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/krxh3f3x86shlifc.png',
      id: '355',
    },
  },
  {
    id: 8629,
    name: 'Telegram \u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b \u0434\u043b\u044f \u0422\u041e\u041f\u0430',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/krxh3f3x86shlifc.png',
      id: '355',
    },
  },
  {
    id: 4666,
    name: 'Telegram PREMIUM \u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/3ikw7n4bd6ufariq.png',
      id: '2281',
    },
  },
  {
    id: 6290,
    name: 'Telegram PREMIUM \u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438 \u0420\u0424',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/3ikw7n4bd6ufariq.png',
      id: '2281',
    },
  },
  {
    id: 8418,
    name: 'Telegram PREMIUM \u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438 \u0432 \u0411\u041e\u0422',
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
    name: '\u0420\u0435\u0444\u0435\u0440\u0430\u043b\u044b \u0432 \u0438\u0433\u0440\u044b \u0432 Telegram',
    icon: { icon_type: 'emoji', icon: '\ud83d\ude3a' },
  },
  {
    id: 3064,
    name: '\u041e\u0442\u0437\u044b\u0432\u044b \u0438 \u0410\u043a\u0442\u0438\u0432\u043d\u043e\u0441\u0442\u044c \u0432 \u0438\u043d\u0442\u0435\u0440\u043d\u0435\u0442\u0435',
    icon: { icon_type: 'emoji', icon: '?' },
  },
  {
    id: 6580,
    name: '\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435 \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043d\u0430 \u0443\u0441\u043b\u0443\u0433\u0438 (\u0410\u0432\u0442\u043e\u043c\u0430\u0442\u0438\u0447\u0435\u0441\u043a\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438)',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/5rdxwtzpks2chyfu.png',
      id: '2574',
    },
  },
  {
    id: 6101,
    name: '\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435 \u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/5rdxwtzpks2chyfu.png',
      id: '2574',
    },
  },
  {
    id: 2050,
    name: '\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435 \u041b\u0430\u0439\u043a\u0438',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/k4k4sujajfl6uz3z.png',
      id: '2241',
    },
  },
  {
    id: 19,
    name: '\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435 \u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438 \u0438 \u0414\u0440\u0443\u0437\u044c\u044f',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/1n6x1nhlc5g6ifxr.png',
      id: '2242',
    },
  },
  {
    id: 2118,
    name: '\u0412\u043a\u043e\u043d\u0442\u0430\u043a\u0442\u0435 (\u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438, \u0440\u0435\u043f\u043e\u0441\u0442\u044b \u0438 \u0434\u0440.)',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/i9jpi2uwxy67pxce.png',
      id: '2243',
    },
  },
  {
    id: 6678,
    name: 'Telegram \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043d\u0430 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b \u043e\u0442 \u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u043e\u0432 + \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430 (\u0410\u0432\u0442\u043e\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b)',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/0re7x2arxp75zewd.png',
      id: '351',
    },
  },
  {
    id: 2255,
    name: 'Telegram \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043d\u0430 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b (\u0410\u0432\u0442\u043e\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b)',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/79dxflh4lbb65taj.png',
      id: '2215',
    },
  },
  {
    id: 3388,
    name: 'Telegram \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043d\u0430 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b (\u0410\u0432\u0442\u043e\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b) \u0441 \u043f\u043b\u0430\u0432\u043d\u043e\u0439 \u0441\u043a\u043e\u0440\u043e\u0441\u0442\u044c\u044e\ud83c\udf31',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/79dxflh4lbb65taj.png',
      id: '2215',
    },
  },
  {
    id: 5733,
    name: 'Telegram \u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438 \u0420\u0424',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/9yadtq2w8a8lxnql.png',
      id: '2535',
    },
  },
  {
    id: 3145,
    name: 'Telegram \u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438 \u0420\u0424 - VIP \u043a\u0430\u0447\u0435\u0441\u0442\u0432\u043e',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/8o1c4y81od4fwslb.png',
      id: '2217',
    },
  },
  {
    id: 15,
    name: 'Telegram \u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/8o1c4y81od4fwslb.png',
      id: '2217',
    },
  },
  {
    id: 3305,
    name: 'Telegram \u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438 - \u041b\u044e\u0431\u0430\u044f \u0422\u0435\u043c\u0430\u0442\u0438\u043a\u0430\ud83d\udd1e',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/8o1c4y81od4fwslb.png',
      id: '2217',
    },
  },
  {
    id: 218,
    name: 'Telegram \u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b \u0438 \u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/nk5zswqhq3w97m1k.png',
      id: '2214',
    },
  },
  {
    id: 2607,
    name: 'Telegram \u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b \u0416\u0438\u0432\u044b\u0435 \u0441\u043e \u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u043e\u0439 \u0422\u0430\u0440\u0433\u0435\u0442\u0438\u0440\u043e\u0432\u0430\u043d\u043d\u044b\u0435',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/nk5zswqhq3w97m1k.png',
      id: '2214',
    },
  },
  {
    id: 219,
    name: 'Telegram \u0420\u0435\u0430\u043a\u0446\u0438\u0438',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/k8p6r1spsua75k20.png',
      id: '2205',
    },
  },
  {
    id: 2535,
    name: 'Telegram \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043d\u0430 \u0440\u0435\u0430\u043a\u0446\u0438\u0438 (\u0410\u0432\u0442\u043e\u0440\u0435\u0430\u043a\u0446\u0438\u0438)',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/ce5au6b86maar3ni.png',
      id: '2216',
    },
  },
  {
    id: 3066,
    name: 'Telegram \u0420\u0435\u043f\u043e\u0441\u0442\u044b \u0438 \u0410\u0432\u0442\u043e\u0440\u0435\u043f\u043e\u0441\u0442\u044b',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/tpwkftjsd3ll4n68.png',
      id: '2219',
    },
  },
  {
    id: 220,
    name: 'Telegram \u0413\u043e\u043b\u043e\u0441\u043e\u0432\u0430\u043d\u0438\u0435 \u0432 \u043e\u043f\u0440\u043e\u0441\u0430\u0445',
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
    name: 'TikTok \u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/x4ih49t7x7qrr8ft.png',
      id: '2536',
    },
  },
  {
    id: 1003,
    name: 'TikTok \u041b\u0430\u0439\u043a\u0438',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/2f6di4nk1p037hg7.png',
      id: '2220',
    },
  },
  {
    id: 1004,
    name: 'TikTok \u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/uduinpb2jaqaa0ct.png',
      id: '2222',
    },
  },
  {
    id: 1131,
    name: 'TikTok \u0414\u0440\u0443\u0433\u0438\u0435 \u0443\u0441\u043b\u0443\u0433\u0438',
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
    name: 'Instagram* \u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b Reels/IGTV/\u0412\u0438\u0434\u0435\u043e',
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
    name: 'Instagram* \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043d\u0430 \u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b (\u0410\u0432\u0442\u043e\u043f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b)',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/45ywkp44al9fpogh.png',
      id: '2234',
    },
  },
  {
    id: 6,
    name: 'Instagram* \u0423\u0432\u0435\u043b\u0438\u0447\u0435\u043d\u0438\u0435 \u041e\u0445\u0432\u0430\u0442\u0430/\u0421\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0438/\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u0439/\u0420\u0435\u043f\u043e\u0441\u0442\u043e\u0432',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/kjf33os3qj922buu.png',
      id: '2235',
    },
  },
  {
    id: 40,
    name: 'Instagram* \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043d\u0430 \u041e\u0445\u0432\u0430\u0442\u044b/\u0421\u043e\u0445\u0440\u0430\u043d\u0435\u043d\u0438\u044f (\u0410\u0432\u0442\u043e\u0441\u0442\u0430\u0442\u0438\u0441\u0442\u0438\u043a\u0430)',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/qn50j9fad8lql7h2.png',
      id: '2236',
    },
  },
  {
    id: 7,
    name: 'Instagram* \u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/wb6a1ys3n0be3w3x.png',
      id: '2230',
    },
  },
  {
    id: 52,
    name: 'Instagram* \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043d\u0430 \u0423\u043c\u043d\u044b\u0435 \u041a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438 (\u0410\u0432\u0442\u043e\u043a\u043e\u043c\u043c\u0435\u043d\u0442\u0430\u0440\u0438\u0438)',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/n1jqmqt8icl7ye3r.png',
      id: '2231',
    },
  },
  {
    id: 5462,
    name: 'Instagram* \u041b\u0430\u0439\u043a\u0438',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/9mzo7r6s7jq4zyhb.png',
      id: '2534',
    },
  },
  {
    id: 35,
    name: 'Instagram* \u041f\u043e\u0434\u043f\u0438\u0441\u043a\u0430 \u043d\u0430 \u041b\u0430\u0439\u043a\u0438 (\u0410\u0432\u0442\u043e\u043b\u0430\u0439\u043a\u0438)',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/rzasm6dmn773ylur.png',
      id: '2229',
    },
  },
  {
    id: 16,
    name: 'Instagram* \u041f\u043e\u0434\u043f\u0438\u0441\u0447\u0438\u043a\u0438 \u0441 \u0412\u043e\u0441\u0441\u0442\u0430\u043d\u043e\u0432\u043b\u0435\u043d\u0438\u0435\u043c',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/bea9w9jiofplnwga.png',
      id: '2232',
    },
  },
  {
    id: 14,
    name: 'Instagram* \u041f\u0440\u044f\u043c\u043e\u0439 \u044d\u0444\u0438\u0440',
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
    name: '\u0422\u0440\u0430\u0444\u0438\u043a \u043d\u0430 \u0421\u0430\u0439\u0442',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/pdsu1uqxo0kxfigi.png',
      id: '423',
    },
  },
  {
    id: 53,
    name: '\u041e\u0434\u043d\u043e\u043a\u043b\u0430\u0441\u0441\u043d\u0438\u043a\u0438',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/prtrs6l482n07hzz.png',
      id: '420',
    },
  },
  {
    id: 45,
    name: '\u0420\u0443\u0442\u0443\u0431',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/k2lm0y8tz1j0fhm5.png',
      id: '2059',
    },
  },
  {
    id: 3304,
    name: '\u042f\u043d\u0434\u0435\u043a\u0441. \u0414\u0437\u0435\u043d',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/90rw72tu8xsk15lg.jpg',
      id: '1976',
    },
  },
  {
    id: 8847,
    name: '\u0422\u0435\u043b\u0435\u0433\u0440\u0430\u043c \u041f\u0440\u043e\u0441\u043c\u043e\u0442\u0440\u044b - \u0420\u0415\u0417\u0415\u0420\u0412',
    icon: {
      icon_type: 'image',
      url: 'https://storage2.perfectcdn.com/6b0a4d/kjkgwzegidfa0m6n.png',
      id: '357',
    },
  },
  {
    id: 8957,
    name: 'Kick',
    icon: { icon_type: 'icon', icon: 'fab fa-kickstarter-k' },
  },
  {
    id: 11079,
    name: 'MAX',
    icon: { icon_type: 'icon', icon: 'far fa-comment' },
  },
  { id: 0, name: '\u0414\u0440\u0443\u0433\u043e\u0435', icon: null },
];

const btns = document.querySelector('.platform-btn-container');
if (btns && select) {
  const categoriesFilter = new FilterCategories(btns, select, categories, {
    btnSelector: '.platform-btn',
  });
  categoriesFilter.setEventListeners();
}
