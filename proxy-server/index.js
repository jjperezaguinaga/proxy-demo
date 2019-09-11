import express from 'express'
import proxy from 'express-http-proxy'

const app = express()
app.use('/', proxy(`https://json-server.jjperezaguinaga.now.sh`))

export default app
