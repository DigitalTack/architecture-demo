import express from 'express'
import payload from 'payload'
import config from './payload.config'

require('dotenv').config()

const app = express()

const start = async () => {
  await payload.init({
    secret: process.env.PAYLOAD_SECRET!,
    express: app,
    config
  })

  app.listen(5000, async () => {
    console.log(
      "Express is now listening for incoming connections on port 3000."
    )
  })
}

start()
