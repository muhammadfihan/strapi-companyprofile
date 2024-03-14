"use strict";

/**
 * A set of functions called "actions" for `analytic`
 */

const propertyId = "431274415";
const { BetaAnalyticsDataClient } = require("@google-analytics/data");
const analyticsDataClient = new BetaAnalyticsDataClient();

module.exports = {
  exampleAction: async (ctx, next) => {
    const [response] = await analyticsDataClient.runReport({
      property: `properties/${propertyId}`,
      dateRanges: [
        {
          startDate: "2024-03-01",
          endDate: "today",
        },
      ],
      dimensions: [
        {
          name: "city",
        },
        {
          name: "month",
        },
        // {
        //   name: "browser",
        // },
        // {
        //   name: "operatingSystem",
        // },
        // {
        //   name: "date",
        // },
      ],
      metrics: [
        {
          name: "activeUsers",
        },
        {
          name: "newUsers",
        },
        {
          name: "engagedSessions",
        },
        {
          name: "screenPageViews",
        },
        {
          name: "bounceRate",
        },
        {
          name: "totalUsers",
        },

        {
          name: "engagementRate",
        },
        {
          name: "averageSessionDuration",
        },
      ],
    });
    const totalUsers = response.rows.length;

    const reportData = response.rows.map((row) => {
      const city = row.dimensionValues[0];
      const month = row.dimensionValues[1];
      //   const browser = row.dimensionValues[2];
      //   const os = row.dimensionValues[3];
      //   const date = row.dimensionValues[4];
      const activeuser = row.metricValues[0].value;
      const newUser = row.metricValues[1].value;
      const waktusesi = row.metricValues[2].value;
      const screenPage = row.metricValues[3].value;
      const bounce = row.metricValues[4].value;
      const totaluser = row.metricValues[5].value;
      const rasiosesi = row.metricValues[6].value;
      const durasi = row.metricValues[7].value;

      // Mengembalikan objek dengan kunci dan nilai
      return {
        data: {
          city,
          month,
          //   browser,
          //   os,
          //   date,
          activeuser,
          newUser,
          waktusesi,
          screenPage,
          bounce,
          totaluser,
          rasiosesi,
          durasi,
        },
      };
    });
    const [realtime] = await analyticsDataClient.runRealtimeReport({
      property: `properties/${propertyId}`,
      dimensions: [{ name: "city" }],
      metrics: [{ name: "activeUsers" }],
    });
    const realtimeData = realtime.rows.map((row) => {
      const city = row.dimensionValues[0];

      const activeuser = row.metricValues[0].value;

      // Mengembalikan objek dengan kunci dan nilai
      return {
        data: {
          city,
          activeuser,
        },
      };
    });
    const data = [
      {
        totalUsers,
        reportData,
        realtimeData,
      },
    ];
    ctx.body = data;
    // try {
    //   ctx.body = 'Hello';
    // } catch (err) {
    //   ctx.body = err;
    // }
  },
};
