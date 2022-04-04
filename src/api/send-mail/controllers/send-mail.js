'use strict';

/**
 *  send-mail controller
 */

const { createCoreController } = require('@strapi/strapi').factories;

module.exports = createCoreController('api::send-mail.send-mail');
