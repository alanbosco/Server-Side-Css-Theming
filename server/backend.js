const fs = require('fs')
const express = require('express')
const app = express()
const cors = require('cors')
const Css = require('json-to-css')
app.use(cors())
app.use(express.json())
const port = 4000
let fileData = ''
fs.readFile('styleConfig.json', 'utf8', function(err, contents) {
  console.log(contents)
  fileData = JSON.parse(contents)
})
app.get('/', (req, res) => res.json(fileData))

app.post('/', function(request, response) {
  console.log(request.body) // your JSON
  response.send(request.body) // echo the result back
  const css = Css.of(request.body)
  fs.writeFile('style.css', css, 'utf8', function(err, contents) {
    console.log(contents)
  })
  const json = JSON.stringify(request.body)
  fs.writeFile('styleConfig.json', json, 'utf8', function(err, contents) {
    console.log(contents)
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
