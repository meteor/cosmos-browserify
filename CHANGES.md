# 0.5.0 - Unpublished

1. update browserify to 10.2.4 from 9.0.8. Test pass, apps work. Seems fine.

# 0.4.0 - 2015/06/21

1. accepted [PR#7](https://github.com/elidoran/cosmos-browserify/pull/7) from [stubailo](https://github.com/stubailo) to allow options and using other transforms.
2. allow the options file to override envify default options
3. added exorcist use to extract source map from browserified file to supply to CompileStep
4. added test for using an options file
5. accepted [PR#9](https://github.com/elidoran/cosmos-browserify/pull/9) from [stubailo](https://github.com/stubailo) removing extra indentation from some of the README's code blocks

# 0.3.0 - 2015/05/26

1. accepted [PR#5](https://github.com/elidoran/cosmos-browserify/pull/5) from [lourd](https://github.com/lourd) to use envify transform (thank you @lourd)
2. added on to PR#5 to use envify/custom and provide its options; altered tests
3. added warning against using extension as filename because of Meteor issue [#3985](https://github.com/meteor/meteor/issues/3985). Revised README.

# 0.2.0 - 2015/05/16

1. refactored  [browserify.coffee](https://github.com/elidoran/cosmos-browserify/blob/master/plugin/browserify.coffee)
2. added support for [meteorhacks:npm](https://github.com/meteorhacks/npm) providing app level npm modules for app browserify.js files
3. updated README to mention meteorhacks:npm support

# 0.1.4 - 2015/05/15

1. changed plugin name to CosmosBrowserify
2. added Travis CI
3. added testing of a successful plugin call
4. ignore .DS_Store files
5. reformatted plugin's [browserify.coffee](https://github.com/elidoran/cosmos-browserify/blob/master/plugin/browserify.coffee) with more comments and whitespace
6. added error handling for browserify errors
7. determine `debug` for browserify based on `process.argv` contents. (Thank you Arunoda for this idea)
8. added test for browserify throwing an error

# 0.1.3 - 2015/05/04

1. previous publish was incomplete. must republish to new version

# 0.1.2 - 2015/05/04

1. fixed `package.js` test file path
2. fixed `package.js` coffeescript version

# 0.1.1 - 2015/05/04

1. fix [issue #1](https://github.com/elidoran/cosmos-browserify/issues/1) local `stream` variable given a unique name
