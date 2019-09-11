const jsonServer = require('json-server')

const server = jsonServer.create()

server.get('/echo', (req, res) => {
  res.jsonp(req.query)
})

module.exports = server
