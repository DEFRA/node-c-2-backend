

const hapiHelloRoute = [

     {
        method: 'GET',
        path: '/',
        handler: function (request, h) {
            return 'Welcome to the Funding API!'
        }

    }
]

export const fundingRouter = {
    name: 'funding-api',
    version: '1.0.0',
    async register(server) {
        server.route(hapiHelloRoute)
    }
}
