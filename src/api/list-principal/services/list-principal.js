'use strict';

/**
 * list-principal service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::list-principal.list-principal');
