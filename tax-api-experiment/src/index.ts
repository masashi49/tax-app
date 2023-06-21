import express from 'express'

const app = express()

const port = 3000

app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listaing on port ${port}`)
})

app.post('/check-post', (req, res) => {
  res.send('hello post!')
})

app.post('/check-json', (req, res) => {
  res.json({ message: 'hello JSON!' })
})

app.post('/check-status-code', (req, res) => {
  res.status(500).json({ message: 'hello statusCord' })
})

app.post('/check-body', (req, res) => {
  console.dir(req.body)
  res.json({ message: 'hello json body' })
})




