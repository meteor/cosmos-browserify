Package.describe({
  name: 'cosmos:browserify',
  version: '0.5.0',
  summary: 'Bundle NPM modules for client side with Browserify',
  git: 'https://github.com/elidoran/cosmos-browserify.git',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: "CosmosBrowserify",
  // need 'meteor' for Npm and Meteor.wrapAsync
  use: ['coffeescript@1.0.6', 'meteor', 'underscore@1.0.3'],
  sources: ['plugin/browserify.coffee'],
  npmDependencies: {"browserify": "10.2.4", "envify":"3.4.0", "exorcist":"0.4.0"}
});

Package.onTest(function(api) {

  // not testing by adding package in 'use'.
  // using mocks to test only this package's functionality
  api.use(['tinytest', 'coffeescript@1.0.6', 'underscore']);

  api.addFiles([
    // fill in the exported mocks (separate so I can write in CoffeeScript)
    'test/mocks.coffee',
    // the tests
    'test/browserify-tests.coffee',
    // add our plugin file directly instead of adding package in api.use
    'plugin/browserify.coffee'
  ], 'client');

});
