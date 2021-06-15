import express from 'express'
import lineBreak from './lineBreak'

const app = express()

app.get('/', (request, response) => {
  response.json({ message: 'App is running!' })
})

app.listen(3333)
