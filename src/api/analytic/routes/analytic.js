module.exports = {
  routes: [
    {
      method: "GET",
      path: "/analytic",
      handler: "analytic.exampleAction",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
