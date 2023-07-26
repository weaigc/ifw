'use client'

import Default from './browser'

let exportsModel: any = {}

// @ts-ignore
if (process.browser || typeof window !== 'undefined') {
  Object.assign(exportsModel, require('./browser').default)
} else {
  Object.assign(exportsModel, require('./node').default)
}

export default exportsModel! as typeof Default

export const fetch: typeof Default.fetch = exportsModel!.fetch
export const WebSocket: typeof Default.WebSocket = exportsModel!.WebSocket
export const Blob: typeof Default.Blob = exportsModel!.Blob
