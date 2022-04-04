'use strict';

/**
 * merchant-store service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::merchant-store.merchant-store');
