'use strict';

/**
 * list-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::list-service.list-service');
