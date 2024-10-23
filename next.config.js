module.exports = {
  env: {
    customKey: process.env.keyName, // pulls from .env file
    CUSTOM_SITE_NAME: process.env.SITE_NAME,
    NEXT_APP_HOST_NAME: process.env.NEXT_APP_HOST_NAME,
  },
  // async rewrites() {...}
};
