import logging
import asyncio

from aiocoap import *

logging.basicConfig(level=logging.INFO)

async def main():
    """Perform a single PUT request to localhost on the default port, URI
    "/other/block". The request is sent 2 seconds after initialization.

    The payload is bigger than 1kB, and thus sent as several blocks."""

    context = await Context.create_client_context()

    await asyncio.sleep(2)

    HOST = "coap.thingsboard.cloud:"
    PORT = "5683"
    PATH = "/api/v1/aj6notRAvpht8n9Z8YTr/telemetry"
    payload = {"temp":24.654}

    request = Message(code=PUT, payload=payload, uri=HOST+PORT+PATH)

    response = await context.request(request).response

    print('Result: %s\n%r'%(response.code, response.payload))

if __name__ == "__main__":
    asyncio.run(main())
