'use strict';

/**
 * list-produk service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::list-produk.list-produk');
