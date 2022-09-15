console.log('Loading Server')
const PORT = 3000
const db = require('./db.json')

const express = require('express')
const logger = require('morgan')

const app = express()

//========  load middleware ============
//external
app.use(logger('dev'))
//bodyparse
//helmet

//internal
app.use(express.static('public'))

//REST calls
//Create
//'/logs?courseId=cs4690&uvuId=101111111
app.post('/user', (req, res) => {
  console.log('Creating new log') // TODO: fill in path and make function
  // change db - memory
  //write to file - persistent
  //return id
  // TODO agter getting post to work correctly here change to put here and on client
})

//Read // /api/v1/logs?courseId=cs4690&uvuId=10111111
app.get('/api/v1/logs', (req, res) => {
  const courseId = req.param('courseId')
  const uvuId = req.param('uvuId')
  //res.send(`Get logs ${courseId} ${uvuId}`)
  // get data from JSON
  // filter for what I need
  // send it back
})

//Update put(client id, full replace), patch(partial replace)
// app.put('/user', (req, res) => {
//   res.send('Got a PUT request at /user')
// })

//Delete
// app.delete('/user', (req, res) => {
//   res.send('Got a DELETE request at /user')
// })

//List all
// app.get('', (req, res) => {
//   res.send('Getting all logs') // TODO: fill in path and make function
// })

app.listen(PORT, () => {
  console.log(`Example app listening on Port ${PORT}`)
})
