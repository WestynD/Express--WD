console.log('Loading Server')
const PORT = 3000

const express = require('express')

const app = express()

//========  load middleward ============

//REST calls
//Create
app.post('', (req, res) => {
  console.log('Creating new log') // TODO: fill in path and make function
})

//Read
app.get('/', (req, res) => {
  res.send('Getting log') // TODO: fill in path and make function
})

//Update put(client id, full replace), patch(partial replace)

//Delete

//List all
app.get('', (req, res) => {
  res.send('Getting all logs') // TODO: fill in path and make function
})

app.listen(PORT, () => {
  console.log(`Example app listening on Port ${PORT}`)
})
