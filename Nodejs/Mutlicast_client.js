// Multicast Client
const coap = require('coap')

// Send multicast message
coap.request({
    host: '230.1.1.1',
    multicast: true,
    multicastTimeout: 2000
}).end()