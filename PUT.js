// A Program to send a PUT Request and set Block
const coap = require('coap');

//set the telemetry requerst for server
const req = coap.request({
    host:"coap.thingsboard.cloud",
    port: 5683,
    pathname: "/api/v1/aj6notRAvpht8n9Z8YTr/telemetry",
    // method: 'GET'
    method:'POST'
})
//setting Headrers for COAP
req.setOption("Content-Format","application/json")
req.setOption("Block2",Buffer.alloc(0x2))

//add payload
req.write("{'name':'Hello'}")

  req.on('response', (res) => {
    console.log(res.code)
    res.pipe(process.stdout)
    res.on('end', () => {
      process.exit(0)
    })
  })

  req.end()