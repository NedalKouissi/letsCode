const test = require('tape')
const Server = require('../../src/js/server/server')

test('Starting a new server', t => {
  const http = require('http')

  Server.setResponse((req, res) => res.end('Hello world!'))
  Server.start()

  t.plan(2)
  http.get('http://localhost:8080', res => {
    t.equal(res.statusCode, 200)

    let chunkString = ''
    res
      .on('data', chunk => {
        chunkString += chunk
      })
      .on('end', _ => {
        t.equal(chunkString, 'Hello world!')
        Server.stop()
      })
  })
})
