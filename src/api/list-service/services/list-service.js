'use strict';

/**
 * list-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::list-service.list-service');
