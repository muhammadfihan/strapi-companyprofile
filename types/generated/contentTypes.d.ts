import type { Schema, Attribute } from '@strapi/strapi';

export interface AdminPermission extends Schema.CollectionType {
  collectionName: 'admin_permissions';
  info: {
    name: 'Permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    actionParameters: Attribute.JSON & Attribute.DefaultTo<{}>;
    subject: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    properties: Attribute.JSON & Attribute.DefaultTo<{}>;
    conditions: Attribute.JSON & Attribute.DefaultTo<[]>;
    role: Attribute.Relation<'admin::permission', 'manyToOne', 'admin::role'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminUser extends Schema.CollectionType {
  collectionName: 'admin_users';
  info: {
    name: 'User';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    firstname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastname: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    username: Attribute.String;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.Private &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    registrationToken: Attribute.String & Attribute.Private;
    isActive: Attribute.Boolean &
      Attribute.Private &
      Attribute.DefaultTo<false>;
    roles: Attribute.Relation<'admin::user', 'manyToMany', 'admin::role'> &
      Attribute.Private;
    blocked: Attribute.Boolean & Attribute.Private & Attribute.DefaultTo<false>;
    preferedLanguage: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::user', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminRole extends Schema.CollectionType {
  collectionName: 'admin_roles';
  info: {
    name: 'Role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    code: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String;
    users: Attribute.Relation<'admin::role', 'manyToMany', 'admin::user'>;
    permissions: Attribute.Relation<
      'admin::role',
      'oneToMany',
      'admin::permission'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'admin::role', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface AdminApiToken extends Schema.CollectionType {
  collectionName: 'strapi_api_tokens';
  info: {
    name: 'Api Token';
    singularName: 'api-token';
    pluralName: 'api-tokens';
    displayName: 'Api Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    type: Attribute.Enumeration<['read-only', 'full-access', 'custom']> &
      Attribute.Required &
      Attribute.DefaultTo<'read-only'>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::api-token',
      'oneToMany',
      'admin::api-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminApiTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_api_token_permissions';
  info: {
    name: 'API Token Permission';
    description: '';
    singularName: 'api-token-permission';
    pluralName: 'api-token-permissions';
    displayName: 'API Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::api-token-permission',
      'manyToOne',
      'admin::api-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::api-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferToken extends Schema.CollectionType {
  collectionName: 'strapi_transfer_tokens';
  info: {
    name: 'Transfer Token';
    singularName: 'transfer-token';
    pluralName: 'transfer-tokens';
    displayName: 'Transfer Token';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    description: Attribute.String &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }> &
      Attribute.DefaultTo<''>;
    accessKey: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    lastUsedAt: Attribute.DateTime;
    permissions: Attribute.Relation<
      'admin::transfer-token',
      'oneToMany',
      'admin::transfer-token-permission'
    >;
    expiresAt: Attribute.DateTime;
    lifespan: Attribute.BigInteger;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface AdminTransferTokenPermission extends Schema.CollectionType {
  collectionName: 'strapi_transfer_token_permissions';
  info: {
    name: 'Transfer Token Permission';
    description: '';
    singularName: 'transfer-token-permission';
    pluralName: 'transfer-token-permissions';
    displayName: 'Transfer Token Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 1;
      }>;
    token: Attribute.Relation<
      'admin::transfer-token-permission',
      'manyToOne',
      'admin::transfer-token'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'admin::transfer-token-permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFile extends Schema.CollectionType {
  collectionName: 'files';
  info: {
    singularName: 'file';
    pluralName: 'files';
    displayName: 'File';
    description: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    alternativeText: Attribute.String;
    caption: Attribute.String;
    width: Attribute.Integer;
    height: Attribute.Integer;
    formats: Attribute.JSON;
    hash: Attribute.String & Attribute.Required;
    ext: Attribute.String;
    mime: Attribute.String & Attribute.Required;
    size: Attribute.Decimal & Attribute.Required;
    url: Attribute.String & Attribute.Required;
    previewUrl: Attribute.String;
    provider: Attribute.String & Attribute.Required;
    provider_metadata: Attribute.JSON;
    related: Attribute.Relation<'plugin::upload.file', 'morphToMany'>;
    folder: Attribute.Relation<
      'plugin::upload.file',
      'manyToOne',
      'plugin::upload.folder'
    > &
      Attribute.Private;
    folderPath: Attribute.String &
      Attribute.Required &
      Attribute.Private &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.file',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUploadFolder extends Schema.CollectionType {
  collectionName: 'upload_folders';
  info: {
    singularName: 'folder';
    pluralName: 'folders';
    displayName: 'Folder';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    pathId: Attribute.Integer & Attribute.Required & Attribute.Unique;
    parent: Attribute.Relation<
      'plugin::upload.folder',
      'manyToOne',
      'plugin::upload.folder'
    >;
    children: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.folder'
    >;
    files: Attribute.Relation<
      'plugin::upload.folder',
      'oneToMany',
      'plugin::upload.file'
    >;
    path: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMax<
        {
          min: 1;
        },
        number
      >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::upload.folder',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesRelease extends Schema.CollectionType {
  collectionName: 'strapi_releases';
  info: {
    singularName: 'release';
    pluralName: 'releases';
    displayName: 'Release';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String & Attribute.Required;
    releasedAt: Attribute.DateTime;
    actions: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToMany',
      'plugin::content-releases.release-action'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginContentReleasesReleaseAction
  extends Schema.CollectionType {
  collectionName: 'strapi_release_actions';
  info: {
    singularName: 'release-action';
    pluralName: 'release-actions';
    displayName: 'Release Action';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    type: Attribute.Enumeration<['publish', 'unpublish']> & Attribute.Required;
    entry: Attribute.Relation<
      'plugin::content-releases.release-action',
      'morphToOne'
    >;
    contentType: Attribute.String & Attribute.Required;
    locale: Attribute.String;
    release: Attribute.Relation<
      'plugin::content-releases.release-action',
      'manyToOne',
      'plugin::content-releases.release'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::content-releases.release-action',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginI18NLocale extends Schema.CollectionType {
  collectionName: 'i18n_locale';
  info: {
    singularName: 'locale';
    pluralName: 'locales';
    collectionName: 'locales';
    displayName: 'Locale';
    description: '';
  };
  options: {
    draftAndPublish: false;
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.SetMinMax<
        {
          min: 1;
          max: 50;
        },
        number
      >;
    code: Attribute.String & Attribute.Unique;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::i18n.locale',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsPermission
  extends Schema.CollectionType {
  collectionName: 'up_permissions';
  info: {
    name: 'permission';
    description: '';
    singularName: 'permission';
    pluralName: 'permissions';
    displayName: 'Permission';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    action: Attribute.String & Attribute.Required;
    role: Attribute.Relation<
      'plugin::users-permissions.permission',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.permission',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsRole extends Schema.CollectionType {
  collectionName: 'up_roles';
  info: {
    name: 'role';
    description: '';
    singularName: 'role';
    pluralName: 'roles';
    displayName: 'Role';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    name: Attribute.String &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    description: Attribute.String;
    type: Attribute.String & Attribute.Unique;
    permissions: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.permission'
    >;
    users: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToMany',
      'plugin::users-permissions.user'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.role',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginUsersPermissionsUser extends Schema.CollectionType {
  collectionName: 'up_users';
  info: {
    name: 'user';
    description: '';
    singularName: 'user';
    pluralName: 'users';
    displayName: 'User';
  };
  options: {
    draftAndPublish: false;
    timestamps: true;
  };
  attributes: {
    username: Attribute.String &
      Attribute.Required &
      Attribute.Unique &
      Attribute.SetMinMaxLength<{
        minLength: 3;
      }>;
    email: Attribute.Email &
      Attribute.Required &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    provider: Attribute.String;
    password: Attribute.Password &
      Attribute.Private &
      Attribute.SetMinMaxLength<{
        minLength: 6;
      }>;
    resetPasswordToken: Attribute.String & Attribute.Private;
    confirmationToken: Attribute.String & Attribute.Private;
    confirmed: Attribute.Boolean & Attribute.DefaultTo<false>;
    blocked: Attribute.Boolean & Attribute.DefaultTo<false>;
    role: Attribute.Relation<
      'plugin::users-permissions.user',
      'manyToOne',
      'plugin::users-permissions.role'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::users-permissions.user',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface PluginSlugifySlug extends Schema.CollectionType {
  collectionName: 'slugs';
  info: {
    singularName: 'slug';
    pluralName: 'slugs';
    displayName: 'slug';
  };
  options: {
    draftAndPublish: false;
    comment: '';
  };
  pluginOptions: {
    'content-manager': {
      visible: false;
    };
    'content-type-builder': {
      visible: false;
    };
  };
  attributes: {
    slug: Attribute.Text;
    count: Attribute.Integer;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'plugin::slugify.slug',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'plugin::slugify.slug',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiChatbotChatbot extends Schema.CollectionType {
  collectionName: 'chatbots';
  info: {
    singularName: 'chatbot';
    pluralName: 'chatbots';
    displayName: 'chatbot';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    pertanyaan: Attribute.String;
    jawaban: Attribute.Text;
    katakunci: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::chatbot.chatbot',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::chatbot.chatbot',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiExtendProdukExtendProduk extends Schema.CollectionType {
  collectionName: 'extend_produks';
  info: {
    singularName: 'extend-produk';
    pluralName: 'extend-produks';
    displayName: 'Extend Produk';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    nama_produk: Attribute.String;
    deskripsi_singkat: Attribute.String;
    app_icon: Attribute.Media;
    link_produk: Attribute.String;
    aktif: Attribute.Boolean & Attribute.DefaultTo<true>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::extend-produk.extend-produk',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::extend-produk.extend-produk',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterAlamatFooterAlamat extends Schema.CollectionType {
  collectionName: 'footer_alamats';
  info: {
    singularName: 'footer-alamat';
    pluralName: 'footer-alamats';
    displayName: 'Footer Alamat';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    lokasi: Attribute.String;
    detail: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer-alamat.footer-alamat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer-alamat.footer-alamat',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterContactFooterContact extends Schema.CollectionType {
  collectionName: 'footer_contacts';
  info: {
    singularName: 'footer-contact';
    pluralName: 'footer-contacts';
    displayName: 'Footer Contact';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    lokasi: Attribute.String;
    email: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer-contact.footer-contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer-contact.footer-contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterKarirFooterKarir extends Schema.CollectionType {
  collectionName: 'footer_karirs';
  info: {
    singularName: 'footer-karir';
    pluralName: 'footer-karirs';
    displayName: 'Footer Karir';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    email: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer-karir.footer-karir',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer-karir.footer-karir',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterKeduaFooterKedua extends Schema.SingleType {
  collectionName: 'footer_keduas';
  info: {
    singularName: 'footer-kedua';
    pluralName: 'footer-keduas';
    displayName: 'Footer Kedua';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    judul: Attribute.String;
    subjudul: Attribute.String;
    gambar_footer: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer-kedua.footer-kedua',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer-kedua.footer-kedua',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiFooterUtamaFooterUtama extends Schema.SingleType {
  collectionName: 'footer_utamas';
  info: {
    singularName: 'footer-utama';
    pluralName: 'footer-utamas';
    displayName: 'Footer Utama';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    main_footer: Attribute.Component<'footer.main-footer'>;
    subjudul: Attribute.String;
    judul_utama: Attribute.String;
    deskripsi: Attribute.Text;
    gambar_footer: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::footer-utama.footer-utama',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::footer-utama.footer-utama',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiHomeHome extends Schema.SingleType {
  collectionName: 'homes';
  info: {
    singularName: 'home';
    pluralName: 'homes';
    displayName: 'Home';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    hero_section: Attribute.Component<'hero.hero'>;
    produk_section: Attribute.Component<'hero.display-produk'>;
    keunggulan_section: Attribute.Component<'hero.keunggulan-produk'>;
    bisnis_section: Attribute.Component<'hero.bidang-bisnis'>;
    list_produks: Attribute.Relation<
      'api::home.home',
      'oneToMany',
      'api::list-produk.list-produk'
    >;
    list_logos: Attribute.Relation<
      'api::home.home',
      'oneToMany',
      'api::list-logo.list-logo'
    >;
    list_bidangs: Attribute.Relation<
      'api::home.home',
      'oneToMany',
      'api::list-bidang.list-bidang'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
    updatedBy: Attribute.Relation<'api::home.home', 'oneToOne', 'admin::user'> &
      Attribute.Private;
  };
}

export interface ApiHubungiKamiHubungiKami extends Schema.SingleType {
  collectionName: 'hubungi_kamis';
  info: {
    singularName: 'hubungi-kami';
    pluralName: 'hubungi-kamis';
    displayName: 'Hubungi Kami';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    judul_path: Attribute.String;
    judul_utama: Attribute.String;
    deskripsi: Attribute.Text;
    list_contacts: Attribute.Relation<
      'api::hubungi-kami.hubungi-kami',
      'oneToMany',
      'api::list-contact.list-contact'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::hubungi-kami.hubungi-kami',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::hubungi-kami.hubungi-kami',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiKarirKarir extends Schema.SingleType {
  collectionName: 'karirs';
  info: {
    singularName: 'karir';
    pluralName: 'karirs';
    displayName: 'Karir';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    main_section: Attribute.Component<'carier-page.main-section'>;
    carier_section: Attribute.Component<'carier-page.carier-section'>;
    list_karirs: Attribute.Relation<
      'api::karir.karir',
      'oneToMany',
      'api::list-karir.list-karir'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::karir.karir',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::karir.karir',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiLayananKamiLayananKami extends Schema.SingleType {
  collectionName: 'layanan_kamis';
  info: {
    singularName: 'layanan-kami';
    pluralName: 'layanan-kamis';
    displayName: 'Layanan Kami';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    main_section: Attribute.Component<'solution-page.solution-page'>;
    count_section: Attribute.Component<'solution-page.count-component'>;
    service_section: Attribute.Component<'solution-page.service-section'>;
    list_services: Attribute.Relation<
      'api::layanan-kami.layanan-kami',
      'oneToMany',
      'api::list-service.list-service'
    >;
    Metode_Pengembangan: Attribute.Component<'solution-page.metode-pengembangan'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::layanan-kami.layanan-kami',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::layanan-kami.layanan-kami',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiListBidangListBidang extends Schema.CollectionType {
  collectionName: 'list_bidangs';
  info: {
    singularName: 'list-bidang';
    pluralName: 'list-bidangs';
    displayName: 'List Bidang';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    bidang_bisnis: Attribute.String;
    deskripsi: Attribute.Text;
    icon_bisnis: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::list-bidang.list-bidang',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::list-bidang.list-bidang',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiListCommercialListCommercial extends Schema.CollectionType {
  collectionName: 'list_commercials';
  info: {
    singularName: 'list-commercial';
    pluralName: 'list-commercials';
    displayName: 'List Commercial';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    icon: Attribute.Media;
    subjudul: Attribute.String;
    judul: Attribute.String;
    nama_produk: Attribute.String;
    list_commercial_fiturs: Attribute.Relation<
      'api::list-commercial.list-commercial',
      'manyToMany',
      'api::list-commercial-fitur.list-commercial-fitur'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::list-commercial.list-commercial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::list-commercial.list-commercial',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiListCommercialFiturListCommercialFitur
  extends Schema.CollectionType {
  collectionName: 'list_commercial_fiturs';
  info: {
    singularName: 'list-commercial-fitur';
    pluralName: 'list-commercial-fiturs';
    displayName: 'List Commercial Fitur';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    fitur: Attribute.String;
    list_commercials: Attribute.Relation<
      'api::list-commercial-fitur.list-commercial-fitur',
      'manyToMany',
      'api::list-commercial.list-commercial'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::list-commercial-fitur.list-commercial-fitur',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::list-commercial-fitur.list-commercial-fitur',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiListContactListContact extends Schema.CollectionType {
  collectionName: 'list_contacts';
  info: {
    singularName: 'list-contact';
    pluralName: 'list-contacts';
    displayName: 'List Contact';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    profile_picture: Attribute.Media;
    nama: Attribute.String;
    email: Attribute.String;
    link_facebook: Attribute.String;
    link_instagram: Attribute.String;
    link_twitter: Attribute.String;
    link_whatsapp: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::list-contact.list-contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::list-contact.list-contact',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiListFiturListFitur extends Schema.CollectionType {
  collectionName: 'list_fiturs';
  info: {
    singularName: 'list-fitur';
    pluralName: 'list-fiturs';
    displayName: 'List Fitur';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    fitur: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::list-fitur.list-fitur',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::list-fitur.list-fitur',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiListKarirListKarir extends Schema.CollectionType {
  collectionName: 'list_karirs';
  info: {
    singularName: 'list-karir';
    pluralName: 'list-karirs';
    displayName: 'List Karir';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    icon: Attribute.Media;
    posisi: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::list-karir.list-karir',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::list-karir.list-karir',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiListLogoListLogo extends Schema.CollectionType {
  collectionName: 'list_logos';
  info: {
    singularName: 'list-logo';
    pluralName: 'list-logos';
    displayName: 'List Logo';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    nama_perusahaan: Attribute.String;
    logo_client: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::list-logo.list-logo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::list-logo.list-logo',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiListPortofolioListPortofolio extends Schema.CollectionType {
  collectionName: 'list_portofolios';
  info: {
    singularName: 'list-portofolio';
    pluralName: 'list-portofolios';
    displayName: 'List Portofolio';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    gambar_utama: Attribute.Media;
    galeri_portofolio: Attribute.Media;
    nama_aplikasi: Attribute.String;
    perusahaan: Attribute.String;
    deskripsi: Attribute.Blocks;
    slug: Attribute.UID<
      'api::list-portofolio.list-portofolio',
      'nama_aplikasi'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::list-portofolio.list-portofolio',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::list-portofolio.list-portofolio',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiListPrincipalListPrincipal extends Schema.CollectionType {
  collectionName: 'list_principals';
  info: {
    singularName: 'list-principal';
    pluralName: 'list-principals';
    displayName: 'List Principal';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    icon: Attribute.Media;
    judul: Attribute.String;
    deskripsi: Attribute.String;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::list-principal.list-principal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::list-principal.list-principal',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiListProdukListProduk extends Schema.CollectionType {
  collectionName: 'list_produks';
  info: {
    singularName: 'list-produk';
    pluralName: 'list-produks';
    displayName: 'List Produk';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    nama_produk: Attribute.String;
    deskripsi: Attribute.Text;
    gambar_produk: Attribute.Media;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::list-produk.list-produk',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::list-produk.list-produk',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiListServiceListService extends Schema.CollectionType {
  collectionName: 'list_services';
  info: {
    singularName: 'list-service';
    pluralName: 'list-services';
    displayName: 'List Service';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    deskripsi_service: Attribute.Text;
    judul_service: Attribute.String;
    icon_service: Attribute.Media;
    list_service_details: Attribute.Relation<
      'api::list-service.list-service',
      'oneToMany',
      'api::list-service-detail.list-service-detail'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::list-service.list-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::list-service.list-service',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiListServiceDetailListServiceDetail
  extends Schema.CollectionType {
  collectionName: 'list_service_details';
  info: {
    singularName: 'list-service-detail';
    pluralName: 'list-service-details';
    displayName: 'List Service Detail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    nama_fiturservice: Attribute.String;
    list_service: Attribute.Relation<
      'api::list-service-detail.list-service-detail',
      'manyToOne',
      'api::list-service.list-service'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::list-service-detail.list-service-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::list-service-detail.list-service-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiListSkillListSkill extends Schema.CollectionType {
  collectionName: 'list_skills';
  info: {
    singularName: 'list-skill';
    pluralName: 'list-skills';
    displayName: 'List Skill';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    Skill: Attribute.String;
    list_skill_details: Attribute.Relation<
      'api::list-skill.list-skill',
      'manyToMany',
      'api::list-skill-detail.list-skill-detail'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::list-skill.list-skill',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::list-skill.list-skill',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiListSkillDetailListSkillDetail
  extends Schema.CollectionType {
  collectionName: 'list_skill_details';
  info: {
    singularName: 'list-skill-detail';
    pluralName: 'list-skill-details';
    displayName: 'List Skill Detail';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    icon_skill: Attribute.Media;
    skill: Attribute.String;
    list_skills: Attribute.Relation<
      'api::list-skill-detail.list-skill-detail',
      'manyToMany',
      'api::list-skill.list-skill'
    >;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::list-skill-detail.list-skill-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::list-skill-detail.list-skill-detail',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPesanCustomerPesanCustomer extends Schema.CollectionType {
  collectionName: 'pesan_customers';
  info: {
    singularName: 'pesan-customer';
    pluralName: 'pesan-customers';
    displayName: 'Pesan Customer';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    nama: Attribute.String;
    email: Attribute.String;
    nohp: Attribute.String;
    perusahaan: Attribute.String;
    pesan: Attribute.Text;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::pesan-customer.pesan-customer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::pesan-customer.pesan-customer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPortofolioPortofolio extends Schema.SingleType {
  collectionName: 'portofolios';
  info: {
    singularName: 'portofolio';
    pluralName: 'portofolios';
    displayName: 'Portofolio';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    main_section: Attribute.Component<'portofolio-page.portofolio-main'>;
    count_section: Attribute.Component<'portofolio-page.count-component'>;
    list_portofolios: Attribute.Relation<
      'api::portofolio.portofolio',
      'oneToMany',
      'api::list-portofolio.list-portofolio'
    >;
    portofolio_section: Attribute.Component<'portofolio-page.portofolio-section'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::portofolio.portofolio',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::portofolio.portofolio',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiPrinsipProdukPrinsipProduk extends Schema.SingleType {
  collectionName: 'prinsip_produks';
  info: {
    singularName: 'prinsip-produk';
    pluralName: 'prinsip-produks';
    displayName: 'Prinsip Produk';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    main_section: Attribute.Component<'principal-page.principal-main'>;
    principal_section: Attribute.Component<'principal-page.principal-product'>;
    commercials_section: Attribute.Component<'principal-page.commercials'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::prinsip-produk.prinsip-produk',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::prinsip-produk.prinsip-produk',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

export interface ApiSkillDeveloperSkillDeveloper extends Schema.SingleType {
  collectionName: 'skill_developers';
  info: {
    singularName: 'skill-developer';
    pluralName: 'skill-developers';
    displayName: 'Skill Developer';
    description: '';
  };
  options: {
    draftAndPublish: true;
  };
  attributes: {
    main_section: Attribute.Component<'developer-service.main-section'>;
    developer_section: Attribute.Component<'developer-service.developer-section'>;
    skill_section: Attribute.Component<'developer-service.developer-skill'>;
    createdAt: Attribute.DateTime;
    updatedAt: Attribute.DateTime;
    publishedAt: Attribute.DateTime;
    createdBy: Attribute.Relation<
      'api::skill-developer.skill-developer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
    updatedBy: Attribute.Relation<
      'api::skill-developer.skill-developer',
      'oneToOne',
      'admin::user'
    > &
      Attribute.Private;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface ContentTypes {
      'admin::permission': AdminPermission;
      'admin::user': AdminUser;
      'admin::role': AdminRole;
      'admin::api-token': AdminApiToken;
      'admin::api-token-permission': AdminApiTokenPermission;
      'admin::transfer-token': AdminTransferToken;
      'admin::transfer-token-permission': AdminTransferTokenPermission;
      'plugin::upload.file': PluginUploadFile;
      'plugin::upload.folder': PluginUploadFolder;
      'plugin::content-releases.release': PluginContentReleasesRelease;
      'plugin::content-releases.release-action': PluginContentReleasesReleaseAction;
      'plugin::i18n.locale': PluginI18NLocale;
      'plugin::users-permissions.permission': PluginUsersPermissionsPermission;
      'plugin::users-permissions.role': PluginUsersPermissionsRole;
      'plugin::users-permissions.user': PluginUsersPermissionsUser;
      'plugin::slugify.slug': PluginSlugifySlug;
      'api::chatbot.chatbot': ApiChatbotChatbot;
      'api::extend-produk.extend-produk': ApiExtendProdukExtendProduk;
      'api::footer-alamat.footer-alamat': ApiFooterAlamatFooterAlamat;
      'api::footer-contact.footer-contact': ApiFooterContactFooterContact;
      'api::footer-karir.footer-karir': ApiFooterKarirFooterKarir;
      'api::footer-kedua.footer-kedua': ApiFooterKeduaFooterKedua;
      'api::footer-utama.footer-utama': ApiFooterUtamaFooterUtama;
      'api::home.home': ApiHomeHome;
      'api::hubungi-kami.hubungi-kami': ApiHubungiKamiHubungiKami;
      'api::karir.karir': ApiKarirKarir;
      'api::layanan-kami.layanan-kami': ApiLayananKamiLayananKami;
      'api::list-bidang.list-bidang': ApiListBidangListBidang;
      'api::list-commercial.list-commercial': ApiListCommercialListCommercial;
      'api::list-commercial-fitur.list-commercial-fitur': ApiListCommercialFiturListCommercialFitur;
      'api::list-contact.list-contact': ApiListContactListContact;
      'api::list-fitur.list-fitur': ApiListFiturListFitur;
      'api::list-karir.list-karir': ApiListKarirListKarir;
      'api::list-logo.list-logo': ApiListLogoListLogo;
      'api::list-portofolio.list-portofolio': ApiListPortofolioListPortofolio;
      'api::list-principal.list-principal': ApiListPrincipalListPrincipal;
      'api::list-produk.list-produk': ApiListProdukListProduk;
      'api::list-service.list-service': ApiListServiceListService;
      'api::list-service-detail.list-service-detail': ApiListServiceDetailListServiceDetail;
      'api::list-skill.list-skill': ApiListSkillListSkill;
      'api::list-skill-detail.list-skill-detail': ApiListSkillDetailListSkillDetail;
      'api::pesan-customer.pesan-customer': ApiPesanCustomerPesanCustomer;
      'api::portofolio.portofolio': ApiPortofolioPortofolio;
      'api::prinsip-produk.prinsip-produk': ApiPrinsipProdukPrinsipProduk;
      'api::skill-developer.skill-developer': ApiSkillDeveloperSkillDeveloper;
    }
  }
}
