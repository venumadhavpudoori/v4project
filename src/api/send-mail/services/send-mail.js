'use strict';

/**
 * send-mail service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::send-mail.send-mail');
