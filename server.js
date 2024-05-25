'use strict';

const strapi = require('@strapi/strapi');
const serverless = require('serverless-http');

const app = strapi();
app.start().then(() => {
  module.exports.handler = serverless(app.server);
});
