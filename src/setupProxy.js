const { createProxyMiddleware } = require('http-proxy-middleware');
const { API_URL } = require('./utils/constants');

module.exports = function(app) {
  app.use(
    API_URL,
    createProxyMiddleware({
      target: 'http://51.250.65.73',
      changeOrigin: true,
    })
  );
};
