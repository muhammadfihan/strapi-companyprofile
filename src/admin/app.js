const config = {
  locales: [
    // 'ar',
    // 'fr',
    // 'cs',
    // 'de',
    // 'dk',
    // 'es',
    // 'he',
    //   "id",
    // 'it',
    // 'ja',
    // 'ko',
    // 'ms',
    // 'nl',
    // 'no',
    // 'pl',
    // 'pt-BR',
    // 'pt',
    // 'ru',
    // 'sk',
    // 'sv',
    // 'th',
    // 'tr',
    // 'uk',
    // 'vi',
    // 'zh-Hans',
    // 'zh',
  ],
  tutorials: false,
  notifications: {
    releases: false,
  },
  theme: {
    light: {
      colors: {
        primary100: "#fcecea",
        primary200: "#f5c0b8",
        primary500: "#ee5e52",
        buttonPrimary500: "#ee5e52",
        primary600: "#CB292C",
        buttonPrimary600: "#CB292C",
        primary700: "#b72b1a",
      },
    },
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
