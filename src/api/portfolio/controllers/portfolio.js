"use strict";

/**
 * portfolio controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::portfolio.portfolio",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.db.query("api::portfolio.portfolio").findOne({
        where: { slug: id },
        populate: [
          "gambarporto",
          "galeriportofolios.gambar.media",
          "hasil_portos.gambarhasil.media",
          "fitur_portos",
        ],
      });

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
