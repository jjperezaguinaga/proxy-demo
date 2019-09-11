const express = require('express')
const proxy = require('express-http-proxy')

const app = express()
app.use('/', proxy(`https://mainnet.infura.io/v3/`))

export default app
