import express from 'express'
import proxy from 'express-http-proxy'

const app = express()
app.use('/', proxy(`http://localhost:8199`))

export default app
