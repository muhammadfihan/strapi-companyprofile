'use strict';

/**
 * custom-chatbot service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::custom-chatbot.custom-chatbot');
