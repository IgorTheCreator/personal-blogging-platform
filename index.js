import express from 'express'
import articleRouter from './src/routes/articles.route.js'
import { db } from './src/services/db.service.js'

const app = express()
const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.json({ status: 'ok' })
})

app.use('/articles', articleRouter)

app.listen(port, () => {
  console.log(`App listening on ${port}`)
})

process.on('SIGINT', async () => {
  await db.$disconnect()
})

process.on('SIGTERM', async () => {
  await db.$disconnect()
})
