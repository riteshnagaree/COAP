// Program to start a CoAP Server
const coap = require('coap')
const server = coap.createServer()

server.on('request', (req, res) => {
    console.log(req.options)
    switch(req.code){
        case "0.01":
                    if(req.headers.Observe!==0) {
                        console.log("GET "+req.url)
                        res.end('Hello ' + req.url.split('/')[1] + '\n')
                    }

                    const sensorValue = setInterval(()=>{
                        res.write(new Date().toISOString()+"\n");
                    },500);

                    res.on('finish',()=>{
                        clearInterval(sensorValue);
                    })
                    
                    break;
        case "0.02":
                    console.log("POST "+ req.url)
                    break;
        case "0.03":
                    console.log("PUT "+req.url);

                    // Set the Response code
                    res.statusCode ='2.04';
                    res.setOption("Block2",Buffer.alloc(0x2));
                    res.end("OK")
                    break;
        case "0.04":
                    console.log("DELETE "+ req.url);
        default:
            console.log("Unknown "+ req.url);
            req.end();
    }
})

// the default CoAP port is 5683
server.listen(() => {
  console.log("CoAP server is running at 5683 port...")
})