"use strict";

// WARNING: the admin panel now uses webpack 5 to bundle the application.

module.exports = (config, webpack) => {
  // Note: we provide webpack above so you should not `require` it
  // Perform customizations to webpack configuration
  config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
  // Important: return the modified configuration
  return config;
};
