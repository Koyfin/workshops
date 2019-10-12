const log = require('why-is-node-running') // should be your first require
const net = require('net')

function createServer () {
  const server = net.createServer()
  setInterval(function () {}, 1000)
  server.listen(0)
}

createServer()
createServer()

setTimeout(function () {
  log() // logs out active handles that are keeping node running
}, 100)
