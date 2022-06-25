//Creating a node js server

const http = require('http')

const app = http.createServer((req, res) => {
  res.write('<h1>Hello Server</h1>')
  res.write('<p>This is para tag</p>')
})

app.listen(3000)
