// A Program to send Observe Request in CoAP
const coap = require('coap');

//Prepare the request for coap

const req = coap.request({
    host:"127.0.0.1",
    port: 5683,
    pathname: "/sensor",
    method: 'GET',
    observe: false
})


//callback to recieve from the server

  req.on('response', (res) => {
    console.log(res.code)
    res.pipe(process.stdout)
    res.on('end', () => {
      process.exit(0)
    })
  })

  req.end()