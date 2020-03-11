import fs from "fs"

let wordList = []

export function initialize(wordFileName) {
  let words = fs.readFileSync(wordFileName, "utf-8")
  wordList = words.split(/\n/)
  return wordList.length
}

export function forEach(iterFunction) {
  wordList.forEach(iterFunction)
}