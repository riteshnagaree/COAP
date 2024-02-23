// Program to show Multicast feature  of CoAP
const coap = require('coap')

//Server-1 Details
const server = coap.createServer({
    multicastAddress: '230.1.1.1'
})

//Server-2 Details
const server2 = coap.createServer({
    multicastAddress: '230.1.1.1'
})

// Create servers
server.listen(5683, () => {
    console.log('Server 1 is listening')
})

server2.listen(5683, () => {
    console.log('Server 2 is listening')
})

//Print the req from all client
server.on('request', (msg, res) => {
    console.log('Server 1 has received message')
    res.end('Ok')
})

server2.on('request', (msg, res) => {
    console.log('Server 2 has received message')
    res.end('Ok')
})
