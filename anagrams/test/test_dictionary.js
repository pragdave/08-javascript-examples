import test from "ava"
import { initialize, forEach } from "../src/dictionary.js"

test('can load words', t => {
  let count = initialize("test/fixtures/wl1.txt")
  t.is(count, 3)
})

test('loads correct words', t => {
  let result = []
  initialize("test/fixtures/wl1.txt")
  forEach(word => result.push(word))
  result.sort()
  t.deepEqual(result, [ 'act', 'bat', 'cat' ])
})