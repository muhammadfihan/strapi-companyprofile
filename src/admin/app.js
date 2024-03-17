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
    dark: {
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
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "Admin Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "Nakula Sadewa",
      "Auth.form.email.placeholder": "",
      "Auth.form.welcome.subtitle": "Login dengan akun admin",
      "Auth.form.welcome.title": "Admin CMS",
      "content-manager.components.LeftMenu.collection-types": "List Data",
      "content-manager.components.LeftMenu.single-types": "Content Management",
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
