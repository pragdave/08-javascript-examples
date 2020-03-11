import readline from 'readline'
import 'colors'

import Dictionary from "./dictionary.js"
import Lookup from "./lookup.js"

const WordList = process.argv[2] || "./assets/words.txt"

function setupAnagramLookup(wordList) {
  let dictionary = new Dictionary(WordList)
  console.log(dictionary.length(), "words loaded")
  return new Lookup(dictionary)
}

function setupInteraction(prompt) {
  const interact = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  interact.setPrompt(prompt)
  return interact
}

function interactWithUser(workFunction) {
  interact.on('line', letters => {
    workFunction(letters)
    interact.prompt()
  })
  interact.prompt()
}

const lookup   = setupAnagramLookup(WordList)
const interact = setupInteraction('\nEnter letters in word: '.green)

interactWithUser(input => {
  let anagrams = lookup.anagramsOf(input)
  if (anagrams)
    console.log("Anagrams of".green, input.yellow, "include".green, anagrams)
  else
    console.log(`Don't know of any anagrams of ${input.yellow}`.brightRed);
})
