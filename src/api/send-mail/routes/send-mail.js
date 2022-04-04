'use strict';

/**
 * send-mail router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::send-mail.send-mail');
