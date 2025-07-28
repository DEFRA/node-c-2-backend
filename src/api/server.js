import hapi from '@hapi/hapi'
import {config } from '../config.js'
import { fundingRouter } from './v1/funding/router.js'

async function createServer() {
    const server = hapi.server({
        port: config.get('port'),
        host: config.get('host')
    })

    await server.register([
        fundingRouter
    ])

    return server
}

async function startServer() {
    try {
        const server = await createServer()
        await server.start()
        console.log(`port ${config.get('port')}`)
        console.log (`Access your API at http://${config.get('host')}:${config.get('port')}/`)

        return server
    } catch (error) {
        console.error('Error starting server:', error)
        process.exit(1)
    }
}

export { startServer }