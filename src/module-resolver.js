const {createRequire} = require('module');


module.exports = (request, options) => {
  const require = createRequire(`${options.basedir}/index.js`);
  return require.resolve(request)
};
