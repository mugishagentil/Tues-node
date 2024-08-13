import http from 'http'
const PORT = 404;
const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html')
    res.end('<h1>Hello Kabebe</h1>')
})
server.listen(PORT, () => {
  console.log(`Your Server Is ${PORT}`)
})