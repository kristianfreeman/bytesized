import { getAssetFromKV, mapRequestToAsset } from '@cloudflare/kv-asset-handler'
import ghReleaseFetch from './gh-release'

const leadMagnets = {
  fss: 'signalnerve/fullstackserverless',
}

const DEBUG = false

addEventListener('fetch', event => {
  try {
    event.respondWith(handleEvent(event))
  } catch (e) {
    if (DEBUG) {
      return event.respondWith(
        new Response(e.message || e.toString(), {
          status: 500,
        })
      )
    }
    event.respondWith(new Response('Internal Error', { status: 500 }))
  }
})

async function handleEvent(event) {
  const url = new URL(event.request.url)
  let options = {}

  if (url.pathname.includes('dls')) {
    const matches = url.pathname.match(/dls\/(.*)/)
    const match = matches[1]
    if (match) {
      const assetUrl = await ghReleaseFetch(leadMagnets[match])
      if (assetUrl) {
        return Response.redirect(assetUrl, 301)
      }
    }
    return new Response('Not found', { status: 404 })
  }

  try {
    if (DEBUG) {
      // customize caching
      options.cacheControl = {
        bypassCache: true,
      }
    }
    return await getAssetFromKV(event, options)
  } catch (e) {
    // if an error is thrown try to serve the asset at 404.html
    if (!DEBUG) {
      try {
        let notFoundResponse = await getAssetFromKV(event, {
          mapRequestToAsset: req =>
            new Request(`${new URL(req.url).origin}/404.html`, req),
        })

        return new Response(notFoundResponse.body, {
          ...notFoundResponse,
          status: 404,
        })
      } catch (e) {}
    }

    return new Response(e.message || e.toString(), { status: 500 })
  }
}
