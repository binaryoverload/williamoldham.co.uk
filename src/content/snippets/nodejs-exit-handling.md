---
title: "Node.js Exit Signal Handling"
pubDate: 2026-09-10
languages: ["JS"]
---

By default, Node.js servers don't handle exit signals like SIGTERM or SIGINT, so if you try to kill one with Ctrl+C in the terminal or your container runtime tries to kill it gracefully, it just won't do anything.

This is especially annoying in Kubernetes, where a container will just sit in a Terminating state, blocking a rollout until the grace period expires and it's forcibly killed.

The solution is to add handlers manually for SIGTERM and SIGINT. I use this often enough, but I can never remember it when I make a new project, so here's a snippet!

```javascript
// Place this at the top of your app file - you can use it for health checks
// or anything else that needs to know the server is shutting down
let shuttingDown = false

const shutdown = (signal) => {
    if (shuttingDown) return
    shuttingDown = true
    console.log(`${signal} received, shutting down`)

    // Here you can do anything you need to do to shut down! I've added code here for Express

    expressServer.close(() => {
        console.log('Express closed')
        process.exit(0)
    })
    // keep-alive sockets would otherwise hold server.close() open until they
    // time out; requests already in flight still get to finish.
    expressServer.closeIdleConnections()

    // In case something refuses to give up, after 10 seconds we forcibly kill the process
    setTimeout(() => {
        console.error('Shutdown timed out, forcing exit')
        process.exit(1)
    }, 10000).unref()
}

process.on('SIGTERM', () => shutdown('SIGTERM'))
process.on('SIGINT', () => shutdown('SIGINT'))
```
