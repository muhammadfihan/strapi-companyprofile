'use strict';

/**
 * customdev service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::customdev.customdev');
