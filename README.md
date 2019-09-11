# Proxy Demo

The following is a demo to showcase how a proxy can behave and misbehave
depending on how the libraries are fetching one another.

# HTTP Proxy Demo

In this demo, we have a `client` that fetches json data from a `server` by using
the `proxy` url. Behind the scenes, `proxy` uses `express-http-proxy` to wrap
the calls from the `client`

## Client

`https://client-http.jjperezaguinaga.now.sh/api?url=https://proxy-http-server.jjperezaguinaga.now.sh/echo?song=La%20Cancion`

## Proxy

`https://proxy-http-server.jjperezaguinaga.now.sh/echo?song=La%20Cancion`

## Server

`https://json-server.jjperezaguinaga.now.sh/echo?song=La%20Cancion`
