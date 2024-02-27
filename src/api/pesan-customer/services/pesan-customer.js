'use strict';

/**
 * pesan-customer service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::pesan-customer.pesan-customer');
