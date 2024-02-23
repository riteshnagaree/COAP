# python Example for observing

import logging
import asyncio

from aiocoap import *

logging.basicConfig(level=logging.INFO)

async def main():
    HOST = "coap://localhost:"
    PORT = "5683"
    PATH = "/whoami"
    

    protocol = await Context.create_client_context()


#Define ur Request to COAP Server
    request = Message(code=GET, uri=HOST+PORT+PATH)

    try:
        # Make a Req to Server
        response = await protocol.request(request).response
    except Exception as e:
        print('Failed to fetch resource:')
        print(e)
    else:
        # Get Response deatils : Response code 2.05,Payload
        print('Result: %s\n%r'%(response.code, response.payload))

if __name__ == "__main__":
    asyncio.run(main())
