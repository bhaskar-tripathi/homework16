const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        createProxyMiddleware("/cs/searches/userProfile", {
                target: 'https://content.services.sap.com',
                changeOrigin: true,
            })
    );
};