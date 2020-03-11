import fs from "fs"

export default class Dictionary {

  constructor(wordFileName) {
    let words = fs.readFileSync(wordFileName, "utf-8")
    this.wordList = words.split(/\n/)
  }

  length() {
    return this.wordList.length
  }

  forEach(iterFunction) {
    this.wordList.forEach(iterFunction)
  }

}