const express = require('express')
const logger = require('morgan')
const path = require('path')
const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(logger('dev'))

server.post('/ITC505/lab-7/index.html', (req, res) => {
  const { noun, verb, adjective, adverb, pluralNoun } = req.body
  if (!noun || !verb || !adjective || !adverb || !pluralNoun) {
    return res.send(`
      <h1>Submission Failed</h1>
      <p>All fields are required!</p>
      <a href="/ITC505/lab-7/index.html">Go Back</a>
    `)
  }
  const madLib = `The ${adjective} ${noun} decided to ${verb} ${adverb} with the ${pluralNoun}.`
  res.send(`
    <h1>Your Mad Lib Result</h1>
    <p>${madLib}</p>
    <a href="/ITC505/lab-7/index.html">Create another</a>
  `)
})

const publicPath = path.join(__dirname, 'public')
server.use(express.static(publicPath))

let port = 8080
if (process.argv[2] === 'local') {
  port = 8080
}
server.listen(port, () => console.log(`✅ Server running on http://localhost:${port}`))
