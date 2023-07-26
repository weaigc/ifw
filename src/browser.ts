'use client'

class WebSocketAlias extends WebSocket {
  constructor(address: string | URL, ...args: any) {
    super(address)
  }
}

export default { fetch, WebSocket: WebSocketAlias, Blob }
