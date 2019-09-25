const AnyProxy = require('anyproxy');
const proxyServer = new AnyProxy.ProxyServer({
  port: 3000,
  wsIntercept: true,
  webInterface: {
    enable: true,
    webPort: 3001
  }
});

module.exports = proxyServer;
