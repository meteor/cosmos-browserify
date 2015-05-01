Package.describe({
  name: 'cosmos:browserify',
  version: '0.1.0',
  summary: 'Bundle NPM modules for client side with Browserify',
  git: 'https://github.com/elidoran/cosmos-browserify.git',
  documentation: 'README.md'
});

Package.registerBuildPlugin({
  name: "cosmosBrowserify",
  use: ['coffeescript','meteor'],
  sources: ['plugin/browserify.coffee'],
  npmDependencies: {"browserify": "9.0.8"}
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('cosmos:browserify');
  api.addFiles('browserify-tests.js');
});
