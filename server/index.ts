import { json } from 'body-parser'
import express, { Request, Response } from 'express'

const app = express()

app.get('/api', (req: Request, res: Response) => {
  res.status(200).send({ hi: 'there' })
})

app.listen(5000, () => {
  console.log('started server on http://localhost:5000')
})
