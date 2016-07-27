var test = require('tape')
var add = require('../src/js/app')
console.log(add)

test('A fucking passing test', assert => {
  assert.equal(add(14, 0), 14)
  assert.end()
})
