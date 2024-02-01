'use strict';

/**
 * logoclient service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::logoclient.logoclient');
