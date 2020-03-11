import test from "ava"
import * as Dictionary from "../src//dictionary.js"
import * as Lookup from "../src/lookup.js"

Dictionary.initialize("test/fixtures/wl1.txt")
Lookup.initialize(Dictionary)

test('finds anagrams of "act"', t => {
  let result = Lookup.anagramsOf("act")
  t.is(result.length, 2)
  t.assert(result.includes("cat"))
  t.assert(result.includes("act"))
})

test('finds anagrams of "AcT"', t => {
  let result = Lookup.anagramsOf("act")
  t.is(result.length, 2)
  t.assert(result.includes("cat"))
  t.assert(result.includes("act"))
})

test(`finds anagrams of if there's only one result`, t => {
  let result = Lookup.anagramsOf("bat")
  t.is(result.length, 1)
  t.deepEqual(result, [ "bat" ])
})

test(`finds anagrams of if the letters are not the actual word`, t => {
  let result = Lookup.anagramsOf("tba")
  t.deepEqual(result, [ "bat" ])
})

test('reports not finding anagram', t => {
  let result = Lookup.anagramsOf("wombat")
  t.deepEqual(result, undefined)

})