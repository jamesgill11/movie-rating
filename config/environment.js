'use strict';

module.exports = function (environment) {
  let ENV = {
    firebaseConfig: {
      apiKey: 'AIzaSyCkjRMKYdXeXyc07tPmh47ogM8d7eJeY_M',
      authDomain: 'clarus-movie-rating.firebaseapp.com',
      databaseURL: 'https://clarus-movie-rating.firebaseapp.com',
      projectId: 'clarus-movie-rating',
      storageBucket: 'clarus-movie-rating.appspot.com',
      messagingSenderId: '592502336706',
      appId: '1:592502336706:web:a12b7824924bd8c91e9f5b',
    },
    modulePrefix: 'movierating',
    environment,
    rootURL: '/',
    locationType: 'auto',
    EmberENV: {
      FEATURES: {
        // Here you can enable experimental features on an ember canary build
        // e.g. EMBER_NATIVE_DECORATOR_SUPPORT: true
      },
      EXTEND_PROTOTYPES: {
        // Prevent Ember Data from overriding Date.parse.
        Date: false,
      },
    },

    APP: {
      // Here you can pass flags/options to your application instance
      // when it is created
    },
  };

  if (environment === 'development') {
    // ENV.APP.LOG_RESOLVER = true;
    // ENV.APP.LOG_ACTIVE_GENERATION = true;
    // ENV.APP.LOG_TRANSITIONS = true;
    // ENV.APP.LOG_TRANSITIONS_INTERNAL = true;
    // ENV.APP.LOG_VIEW_LOOKUPS = true;
  }

  if (environment === 'test') {
    // Testem prefers this...
    ENV.locationType = 'none';

    // keep test console output quieter
    ENV.APP.LOG_ACTIVE_GENERATION = false;
    ENV.APP.LOG_VIEW_LOOKUPS = false;

    ENV.APP.rootElement = '#ember-testing';
    ENV.APP.autoboot = false;
  }

  if (environment === 'production') {
    // here you can enable a production-specific feature
  }

  return ENV;
};
