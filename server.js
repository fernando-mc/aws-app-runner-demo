import express from 'express'
import cors from 'cors'

const PORT = 8080
const HOST = '0.0.0.0'

var app = express()
app.use(express.json())
app.use(cors())

app.get('/', async (req, res) => {
  res.json({"serviceStatus": "we're live!"})
})

app.listen(PORT, HOST)
