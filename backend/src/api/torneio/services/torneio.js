'use strict';

/**
 * torneio service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::torneio.torneio');
