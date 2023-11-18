const path = require('path');

module.exports = function override(config, env) {
  config.resolve.fallback = {
    ...config.resolve.fallback,
    "https": require.resolve("https-browserify"),
    "http": require.resolve("stream-http"),
    "url": require.resolve("url"), // Add this line
    "buffer": require.resolve("buffer") // Add this line
  };

  return config;
};