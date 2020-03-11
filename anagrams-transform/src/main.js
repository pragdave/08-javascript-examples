
import readline from 'readline'
import 'colors'

import { convertToListOfWords } from "./dictionary.js"
import { convertToAnagramMap, anagramsOf } from "./lookup.js"


////////////////////////////////////////////////////////////////////////////

let WordFile = process.argv[2] || "../assets/words.txt"

WordFile
  |> convertToListOfWords
  |> convertToAnagramMap
  |> letUserInteract



function letUserInteract(anagramMap) {
  '\nEnter letters in word: '.green
    |> setupInteraction
    |> (_ => interactWithUser(_, handleTheirInput, anagramMap))
}

function handleTheirInput(theirInput, anagramMap) {
  anagramsOf(theirInput, anagramMap)
    |> (_ => reportAnagramResult(_, theirInput))
}

function reportAnagramResult(anagrams, theirInput) {
  if (anagrams)
    console.log("Anagrams of".green, theirInput.yellow, "include".green, anagrams)
  else
    console.log(`Don't know of any anagrams of ${theirInput.yellow}`.brightRed);
}


function setupInteraction(prompt) {
  const interact = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })
  interact.setPrompt(prompt)
  return interact
}

////////

function interactWithUser(interact, workFunction, ...callbackArgs) {
  interact.prompt()
  interact.on('line', letters => {
    workFunction(letters, ...callbackArgs)
    interact.prompt()
  })
}
