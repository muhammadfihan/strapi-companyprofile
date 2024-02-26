"use strict";

/**
 * list-portofolio controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::list-portofolio.list-portofolio",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;

      const entity = await strapi.db
        .query("api::list-portofolio.list-portofolio")
        .findOne({
          where: { slug: id },
          populate: [
            "gambar_utama",
            "galeri_portofolio",
            //   "galeriportofolios.gambar.media",
            //   "hasil_portos.gambarhasil.media",
            //   "fitur_portos",
          ],
        });

      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);
      return this.transformResponse(sanitizedEntity);
    },
  })
);
