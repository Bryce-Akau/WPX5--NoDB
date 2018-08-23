const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const me = require('./controller/controller.js')
const PORT = 3736;

app.use(bodyParser.json())

app.get('/api/meme', me.read)
app.post('/api/meme', me.create)
app.put('/api/meme/:id', me.update)
app.delete('/api/meme/:id', me.delete)

app.listen(PORT, () => console.log (`${PORT} people dancing in the moonlight`))