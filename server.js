const http = require('http');
const next = require('next')
const { parse } = require('url')

const dev = process.env.NODE_ENV === 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    var server = http.createServer(function (req, res) {
        const parsedUrl = parse(req.url, true)

        return handle(req, res, parsedUrl)
    });
    server.listen(4000);
})
.catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
});