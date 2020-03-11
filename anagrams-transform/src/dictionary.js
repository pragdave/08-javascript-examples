import fs from "fs"

export function convertToListOfWords(fileName) {
  console.dir(arguments)
  return fs
  .readFileSync(fileName, "utf-8")
  .split("\n")
}
