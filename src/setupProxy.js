const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = app => {
    app.use(
        createProxyMiddleware('/finance/quote',{
                target: 'https://query1.finance.yahoo.com/v7',
                changeOrigin: true
        })
        )
}
