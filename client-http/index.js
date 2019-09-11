const jsonServer = require('json-server')
const fetch = require('node-fetch')

const server = jsonServer.create()

server.get('/api', async (req, res) => {
  try {
    console.log(req.query.url)
    const json = await fetch(req.query.url)
      .then(res => res.json())
    res.jsonp(json)
  } catch (err) {
    res.jsonp({ err })
  }
})

module.exports = server
