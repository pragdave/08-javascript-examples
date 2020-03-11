import test from "ava"
import Dictionary from "../src//dictionary.js"
import Lookup from "../src/lookup.js"

test.before(t => {
  let dictionary = new Dictionary("test/fixtures/wl1.txt")
  t.context = new Lookup(dictionary)
})


test('finds anagrams of "act"', t => {
  let result = t.context.anagramsOf("act")
  t.is(result.length, 2)
  t.assert(result.includes("cat"))
  t.assert(result.includes("act"))
})

test('finds anagrams of "AcT"', t => {
  let result = t.context.anagramsOf("act")
  t.is(result.length, 2)
  t.assert(result.includes("cat"))
  t.assert(result.includes("act"))
})

test(`finds anagrams of if there's only one result`, t => {
  let result = t.context.anagramsOf("bat")
  t.is(result.length, 1)
  t.deepEqual(result, [ "bat" ])
})

test(`finds anagrams of if the letters are not the actual word`, t => {
  let result = t.context.anagramsOf("tba")
  t.deepEqual(result, [ "bat" ])
})

test('reports not finding anagram', t => {
  let result = t.context.anagramsOf("wombat")
  t.deepEqual(result, undefined)

})