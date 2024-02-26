"use strict";

module.exports = ({ strapi }) => ({
  index(ctx) {
    ctx.body = strapi
      .plugin("Analytics")
      .service("myService")
      .getWelcomeMessage();
  },
});
