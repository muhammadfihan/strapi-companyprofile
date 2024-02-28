import type { Schema, Attribute } from '@strapi/strapi';

export interface CarierPageCarierSection extends Schema.Component {
  collectionName: 'components_carier_page_carier_sections';
  info: {
    displayName: 'Carier Section';
  };
  attributes: {
    subjudul: Attribute.String;
    judul_utama: Attribute.String;
  };
}

export interface CarierPageMainSection extends Schema.Component {
  collectionName: 'components_carier_page_main_sections';
  info: {
    displayName: 'Main Section';
  };
  attributes: {
    judul_path: Attribute.String;
    judul_utama: Attribute.String;
    deskripsi: Attribute.Text;
  };
}

export interface ChatbotBotAnswer extends Schema.Component {
  collectionName: 'components_chatbot_bot_answers';
  info: {
    displayName: 'Bot Answer';
  };
  attributes: {
    isi_text: Attribute.Text;
  };
}

export interface ChatbotDefaultChatbot extends Schema.Component {
  collectionName: 'components_chatbot_default_chatbots';
  info: {
    displayName: 'Default Chatbot';
    description: '';
  };
  attributes: {
    avatar: Attribute.Media;
    username: Attribute.String;
    nama_bot: Attribute.String;
    header_text: Attribute.String;
    link_whatsapp: Attribute.String;
  };
}

export interface ChatbotNoAnswer extends Schema.Component {
  collectionName: 'components_chatbot_no_answers';
  info: {
    displayName: 'No Answer';
  };
  attributes: {
    isi_noanswer: Attribute.Text;
    kontak: Attribute.String;
    link_kontak: Attribute.String;
  };
}

export interface DeveloperServiceDeveloperSection extends Schema.Component {
  collectionName: 'components_developer_service_devsection';
  info: {
    displayName: 'Developer Section';
    description: '';
  };
  attributes: {
    subjudul: Attribute.String;
    judul_utama: Attribute.String;
    deskripsi: Attribute.Text;
    icon_center: Attribute.Media;
    judul1: Attribute.String;
    deskripsi1: Attribute.Text;
    judul2: Attribute.String;
    deskripsi2: Attribute.Text;
    judul3: Attribute.String;
    deskripsi3: Attribute.Text;
    judul4: Attribute.String;
    deskripsi4: Attribute.Text;
    banner_icon: Attribute.Media;
    banner_text: Attribute.String;
  };
}

export interface DeveloperServiceDeveloperSkill extends Schema.Component {
  collectionName: 'components_developer_service_devskill';
  info: {
    displayName: 'Developer Skill';
    description: '';
  };
  attributes: {
    subjudul: Attribute.String;
    judul_utama: Attribute.String;
    deskripsi: Attribute.Text;
    list_skills: Attribute.Relation<
      'developer-service.developer-skill',
      'oneToMany',
      'api::list-skill.list-skill'
    >;
  };
}

export interface DeveloperServiceMainSection extends Schema.Component {
  collectionName: 'components_developer_service_main_sections';
  info: {
    displayName: 'Main Section';
    description: '';
  };
  attributes: {
    judul_path: Attribute.String;
    subjudul: Attribute.String;
    judul_utama: Attribute.String;
    deskripsi: Attribute.Text;
    banner_text: Attribute.String;
  };
}

export interface FooterMainFooter extends Schema.Component {
  collectionName: 'components_footer_main_footers';
  info: {
    displayName: 'Main Footer';
    description: '';
  };
  attributes: {
    logo: Attribute.Media;
    deskripsi: Attribute.Text;
    footer_contacts: Attribute.Relation<
      'footer.main-footer',
      'oneToMany',
      'api::footer-contact.footer-contact'
    >;
    footer_karirs: Attribute.Relation<
      'footer.main-footer',
      'oneToMany',
      'api::footer-karir.footer-karir'
    >;
    footer_alamats: Attribute.Relation<
      'footer.main-footer',
      'oneToMany',
      'api::footer-alamat.footer-alamat'
    >;
  };
}

export interface HeroBidangBisnis extends Schema.Component {
  collectionName: 'components_hero_bidang_bisnis';
  info: {
    displayName: 'Bidang Bisnis';
  };
  attributes: {
    judul: Attribute.String;
    subjudul: Attribute.String;
  };
}

export interface HeroDisplayProduk extends Schema.Component {
  collectionName: 'components_hero_display_produks';
  info: {
    displayName: 'Display Produk';
  };
  attributes: {
    judul: Attribute.String;
    subjudul: Attribute.String;
  };
}

export interface HeroHero extends Schema.Component {
  collectionName: 'components_hero_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    nama_pt: Attribute.String;
    kalimat_utama: Attribute.String;
    kalimat_kedua: Attribute.Text;
    gambar_hero: Attribute.Media;
  };
}

export interface HeroKeunggulanProduk extends Schema.Component {
  collectionName: 'components_hero_keunggulan_produks';
  info: {
    displayName: 'Keunggulan Produk';
    description: '';
  };
  attributes: {
    judul: Attribute.String;
    deskripsi: Attribute.Text;
    mockup_produk: Attribute.Media;
    list_fiturs: Attribute.Relation<
      'hero.keunggulan-produk',
      'oneToMany',
      'api::list-fitur.list-fitur'
    >;
  };
}

