const { CapacitorConfig } = require('@capacitor/cli');

const config = {
  appId: 'com.daysfit.app',
  appName: '100 DAYS FIT',
  webDir: 'www',
  bundledWebRuntime: false,
  android: { allowMixedContent: false }
};

module.exports = config;
