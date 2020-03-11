import readline from 'readline'
import 'colors'

import * as Dictionary from "./dictionary.js"
import * as Lookup from "./lookup.js"

// let count = Dictionary.initialize("./assets/words.txt")
let count = Dictionary.initialize("/usr/share/dict/words")
console.log(count, "words loaded")

Lookup.initialize(Dictionary)

const interact = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

interact.setPrompt('\nEnter letters in word: '.green)
interact.on('line', letters => {
  let anagrams = Lookup.anagramsOf(letters)
  if (anagrams)
    console.log("Anagrams of".green, letters.yellow, "include".green, anagrams)
  else
    console.log(`Don't know of any anagrams of ${letters.yellow}`.brightRed);

  interact.prompt()
})

interact.prompt()
