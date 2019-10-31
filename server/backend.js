const fs = require('fs')
const express = require('express')
const app = express()
const port = 4000
const axios = require('axios')
let fileData = ''
fs.readFile('styleConfig.json', 'utf8', function(err, contents) {
  console.log(contents)
  fileData = JSON.parse(contents)
})

app.get('/', (req, res) => res.json(fileData))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
