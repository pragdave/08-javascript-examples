import test from "ava"
import Dictionary from "../src/dictionary.js"

test.before(t => {
  t.context = new Dictionary("test/fixtures/wl1.txt")
})

test('can load words', t => {
  t.is(t.context.length(), 3)
})

test('loads correct words', t => {
  let result = []
  t.context.forEach(word => result.push(word))
  result.sort()
  t.deepEqual(result, [ 'act', 'bat', 'cat' ])
})