export interface PortofolioPageCountComponent extends Schema.Component {
  collectionName: 'components_portofolio_page_count_components';
  info: {
    displayName: 'Count Component';
    description: '';
  };
  attributes: {
    count1: Attribute.String;
    deskripsi1: Attribute.String;
    count2: Attribute.String;
    deskripsi2: Attribute.String;
    count3: Attribute.String;
    deskripsi3: Attribute.String;
  };
}

export interface PortofolioPagePortofolioMain extends Schema.Component {
  collectionName: 'components_portofolio_page_portofolio_mains';
  info: {
    displayName: 'Portofolio Main';
  };
  attributes: {
    judul_path: Attribute.String;
    subjudul: Attribute.String;
    judul_utama: Attribute.String;
    deskripsi: Attribute.Text;
  };
}

export interface PortofolioPagePortofolioSection extends Schema.Component {
  collectionName: 'components_portofolio_page_portofolio_sections';
  info: {
    displayName: 'Portofolio Section';
  };
  attributes: {
    subjudul: Attribute.String;
    judul_utama: Attribute.String;
  };
}

export interface PrincipalPageCommercials extends Schema.Component {
  collectionName: 'components_commercials';
  info: {
    displayName: 'Commercials';
    description: '';
  };
  attributes: {
    subjudul: Attribute.String;
    judul_utama: Attribute.String;
    list_commercials: Attribute.Relation<
      'principal-page.commercials',
      'oneToMany',
      'api::list-commercial.list-commercial'
    >;
    hover_image: Attribute.Media;
  };
}

export interface PrincipalPagePrincipalMain extends Schema.Component {
  collectionName: 'components_principal_page_principal_mains';
  info: {
    displayName: 'Principal-main';
  };
  attributes: {
    judul_path: Attribute.String;
    subjudul: Attribute.String;
    judul_utama: Attribute.String;
    caption: Attribute.String;
    deskripsi: Attribute.Text;
    count1: Attribute.String;
    deskripsi1: Attribute.String;
    count2: Attribute.String;
    deskripsi2: Attribute.String;
    kalimat_principal: Attribute.Text;
    gambar: Attribute.Media;
  };
}

export interface PrincipalPagePrincipalProduct extends Schema.Component {
  collectionName: 'components_principal_products';
  info: {
    displayName: 'Principal-product';
    description: '';
  };
  attributes: {
    subjudul: Attribute.String;
    judul_utama: Attribute.String;
    deskripsi: Attribute.Text;
    list_principals: Attribute.Relation<
      'principal-page.principal-product',
      'oneToMany',
      'api::list-principal.list-principal'
    >;
  };
}

export interface SolutionPageCountComponent extends Schema.Component {
  collectionName: 'components_solution_page_count_components';
  info: {
    displayName: 'Count Component';
    description: '';
  };
  attributes: {
    count1: Attribute.String;
    deskripsi1: Attribute.String;
    count2: Attribute.String;
    deskripsi2: Attribute.String;
    count3: Attribute.String;
    deskripsi3: Attribute.String;
  };
}

export interface SolutionPageMetodePengembangan extends Schema.Component {
  collectionName: 'components_solution_page_metode_pengembangans';
  info: {
    displayName: 'Metode Pengembangan';
  };
  attributes: {
    metode_pengembangan: Attribute.String;
    deskripsi: Attribute.Text;
    icon_metodepengembangan: Attribute.Media;
  };
}

export interface SolutionPageServiceSection extends Schema.Component {
  collectionName: 'components_solution_page_service_sections';
  info: {
    displayName: 'Service Section';
  };
  attributes: {
    judul_service: Attribute.String;
    subjudul: Attribute.String;
  };
}

export interface SolutionPageSolutionPage extends Schema.Component {
  collectionName: 'components_solution_page_solution_pages';
  info: {
    displayName: 'Solution Page';
    description: '';
  };
  attributes: {
    judul_path: Attribute.String;
    subjudul: Attribute.String;
    judul_utama: Attribute.String;
    deskripsi: Attribute.Text;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'carier-page.carier-section': CarierPageCarierSection;
      'carier-page.main-section': CarierPageMainSection;
      'chatbot.bot-answer': ChatbotBotAnswer;
      'chatbot.default-chatbot': ChatbotDefaultChatbot;
      'chatbot.no-answer': ChatbotNoAnswer;
      'developer-service.developer-section': DeveloperServiceDeveloperSection;
      'developer-service.developer-skill': DeveloperServiceDeveloperSkill;
      'developer-service.main-section': DeveloperServiceMainSection;
      'footer.main-footer': FooterMainFooter;
      'hero.bidang-bisnis': HeroBidangBisnis;
      'hero.display-produk': HeroDisplayProduk;
      'hero.hero': HeroHero;
      'hero.keunggulan-produk': HeroKeunggulanProduk;
      'portofolio-page.count-component': PortofolioPageCountComponent;
      'portofolio-page.portofolio-main': PortofolioPagePortofolioMain;
      'portofolio-page.portofolio-section': PortofolioPagePortofolioSection;
      'principal-page.commercials': PrincipalPageCommercials;
      'principal-page.principal-main': PrincipalPagePrincipalMain;
      'principal-page.principal-product': PrincipalPagePrincipalProduct;
      'solution-page.count-component': SolutionPageCountComponent;
      'solution-page.metode-pengembangan': SolutionPageMetodePengembangan;
      'solution-page.service-section': SolutionPageServiceSection;
      'solution-page.solution-page': SolutionPageSolutionPage;
    }
  }
}
