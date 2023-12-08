import express from 'express'
import payload from 'payload'
import config from './payload.config'
import dotenv from 'dotenv'
dotenv.config()

const app = express()

app.get('/', (req, res) => {
  res.send('Hello World!')
})

const start = async (): Promise<void> => {
  await payload.init({
    secret: `${process.env.PAYLOAD_SECRET}`,
    express: app,
    config
  })

  app.listen(5000, () => {
    console.log('Express is now listening for incoming connections on port 5000.')
  })
}

start().catch(() => {
  console.log('Error starting Express')
})
